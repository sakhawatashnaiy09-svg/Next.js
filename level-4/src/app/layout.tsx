
import "./globals.css";
import {Poppins} from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["800", "900"],
    
})
 
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <head />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}