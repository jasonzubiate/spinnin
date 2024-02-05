import { Analytics } from "@vercel/analytics/react";
import LenisContext from "@/context/LenisContext";
import Header from "@/components/Header";
import "./globals.css";
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
    <html lang="en" className="bg-demo-smoke text-trace-ash">
      <body>
        <LenisContext>
          <Header />
          <CursorDot />
          {children}
          <Bottom />
          <Analytics />
        </LenisContext>
      </body>
    </html>
  );
}
