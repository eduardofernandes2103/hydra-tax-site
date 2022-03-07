export interface ComissionNoteProps {
  key?: number;
  id?: number;
  noteDate: Date;
  liquidValue: string;
  tax: string;
  onClick?: () => void;
}
