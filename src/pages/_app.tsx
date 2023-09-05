import type { AppProps } from "next/app";

import { useEffect } from "react";
import "../styles/global.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 400,
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <Header />
      
      <Component {...pageProps} />
    </>
  );
}
