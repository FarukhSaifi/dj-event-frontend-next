import Layout from "@/components/Layout";
import { API_URL, DATE_FORMAT } from "@/config/index";
import { useState } from "react";
import axios from "axios";
import { slugify } from "utils";
import { EventData, IEvent } from "@/types/index";
import moment from "moment";

export default function editEventPage({ evt: { id, attributes } }: EventData) {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  console.log({ evt });
  const [values, setValues] = useState<IEvent>({
    name: attributes.name,
    slug: attributes.slug,
    venue: attributes.venue,
    address: attributes.address,
    performers: attributes.performers,
    date: attributes.date,
    description: attributes.description,
    image: attributes,
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Validation
    const hasEmptyField = Object.values(values).some((value) => value === "");

    if (!hasEmptyField) {
      prompt("Please Enter Valid Form");
    }

    const data = { ...values, slug: slugify(values.name) };
    console.log(data);

    axios
      .post(`${API_URL}/api/events`, {
        data,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    console.log(value);
    setValues({ ...values, [name]: value });
  };

  return (
    <Layout>
      <div className="p-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Event Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="event-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Event Name
                      </label>
                      <input
                        onChange={handleChange}
                        value={values.name}
                        required
                        type="text"
                        name="name"
                        id="event-name"
                        autoComplete="given-name"
                        className="p-2 mt-1 focus:ring-indigo-500 invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:border-indigo-500 block w-full bg-white shadow-sm sm:text-sm border border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="venue-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Venue
                      </label>
                      <input
                        onChange={handleChange}
                        value={values.venue}
                        required
                        type="text"
                        name="venue"
                        id="venue-name"
                        autoComplete="event-name"
                        className="p-2 mt-1 invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="performer"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Performers
                      </label>
                      <input
                        onChange={handleChange}
                        value={values.performers}
                        required
                        type="text"
                        name="performers"
                        id="performer"
                        autoComplete="email"
                        className="p-2 mt-1 invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 ">
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date
                      </label>
                      <input
                        onChange={handleChange}
                        value={moment(values.date).format(DATE_FORMAT)}
                        required
                        type="datetime-local"
                        name="date"
                        id="date"
                        autoComplete="address-level2"
                        className="p-2 mt-1 invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <input
                        onChange={handleChange}
                        value={values.address}
                        required
                        type="text"
                        name="address"
                        id="street-address"
                        autoComplete="street-address"
                        className="p-2 mt-1 invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <input
                        onChange={handleChange}
                        value={values.description}
                        required
                        type="textarea"
                        name="description"
                        id="description"
                        autoComplete="description"
                        className="p-2 mt-1 invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id } }: any) {
  console.log("Event ID", id);

  const res = await axios.get(`${API_URL}/api/events/${id}`);
  console.log(res.data.data);
  const evt = await res.data.data;

  return {
    props: { evt },
  };
}
