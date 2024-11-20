"use client";
import CountUp from "react-countup";
export default function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div className="w-full">
      <CountUp
        end={amount}
        prefix=" $"
        duration={1}
        decimal="."
        decimals={2}
      />
    </div>
  );
}
