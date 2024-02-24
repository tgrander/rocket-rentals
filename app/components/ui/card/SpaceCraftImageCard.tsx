import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { getCloudinaryUrl } from "~/utils";

interface Props {
  id: number;
  name: string;
  cloudinaryPublicId: string;
  type: string;
  price: string;
}

export function SpaceCraftImageCard(props: Props) {
  const { src, dataSrc } = getCloudinaryUrl({
    publicId: props.cloudinaryPublicId,
    w: 200,
    h: 200,
  });

  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src={dataSrc}
        fallbackSrc={src}
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{props.name}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          {props.price}
        </Button>
      </CardFooter>
    </Card>
  );
}
