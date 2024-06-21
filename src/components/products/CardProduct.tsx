import Link from 'next/link'
interface InterfaceProduct {
    img: string
    nameProduct: string
    price: string
    href: string
}

const CardProduct = ({img, nameProduct, price, href}: InterfaceProduct) => {
  return (
    <div>
        <img src={img} alt={nameProduct} />
        <h4>{nameProduct}</h4>
        <h5>{price}</h5>
        <Link href={href}>Ver producto</Link>
    </div>
  )
}

export default CardProduct