import { Color } from "../../../types/common-types";
import { Image } from "../../skills/models/skills.interface";

export interface Article {
  image: Image;
  title: string;
  label: string;
  url: string;
  color: Color;
  labelColor: Color;
}

export interface Writing {
  section: string;
  article: Article[];
}
