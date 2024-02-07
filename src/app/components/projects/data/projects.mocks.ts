import { Projects } from "../models/projects.interface";

export const ProjectDataMocks: Projects = {
  section: "My Work.",
  project: [
    {
      color: "lightgrey",
      label: "In Angular -",
      title: "Delta: SkyMiles Landing",
      image: {
        src: "../../../../assets/projects/laptops/skymiles-gold.png",
        alt: "Nelson Guerra",
      },
      arrow: {
        image: {
          src: "../../../../assets/projects/arrow.png",
          alt: "Nelson Guerra",
        },
        color: "pastel-green",
      },
      action: {
        url: "View My Work",
        text: "Download CV",
      },
    },
    {
      color: "pastel-yellow",
      label: "In Angular -",
      title: "In Progress",
      image: {
        src: "",
        alt: "Nelson Guerra",
      },
      arrow: {
        image: {
          src: "../../../../assets/projects/arrow.png",
          alt: "Nelson Guerra",
        },
        color: "white",
      },
      action: {
        url: "View My Work",
        text: "Download CV",
      },
    },
    {
      color: "pastel-green",
      label: "In Angular -",
      title: "In Progress",
      image: {
        src: "",
        alt: "Nelson Guerra",
      },
      arrow: {
        image: {
          src: "../../../../assets/projects/arrow.png",
          alt: "Nelson Guerra",
        },
        color: "white",
      },
      action: {
        url: "View My Work",
        text: "Download CV",
      },
    },
  ],
};
