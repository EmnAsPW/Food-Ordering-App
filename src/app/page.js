// import Header from "@/components/layout/HeaderCustom";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            laboriosam magnam fugit cum ullam veritatis ea quae, soluta debitis
            tenetur provident minima amet corrupti dolorum quas, iste veniam
            itaque accusantium!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            eos sunt et sapiente recusandae. Quos incidunt reiciendis unde, vero
            dolor, deserunt, fugiat pariatur accusamus enim itaque quas
            molestiae rem assumenda.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+00278593755"
          >
            +88013000784001
          </a>
        </div>
      </section>
    </>
  );
}
