import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "../components/ClientProvider"; // adjust the path as needed

export const metadata: Metadata = {
  title: "Cinnamon Lane",
  description: "e-commerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
