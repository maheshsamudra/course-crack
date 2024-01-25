import { Lato as Font } from "next/font/google";
import "./globals.css";

const font = Font({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "CourseCrack",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
