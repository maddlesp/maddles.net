import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next"
import { lang } from "next/root-params";

export const metadata: Metadata = {
  title: "maddles.net",
  icons: {
    icon: "/favicon.ico"
  }
}

const Proto = localFont({
  src: './fonts/0xProtoNerdFontMono-Regular.ttf'
})

const SitlenPona = localFont({
  src: './fonts/sitelenselikiwenasuki.ttf'
})



export default async function RootLayout({ children }: LayoutProps<'/[lang]'>) {
  return (
    <html lang={await lang()} className={await lang() == "sp" ? SitlenPona.className : Proto.className}>
      <body>{children}</body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'tp' }, { lang: 'sp' }];
}