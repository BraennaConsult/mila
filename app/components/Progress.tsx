import { AnimatedNumber } from "@/app/components/AnimatedNumber";
import { ProgressBar } from "@/app/components/ProgressBar";

interface Props {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

export function Progress({ progress, setProgress }: Props) {
  return (
    <div className="flex flex-col space-y-3 items-center">
      <ProgressBar progress={progress} setProgress={setProgress} />
      <span className="flex justify-between w-full">
        <span>Ledige plasser</span>
        <AnimatedNumber value={progress} />
      </span>
    </div>
  );
}
