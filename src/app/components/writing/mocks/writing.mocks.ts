import { Writing } from "../models/writing.interfaces";

export const WritingDataMocks: Writing = {
  section: "Writing",
  article: [
    {
      image: {
        src: "../../../../assets/writing/atomic-design.png",
        alt: "Placeholder",
      },
      title: "Atomic Design for Front-End Engineers",
      label: "December 2023",
      url: "https://medium.com/front-end-weekly/atomic-design-for-front-end-engineers-ux-designers-7a00ffd615b9",
    },
    {
      image: {
        src: "../../../../assets/writing/css.png",
        alt: "Placeholder",
      },
      title: "BEM Standards for Front-End Engineers",
      label: "February 2024",
      url: "https://www.google.com",
    },
  ],
};
