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
        url: "https://www.delta.com/",
        text: "",
      },
    },
    {
      color: "pastel-yellow",
      label: "In Angular -",
      title: "Under Construction",
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
        text: "",
      },
    },
    {
      color: "pastel-green",
      label: "In Swift -",
      title: "Under Construction",
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
        text: "",
      },
    },
  ],
};
