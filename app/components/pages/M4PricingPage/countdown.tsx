import { Card } from "@/app/components/Card";
import { Container } from "@/app/components/Container";
import CountdownTimer from "@/app/components/CountdownTimer";
import { Progress } from "@/app/components/Progress";
import { cn, getSalesStatus } from "@/app/utils";
import Image from "next/image";

export function Countdown({
  hideCountdown = false,
  className,
}: {
  hideCountdown?: boolean;
  className?: string;
}) {
  const salesStatus = getSalesStatus();

  return (
    <Container
      className={cn(
        "flex flex-col justify-center lg:max-w-3xl w-full",
        className
      )}
    >
      <Card className="overflow-hidden relative mx-0 lg:px-10">
        <div className="absolute inset-0 z-0">
          <Image
            src={"/cta-background.svg"}
            alt="cta background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="z-10 relative">
          {salesStatus.status === "sale" ? (
            <div className="flex flex-col space-y-5 lg:space-y-0 lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-x-14 mx-auto z-2">
              {!hideCountdown && (
                <CountdownTimer
                  title="Påmeldingen stenger om"
                  targetDate={salesStatus.date}
                />
              )}
              <Progress className="lg:order-first" />
            </div>
          ) : (
            <>
              {!hideCountdown && (
                <CountdownTimer
                  title="Påmeldingen starter om"
                  targetDate={salesStatus.date}
                />
              )}
              <Progress className="mx-auto" />
            </>
          )}
        </div>
      </Card>
    </Container>
  );
}
