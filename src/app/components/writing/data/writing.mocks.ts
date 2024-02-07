import { Writing } from "../models/writing.interfaces";

export const WritingDataMocks: Writing = {
  section: "Writing.",
  article: [
    {
      color: "white",
      labelColor: "night",
      image: {
        src: "../../../../assets/projects/arrow.png",
        alt: "Placeholder",
      },
      title: "Atomic Design for Front-End Engineers",
      label: "5 min read - December 2023",
      url: "https://medium.com/front-end-weekly/atomic-design-for-front-end-engineers-ux-designers-7a00ffd615b9",
    },
    {
      color: "pastel-blue",
      labelColor: "night",
      image: {
        src: "../../../../assets/projects/arrow.png",
        alt: "Placeholder",
      },
      title: "BEM Standards for Front-End Engineers",
      label: "4 min read - February 2024",
      url: "https://medium.com/@nelsonguerra.tech/the-guide-to-bem-scss-writing-clean-structured-and-slightly-sassier-stylesheets-cc0466549e6b",
    },
  ],
};
