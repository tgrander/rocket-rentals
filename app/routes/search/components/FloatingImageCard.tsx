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

export const FloatingImageCard: React.FC<Props> = ({
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
  return <div>hello world</div>;
};
