"use client";

import { useEffect, useRef, useState } from "react";

import type { Dictionary } from "@/lib/i18n/dictionaries";

type NoraExplodedAnimationProps = {
  schematic: Dictionary["schematic"];
};

const assetBase = "/nora-exploded";

export function NoraExplodedAnimation({ schematic }: NoraExplodedAnimationProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [playKey, setPlayKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const node = cardRef.current;

    if (reduceMotion || !node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsPlaying(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  function replay() {
    setIsPlaying(false);
    window.requestAnimationFrame(() => {
      setPlayKey((current) => current + 1);
      setIsPlaying(true);
    });
  }

  return (
    <div
      ref={cardRef}
      className={["nora-animation-card", isPlaying ? "is-playing" : ""].join(" ")}
      aria-label={schematic.alt}
    >
      <div className="nora-card-grid" />
      <div className="nora-card-frame" />

      <div className="nora-card-header">
        <span>{schematic.labels.stack}</span>
        <span className="nora-card-status">
          <span aria-hidden="true" />
          {schematic.labels.status}
        </span>
      </div>

      <div key={playKey} className="nora-stage" aria-hidden="true">
        <div className="nora-axis" />
        <img
          className="nora-layer nora-top"
          src={`${assetBase}/assets/top_housing.png`}
          alt=""
          loading="lazy"
          draggable={false}
        />
        <img
          className="nora-layer nora-board"
          src={`${assetBase}/assets/processing_board.png`}
          alt=""
          loading="lazy"
          draggable={false}
        />
        <img
          className="nora-layer nora-base"
          src={`${assetBase}/assets/thermal_base.png`}
          alt=""
          loading="lazy"
          draggable={false}
        />
      </div>

      <img
        className="nora-fallback"
        src={`${assetBase}/nora_exploded_preview_final.png`}
        alt={schematic.alt}
        loading="lazy"
        draggable={false}
      />

      <div className="nora-callouts" aria-hidden="true">
        <div className="nora-callout nora-callout-1">{schematic.labels.protectiveHousing}</div>
        <div className="nora-callout nora-callout-2">{schematic.labels.processingBoard}</div>
        <div className="nora-callout nora-callout-3">{schematic.labels.thermalBase}</div>
        <div className="nora-callout nora-callout-4">{schematic.labels.mountingStack}</div>
      </div>

      <div className="nora-scan" aria-hidden="true" />

      <div className="nora-card-footer">
        <button type="button" onClick={replay}>
          {schematic.labels.replay}
        </button>
        <div className="nora-timeline" aria-hidden="true">
          <div key={`bar-${playKey}`} className="nora-timeline-bar" />
        </div>
        <span>{schematic.labels.reduced}</span>
      </div>
    </div>
  );
}
