import Link from 'next/link'
import { IoIosSearch, IoLogoGameControllerB } from "react-icons/io";
import BotonLogin from './BotonLogin';

const Header = () => {
  return (
    <header className='mx-auto max-w-[1100px] flex justify-between items-center px-4 py-6'>
        <Link href="/" className='flex items-center gap-1'>
            <IoLogoGameControllerB className='text-4xl text-[#2A7AE4]'/>
            <p className='font-medium text-lg'><strong className='text-[#2A7AE4]'>Alura</strong>Geek</p>
        </Link>
        <BotonLogin/>
        <IoIosSearch className='text-2xl'/>
    </header>
  )
}

export default Header