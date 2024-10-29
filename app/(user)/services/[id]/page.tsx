import React from "react";
import CardComponent from "@/components/card/CardProductDetail";

type PropsParam = {
  param: {
    id: number;
  };
  searchParam: any;
};

const ENDPOINT = "https://fakestoreapi.com/products/";
export const getData = async (id: number) => {
  const res = await fetch(`${ENDPOINT}${id}`, { cache: "no-store" });
  const data = await res.json();
  return data;
};

export default async function Detail({ params }: PropsParam) {
  const data = await getData(params.id);

  // return <div>{params.id}</div>;
  return (
    <div>
      <CardComponent
        title={data?.title || "No title"}
        image={data?.image || "No image"}
        description={data?.description || "No description"}
      />
    </div>
  );
}
