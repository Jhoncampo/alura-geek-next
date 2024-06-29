import Link from "next/link";
interface InterfaceProduct {
    img: string;
    nameProduct: string;
    price: string;
    href: string;
}

const CardProduct = ({ img, nameProduct, price, href }: InterfaceProduct) => {
    return (
        <div className="w-full">
            <img
                className="object-cover h-[200px] w-full"
                src={img}
                alt={nameProduct}
            />
            <div className="flex gap-1 flex-col p-2">
                <h4 className="text-sm">{nameProduct}</h4>
                <h5 className="font-semibold">$ {price}</h5>
                <Link className="text-sm text-[#2A7AE4] font-bold" href={href}>Ver producto</Link>
            </div>
        </div>
    );
};

export default CardProduct;
