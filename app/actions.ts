"use server";

import { cookies } from "next/headers";

export async function setCookie() {
  const newTargetDate = new Date();
  newTargetDate.setHours(newTargetDate.getHours() + 12);
  const targetAsString = newTargetDate.toISOString();
  cookies().set("countdownTime", targetAsString);
}
