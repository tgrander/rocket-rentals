import { usePageStyles } from "~/hooks";
import { cn } from "~/utils";
import { ListingCard } from "./components";

export default function SearchPage() {
  usePageStyles("h-full bg-gray-900");
  return (
    <div className="w-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-6 py-14 max-w-5xl mx-auto">
        {Array.from({ length: 10 }).map((_, i) => (
          <ListingCard key={i} />
        ))}
      </div>
    </div>
  );
}
