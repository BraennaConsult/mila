import { cookies } from "next/headers";
import CountdownTimer from "../components/CountdownTimer";
import { setCookie } from "../actions";
import { SecretLinkTitle } from "../components/SecretLinkTitle";

export function SecretHeader() {
  // current time + 12 hours
  const newTargetDate = new Date();
  newTargetDate.setHours(newTargetDate.getHours() + 24);
  const targetAsString = newTargetDate.toISOString();
  const cookieCountdownTime = cookies().get("countdownTime");

  let targetDate: string;
  if (!cookieCountdownTime) {
    targetDate = targetAsString;
  } else {
    targetDate = cookieCountdownTime.value;
  }
  return (
    <div className="border-b-2 border-black/30 mb-12 pb-4">
      <SecretLinkTitle cookieCountdownTime={cookieCountdownTime?.value} />
      <div className="flex justify-center text-center">
        {!cookieCountdownTime?.value && (
          <p className="text-mid-grey">Loading...</p>
        )}
        {cookieCountdownTime?.value && (
          <CountdownTimer
            title="Utgår om:"
            targetDate={cookieCountdownTime.value}
          />
        )}
      </div>
    </div>
  );
}
