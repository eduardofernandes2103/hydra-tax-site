export interface ComissionNoteProps {
  key?: number;
  id: number;
  comissionNoteDate: string;
  noteValue?: string;
  notePositiveValue?: string;
  noteNegativeValue?: string;
  taxIncluded?: string;
  onClick?: () => void;
}

export interface ComissionStyleProps {
  isNegative?: boolean
}
