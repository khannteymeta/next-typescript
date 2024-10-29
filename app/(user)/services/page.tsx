"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const ENDPOINT = "https://fakestoreapi.com/products/";

  useEffect(() => {
    fetch(ENDPOINT)
    .then(res =>res.json())
    .then(data =>setProducts(data))
  }, []);

  return <div>service page</div>;
}
