import { LandingPage } from "../models/landing-page.interfaces";

export const landingPageMock: LandingPage = {
  title: {
    label: "Software Engineer &",
    gradient: "UI Designer",
  },
  intro: {
    name: "Hey, my name is Nelson.",
    occupation: "Currently, I'm working as a Software Engineer at",
    company: "Delta Air Lines",
    description: `, where my contributions to Delta DOTCOM have reached millions of people
      worldwide.
      <br />
      <br />
      I mostly do front-end development, and love to design & build simple,
      beautiful, and memorable digital products.`,
  },
  action: "Get in touch",
  image: {
    src: "../../../assets/hero-page/hero-image.jpg",
    alt: "Nelson Guerra",
  },
};
