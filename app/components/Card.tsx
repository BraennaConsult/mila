interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: Props) {
  return (
    <div
      className={`mx-[9.5px] rounded-[30px] shadow-sm px-4 bg-white ${className} py-12`}
    >
      {children}
    </div>
  );
}
