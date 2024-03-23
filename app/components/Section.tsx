import { cn } from "@/app/utils";

interface Props {
  children: React.ReactNode;
  ref?: React.MutableRefObject<null>;
  className?: string;
}

export function Section({ ref, children, className }: Props) {
  return (
    <section ref={ref} className={cn("py-20 md:py-32", className)}>
      {children}
    </section>
  );
}
