"use client";
import { useRouter } from "next/navigation";

// const session = null;
// const session = "dfhr";
export default function page() {
  const route = useRouter();

  if (!session) {
    throw new Error("Auth is required");
  }
  return <>Home page</>;
}
