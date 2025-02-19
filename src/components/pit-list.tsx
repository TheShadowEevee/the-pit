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
    link: "https://en.wikipedia.org/wiki/Matthew",
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
    reason: "For being ID. That is enough."
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
    reason: "🍰"
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
    link: "https://fizzyapple12.com",
    superscriptLink: "",
    reason: ""
  },
  {
    name: "FizzyApple12",
    link: "https://fizzyapple12.com",
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
  },
  {
    name: "Quanta",
    link: "https://myanimelist.net/profile/Quanta_Anime",
    superscriptLink: "",
    reason: "He knows why (His anime takes)"
  },
  {
    name: "USPS",
    link: "https://www.usps.com",
    superscriptLink: "",
    reason: "Repeated failures to deliver a package"
  },
  {
    name: "USPS",
    link: "https://www.usps.com",
    superscriptLink: "",
    reason: "Repeated failures to deliver a package"
  },
  {
    name: "ALSA",
    link: "https://www.alsa-project.org",
    superscriptLink: "",
    reason: "By Request"
  },
  {
    name: "ALSA",
    link: "https://www.alsa-project.org",
    superscriptLink: "",
    reason: "By Request"
  },
  {
    name: "ALSA",
    link: "https://www.alsa-project.org",
    superscriptLink: "",
    reason: "By Request"
  },
  {
    name: "ALSA",
    link: "https://www.alsa-project.org",
    superscriptLink: "",
    reason: "By Request"
  },
  {
    name: "ALSA",
    link: "https://www.alsa-project.org",
    superscriptLink: "",
    reason: "By Request"
  },
  {
    name: "ALSA",
    link: "https://www.alsa-project.org",
    superscriptLink: "",
    reason: "By Request"
  },
  {
    name: "ALSA",
    link: "https://www.alsa-project.org",
    superscriptLink: "",
    reason: "By Request"
  },
  {
    name: "GitHub",
    link: "https://github.com",
    superscriptLink: "",
    reason: "Nearly causing someone to be fired due to platform failures"
  },
  {
    name: "GitHub",
    link: "https://github.com",
    superscriptLink: "",
    reason: "Changing GitHub CoPilot UI in a way that breaks the extension that hides the button to open it"
  },
  {
    name: "lonewolf225",
    link: "https://charbroil.me/",
    superscriptLink: "",
    reason: "🍰"
  },
  {
    name: "AT&T",
    link: "https://www.att.com",
    superscriptLink: "",
    reason: "Cable Cutting"
  },
  {
    name: "AT&T",
    link: "https://www.att.com",
    superscriptLink: "",
    reason: "Service Disrupting"
  },
  {
    name: "AT&T",
    link: "https://www.att.com",
    superscriptLink: "",
    reason: "General Issues"
  },
]
