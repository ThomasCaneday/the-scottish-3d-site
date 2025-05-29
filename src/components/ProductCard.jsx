export default function ProductCard({ product }) {
    return (
      <div className="bg-baseTan/60 border border-deepGreen/20 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold mb-2 text-deepGreen">
          {product.name}
        </h3>
        <p className="mb-4">${product.price}</p>
        {/* Stripe Buy Button */}
        <stripe-buy-button
          buy-button-id={product.stripeId}
          publishable-key={import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}
        >
        </stripe-buy-button>
      </div>
    );
  }