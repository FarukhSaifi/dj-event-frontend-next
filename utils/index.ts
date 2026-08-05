import moment, { Moment } from "moment";
import { DATE_FORMAT } from "../config";

const EVENT_DATE_INPUT_FORMATS = [
  "MMMM DD, YYYY",
  "MMMM D, YYYY",
  "YYYY-MM-DD",
  "YYYY-MM-DDTHH:mm",
  moment.ISO_8601,
];

export function parseEventDate(date: string | Date): Moment {
  if (date instanceof Date) {
    return moment(date);
  }

  const parsed = moment(date, EVENT_DATE_INPUT_FORMATS, true);
  return parsed.isValid() ? parsed : moment(date);
}

export function slugify(string: { toString: () => string }) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export const DateFormatter = (date: string | Date) =>
  parseEventDate(date).format(DATE_FORMAT);
