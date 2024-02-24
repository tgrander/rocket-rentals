import { usePageStyles } from "~/hooks";
import { cn } from "~/utils";
import { ListingCard } from "./components";
import { BackgroundBeams } from "~/ui";
import { useLoaderData } from "@remix-run/react";
import type { ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { json, redirect } from "@remix-run/node"; // or cloudflare/deno
import { Form } from "@remix-run/react";
import { getSpaceCrafts } from "~/models/search.server";

export const loader = async () => {
  const spacecrafts = await getSpaceCrafts();
  return json({ spacecrafts });
};

export default function SearchPage() {
  const data = useLoaderData<typeof loader>();
  const spacecrafts = data?.spacecrafts ?? [];

  return (
    <div className="w-screen z-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-6 max-w-5xl mx-auto">
        {/* {spacecrafts.map((spacecraft) => (
          <ListingCard
            key={spacecraft.id}
            id={spacecraft.id}
            cloudinaryPublicId={spacecraft.images[0].cloudinaryPublicId}
            name={spacecraft.name}
            type={spacecraft.type.name}
            price={spacecraft.pricePerDay}
          />
        ))} */}
        {spacecrafts.slice(0, 1).map((spacecraft) => (
          <ListingCard
            key={spacecraft.id}
            id={spacecraft.id}
            cloudinaryPublicId={spacecraft.images[0].cloudinaryPublicId}
            name={spacecraft.name}
            type={spacecraft.type.name}
            price={spacecraft.pricePerDay}
          />
        ))}
      </div>
    </div>
  );
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const body = await request.formData();
  // const todo = await fakeCreateTodo({
  //   title: body.get("title"),
  // });
  // return redirect(`/todos/${todo.id}`);
  return json({ spacecrafts: [{ id: "abc", name: "Mars Rover Supreme" }] });
};
