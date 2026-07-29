import { EventItem } from "@/types/index";

export function getEventImageSrc(
  image: EventItem["image"],
  fallback = "/images/showcase.jpg"
): string {
  if (!image) {
    return fallback;
  }

  if (typeof image === "string") {
    return image;
  }

  return image.formats?.thumbnail?.url ?? fallback;
}
