"use client";

import { useState } from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";



const LOGO_URL =
  "https://i.postimg.cc/6qkScNNn/coin-swap-logo.png";
const LOGO_HREF = "https://offerup.com/accounts/settings";



export default function OfferUpNavbar() {
  const [activeTab, setActiveTab] = useState("For sale");
  const [sheetOpen, setSheetOpen] = useState(false);

  const pathname = usePathname();

  const pathParts = pathname.split("/");
  const firstPathname = pathParts[1];

  

  if (
    !(
      firstPathname === "dashboard" ||
      firstPathname === "loginx" ||
      firstPathname === "onboarding" 
    )
  ) {
    return (
      <header className="flex items-center justify-between py-5 sm:px-20 px-3">
        <div className="flex gap-2">
      <div className="relative h-6 w-15">
         <Image
                        src={LOGO_URL}
                        alt="logo"
                        fill
                        className="object-cover"
                        priority
                       
                      />

         </div> 
         <h1 className="font-medium">LocalCoinSwap</h1>            
      </div>
      <div> <Button
        
        className="
          h-[40px]
          min-w-[93px]
          rounded-full
          border-0
          bg-gradient-to-r
          from-[#ffb900]
          to-[#ff7900]
          px-[18px]
          text-[14px]
          font-bold
          text-white
          shadow-none
          transition-all
          hover:brightness-110
          active:scale-95
        "
      >
        Register
      </Button> </div>
      </header>
    );
  }
}
