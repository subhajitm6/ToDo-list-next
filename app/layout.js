import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ToDo Next App",
  description: "Make easy of your day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
