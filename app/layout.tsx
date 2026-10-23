import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "maddles.net",
  icons: {
    icon: "/favicon.ico"
  }
}

const Proto = localFont({
  src: './fonts/0xProtoNerdFontMono-Regular.ttf'
})



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html className={Proto.className}>
      <body>{children}</body>
    </html>
  );
}
