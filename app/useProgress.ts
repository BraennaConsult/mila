"use client";

import { getPercentage } from "@/app/utils";
import { useEffect, useState } from "react";

export function useProgress() {
  const [progress, setProgress] = useState<number>(0);

  const currentProgress = getPercentage();

  useEffect(() => {
    setProgress(currentProgress);
  }, []);

  return progress;
}
