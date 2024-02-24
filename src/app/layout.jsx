import { Montserrat, Lalezar, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400", "900","700"] });
const lalezar = Lalezar({ subsets: ["arabic"], weight: ["400"] });
const noto = Noto_Naskh_Arabic({ subsets: ["arabic"] });

export const metadata = {
  title: "YallaFut Store",
  description: "Fifa Account Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
