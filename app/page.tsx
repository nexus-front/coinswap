"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const LOGIN_URL = "/login";

export default function PaymentActions() {
  const router = useRouter();

  const goToLogin = () => {
    router.push(LOGIN_URL);
  };

  return (
    <main className="flex  w-full items-center justify-center px-4 sm:px-6 sm:py-16">
      <section
        className="
          w-full
          max-w-[900px]
          rounded-[30px]
          bg-[#707887]
          px-6
          py-10
          text-center
          shadow-[0_15px_30px_rgba(0,0,0,0.12)]
          sm:px-10
          sm:py-12
          md:px-12
          md:py-12
          lg:px-12
          lg:py-12
        "
      >
        {/* Heading */}
        <h1
          className="
            mb-5
            text-[20px]
            font-extrabold
            leading-tight
            tracking-wide
            text-white
            sm:text-[22px]
            md:text-[23px]
            lg:text-[24px]
          "
        >
          AND SMART-TRANSACTS
        </h1>

        {/* Introduction */}
        <p
          className="
            mx-auto
            max-w-[650px]
            text-[14px]
            leading-[1.6]
            text-[#e0e2e8]
            sm:text-[15px]
            md:text-[15px]
            lg:text-[16px]
          "
        >
          Just link your M-WALLET and smart-transacts accounts and enjoy a
          world of possibilities.
        </p>

        {/* Track Payment */}
        <div className="mt-8 sm:mt-9">
          <p
            className="
              mb-4
              text-[14px]
              leading-[1.6]
              text-[#e0e2e8]
              sm:text-[15px]
              md:text-[15px]
              lg:text-[16px]
            "
          >
            Track The Payment Transfer To Check The
            <br className="hidden sm:block" /> Status Of Your Payment.
          </p>

          <Button
            type="button"
            onClick={goToLogin}
            className="
              h-[42px]
              w-full
              max-w-[320px]
              mx-auto
              rounded-full
              bg-[#e4d3b2]
              text-[14px]
              font-bold
              text-[#202735]
              shadow-none
              transition-all
              hover:bg-[#d8c5a0]
              active:scale-[0.99]
              sm:h-[44px]
              sm:text-[15px]
              lg:h-[46px]
            "
          >
            Track Payment
          </Button>
        </div>

        {/* Accept Payment */}
        <div className="mt-8 sm:mt-9">
          <p
            className="
              mb-4
              text-[14px]
              leading-[1.6]
              text-[#e0e2e8]
              sm:text-[15px]
              md:text-[15px]
              lg:text-[16px]
            "
          >
            Accept The Payment To Receive The Funds
            <br className="hidden sm:block" /> Instantly.
          </p>

          <Button
            type="button"
            onClick={goToLogin}
            className="
              h-[42px]
              w-full
              max-w-[320px]
              mx-auto
              rounded-full
              bg-[#326fe9]
              text-[14px]
              font-bold
              text-white
              shadow-none
              transition-all
              hover:bg-[#245fd4]
              active:scale-[0.99]
              sm:h-[44px]
              sm:text-[15px]
              lg:h-[46px]
            "
          >
            Accept Payment
          </Button>
        </div>

        {/* Cancel Transfer */}
        <div className="mt-8 sm:mt-9">
          <p
            className="
              mb-4
              text-[14px]
              leading-[1.6]
              text-[#e0e2e8]
              sm:text-[15px]
              md:text-[15px]
              lg:text-[16px]
            "
          >
            Cancel The Payment To Decline The Funds, And
            <br className="hidden sm:block" /> The Sender Will Be Refunded
            Immediately.
          </p>

          <Button
            type="button"
            onClick={goToLogin}
            className="
              h-[42px]
              w-full
              max-w-[320px]
              mx-auto
              rounded-full
              bg-[#ed1260]
              text-[14px]
              font-bold
              text-white
              shadow-none
              transition-all
              hover:bg-[#d90d55]
              active:scale-[0.99]
              sm:h-[44px]
              sm:text-[15px]
              lg:h-[46px]
            "
          >
            Cancel The Transfer
          </Button>
        </div>
      </section>
    </main>
  );
}