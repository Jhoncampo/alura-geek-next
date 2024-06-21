import { api } from "@/utils/urlApi";

export const getCategories = async (ruta: string) => {
    const res = await fetch(`${api}${ruta}`);
    const data = await res.json();
    return data;
};
