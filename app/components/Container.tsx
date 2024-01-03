interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: Props) {
  return (
    <div className={`max-w-[1200px] mx-auto px-4 ${className}`}>{children}</div>
  );
}
