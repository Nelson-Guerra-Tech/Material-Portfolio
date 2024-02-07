import { Color } from "../../../types/common-types";

export interface Expertise {
  title: string;
  subtitle: string;
  color: Color;
  labelColor: Color;
}

export interface Value {
  section: string;
  expertise: Expertise[];
}
