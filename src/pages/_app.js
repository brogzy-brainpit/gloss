import { AnimatePresence, useInView,motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
// import { Instrument_Serif,Instrument_Sans, Lora, DM_Sans,Manrope,Agdasima,Epilogue,Poppins } from "next/font/google";
import {Manrope,Agdasima } from "next/font/google";

// import "../styles/fonts.css";
import "../styles/mostHave.css";
import "../styles/globals.css";
import "../styles/embla.css";
import "../styles/menu.css";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import Menu from "@/components/Menu";

// import local fonts froom ./fontdirectory
const custom2 = localFont({
 
  src:  "./fonts/FormulaCondensed-Bold.woff",
  variable: "--font-custom2",
  weight: "100 200 300 400 500 600 700 800 900",
});
const custom = Agdasima({
  subsets: ["latin"],
  weight: ["400","700"],
  // style: ["normal"], // 👈 include italics
  variable: "--font-custom",
  display: "swap",
});
const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  // style: ["normal", ], // 👈 include italics
  variable: "--font-body",
  display: "swap",
});

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  const ease = [0.9, 0, 0.1, 1];


  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
   
   
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => window.scrollTo({ top: 0, behavior: "instant" })}
     
    >
      <motion.div

      exit={{scale:.4}}
      animate={{scale:1}}
      // initial={{scale:.4}}
        key={router.asPath}
        className={`${custom2.variable} ${custom.variable} ${body.variable} `}
      >
     
        {/* <Menu/> */}
        
        <Component {...pageProps} />
        <Footer />
      </motion.div>
      
    </AnimatePresence>
  );
}
