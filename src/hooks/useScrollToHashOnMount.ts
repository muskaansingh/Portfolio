import { useLayoutEffect } from "react";

export function useScrollToHashOnMount(): void {
  useLayoutEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const target = document.getElementById(hash.slice(1));
    target?.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
  }, []);
}
