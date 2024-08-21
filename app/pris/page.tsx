import { M4PricingPage } from "@/app/components/pages/M4PricingPage";

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Page({ searchParams }: Props) {
  return <M4PricingPage searchParams={searchParams} />;
}
