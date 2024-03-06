export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img
          src="/pizza.png"
          className="max-h-auto max-h-24 block mx-auto"
          alt="pizza"
        />
      </div>
      <h4 className="font-semibold text-xl py-3">Pepperoni pizza </h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ipsa
        velit?
      </p>
      <button className=" mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to Cart $12
      </button>
    </div>
  );
}
