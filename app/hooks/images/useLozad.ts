import { useEffect } from "react";
import lozad from "lozad";

export const useLozad = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = lozad(".lozad");
      observer.observe();
    }
  }, []);
};
