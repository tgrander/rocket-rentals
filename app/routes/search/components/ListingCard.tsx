import React from "react";
import { CardContainer, CardBody, CardItem } from "~/ui";
import { StarIcon } from "@heroicons/react/20/solid";
import { useLozad } from "~/hooks";
import { getCloudinaryUrl } from "~/utils";

interface Props {
  id: number;
  name: string;
  cloudinaryPublicId: string;
  type: string;
  price: string;
}

export const ListingCard: React.FC<Props> = ({
  id,
  name,
  cloudinaryPublicId,
  type,
  price,
}) => {
  useLozad();

  const { src, dataSrc } = getCloudinaryUrl({
    publicId: cloudinaryPublicId,
    w: 700,
    h: 648,
    blurryLoader: {
      w: 30,
      h: 30,
      blur: 1000,
    },
  });

  return (
    <CardContainer className="inter-var" containerClassName="py-0">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full  h-auto rounded-xl p-6 border">
        {/* IMAGE */}
        <CardItem translateZ="100" className="w-full mb-12">
          <img
            src={src}
            data-src={dataSrc}
            className="lozad h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Spacecraft"
            loading="lazy"
          />
        </CardItem>

        {/* TYPE */}
        <CardItem
          as="p"
          translateZ="40"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-500 mb-2"
        >
          {type}
        </CardItem>

        {/* TITLE */}
        <CardItem
          translateZ="60"
          className="font-bold text-neutral-600 dark:text-white text-2xl"
        >
          {name}
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          {/* PRICE */}
          <CardItem
            translateZ={50}
            className="py-2 rounded-xl text-xl font-normal dark:text-white"
          >
            {price} day
          </CardItem>

          {/* RATING */}
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
