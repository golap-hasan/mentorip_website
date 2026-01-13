/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/fetcher";

export const getPostBySlug = async (slug: string) => {
  try {
    const result = await serverFetch(`/post/${slug}`, {
      method: "GET",
    });
    return result;
  } catch (error: any) {
    return {
      success: false,
      message: error?.message || "Failed to fetch post",
    };
  }
};

