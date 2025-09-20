import { useNavigate } from "@tanstack/react-router";

const ConstructionCard = ({ data }) => {
  const navigate = useNavigate();

  // Extract props
  const {
    id,
    image,
    title,
    description,
    services,
    linkText,
    accentColor = "text-orange-500", // default accent color
  } = data;

  return (
    <div className="max-w-sm overflow-hidden rounded-2xl bg-white shadow-md">
      {/* Image with icon overlay */}
      <div className="relative">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        
      </div>

      {/* Content */}
      <div className="p-6 text-start">
        <h2 className="mb-2 text-xl font-bold text-gray-900">{title}</h2>
        <p className="mb-4 text-gray-600">{description}</p>

        {/* Bullet List */}

{/* Bullet List */}
<ul className="mb-4 space-y-2">
  {services
    ?.slice(-4) // take the last 4 items
    .map((service, index) => (
      <li key={index} className="flex items-center">
        <span className={`mr-2 ${accentColor}`}>●</span>
        <span className="text-gray-700">{service}</span>
      </li>
    ))}
</ul>


        {/* Link */}
        {linkText && (
          <a
            onClick={() => navigate({ to: "/portfolio/$slug", params: { slug: id } })}
            className={`font-semibold ${accentColor} hover:underline cursor-pointer`}
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default ConstructionCard;
