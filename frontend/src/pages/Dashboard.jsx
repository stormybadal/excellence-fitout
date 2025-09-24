import { useEffect, useState } from "react";
import { fetchDashboardStats } from "../api/dashboard.api";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch dashboard stats
    const getStats = async () => {
      try {
        const data = await fetchDashboardStats();
        setStats(data?.data);
      } catch (err) {
        console.error("Error fetching dashboard stats:", err);
      }
    };
    getStats();

    // Fetch user from sessionStorage
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  if (!stats) return <p className="p-4">Loading...</p>;

  const cards = [
    { title: "Projects", value: stats.projects },
    { title: "Services", value: stats.services },
    { title: "Blogs", value: stats.blogs },
    { title: "Gallery Images", value: stats.gallery },
  ];
  console.log(stats);

  return (
    <div className="p-4">
      {/* Greeting */}
      {user && (
        <h2 className="text-2xl pt-4 font-semibold mb-6">
          Welcome back,<span className="text-amber-500">{user.fullname}!</span>
        </h2>
      )}

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center">
              <p className="text-gray-500 font-medium">{card.title}</p>
            </div>
            <h2 className="text-3xl font-bold mt-3 text-blue-600">{card.value}</h2>
            <p className="text-gray-400 text-sm mt-2">Total {card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
