import {
  Autocomplete,
  AutocompleteItem,
  Avatar,
  Button,
} from "@nextui-org/react";
import { SearchIcon } from "../../icons";
import { users } from "./data";
import { ClientDestinations } from "~/models/destination.server";

interface Props {
  destinations: ClientDestinations;
}

export function DestinationsAutocomplete({ destinations }: Props) {
  return (
    <Autocomplete
      size="lg"
      classNames={{
        base: "max-w-xs",
        listboxWrapper: "max-h-[320px]",
        selectorButton: "text-default-500",
      }}
      // defaultItems={users}
      inputProps={{
        classNames: {
          input: "ml-1",
          inputWrapper: "h-[48px]",
        },
      }}
      listboxProps={{
        hideSelectedIcon: true,
        itemClasses: {
          base: [
            "rounded-medium",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "dark:data-[hover=true]:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[hover=true]:bg-default-200",
            "data-[selectable=true]:focus:bg-default-100",
            "data-[focus-visible=true]:ring-default-500",
          ],
        },
      }}
      aria-label="Select an employee"
      placeholder="Enter employee name"
      popoverProps={{
        offset: 10,
        classNames: {
          base: "rounded-large",
          content: "p-1 border-small border-default-100 bg-background",
        },
      }}
      startContent={
        <SearchIcon className="text-default-400" strokeWidth={2.5} size={20} />
      }
      radius="full"
      variant="bordered"
    >
      {destinations.map((destination) => (
        <AutocompleteItem key={destination.id} value={destination.name}>
          {destination.name}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}
