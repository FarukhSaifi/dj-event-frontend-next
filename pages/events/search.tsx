import qs from "qs";
import { useRouter } from "next/router";
import Link from "next/link";
import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";
import { EventData } from "@/types/index";

export default function SearchPage({ events }: any) {
  const router = useRouter();

  console.log(events);

  return (
    <Layout title="Search Results">
      <div className=" justify-between">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Search Results for {router.query.term}
        </h1>
        <Link href="/events">Go Back</Link>
      </div>
      {events.length === 0 && (
        <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          No events to show
        </h3>
      )}
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {events.map((evt: EventData) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }: any) {
  const query = qs.stringify(
    {
      _where: {
        _or: [
          {
            name_contains: term,
          },
          {
            venue_contains: term,
          },
          {
            description_contains: term,
          },
        ],
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();
  console.log("events res:>> ", events);

  return { props: { events: events } };
}
