import { PageType } from "../../types";

export interface SuggestionProps {
  visible?: boolean;
  type?: PageType;
  className?: string;
  withCloseButton?: boolean;
}
