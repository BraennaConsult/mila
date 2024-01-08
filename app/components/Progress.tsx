import { AnimatedNumber } from "@/app/components/AnimatedNumber";
import { DotsProgressBar } from "@/app/components/DotsProgressBar";
import { useProgress } from "@/app/useProgress";
import { cn } from "@/app/utils";

interface Props {
  className?: string;
}

export function Progress({ className }: Props) {
  const progress = useProgress();

  return (
    <div className={cn("flex flex-col space-y-2", className)}>
      <span className="text-mid-grey">Plasser tatt</span>
      <div className="space-x-6 text-[50px] lg:text-[60px] font-serif flex items-start leading-none">
        <span>
          <AnimatedNumber value={progress} />%
        </span>
        <DotsProgressBar progressPercentage={progress} totalDots={30} />
      </div>
    </div>
  );
}
