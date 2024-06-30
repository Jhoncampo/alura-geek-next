"use client";
import CardProduct from "@/components/products/CardProduct";
import { useProductsContext } from "@/context/productsContext";
import Link from "next/link";

const PageProducts = () => {
    const { products } = useProductsContext();
    return (
        <div className="bg-[#f5f5f5]">
            <section className="max-w-[1100px] py-6 px-4 mx-auto">
                <div className="flex flex-col items-start gap-3">
                    <h2 className="text-xl font-semibold">
                        Todos los productos
                    </h2>
                    <Link
                        href="/products/add"
                        className="py-2 px-4 mb-4 bg-[#2A7AE4] text-white font-medium"
                    >
                        Agregar producto
                    </Link>
                </div>
                <div className="grid grid-cols-gridProduct gap-4">
                    {products.map((prod) => (
                        <CardProduct
                            key={prod.id}
                            nameProduct={prod.nombreProducto}
                            img={prod.imagen}
                            price={prod.precio}
                            href={prod.id}
                            upDatePro
                            deletePro
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PageProducts;
