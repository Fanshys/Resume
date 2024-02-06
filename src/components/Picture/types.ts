export interface PictureProps {
  src: string;
  srcRetina?: string;
  sources?: Source[];
  className?: string;
  imgClassName?: string;
  alt?: string;
}

export interface Source {
  src: string;
  srcRetina?: string;
  from?: number;
  to?: number;
}
