import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-[url('/hero.jpg')] bg-cover bg-center h-[60vh] flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-baseTan p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Crafted Precision, Infinite Possibility
        </h1>
        <Link
          to="/products"
          className="bg-baseTan text-deepGreen px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}