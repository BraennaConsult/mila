import { M4PricingPageSecret } from "@/app/components/pages/M4PricingPage/secret-link";

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Page({ searchParams }: Props) {
  return <M4PricingPageSecret searchParams={searchParams} />;
}
