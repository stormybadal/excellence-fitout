import { IoAlarmOutline, IoCall, IoLocationSharp, IoMail } from "react-icons/io5";

function RightContent() {
  const contactCards = [
    {
      icon: <IoCall className="text-2xl text-white" />,
      iconBg: "bg-gradient-to-r from-orange-400 to-orange-600",
      title: "Phone",
      lines: ["+971552146089"],
      tagline: "24/7 Emergency services available.",
    },
    {
      icon: <IoMail className="text-2xl text-white" />,
      iconBg: "bg-gradient-to-r from-blue-400 to-blue-600",
      title: "Email",
      lines: ["info@excellenceinteriors.com"],
      tagline: "We respond within 2 hours.",
    },
    {
      icon: <IoLocationSharp className="text-2xl text-white" />,
      iconBg: "bg-gradient-to-r from-rose-400 to-red-600",
      title: "Office Location",
      lines: ["Business Bay, Dubai", "United Arab Emirates"],
      tagline: "Visit us for consutation.",
    },
    {
      icon: <IoAlarmOutline className="text-2xl text-white" />,
      iconBg: "bg-gradient-to-r from-amber-400 to-amber-600",
      title: "Working Hours",
      lines: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      tagline: " Emergency services 24/7.",
    },
  ];

  return (
    <div className="flex flex-col justify-center space-y-5 py-12">
      {/* Header */}
      <h2
        className="inline-block w-fit rounded-full px-6 py-2 text-sm font-semibold text-white shadow-md"
        style={{
          background:
            "linear-gradient(90deg, rgba(59,130,246,1) 0%, rgba(37,99,235,1) 43%, rgba(29,78,216,1) 100%)",
        }}
      >
        Contact Info
      </h2>

      <h3 className="text-3xl leading-snug font-bold text-gray-800">
        Multiple ways to <br />
        <span className="text-blue-500">reach us</span>
      </h3>

      <p className="max-w-md text-gray-600">
        Get in touch with us through any of the following methods. We're here to help with all your
        construction and interior maintenance needs.
      </p>

      {/* Contact Cards */}
      <div className="flex flex-col space-y-4">
        {contactCards.map((card, idx) => (
          <div
            key={idx}
            className="flex transform items-start gap-4 rounded-xl bg-white p-4 shadow-lg transition hover:scale-105"
          >
            {/* Icon with circular background */}
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full ${card.iconBg}`}
            >
              {card.icon}
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <h4 className="font-semibold text-gray-800">{card.title}</h4>
              {card.lines.map((line, i) => (
                <p key={i} className="text-sm text-gray-700">
                  {line}
                </p>
              ))}
              <p className="mt-1 text-xs text-gray-500">{card.tagline}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex gap-4">
        {/* <button
          className="w-1/2 rounded-md px-4 py-2 font-semibold text-white transition"
          style={{
            background:
              "linear-gradient(90deg, rgba(250,114,2,1) 0%, rgba(253,92,29,1) 43%, rgba(235,19,84,1) 100%)",
          }}
        >
          Call Now
        </button> */}
        <button
          onClick={() =>
            window.open("https://wa.me/+971552146089?text=Hi%2C%20I%20would%20like%20to%20discuss%20my%20construction%20project%20with%20you.", "_blank")
          }
          className="w-full rounded-md px-4 py-2 font-semibold text-white transition"
          style={{
            background:
              "linear-gradient(135deg, rgba(250,114,2,1) 0%, rgba(253,92,29,1) 43%, rgba(235,19,84,1) 100%)",
          }}
        >
          WhatsApp
        </button>
      </div>
    </div>
  );
}

export default RightContent;
