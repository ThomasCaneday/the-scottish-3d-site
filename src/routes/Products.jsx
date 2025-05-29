import { useEffect } from "react";
import ProductCard from "../components/ProductCard.jsx";

const products = [
  {
    name: "Scottish Thistle Coaster Set",
    price: 15.99,
    image: "/products/thistle-coaster.jpg",
    stripeId: "buy_btn_1P_PRODUCT1", // Replace with real buy button ID
  },
  {
    name: "Highland Cow Planter",
    price: 24.99,
    image: "/products/highland-cow.jpg",
    stripeId: "buy_btn_1P_PRODUCT2",
  },
  {
    name: "Bagpiper Figurine",
    price: 18.5,
    image: "/products/bagpiper.jpg",
    stripeId: "buy_btn_1P_PRODUCT3",
  },
];

export default function Products() {
  useEffect(() => {
    const scriptId = "stripe-buy-button-script";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://js.stripe.com/v3/buy-button.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section className="max-w-6xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-deepGreen">
        Products
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>
    </section>
  );
}