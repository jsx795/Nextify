import collection from "../../../collection";
import Product from "./product";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {

  const { category, id } = await params;

  const product = collection.find(
    (item) => item.id.toString() === id
  );
  
  if (!product) {
    return <h1>Collection not found</h1>;
  }


  return (
    <div>
      <Product item={product} />
    </div>
  
  )
  
}