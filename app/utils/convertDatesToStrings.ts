export function convertDatesToStrings<T>(obj: Record<string, any>): T {
  // Check if the input is an object
  if (obj !== null && typeof obj === "object") {
    // Iterate over the object properties
    Object.keys(obj).forEach((key) => {
      const value = obj[key];

      // If the property is a Date, convert it to a string
      if (value instanceof Date) {
        obj[key] = value.toISOString();
      } else if (typeof value === "object") {
        // If the property is an object or an array, recursively call the function
        convertDatesToStrings(value);
      }
    });
  }

  return obj as T;
}
