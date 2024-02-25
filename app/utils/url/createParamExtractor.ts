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

export function createParamExtractor<T>() {
  return function extractParams(params: URLSearchParams): T {
    const result: any = {};

    // Iterate over each key defined in T
    (Object.keys(params) as Array<keyof T>).forEach((key) => {
      const values = params.getAll(key as string);

      if (values.length > 1) {
        // Handle array values
        result[key] = values;
      } else {
        const value = values[0];
        const numericValue = parseFloat(value);
        result[key] = isNaN(numericValue) ? value : numericValue;
      }
    });

    return result as T;
  };
}
