"use client";

import { Widget } from "@typeform/embed-react";

import { TYPEFORM_FUNNEL_ID } from "@/constants";

export default function Page() {
  return (
    <Widget
      id={`${TYPEFORM_FUNNEL_ID}?typeform-welcome=0`}
      className="w-full h-dvh"
    />
  );
}
