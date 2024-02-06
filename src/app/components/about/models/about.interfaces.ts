import { Color } from "../../../types/common-types";
import { Action } from "../../projects/models/projects.interface";
import { Image } from "../../skills/models/skills.interface";

export interface Badges {
  label: string;
  labelColor: Color;
  color: Color;
}

export interface Skills {
  title: string;
  subtitle: string;
}

export interface About {
  section: string;
  description: string;
  image: Image;
  skills: Skills[];
  badges: Badges[];
  action: Action;
}
