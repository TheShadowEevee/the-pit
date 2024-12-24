'use client'; // Mark this component as a client-side component

import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image from next/image
import { CSSProperties } from "react";

type PitItem = {
  name: string;
  link?: string;  // Optional, because not every item may have a link
  superscriptLink?: string;  // Optional, because not every item may have a superscriptLink
};

const FallingTextIntoPit = () => {
  const [data, setData] = useState<PitItem[]>([]);  // Store the JSON data as an array
  const [lines, setLines] = useState<string[]>([]);

  // Fetch the JSON content
  useEffect(() => {
    axios.get("/pit-list.json")  // Fetch pit-list.json
      .then(response => {
        console.log(response.data);  // Log the response to inspect it
        // Ensure the response data is an array before setting it
        if (Array.isArray(response.data)) {
          setData(response.data);  // Set the JSON data if it's an array
        } else {
          console.error("Expected an array, but received:", response.data);
        }
      })
      .catch(error => {
        console.error("Error fetching JSON file:", error);
      });
  }, []);

  // Format the JSON data into the desired structure
  useEffect(() => {
    if (data.length > 0) {
      const formattedLines = data.map(item => {
        // Construct the markdown format with optional link and superscript link
        const linkPart = item.link ? `[${item.name}](${item.link})` : item.name;
        const superscriptPart = item.superscriptLink ? `<sub>[?](${item.superscriptLink})</sub>` : "";

        // Combine the name, link, and superscript link (if any)
        return `${linkPart}${superscriptPart}`;
      });

      setLines(formattedLines);  // Set the formatted lines
    }
  }, [data]);

  // Helper function to generate a random skew and rotation
  const getRandomSkewAndRotate = () => {
    const skewX = Math.random() * 30 - 15;  // Skew between -15deg and 15deg
    const skewY = Math.random() * 30 - 15;  // Skew between -15deg and 15deg
    const rotate = Math.random() * 20 - 10;  // Rotate between -10deg and 10deg
    return { skewX: `${skewX}deg`, skewY: `${skewY}deg`, rotate: `${rotate}deg` };
  };

  return (
    <div style={styles.container}>
      <div style={styles.sky}>
      <Image
        src="/sky-image.jpg"  // Correct path for images in the 'public' folder
        alt="Sky"
        layout="fill"
        objectFit="cover"
        quality={75}
        priority={true}
      />
      </div>
      <div style={styles.pit}>
        <Image 
          src="/pit-image.jpg" 
          alt="Pit" 
          layout="fill"  // Ensures the image fills its container
          objectFit="cover"  // Makes sure the image is cropped appropriately
          quality={75}  // You can adjust the quality (0-100, default is 75)
          priority={true}  // Optionally, prioritize the image if it's above the fold
        />
      </div>
      <div style={styles.textContainer}>
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: -100,  // Start above the screen
              rotate: 0,
              skewX: "0deg",
              skewY: "0deg"
            }}
            animate={{
              opacity: 1,
              y: "100vh",  // Move the text down off the screen (100% of the viewport height)
              ...getRandomSkewAndRotate(),  // Apply random skew and rotation
            }}
            transition={{
              delay: index * 0.5,  // Stagger the animations of each line
              duration: 3,  // Duration of the fall
              repeat: Infinity,  // Repeat the animation infinitely
              repeatType: "loop",  // Keep falling in a loop
              ease: "easeOut",  // Easing for smoothness
            }}
            style={styles.line}
          >
            <ReactMarkdown>{line}</ReactMarkdown>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Styles
const styles: { [key: string]: CSSProperties } = {
  container: {
    position: "relative",
    height: "100vh", // Full screen height
    overflow: "hidden", // Prevent scrolling of content
  },
  sky: {
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",  // Adjust sky height to cover the top half of the screen
    zIndex: 1,  // Ensure the sky is below the text but above the pit
    backgroundColor: "rgba(0, 0, 255, 0.2)", // Add a background color for debugging
    filter: "brightness(50%)", // Dims the image by reducing brightness
  },
  pit: {
    bottom: 0,
    left: 0,
    right: 0,
    height: "350px", // Adjust pit size as needed
    overflow: "hidden",
    zIndex: 5, // Ensure the pit image is behind the text
    position: "absolute", // Make the image container a positioned parent
  },
  textContainer: {
    position: "absolute",
    top: "0",
    width: "100%",
    textAlign: "center",
    color: "rgba(255, 128, 0, 1)", // Add a background color for debugging
    zIndex: 10,  // Ensure text is above the pit
  },
  line: {
    fontSize: "24px",
    margin: "10px 0",
    opacity: 0,
    display: "inline-block",  // Allow the text to float
  },
};

export default FallingTextIntoPit;