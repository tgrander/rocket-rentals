import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json, TypedResponse } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { NextUIProvider } from "@nextui-org/react";

import { RootNav, DestinationsAutocomplete } from "~/components/root";
// import { getUser } from "~/session.server";
import {
  getDestinations,
  ClientDestinations,
} from "~/models/destination.server";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async (): Promise<
  TypedResponse<{
    destinations: ClientDestinations;
  }>
> => {
  const destinations = await getDestinations();
  return json({ destinations });
};

export default function App() {
  const data = useLoaderData<typeof loader>();
  const destinations = (data?.destinations ?? []) as ClientDestinations;

  return (
    <html lang="en" className="h-full dark text-foreground bg-background">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <NextUIProvider>
          <div className="space-y-12">
            <RootNav />
            <div className="w-full h-fit max-h-16 max-w-5xl mx-auto flex items-center px-4 sm:px-6">
              <DestinationsAutocomplete destinations={destinations} />
            </div>
            <Outlet />
          </div>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </NextUIProvider>
      </body>
    </html>
  );
}
