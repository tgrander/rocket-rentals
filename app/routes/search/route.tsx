import { usePageStyles } from "~/hooks";
import { cn } from "~/utils";
import { ListingCard } from "./components";

export default function SearchPage() {
  usePageStyles("h-full bg-gray-900");
  return (
    <div className="w-screen px-10 py-14">
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <ListingCard key={i} />
        ))}
      </div>
    </div>
  );
}
