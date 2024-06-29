// pages/index.tsx (Home component)
import Banner from "@/components/Banner";
import SectionCategory from "@/components/products/SectionCategory";
import { ProductsProvider } from "@/context/productsContext";

const Home = () => {
    return (
        <ProductsProvider>
            <div>
                <Banner />
                <SectionCategory />
            </div>
        </ProductsProvider>
    );
};

export default Home;
