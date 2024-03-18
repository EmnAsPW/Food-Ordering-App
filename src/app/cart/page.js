"use client";
import { CartContext, cartProductPrice } from "@/components/AppContext";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Image from "next/image";
import { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function CatPage() {
  const { cartProducts, removeCartProduct } = useContext(CartContext);
  return (
    <section className="mt-8">
      <div className="text-center">
        <SectionHeaders mainHeader="Cart" />
      </div>

      <div className="mt-4 grid gap-4 grid-cols-2">
        <div>
          {cartProducts?.length === 0 && (
            <div>No Products in your shopping cart</div>
          )}
          {cartProducts?.length > 0 &&
            cartProducts.map((product, index) => (
              <div className="flex items-center gap-4 mb-2 border-b py-2">
                <div className="w-24">
                  <Image
                    width={240}
                    height={240}
                    src={product.image}
                    alt={""}
                  />
                </div>
                <div className="grow">
                  <h3 className="font-semibold">{product.name}</h3>
                  {product.size && (
                    <div className="text-sm ">
                      Size: <span>{product.size.name}</span>
                    </div>
                  )}
                  {product.extras?.length > 0 && (
                    <div>
                      {product.extras.map((extra) => (
                        <div className="text-sm text-gray-500">
                          {extra.name} ${extra.price}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="text-lg font-semibold">
                  ${cartProductPrice(product)}
                </div>
                <div className="ml-2">
                  <button
                    type="button"
                    onClick={() => removeCartProduct(index)}
                    className="p-2"
                  >
                    <RiDeleteBin5Line fontSize={"20px"} />
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div>right</div>
      </div>
    </section>
  );
}
