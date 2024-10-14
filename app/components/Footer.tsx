import { Container } from "@/app/components/Container";
import { COMPANY_NAME, CONTACT_EMAIL, ROUTES, BC_LINK } from "@/constants";
import Link from "next/link";

export function Footer() {
  const copyRightYear = new Date().getFullYear();
  return (
    <footer className="py-2 w-full flex justify-center text-sm text-mid-grey">
      <Container>
        <ul className="flex items-center gap-x-5 list-none flex-wrap">
          <li className="mt-5 lg:mt-0">
            &copy; {copyRightYear}, {COMPANY_NAME}
          </li>
          <li className="mt-5 lg:mt-0">
            <Link href={ROUTES.TERMS_OF_SERVICE}>Brukervilkår</Link>
          </li>
          <li className="mt-5 lg:mt-0">
            <Link href={ROUTES.PRIVACY_POLICY}>Personvernvilkår</Link>
          </li>
          <li className="mt-5 lg:mt-0">
            <Link href={`mailto:${CONTACT_EMAIL}`}>Kontakt oss</Link>
          </li>
          <li className="mt-5 lg:mt-0">
            <Link href={ROUTES.RETURNS}>Retur & Angrerett</Link>
          </li>
          <li className="mt-5 lg:mt-0">
            <Link href={ROUTES.CONTACT_INFO}>Kontaktinformasjon</Link>
          </li>
          <li className="mt-5 lg:mt-0">
            <Link href={ROUTES.WARRANTY}>Garanti</Link>
          </li>
          <li className="mt-5 lg:mt-0">
            <Link href={BC_LINK}>Siden drives av Brænna Consult</Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
