import { PageType } from "../../types";

export interface ContentContainerProp {
  type?: PageType;
  cardContent: {
    id: number;
    title: string;
    text: string;
  }[];
}
