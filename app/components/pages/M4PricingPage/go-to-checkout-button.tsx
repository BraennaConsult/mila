import { usePlausible } from "next-plausible";
import Link from "next/link";

export function GoToCheckoutButton({ href }: { href: string }) {
  const plausible = usePlausible();

  return (
    <div className="fixed z-10 inset-x-0 bottom-0  text-center shadow-md mb-8 rounded-[100px] overflow-hidden my-12 w-fit mx-auto">
      <div className="w-full bg-black py-2 px-4 lg:max-w-[350px]">
        <Link
          href={href}
          onClick={() => {
            plausible("checkout_button", {
              props: {
                location: "floating_button",
                type: "website",
              },
            });
          }}
          className="p-8 text-white font-semibold text-[20px] "
        >
          Bli med på maraton
        </Link>
      </div>
    </div>
  );
}
