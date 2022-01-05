import Link from "next/link";
import { API_URL } from "../config";
import Layout from "@/components/Layout";
import EventData from "@/components/types";
import EventCard from "@/components/EventCard";

const Home = ({ events }: any) => {
  return (
    <Layout>
      {events.length === 0 && <h3>No Event Available</h3>}
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {events.map((event: EventData) => (
            <EventCard key={event.id} event={event.attributes} />
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row flex justify-center">
          <Link href="/events" passHref>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
              View All Events
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events?_sort=date:ASC&_limit=4`);
  const allEvents = await res.json();

  return { props: { events: allEvents.data }, revalidate: 1 };
}
