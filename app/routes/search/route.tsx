import { usePageStyles } from "~/hooks";
import { cn } from "~/utils";
import { ListingCard } from "./components";

export default function SearchPage() {
  usePageStyles("h-full bg-gray-900");
  return (
    <div className="w-screen flex justify-center py-14">
      <ListingCard />
    </div>
  );
}
