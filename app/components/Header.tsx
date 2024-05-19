"use client";

import { Button, buttonProps } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { Logo } from "@/app/components/Logo";
import { cn, getLink } from "@/app/utils";
import { PAYMENT_LINK } from "@/constants";
import { usePlausible } from "next-plausible";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header({ black = false }: { black?: boolean }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const plausible = usePlausible();

  const handleScroll = () => {
    const offset = window.scrollY;
    setHasScrolled(offset > 0);
  };

  function handleClick() {
    plausible("go_to_pricing_page", {
      props: {
        location: "header",
      },
    });
  }

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
              hasScrolled ? "text-black" : black ? "text-black" : "text-white"
            }`}
          />
        </Link>
        <Link
          href={getLink()}
          onClick={handleClick}
          className={cn(
            "",
            buttonProps({
              variant: hasScrolled ? "pink-ghost" : "white",
              size: "sm",
            })
          )}
        >
          Bli med
        </Link>
      </Container>
    </header>
  );
}
