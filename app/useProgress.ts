"use client";

import { getPercentageSpotsTaken } from "@/app/utils";
import { useEffect, useState } from "react";

export function useProgress() {
  const [progress, setProgress] = useState<number>(0);

  const currentProgress = getPercentageSpotsTaken();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setProgress(currentProgress);
  }, []);

  return progress;
}
