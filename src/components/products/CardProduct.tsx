import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";

interface InterfaceProduct {
    img: string;
    nameProduct: string;
    price: string;
    href: string;
    deletePro?: boolean;
    upDatePro?: boolean;
}

const CardProduct = ({
    img,
    nameProduct,
    price,
    href,
    upDatePro,
    deletePro,
}: InterfaceProduct) => {
    return (
        <div className="w-full">
            <div className="relative">
                {upDatePro && deletePro && (
                    <div className="absolute flex gap-1 right-0 p-2 text-white">
                        <button>
                            <MdDelete className="text-xl" />
                        </button>
                        <Link href="/products/id">
                            <RiPencilFill className="text-xl" />
                        </Link>
                    </div>
                )}
                <img
                    className="object-cover object-center h-[200px] w-full"
                    src={img}
                    alt={nameProduct}
                />
            </div>
            <div className="flex gap-1 flex-col p-2">
                <h4 className="text-sm">{nameProduct}</h4>
                <h5 className="font-semibold">$ {price}</h5>
                <Link className="text-sm text-[#2A7AE4] font-bold" href={href}>
                    Ver producto
                </Link>
            </div>
        </div>
    );
};

export default CardProduct;
