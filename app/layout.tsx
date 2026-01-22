import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Large Pens",
  description: "Oversized vape pens — custom, collectible, and massive.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
