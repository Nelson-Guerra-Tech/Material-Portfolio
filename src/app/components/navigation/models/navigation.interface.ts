export interface GenericLabel {
  title: string;
  subtitle: string;
}

export interface Navigation {
  label: GenericLabel;
  links: Links;
}

export interface Links {
  about: string;
  blog: string;
}
