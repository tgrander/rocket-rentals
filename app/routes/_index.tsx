import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Navbar } from "~/components/ui";

import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-scree sm:flex sm:items-center sm:justify-center"></main>
  );
}
