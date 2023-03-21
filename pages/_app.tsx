import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const customNextFont = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --custom-next-font: ${customNextFont.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
