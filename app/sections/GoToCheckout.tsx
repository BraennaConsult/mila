import { CheckoutLink } from "../components/CheckoutButton";

interface Props {
  show: boolean;
  option?: string;
}

export function GoToCheckout({ show = false, option }: Props) {
  console.log(option);
  if (!option) return null;
  return (
    show && (
      <div className="fixed z-10 inset-x-0 bottom-0  mx-6  text-center shadow-md mb-8 rounded-[100px] overflow-hidden my-12">
        <div className="w-full bg-black py-2 px-4 lg:max-w-[350px]">
          <CheckoutLink option={option} />
        </div>
      </div>
    )
  );
}
