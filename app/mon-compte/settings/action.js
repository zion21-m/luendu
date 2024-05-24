"use server";

import { revalidateTag } from "next/cache";

export default async function userInformationsAction() {
  revalidateTag("user");
}
