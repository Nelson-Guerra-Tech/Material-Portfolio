import { Image } from "../../skills/models/skills.interface";

export interface Introduction {
  name: string;
  occupation: string;
  company: string;
  description: string;
}

export interface Title {
  label: string;
  gradient: string;
}

export interface LandingPage {
  title: Title;
  intro: Introduction;
  action: string;
  image: Image;
}
