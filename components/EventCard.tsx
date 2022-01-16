import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { DATE_FORMAT } from "../config";

export default function EventCard({ event }: any) {
  return (
    <Link key={event.id} href={`/events/${event.slug}`}>
      <a className="group drop-shadow-md">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <Image
            src={event.image || null}
            alt={event.slug}
            className="w-full h-full object-center object-cover group-hover:opacity-75"
            width={300}
            height={200}
            layout="responsive"
            priority
          />
        </div>
        <h3 className="mt-4 text-lg font-bold text-gray-900">{event.name}</h3>
        <p className="mt-1 text-sm font-medium text-gray-700">
          {event.description}
        </p>
        <h3 className="mt-4 text-sm text-gray-700">
          {moment(event.date).format(DATE_FORMAT)}
        </h3>
      </a>
    </Link>
  );
}
