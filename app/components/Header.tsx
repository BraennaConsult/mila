import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { PAYMENT_LINK } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full text-white bg-transparent z-10 py-1 backdrop-blur-2xl">
      <Container className="flex justify-between items-center text w-full h-[44px] px-8 text-dark-grey ">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={68.6} height={36.4} />
        </Link>
        <Button size="sm">
          <Link href={PAYMENT_LINK}>Bli med!</Link>
        </Button>
      </Container>
    </header>
  );
}
