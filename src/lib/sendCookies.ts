import { cookies } from "next/headers";

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const finalUrl = url.startsWith("http")
    ? url
    : `${process.env.NEXT_PUBLIC_API_URL}${url}`;

  return fetch(finalUrl, {
    ...options,
    headers: {
      ...options.headers,
      Cookie: cookieHeader,
    },
    cache: "no-store",
  });
}
