interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: Props) {
  return (
    <div
      className={`px-4 rounded-[30px] shadow-card  bg-white ${className} py-12`}
    >
      {children}
    </div>
  );
}
