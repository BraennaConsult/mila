import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { Logo } from "@/app/components/Logo";
import { PAYMENT_LINK } from "@/constants";
import Link from "next/link";

interface Props {
  href?: string;
}

export function BlackHeader({ href }: Props) {
  return (
    <header className="fixed top-0 left-0 w-full text-white bg-transparent z-10 py-1 backdrop-blur-2xl max-w-[100vw]">
      <Container className="flex justify-between items-center h-[44px] text-dark-grey">
        <Link href="/">
          <Logo className={`cursor-pointer w-20 text black`} />
        </Link>
        <Button size="sm" variant="black">
          <Link href={href || PAYMENT_LINK}>Bli med</Link>
        </Button>
      </Container>
    </header>
  );
}
