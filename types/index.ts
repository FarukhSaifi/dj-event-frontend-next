import { ReactNode } from "react";

export interface EventAttributes {
  name: string;
  slug: string;
  venue: string;
  address: string;
  performers: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

export interface EventData {
  id: number;
  attributes: EventAttributes;
}

export interface EventItem {
  id: number | string;
  name: string;
  slug: string;
  venue: string;
  address: string;
  performers: string;
  date: string;
  time?: string;
  description: string;
  image?:
    | string
    | {
        formats?: {
          thumbnail?: {
            url: string;
          };
        };
      };
}

export interface EventPageProps {
  evt: EventItem;
}

export interface EditEventPageProps {
  evt: EventData;
}

export interface IEvent {
  name: string;
  slug?: string;
  venue: string;
  address: string;
  performers: string;
  date: string;
  description: string;
  image?: unknown;
}

// ModalProps

export interface ModalProps {
  show: boolean;
  onClose: Function;
  title: string;
  children: ReactNode;
}
