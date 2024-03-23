import { Header } from "../components/Header";

export default function Warrenty() {
  return (
    <>
      <Header black />
      <main className="bg-[#F7F6F6] pt-[80px] px-8 pb-12">
        <p className="text-black/60">Latest update: March 22, 2024</p>

        <h1 className="font-serif text-[50px] leading-[50px] mt-4">
          Money-back policy
        </h1>
        <div className="mt-8 space-y-4">
          <div>
            <p className="">
              Tifra AS (“Skincare”) owns the website located at myluck.no
              (herein known as the “Site”) and provides services via the Site
              and mobile device application MyLuck by Mila (herein known as the
              “App”). You are eligible to receive a refund if you did not get
              visible results in the Myluck by Mila app and if you meet the
              following conditions:
            </p>
            <ul className="list-disc pl-6">
              <li>
                You have purchased your premium or inner circle subscription
                (“Subscription”) via the Site.
              </li>
              <li>
                You have contacted us 30 days after you had purchased the
                Subscription and before the end of your subscription period.
              </li>
              <li>
                You used the mobile app for at least 30 consecutive days within
                the first 30 days after your purchase of the Subscription.
              </li>
              <li>You have checked off every habit for 30 days.</li>
              <li>
                You have completed every workout in the schedule and marked it
                as completed for 30 consecutive days.
              </li>
              <li>
                You have logged food for 30 consecutive days and haven’t
                exceeded your target calorie intake.
              </li>
              <li>
                You have reached your “steps” goal for 30 consecutive days.
              </li>
              <li>
                You have attended every bi-weekly live seminar for 30
                consecutive days.
              </li>
              <li>
                Log progress photos in the App at least 1 time per week for the
                first 30 consecutive days.
              </li>
            </ul>
          </div>
          <p>
            We will review your application and notify you (by email or
            otherwise) if your application is approved. If approved, your refund
            will be processed, and a credit will be applied to your original
            method of payment within 14 days.
          </p>
          <p>
            Important statement Please note: only the fulfillment of the above
            requirements will allow you to receive a complete refund under the
            “Money-Back Policy.”
          </p>
          <p>
            This Money Back Policy was posted on 24 Mar 2022. It is effective
            upon acceptance for new users.
          </p>
        </div>
      </main>
    </>
  );
}
