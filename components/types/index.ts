export default interface EventData {
  id: number;
  attributes: {
    id: number;
    name: string;
    slug: string;
    venue: string;
    address: string;
    performers: string;
    date: string;
    time: string;
    description: string;
    image: string;
  };
}
