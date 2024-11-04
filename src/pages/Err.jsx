import { Link } from "react-router-dom";

const Err = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center p-6 max-w-lg">
        <div className="text-8xl text-orange-500 mb-6">🚧</div>
        <h1 className="text-6xl font-bold text-orange-500">404</h1>
        <p className="text-xl mt-4">
          Oops! The page you are looking for is under construction or
          doesn&apos;t exist.
        </p>
        <p className="text-lg mt-2">Let&apos;s get you back on track.</p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Err;
