/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { serverFetch } from '@/lib/fetcher';

export const getAllCategories = async () => {
  try {
    const result = await serverFetch('/category', {
      method: 'GET',
    });
    return result;
  } catch (error: any) {
    return { success: false, message: error?.message || "Failed to fetch categories" };
  }
};

export const getCategoryById = async (id: string) => {
  try {
    const result = await serverFetch(`/category/${id}`, {
      method: 'GET',
    });
    return result;
  } catch (error: any) {
    return { success: false, message: error?.message || "Failed to fetch category" };
  }
};
