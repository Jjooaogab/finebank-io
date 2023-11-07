import { DOMAttributes, ElementType, MouseEventHandler } from "react";

export default interface ButtonType {
  text: string;
  icon: ElementType;
  onClick: () => void;
  className?: string;
}