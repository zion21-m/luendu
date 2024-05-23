"use server";

import { revalidateTag } from "next/cache";

export default async function userInformationsAction(userId) {
  revalidateTag(["users", userId]);
}
