import { cn } from "@/app/utils";

export function MyPath({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex justify-center rounded-[69px] overflow-hidden",
        className
      )}
    >
      <video
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        controls={false}
        id={"transformation"}
        // onFocus={(e) => e.target.play()}
      >
        <source src="/video/Transformation.mp4" type="video/mp4" />
        Sorry, your browser does not support embedded videos.
      </video>
    </div>
  );
}
