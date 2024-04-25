import type { Metadata } from "next";
import "antd-mobile/bundle/css-vars-patch.css"
import "antd-mobile/bundle/style.css"
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RPi Wi-Fi",
  description: "App for managing wifi connections",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <div className="mainContainer">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
