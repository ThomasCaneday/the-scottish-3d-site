import Hero from "../components/Hero.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="max-w-5xl mx-auto my-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deepGreen">
          Welcome to TheScottish3D
        </h2>
        <p className="leading-relaxed mb-8">
          We turn creative ideas into tangible, high‑quality 3D prints using eco‑friendly
          materials and meticulous craftsmanship. Whether you need a one‑of‑a‑kind gift,
          a prototype, or a personal project, we've got you covered.
        </p>
        <Link
          to="/about"
          className="border border-deepGreen px-6 py-3 rounded-full hover:bg-deepGreen hover:text-baseTan transition"
        >
          Meet the Maker
        </Link>
      </section>
    </>
  );
}