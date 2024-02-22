import React from "react";
import { CardContainer, CardBody, CardItem } from "~/ui/3d-card";
import { StarIcon } from "@heroicons/react/20/solid";

interface Props {
  imageUrl: string;
  name: string;
  type: string;
  price: string;
  capacity: number;
  rating: string;
}

export const ListingCard: React.FC = () => {
  return (
    <CardContainer className="inter-var" containerClassName="py-0">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full  h-auto rounded-xl p-6 border">
        {/* Image */}
        <CardItem translateZ="100" className="w-full mb-12">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        {/* Type */}
        <CardItem
          as="p"
          translateZ="40"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-500 mb-2"
        >
          Spaceplane
        </CardItem>
        {/* Title */}
        <CardItem
          translateZ="60"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Rocket Sparrow X11
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          {/* Price */}
          <CardItem
            translateZ={50}
            className="py-2 rounded-xl text-xl font-normal dark:text-white"
          >
            ⧫100,000 day
          </CardItem>
          {/* Rating */}
          <CardItem
            translateZ={20}
            className="flex items-center space-x-1 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <StarIcon className="h-3 w-3 shrink-0" aria-hidden="true" />
            <div>4.5</div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
