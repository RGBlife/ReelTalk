import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "ReelTalk",
  description:
    "Welcome to ReelTalk, your movie companion that's all about celebrating the magic of cinema with your friends and fellow movie enthusiasts.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>{props.children}</body>
    </html>
  );
}
