"use server";

import { revalidateTag } from "next/cache";

export default async function userBriqueAction(userId) {
  revalidateTag(["briques", userId]);
}
