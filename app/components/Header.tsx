"use client";

import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { Logo } from "@/app/components/Logo";
import { getLink } from "@/app/utils";
import { PAYMENT_LINK } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setHasScrolled(offset > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full text-white bg-transparent z-10 py-1 backdrop-blur-2xl max-w-[100vw]">
      <Container className="flex justify-between items-center h-[44px] text-dark-grey">
        <Link href="/">
          <Logo
            className={`cursor-pointer w-20 ${
              hasScrolled ? "text-black" : "text-white"
            }`}
          />
        </Link>
        <Button size="sm" variant={hasScrolled ? "pink-ghost" : "white"}>
          <Link href={getLink()}>Bli med</Link>
        </Button>
      </Container>
    </header>
  );
}
