// components/Layout.js
import Head from 'next/head';
import LenisContext from "@/context/LenisContext";
import Header from "@/components/Header";
import Bottom from "@/components/Bottom";
import CursorDot from "@/components/CursorDot";
import { constructMetaData } from "@/utils/metadata";

export const metadata = constructMetaData();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <html lang="en" className="bg-demo-smoke text-trace-ash">
        <body>
          <LenisContext>
            <Header />
            <CursorDot />
            {children}
            <Bottom />
          </LenisContext>
        </body>
      </html>
    </>
  );
}
