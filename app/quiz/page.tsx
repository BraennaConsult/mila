"use client";

import { Widget } from "@typeform/embed-react";

import { TYPEFORM_FUNNEL_ID } from "@/constants";

export default function Page() {
  return <Widget id={TYPEFORM_FUNNEL_ID} className="w-full h-dvh" />;
}
