"use client";

import { useEffect } from "react";

export function MotionRuntime() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    for (const element of elements) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        element.dataset.visible = "true";
      }
    }

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const target = entry.target as HTMLElement;
          target.dataset.visible = "true";
          observer.unobserve(target);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    for (const element of elements) {
      if (element.dataset.visible !== "true") {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
