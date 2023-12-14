import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-10 ">
      <Container className="flex justify-between items-center text w-full h-[44px] backdrop-blur-xl px-8 text-dark-grey ">
        Mila logo
        <Button size="sm">
          {/* <Link href="/login"> */}
          Join now
          {/* </Link> */}
        </Button>
      </Container>
    </header>
  );
}
