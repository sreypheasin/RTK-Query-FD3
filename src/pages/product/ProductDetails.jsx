import React from "react";
import { useGetProductByIdQuery } from "../../features/products/productSlice";
import { useParams } from "react-router";
import ProductDetailCard from "../../components/cards/ProductDetailCard";

export default function ProductDetails() {
  const param = useParams();
  const { data, isLoading } = useGetProductByIdQuery(param.id);
  console.log("data :>> ", data);
  return (
    <section>
      <ProductDetailCard
        title={data?.title}
        thumbnail={data?.thumbnail}
        price={data?.price}
        rating={data?.rating}
      />
    </section>
  );
}
