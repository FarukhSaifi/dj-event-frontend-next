import axios from "axios";
import Link from "next/link";
import { API_URL } from "../config";
import { EventData } from "@/types/index";
import SearchBar from "./SearchBar";
import Modal from "@/components/Modal";
import { useState } from "react";
let faker = require("faker");

export default function Banner() {
  const [show, setShow] = useState(false);
  // Create A New random Event
  const handleClick = async () => {
    const dummyData = {
      name: faker.name.firstName(),
      slug: faker.lorem.slug(),
      venue: faker.address.streetAddress(),
      address: `${faker.address.streetAddress()} ${faker.address.city()}, ${faker.address.country()}, ${faker.address.stateAbbr()}(${faker.address.stateAbbr()}), ${faker.address.zipCodeByState()}`,

      performers: faker.company.catchPhrase(),
      date: faker.date.future(),
      time: faker.time.recent(),
      description: faker.lorem.sentence(),
      image: faker.image.image(),
    };

    try {
      const res = await axios.post(`${API_URL}/api/events`, {
        data: dummyData,
      });
      console.log("res :>> ", res);
    } catch (error) {
      console.log(error);
    }
  };
  // Create bulk Event
  const bulkFaker = () => {
    for (let i = 0; i < 10; i++) {
      handleClick();
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-600">
            Start your free trial today.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <button
              onClick={handleClick}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Generate Fake Data
            </button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <button
              onClick={bulkFaker}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Bulk Faker
            </button>
          </div>
          <button
            onClick={() => setShow(true)}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
          >
            Open Modal
          </button>
        </div>
      </div>

      <SearchBar />

      <Modal show={show} onClose={() => setShow(false)} title={"Farukh"}>
        <h3>This is the Modal </h3>
      </Modal>
    </div>
  );
}
