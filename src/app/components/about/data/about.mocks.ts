import { About } from "../models/about.interfaces";

export const AboutMocks: About = {
  section: "About Me.",
  description: `Currently, I'm working as a Software Engineer and Delta Design System Lead at <span>Delta Air Lines</span>, where my contributions to Delta DOTCOM have reached millions of people worldwide.`,
  image: {
    src: "../../../../assets/about/profile-pic.png",
    alt: "Nelson Guerra",
  },
  skills: [
    {
      title: "02+",
      subtitle: "Years of Experience",
    },
  ],
  badges: [
    {
      label: "Design",
      labelColor: "night",
      color: "lightgrey",
    },
    {
      label: "UX/UI",
      labelColor: "night",
      color: "gold",
    },
    {
      label: "iOS",
      labelColor: "white",
      color: "trust",
    },
    {
      label: "Prototype",
      labelColor: "night",
      color: "lavender",
    },
    {
      label: "Development",
      labelColor: "night",
      color: "lightgrey",
    },
    {
      label: "Angular",
      labelColor: "white",
      color: "watermelon",
    },
    {
      label: "Swift",
      labelColor: "night",
      color: "success",
    },
  ],
  action: {
    url: "View My Work",
    text: "Download CV",
  },
};
