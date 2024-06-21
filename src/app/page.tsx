// pages/index.tsx (Home component)
"use client";
import Banner from "@/components/Banner";
import SectionCategory from "@/components/products/SectionCategory";
import { ProductsProvider } from "@/context/productsContext";
import { AppProps } from "next/app";

const Home = ({Component, pageProps}: AppProps) => {
    return (
        <ProductsProvider>
            <div>
                <Banner />
                <SectionCategory title="Star Wars" href="/star-wars"  />
            </div>
        </ProductsProvider>
    );
};

export default Home;
