import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // For demonstration, we'll use Formspree. Replace with your FORM_ID
    const res = await fetch("https://formspree.io/f/yourFormId", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    setStatus(res.ok ? "sent" : "error");
  };

  return (
    <section className="max-w-xl mx-auto my-16 px-4 text-deepGreen">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-baseTan/60 p-6 rounded-lg shadow space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border border-deepGreen/30 rounded px-3 py-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="border border-deepGreen/30 rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-deepGreen text-baseTan px-5 py-2 rounded hover:opacity-90 transition"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>
        {status === "sent" && (
          <p className="text-green-700 mt-2">Thank you! We'll be in touch.</p>
        )}
        {status === "error" && (
          <p className="text-red-700 mt-2">Oops! Something went wrong.</p>
        )}
      </form>
    </section>
  );
}