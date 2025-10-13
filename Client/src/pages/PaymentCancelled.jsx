import { Link } from "react-router-dom"; // Or 'next/link' if using Next.js

export default function PaymentCancelled() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf3dd] px-4">
      {/* Animated cross icon - SVG */}
      <div className="rounded-full bg-[#b4c0b2]/20 p-6 animate-pulse shadow-lg mb-8">
        <svg
          className="w-16 h-16"
          fill="none"
          viewBox="0 0 64 64"
          stroke="#f2c078"
          strokeWidth={3}
        >
          <circle cx="32" cy="32" r="30" stroke="#b4c0b2" strokeOpacity={0.3} fill="none" />
          <line x1="22" y1="22" x2="42" y2="42" strokeLinecap="round" />
          <line x1="42" y1="22" x2="22" y2="42" strokeLinecap="round" />
        </svg>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-[#b4c0b2] mb-2">Payment Cancelled</h1>
      <p className="text-lg text-[#b4c0b2] mb-6 max-w-md text-center">
        Your payment was not completed. No charges were made. If this was an error or you want to try again, you may return to the checkout.
      </p>

      <Link
        to="/"
        className="px-6 py-3 rounded-md bg-[#f2c078] hover:bg-[#b4c0b2] transition-all text-[#faf3dd] font-medium shadow-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}
