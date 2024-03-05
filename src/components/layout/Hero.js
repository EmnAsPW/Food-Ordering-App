// import Right from "@/icons/Right";
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything <br /> is better <br /> with a{" "}
          <span className="text-primary">Food .</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Food is a flavorful journey that connects us to diverse cultures and
          traditions. With each bite, we experience a symphony of tastes that
          nourish both the body and the soul.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary flex uppercase items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <span>
              {/* <Right /> */}
              {/* /* <Image src="/right.svg" height={6} width={6} /> */}

              <FaRegArrowAltCircleRight />
            </span>
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold items-center">
            Learn more
            <FaRegArrowAltCircleRight />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"Food"}
        />
      </div>
    </section>
  );
}
