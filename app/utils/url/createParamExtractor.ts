/**
 Extracts URL parameters from a URLSearchParams object and casts them to the correct type.
 ------------------------------------------------
 
 ~Example usage:~
 
 interface SearchParams {
    term?: string;
    category?: string;
    page?: number;
 }
 
 const extractSearchParams = createParamExtractor<SearchParams>();

 export const loader: LoaderFunction = async ({ request }) => {
    const url = new URL(request.url);
    const searchParams = extractSearchParams(url.searchParams);

    // `searchParams` is now an object with properties typed according to `SearchParams`
    // and values extracted and cast from the URL search parameters
    console.log(searchParams); // Typed as SearchParams with correct values
 };
 */

export function createParamExtractor<
  T extends Record<string, string | number>,
>() {
  return function extractParams(params: URLSearchParams): T {
    const result: any = {}; // Temporarily use `any` to bypass TypeScript's strict type checks

    for (const key of params.keys()) {
      const value = params.get(key);

      // Check if the value is numeric and should be converted to a number
      const numericValue = parseInt(value || "", 10);
      result[key] = isNaN(numericValue) ? value : numericValue;
    }

    return result as T; // Assert the final result as type T
  };
}
