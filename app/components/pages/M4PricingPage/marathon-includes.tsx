import { cn } from "@/app/utils";
import Image from "next/image";

const items = [
  {
    icon: "📱",
    text: "Myluck App",
  },
  {
    icon: "🤸🏻",
    text: "Daglig vakuum og magetrening",
  },
  {
    icon: "💪",
    text: "Komplett treningsprogram",
  },
  {
    icon: "🥗",
    text: "Kostholdsplan tilpasset dine mål",
  },
  {
    icon: "🍲",
    text: "200+ proteinrike oppskrifter",
  },
  {
    icon: "🧠",
    text: "Fokus på psykologien bak overspising",
  },
];

export function MarathonIncludes({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col py-14 gap-8 bg-black rounded-[24px] relative px-5",
        className
      )}
    >
      <h2 className="text-white text-[30px] leading-[40px] font-medium z-10 font-sans">
        Maraton inkluderer
      </h2>
      <ul className="flex flex-col gap-2 z-20">
        {items.map((item) => (
          <li key={item.icon} className="flex items-center gap-3 text-white">
            <span className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
              {item.icon}
            </span>
            <span className="text-[16px]">{item.text}</span>
          </li>
        ))}
      </ul>
      <Image
        src="/marathon-includes-background.png"
        fill
        alt="includes"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
    </div>
  );
}
