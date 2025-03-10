import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./Components/NavBar";

export const metadata: Metadata = {
  title: "Ekiti Tourist Attraction Centre",
  description: "Offering the best Tourist Policy in Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <NavBar />
        <main >{children}</main>
      </body>
    </html>
  );
}
