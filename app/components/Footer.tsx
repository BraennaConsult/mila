import { CONTACT_EMAIL, ROUTES } from "@/constants";
import Link from "next/link";

export function Footer() {
  const copyRightYear = new Date().getFullYear();
  return (
    <footer className="py-2 border-t border-mid-grey/25 w-full flex justify-center text-sm text-mid-grey">
      <ul className="flex items-center space-x-5 list-none">
        <li>&copy; {copyRightYear}, Myluck by Mila</li>
        <li>
          <Link href={ROUTES.TERMS_OF_SERVICE}>Brukervilkår</Link>
        </li>
        <li>
          <Link href={`mailto:${CONTACT_EMAIL}`}>Kontakt oss</Link>
        </li>
      </ul>
    </footer>
  );
}
