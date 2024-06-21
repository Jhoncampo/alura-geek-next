import { useProductsContext } from "@/context/productsContext";
import Link from "next/link";
interface InterSectionCategory {
    products?: Array<string>;
    title: string;
    href: string;
}

const SectionCategory = ({ title, href }: InterSectionCategory) => {
    const { products } = useProductsContext()
    console.log("Hola-- ",products)
    return (
        <section className="mx-auto max-w-[1100px]">
            <div>
                <h3>{title}</h3>
                <Link href={href}>Ver todo</Link>
            </div>
            <div>

            </div>
        </section>
    );
};

export default SectionCategory;
