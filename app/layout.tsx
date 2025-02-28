import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./Components/NavBar";

const metadata: Metadata = {
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
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
