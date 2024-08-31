/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowLeft} from "lucide-react";
import { useRouter } from "next/navigation";
import { calculateTotal } from "@/lib/calculation";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import type { ComplementType, FoodFullInterface } from "@/types/food";
import type { pageProps } from "@/types/page";
import { useQuery } from "react-query";

export default function FoodById({params}:pageProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const {addItem} = useCart();
  const [complements, setComplements] = useState<ComplementType[]>([]);
  const { isLoading, error, data } = useQuery({
    queryKey: ['food'],
    queryFn: async ()=> {
      const req = await fetch(`/api/food/${params.id}`);
      const result = await req.json() as FoodFullInterface;
      console.log(result)
      return result;
    },
    refetchOnWindowFocus: false
  })
  const {back} = useRouter();

  const turnBack = () => {
    back();
  }
  const handleAddItem = () => {
    addItem({
      category: String(data?.category),
      id: String(data?.id),
      name: String(data?.name),
      price: Number(data?.price),
      quantity,
      complements,
      thumbnail: String(data?.thumbnail),
     });

     toast.success("Item adicionado.");
  }


  if(!data && !isLoading && !error && data==null) return <span>Não existe.</span>;
  if(!data && isLoading) return <span>Carregando...</span>
  if(error) return <span>Houve um erro</span>;
  if(data) return (
    <main className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-center">
      <div className="w-[90vw] sm:w-96 flex p-0 mb-2">
        <Button onClick={turnBack} variant="outline" className="bg-yellow-500 text-green-700 hover:text-green-400 border-yellow-700 hover:bg-yellow-600"><ArrowLeft strokeWidth={1}/> Voltar</Button>
      </div>
      <Card className="w-[90vw] border-none bg-transparent sm:w-96 flex flex-col gap-2 border p-2 rounded-md shadow-none h-fit">
          <h1 className="font-black uppercase text-white">{data?.name}</h1>
          <div className="w-full overflow-hidden rounded-md">
              <img src={data?.thumbnail} alt="foto do prato" width={1080} height={1080} className="w-full h-full object-cover"/>
          </div>
          <p className="text-xs h-20 overflow-y-scroll p-1 bg-green-900 text-white/80">
            {data?.description}
          </p>
          <div className="flex flex-col gap-1 p-1">
            { data?.complements && (
              <h2 className="font-black uppercase text-white">
                Complementos
              </h2>
            )}
              {
                data?.complements?.map((complement) => {
                  return (
                    <Complement
                      complement={complement}
                      key={complement.name}
                      complements={complements}
                      setComplements={setComplements}/>
                  )
                })
              }
          </div>
          <div className="flex items-center gap-1">
            <Quantity quantity={quantity} setQuantity={setQuantity}/>
            <Button variant="destructive" className="uppercase font-bold flex-1 border-1 shadow-md bg-gradient-to-t from-green-600 to to-green-400" onClick={handleAddItem}>Adicionar</Button>
          </div>
          <div className="flex justify-between p-1 text-white">
            <h2 className="font-bold ">Preço</h2>
            <p className="text-sm">{calculateTotal({data, complements, quantity})}</p>
          </div>
      </Card>
    </main>
  );
}
