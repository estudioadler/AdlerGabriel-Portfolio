import type { Metadata } from "next";
import { Raleway as FontSans } from "next/font/google";
import "./globals.css";
import { Footer } from "./footer";
import { Header } from "./header";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";
import { Toaster } from "../components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link";
import { ButtonCta } from "@/components/ButtonCta/ButtonCta";
import { ArrowRight01Icon } from "hugeicons-react";
import Template from "./template";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const neueMachina = localFont({
  variable: "--font-neue-machina",
  src: [
    {
      path: "../../public/fonts/NeueMachina-Ultralight.woff2",
      weight: "200",
    },
    {
      path: "../../public/fonts/NeueMachina-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/NeueMachina-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/NeueMachina-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/NeueMachina-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/NeueMachina-Ultrabold.woff2",
      weight: "800",
    },
    {
      path: "../../public/fonts/NeueMachina-Black.woff2",
      weight: "900",
    },
  ],
});

export const metadata: Metadata = {
  title: "Adler Gabriel - Front-end Developer & UI Designer",
  description: "Desenvolvedor front-end e UI Designer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      suppressHydrationWarning
      className="scroll-smooth antialiased scrollbar selection:bg-neutral-900 selection:text-neutral-50"
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          neueMachina.variable
        )}
      >
        <Template>
          <Header />
          <main>{children}</main>
          <Toaster theme="dark" richColors />
          <Footer />
          <div className="fixed bottom-4 right-4 md:hidden">
            <Link
              href="https://api.whatsapp.com/send?phone=5531982688382"
              target="blank"
            >
              <ButtonCta
                iconLeft={<ArrowRight01Icon size={24} strokeWidth={1} />}
                variant={"black"}
                type={"button"}
              >
                Vamos conversar
              </ButtonCta>
            </Link>
          </div>
          <ScrollToTop />
        </Template>
      </body>
    </html>
  );
}
