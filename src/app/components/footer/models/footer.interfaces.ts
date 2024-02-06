export interface GenericLabel {
  title: string;
  subtitle: string;
}

export interface Links {
  about: string;
  blog: string;
}

export interface Footer {
  brand: GenericLabel;
  rights: string;
  links: Links;
}
