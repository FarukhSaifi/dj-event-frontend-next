import { API_URL } from "@/config/index";
import { EventItem } from "@/types/index";
import fallbackData from "../pages/api/events/data.json";

const fallbackEvents = fallbackData.events as EventItem[];

function normalizeEvent(event: Record<string, unknown>): EventItem | null {
  if (event.attributes && typeof event.attributes === "object") {
    const attributes = event.attributes as Record<string, unknown>;

    return {
      id: (event.id as number | string) ?? attributes.id ?? "",
      name: String(attributes.name ?? ""),
      slug: String(attributes.slug ?? ""),
      venue: String(attributes.venue ?? ""),
      address: String(attributes.address ?? ""),
      performers: String(attributes.performers ?? ""),
      date: String(attributes.date ?? ""),
      time: attributes.time ? String(attributes.time) : undefined,
      description: String(attributes.description ?? ""),
      image: attributes.image as EventItem["image"],
    };
  }

  if (typeof event.slug === "string" && typeof event.name === "string") {
    return event as unknown as EventItem;
  }

  return null;
}

function normalizeEvents(data: unknown): EventItem[] {
  if (!Array.isArray(data)) {
    return fallbackEvents;
  }

  const normalized = data
    .map((event) => normalizeEvent(event as Record<string, unknown>))
    .filter((event): event is EventItem => Boolean(event?.slug));

  return normalized.length > 0 ? normalized : fallbackEvents;
}

export async function fetchEvents(url = `${API_URL}/events`): Promise<EventItem[]> {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch events: ${res.status}`);
    }

    const payload = await res.json();
    const events = Array.isArray(payload)
      ? payload
      : Array.isArray(payload?.data)
        ? payload.data
        : null;

    return normalizeEvents(events);
  } catch {
    return fallbackEvents;
  }
}

export async function fetchEventBySlug(slug: string): Promise<EventItem | null> {
  const events = await fetchEvents();
  return events.find((event) => event.slug === slug) ?? null;
}
