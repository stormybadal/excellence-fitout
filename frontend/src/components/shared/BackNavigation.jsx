import { FaArrowLeft } from "react-icons/fa";

const BackNavigation = ({ href, label }) => {
  return (
    <div className="bg-gradient-to-r from-yellow-50 via-white to-rose-50 py-6 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <a
          href={href}
          className="inline-flex items-center gap-2 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500 hover:underline transition"
        >
          <FaArrowLeft className="text-orange-500" />
          {label}
        </a>
      </div>
    </div>
  );
};

export default BackNavigation;
