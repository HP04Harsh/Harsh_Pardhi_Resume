import { useEffect } from "react";

/**
 * Observes every element with the `.reveal` class and adds `.in`
 * the first time it enters the viewport. Also observes later additions
 * so interactive filters can reveal newly rendered cards.
 */
export function useScrollReveal() {
  useEffect(() => {
    const io = "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("in");
                io?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
        )
      : null;

    const observe = (element: Element) => {
      if (element instanceof HTMLElement && element.matches(".reveal") && !element.classList.contains("in")) {
        if (io) io.observe(element);
        else element.classList.add("in");
      }
      element.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((node) => {
        if (io) io.observe(node);
        else node.classList.add("in");
      });
    };

    document.querySelectorAll(".reveal:not(.in)").forEach(observe);
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (node instanceof Element) observe(node);
      }));
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      io?.disconnect();
      mutations.disconnect();
    };
  }, []);
}
