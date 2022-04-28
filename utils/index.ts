import moment from "moment";
import { DATE_FORMAT } from "../config";

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

export const DateFormatter = (date: any) => moment(date).format(DATE_FORMAT);
