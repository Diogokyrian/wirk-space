"use client";

import { useState, type FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Vendor = {
  id: number;
  name: string;
  initials: string;
  paymentMethods: string[];
};

const vendors: Vendor[] = [
  { id: 1, name: "Mr Paul", initials: "MP", paymentMethods: ["Bank Transfer", "Opay", "Kuda"] },
  { id: 2, name: "Bro James", initials: "BJ", paymentMethods: ["Bank Transfer", "Opay", "Kuda"] },
  { id: 3, name: "Mr Paul", initials: "MP", paymentMethods: ["Bank Transfer", "Opay", "Kuda"] },
  { id: 4, name: "Mr Paul", initials: "MP", paymentMethods: ["Bank Transfer", "Opay", "Kuda"] },
  { id: 5, name: "Mr Paul", initials: "MP", paymentMethods: ["Bank Transfer", "Opay", "Kuda"] },
  { id: 6, name: "Bro James", initials: "BJ", paymentMethods: ["Bank Transfer", "Opay", "Kuda"] },
  { id: 7, name: "Mr Paul", initials: "MP", paymentMethods: ["Bank Transfer", "Opay", "Kuda"] },
  { id: 8, name: "Mr Paul", initials: "MP", paymentMethods: ["Bank Transfer", "Opay", "Kuda"] },
  { id: 9, name: "Mr Paul", initials: "MP", paymentMethods: ["Bank Transfer", "Opay", "Kuda"] },
  { id: 10, name: "Bro James", initials: "BJ", paymentMethods: ["Bank Transfer", "Opay", "Kuda"] },
  { id: 11, name: "Mr Paul", initials: "MP", paymentMethods: ["Bank Transfer", "Opay", "Kuda"] },
  { id: 12, name: "Mr Paul", initials: "MP", paymentMethods: ["Bank Transfer", "Opay", "Kuda"] },
];

const validators: Vendor[] = [
  { id: 13, name: "Bro James", initials: "BJ", paymentMethods: ["USDT", "BTC", "Crypto"] },
  { id: 14, name: "Bro James", initials: "BJ", paymentMethods: ["USDT", "BTC", "Crypto"] },
  { id: 15, name: "Bro James", initials: "BJ", paymentMethods: ["USDT", "BTC", "Crypto"] },
];

function VendorCard({ vendor }: { vendor: Vendor }) {
  const message = encodeURIComponent(
    `Hello ${vendor.name}, I would like to enquire about my WIRKSPACE access PIN.`
  );

  return (
    <article className="flex min-w-0 flex-col items-center rounded-lg border border-[#202020] bg-[#151515] px-3 py-4 text-center transition hover:-translate-y-0.5 hover:border-[#927536]">
      <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#d5d5d5] text-xs font-bold text-[#292929]">
        {vendor.initials}
      </div>

      <h3 className="mb-1 text-[11px] font-medium text-white">
        {vendor.name}
      </h3>

      <p className="mb-2 text-[9px] text-neutral-500">
        Available payment options
      </p>

      <div className="mb-3 flex flex-wrap justify-center gap-x-1.5 gap-y-1">
        {vendor.paymentMethods.map((method) => (
          <span key={method} className="text-[8px] text-neutral-400">
            {method}
          </span>
        ))}
      </div>

      <a
        href={`mailto:?subject=${encodeURIComponent("WIRKSPACE vendor enquiry")}&body=${message}`}
        className="mt-auto flex min-h-7 w-full items-center justify-center gap-2 rounded-full border border-[#a8863e] px-2 text-[10px] text-[#d4ae59] transition hover:bg-[#d4ae59] hover:text-black"
      >
        Message <span aria-hidden="true">◉</span>
      </a>
    </article>
  );
}

export default function VendorPage() {
  const [accessCode, setAccessCode] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleValidate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFeedback("");

    if (!accessCode.trim()) {
      setFeedback("Please enter your access code.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/access-code/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: accessCode.trim() }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setFeedback(data?.error || "Unable to validate your code.");
        return;
      }

      setFeedback(data?.message || "Access code validated successfully.");
    } catch {
      setFeedback("Validation service unavailable. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#090909] text-white">
   
      <Navbar />

      <div className="mx-auto max-w-360 px-4 py-8 sm:px-6 md:px-10 lg:px-16 lg:py-12">
     
        <section className="mb-12 grid items-center gap-8 md:grid-cols-[1.25fr_0.85fr] lg:gap-12">
          <div>
            <p className="mb-4 text-[10px] font-bold tracking-[3px] text-[#d1a94c]">
              YOUR ACCESS STARTS HERE
            </p>

            <h1 className="mb-6 text-2xl font-semibold leading-snug sm:text-3xl lg:text-[36px]">
              Get your access pin and get
              <br className="hidden lg:block" /> started with{" "}
              <span className="text-[#d1a94c]">wirkspace.</span>
            </h1>

            <ul className="space-y-3 text-xs leading-relaxed text-neutral-400 sm:text-sm">
              <li className="flex gap-3">
                <span className="text-[#d1a94c]">✓</span>
                Only a one-time code is required to register on Wirkspace.
              </li>

              <li className="flex gap-3">
                <span className="text-[#d1a94c]">✓</span>
                Check your access code before making your payment.
              </li>

              <li className="flex gap-3">
                <span className="text-[#d1a94c]">✓</span>
                Dedicated vendors are available to assist you.
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleValidate}
            className="rounded-lg border border-[#292929] bg-[#111111] p-5 text-center sm:p-7"
          >
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#a8863e] text-lg text-[#d5ae57]">
              ✓
            </div>

            <h2 className="mb-2 text-base font-semibold">
              Check your Access code
            </h2>

            <p className="mb-5 text-xs leading-relaxed text-neutral-500">
              To verify your access pin, please enter your code below.
            </p>

            <label htmlFor="access-code" className="sr-only">
              Access code
            </label>

            <input
              id="access-code"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              placeholder="Paste coupon code here"
              autoComplete="off"
              className="h-10 w-full rounded-md border border-neutral-700 bg-[#090909] px-3 text-sm outline-none placeholder:text-neutral-600 focus:border-[#c9a34e]"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-3 h-9 w-full rounded-full border border-[#a8863e] text-xs text-[#d5ae57] transition hover:bg-[#d5ae57] hover:text-black disabled:opacity-50"
            >
              {loading ? "Validating..." : "Validate PIN"}
            </button>

            {feedback && (
              <p
                role="status"
                className="mt-3 wrap-break-word text-xs text-[#d5ae57]"
              >
                {feedback}
              </p>
            )}
          </form>
        </section>

  
        <section className="mb-12">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-sm font-medium text-neutral-200 sm:text-base">
              Message any vendor of your choice to get started.
            </h2>

            <p className="text-[10px] leading-relaxed text-neutral-500 sm:text-xs">
              Get your access pin with USDT (TRC20), BTC, or local payment options.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {vendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-sm font-medium leading-relaxed text-neutral-200 sm:text-base">
              Contact any validator below to pay for your access pin in cryptocurrency.
            </h2>

            <p className="text-[10px] text-neutral-500 sm:text-xs">
              Contact your preferred validator for payment instructions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {validators.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        </section>
      </div>

   
      <Footer />
    </main>
  );
}