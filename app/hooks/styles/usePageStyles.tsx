import { useEffect } from "react";

export function usePageStyles(styles: string) {
  useEffect(() => {
    // Add classes to body
    document.body.className = styles;

    // Add classes to head
    const head = document.head;
    if (head) {
      head.className = styles;
    }

    // Cleanup function to remove classes when component unmounts
    return () => {
      document.body.className = "";
      if (head) {
        head.className = "";
      }
    };
  }, [styles]); // Re-apply if styles change
}
