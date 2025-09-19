import { useParams } from "@tanstack/react-router";

export default function PortfolioDetail() {
  const { slug } = useParams({ from: "/portfolio/$slug" });

  return <h1>Portfolio Item: {slug}</h1>;
}
