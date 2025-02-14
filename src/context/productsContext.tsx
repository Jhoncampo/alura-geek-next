"use client"
import { getCategories } from "@/services/categories";
import { getProducts } from "@/services/products";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface Product {
    id: string;
    nombreProducto: string;
    descripcion: string;
    precio: string;
    categoria: string;
    imagen: string;
}

interface Category {
    id: string;
    nombre: string;
}

interface ProductsContextType {
    products: Product[];
    categories: Category[];
    loading: boolean;
    error: Error | null;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsRes = await getProducts("productos");
                const categoriesRes = await getCategories("categorias");
                setProducts(productsRes);
                setCategories(categoriesRes);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <ProductsContext.Provider value={{ products, categories, loading, error }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProductsContext = () => {
    const context = useContext(ProductsContext);
    if (context === undefined) {
        throw new Error("useProductsContext must be used within a ProductsProvider");
    }
    return context;
};
