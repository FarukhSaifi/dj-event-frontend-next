import Link from "next/link";
import Layout from "@/components/Layout";

export default function NotFoundPage() {
  return (
    <Layout title="404 Not Found">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-center">
        <div className="w- flex-col items-center justify-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Page Not Found !</span>
          </h2>
          <span className="block text-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-40 w-40"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <Link href="/">
            <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Back to home
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
