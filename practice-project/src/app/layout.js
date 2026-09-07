import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Travel Guide",
  description: "Your ultimate travel companion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
