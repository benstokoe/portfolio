"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

export const handleVote = async (uid: string, votes: number) => {
  await kv.set(uid, votes + 1);

  revalidatePath(`/blog/${uid}`);
};
