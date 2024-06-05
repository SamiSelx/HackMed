import { createContext } from "react";
import { PiChatCenteredText } from "react-icons/pi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
const desc =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati iste voluptates molestias"; // temperory

export const cardList = [
  {
    id: 1,
    title: "Track your medical health",
    description: desc,
    // icon: <PiChatCenteredText />,
  },
  {
    id: 2,
    title: "Chat With Your Doctor",
    description: desc,
    // icon: <MdOutlineHealthAndSafety />,
  },
  {
    id: 3,
    title: "Chat With Your Doctor",
    description: desc,
    // icon: <PiChatCenteredText />,
  },
];

export const ServicesContexts = createContext([]);
