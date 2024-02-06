import { Image } from "../../skills/models/skills.interface";

export interface Article {
  image: Image;
  title: string;
  label: string;
  url: string;
}

export interface Writing {
  section: string;
  article: Article[];
}
