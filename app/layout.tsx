import LenisContext from "@/context/LenisContext";
import Header from "@/components/Header";
import "./globals.css";
import Bottom from "@/components/Bottom";
import CursorDot from "@/components/CursorDot";
import { constructMetaData } from "@/utils/metadata";
import Head from "next/head";

export const metadata = constructMetaData();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-demo-smoke text-trace-ash">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>

      <body>
        <LenisContext>
          <Header />
          <CursorDot />
          {children}
          <Bottom />
        </LenisContext>
      </body>
    </html>
  );
}
