import { API_URL } from "@/config/index";
import { EventItem } from "@/types/index";
import fallbackData from "../pages/api/events/data.json";

const fallbackEvents = fallbackData.events as EventItem[];

export async function fetchEvents(url = `${API_URL}/events`): Promise<EventItem[]> {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch events: ${res.status}`);
    }

    const events = await res.json();
    return Array.isArray(events) ? events : fallbackEvents;
  } catch {
    return fallbackEvents;
  }
}

export async function fetchEventBySlug(slug: string): Promise<EventItem | null> {
  try {
    const res = await fetch(`${API_URL}/events?slug=${slug}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch event: ${res.status}`);
    }

    const events = await res.json();
    return Array.isArray(events) ? events[0] ?? null : null;
  } catch {
    return fallbackEvents.find((event) => event.slug === slug) ?? null;
  }
}
