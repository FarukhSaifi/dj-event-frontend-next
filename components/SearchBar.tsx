import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchBar() {
  const [term, setTerm] = useState("");

  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/events/search?term=${term}`);
    setTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search Events"
        className="focus:ring-indigo-500 focus:border-indigo-500 block lg:w-1/3 p-4 mx-auto sm:text-sm  border-gray-300 rounded-md"
      />
    </form>
  );
}
