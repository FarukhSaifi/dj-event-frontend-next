import Layout from "@/components/Layout";
import { EventData } from "@/types/index";
import { API_URL, DATE_FORMAT } from "@/config/index";
import Image from "next/image";
import Link from "next/link";
import qs from "qs";
import moment from "moment";

export default function MyEvent({ evt }: EventData) {
  return (
    <Layout title={`${evt.name} - Dj Event | Find Dj Near by You`}>
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl py-5">
        My Event
      </h1>

      <div className="row flex justify-between pb-4">
        <div className="inline-flex rounded-md shadow">
          <Link href={`/events`}>
            <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
              Go Back
            </a>
          </Link>
        </div>
        <div>
          <div className="inline-flex rounded-md shadow">
            <Link href={`/events/edit/${evt.id}`}>
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Edit Event
              </a>
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link href={`/events/delete/${evt.id}`}>
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-gray-300 hover:bg-indigo-50">
                Delete Event
              </a>
            </Link>
          </div>
        </div>
      </div>

      <span className="pb-3">{moment(evt.date).format(DATE_FORMAT)}</span>
      <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl py-4">
        {evt.name}
      </h3>

      {evt.image && (
        <div className="min-w-full min-h-250">
          <Image
            src={
              evt.image
                ? evt.image.formats.thumbnail.url
                : "/images/showcase.jpg"
            }
            alt={evt.slug}
            width={800}
            height={250}
            layout="responsive"
            priority
          />
        </div>
      )}
      <div className="flex">
        <h3 className="font-bold p-2">Description:</h3>
        <p className="p-2"> {evt.description}</p>
      </div>

      <div className="flex">
        <h3 className="font-bold p-2">Performer:</h3>
        <p className="p-2"> {evt.performers}</p>
      </div>

      <div className="flex">
        <h3 className="font-bold p-2">Venue:</h3>
        <p className="p-2"> {evt.venue}</p>
      </div>

      <div className="flex">
        <h3 className="font-bold p-2">Address:</h3>
        <p className="p-2"> {evt.address}</p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  console.log("86", res);
  const events = await res.json();

  const paths = events.map((evt: EventData) => ({
    params: {
      slug: evt.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const query = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });

  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const evt = await res.json();

  console.log("evt :>> ", evt);

  return {
    props: { evt: evt[0] },
    revalidate: 1,
  };
}
