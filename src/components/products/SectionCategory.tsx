"use client"
import { useProductsContext } from "@/context/productsContext";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import CardProduct from "./CardProduct";

const SectionCategory = () => {
    const { products, categories } = useProductsContext();
    return (
        <section className="mx-auto max-w-[1100px] px-4">
            {categories.map((category) => (
                <div key={category.id}>
                    <div className="flex items-center justify-between py-4  ">
                        <h3 className="text-2xl font-bold capitalize">
                            {category.categoria}
                        </h3>
                        <div className="flex items-center gap-2 text-[#2A7AE4]">
                            <Link
                                className="font-bold"
                                href={category.categoria}
                            >
                                Ver todo
                            </Link>
                            <FaArrowRight />
                        </div>
                    </div>
                    <div className="grid grid-cols-gridProduct gap-4 ">
                        {products
                            .filter(
                                (pro) =>
                                    pro.categoria
                                        .replace(" ", "")
                                        .toLocaleLowerCase() ===
                                    category.categoria
                            )
                            .map((prod) => (
                                <CardProduct
                                    key={prod.id}
                                    nameProduct={prod.nombreProducto}
                                    img={prod.imagen}
                                    price={prod.precio}
                                    href={prod.id}
                                />
                            ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default SectionCategory;
