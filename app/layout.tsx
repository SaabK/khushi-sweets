import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./styles/globals.scss";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Khushi Sweets - Ab Ho Gi Hir Ghar Mein Khushi",
    description:
        "Khushi Sweets aim to provide you with best quality Barfi in the entire City of Mian Channu",
    icons: ["/favicon.png"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${montserrat.className}`}>
                <div>
                    <Header />
                    {children}
                </div>

                <Footer />
            </body>
        </html>
    );
}
