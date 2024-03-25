import { cartProductPrice } from "../AppContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import Image from "next/image";

export default function CartProduct({ product, onRemove }) {
  return (
    <div className="flex items-center gap-4 border-b py-4">
      <div className="w-24">
        <Image width={240} height={240} src={product.image} alt={""} />
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
      <div className="text-lg font-semibold">${cartProductPrice(product)}</div>
      {!!onRemove && (
        <div className="ml-2">
          <button type="button" onClick={() => onRemove(index)} className="p-2">
            <RiDeleteBin5Line fontSize={"20px"} />
          </button>
        </div>
      )}
    </div>
  );
}
