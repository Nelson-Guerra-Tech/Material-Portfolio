import { Color } from "../../../types/common-types";
import { Image } from "../../skills/models/skills.interface";

export interface Arrow {
  image: Image;
  color: Color;
}

export interface Action {
  text: string;
  url: string;
}

export interface Item {
  label?: string;
  title: string;
  description?: string;
  image: Image;
  arrow: Arrow;
  color: Color;
  labelColor?: Color;
  action: Action;
}

export interface Projects {
  section: string;
  project: Item[];
}
