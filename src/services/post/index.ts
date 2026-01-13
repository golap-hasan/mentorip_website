/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { serverFetch } from '@/lib/fetcher';

export const getAllPosts = async () => {
  try {
    const result = await serverFetch('/post', {
      method: 'GET',
    });
    return result;
  } catch (error: any) {
    return { success: false, message: error?.message || "Failed to fetch posts" };
  }
};

export const getPostBySlug = async (slug: string) => {
  try {
    const result = await serverFetch(`/post/slug/${slug}`, {
      method: 'GET',
    });
    return result;
  } catch (error: any) {
    return { success: false, message: error?.message || "Failed to fetch post" };
  }
};

export const getPostsByCategory = async (categoryId: string) => {
    try {
      const result = await serverFetch(`/post?category=${categoryId}`, {
        method: 'GET',
      });
      return result;
    } catch (error: any) {
      return { success: false, message: error?.message || "Failed to fetch posts by category" };
    }
  };
