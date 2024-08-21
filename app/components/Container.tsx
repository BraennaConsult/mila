import { cn } from "@/app/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: Props) {
  return (
    <div className={cn("max-w-[1200px] px-3 mx-auto", className)}>
      {children}
    </div>
  );
}
