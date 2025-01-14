"use client"
 
import { ColumnDef } from "@tanstack/react-table"

type pitOccupant = {
  name: string
  link: string
  superscriptLink: string
  reason: string
}

export const columns: ColumnDef<pitOccupant>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "link",
    header: "Link",
  },
  {
    accessorKey: "reason",
    header: "Reason",
  },
]
 
export const pitOccupants: pitOccupant[] = [
  {
    name: "Anyone Named Matthew",
    link: "",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "Artus",
    link: "https://almondman.trollclan.com/links",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "Visual Studio Code",
    link: "",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "Purdue IT",
    link: "",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "AirPods",
    link: "",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "ChatGPT",
    link: "",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "rayhanadev",
    link: "https://www.linkedin.com/in/rayhanadev",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "rayhanadev",
    link: "https://www.linkedin.com/in/rayhanadev",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "rayhanadev",
    link: "https://www.linkedin.com/in/rayhanadev",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "rayhanadev",
    link: "https://www.linkedin.com/in/rayhanadev",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "rayhanadev",
    link: "https://www.linkedin.com/in/rayhanadev",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "rayhanadev",
    link: "https://www.linkedin.com/in/rayhanadev",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "lonewolf225",
    link: "https://charbroil.me/",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "rayhanadev",
    link: "https://www.linkedin.com/in/rayhanadev",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "rayhanadev",
    link: "https://www.linkedin.com/in/rayhanadev",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "rayhanadev",
    link: "https://www.linkedin.com/in/rayhanadev",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "rayhanadev",
    link: "https://www.linkedin.com/in/rayhanadev",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "Pete's Za",
    link: "",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "purduehackers/id",
    link: "https://github.com/purduehackers/id",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "The Boilermaker XTRA Special",
    link: "",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "Discord",
    link: "https://discord.com",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "lonewolf225",
    link: "https://charbroil.me/",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "PayPal",
    link: "https://paypal.com/",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "rayhanadev",
    link: "https://www.linkedin.com/in/rayhanadev",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "USPS",
    link: "https://www.usps.com",
    superscriptLink: "",
    reason: "By request"
  },
  {
    name: "USPS",
    link: "https://www.usps.com",
    superscriptLink: "",
    reason: "By request"
  },
  {
    name: "USPS",
    link: "https://www.usps.com",
    superscriptLink: "",
    reason: "By request"
  },
  {
    name: "USPS",
    link: "https://www.usps.com",
    superscriptLink: "",
    reason: "By request"
  },
  {
    name: "USPS",
    link: "https://www.usps.com",
    superscriptLink: "",
    reason: "By request"
  },
  {
    name: "USPS",
    link: "https://www.usps.com",
    superscriptLink: "",
    reason: "By request"
  },
  {
    name: "USPS",
    link: "https://www.usps.com",
    superscriptLink: "",
    reason: "By request"
  },
  {
    name: "USPS",
    link: "https://www.usps.com",
    superscriptLink: "",
    reason: "By request"
  },
  {
    name: "USPS",
    link: "https://www.usps.com",
    superscriptLink: "",
    reason: "By request"
  },
  {
    name: "USPS",
    link: "https://www.usps.com",
    superscriptLink: "",
    reason: "By request"
  },
  {
    name: "FizzyApple12",
    link: "",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "FizzyApple12",
    link: "",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "tmux_a",
    link: "",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "Grammarly",
    link: "",
    superscriptLink: "",
    reason: "By request"
  },
  {
    name: "rayhanadev",
    link: "https://www.linkedin.com/in/rayhanadev",
    superscriptLink: "",
    reason: "Not using capital letters where they should be used."
  },
  {
    name: "dummy",
    link: "https://youtu.be/aKCgL6eO_1Y",
    superscriptLink: "",
    reason: "By request by dummy"
  }
]
