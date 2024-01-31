import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "./(root)/dashboard/company/sidebar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "TSEC Hacks Project",
  description: "Created by Team `pip install npm` for TSEC Hacks 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <div> <Sidebar /></div> */}
       
        {children}
      </body>
    </html>
  );
}
