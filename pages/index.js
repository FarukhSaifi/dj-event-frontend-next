import EventCard from "@/components/EventCard";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import Link from "next/link";
// import styles from "../styles/Home.module.css";

export default function HomePage({ events }) {
  // console.log("props client :>> ", events);
  return (
    <Layout>
      {events.length === 0 && <h3>No Event Available</h3>}
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
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
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const allEvents = await res.json();

  return { props: { events: allEvents.slice(0, 4) }, revalidate: 1 };
}
