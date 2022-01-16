import { ReactNode } from "react";

export interface EventData {
  id: number;
  attributes: {
    name: string;
    slug: string;
    venue: string;
    address: string;
    performers: string;
    date: string;
    time: string;
    description: string;
    image: string;
  };
}
export interface IEvent {
  name: string;
  slug: string;
  venue: string;
  address: string;
  performers: string;
  date: string;
  description: string;
}

// ModalProps

export interface ModalProps {
  show: boolean;
  onClose: Function;
  title: string;
  children: ReactNode;
}
