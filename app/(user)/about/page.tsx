"use client";
import React from "react";

import { useRouter } from "next/navigation";

export default function page() {
  const route = useRouter();
  return (
    <>
      {" "}
      <div>about</div>
      <button
        className="rounded-lg bg-blue-400"
        onClick={() => route.push("/contact")}
      >
        click
      </button>
    </>
  );
}
