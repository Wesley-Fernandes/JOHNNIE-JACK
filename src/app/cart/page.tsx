"use client"
import Views from "@/components/Views";
import { useCart } from "@/hooks/useCart";

export default function Page() {
  const {cart, addQuantity, removeQuantity} = useCart();
  return (
    <main className="flex h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)] flex-1 flex-col">
      <section className="flex flex-col flex-1">
       <Views.Cart.Header/>
        <Views.Cart.Items>
          {
            cart?.map((item) => (<Views.Cart.Item addQuantity={addQuantity} removeQuantity={removeQuantity} item={item} key={item.id}/>))
          }
        </Views.Cart.Items>
        <Views.Cart.Footer cart={cart}/>
      </section>
    </main>
  );
}
