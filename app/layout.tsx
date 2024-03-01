import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./styles/globals.scss";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import StoreProvider from "./StoreProvider";

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
                <StoreProvider>
                    <div>
                        <Header />
                        {children}
                    </div>

                    <Footer />
                </StoreProvider>
            </body>
        </html>
    );
}
