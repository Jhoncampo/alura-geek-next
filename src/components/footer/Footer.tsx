import { IoLogoGameControllerB } from "react-icons/io";
import Enlace from "../header/Enlace";
import Form from "./Form";

const Footer = () => {
  return (
    <footer className=" bg-sky-100">
      <div className="mx-auto max-w-[1100px] px-4 py-6 flex gap-4 items-center flex-col ">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-1">
            <IoLogoGameControllerB className="text-4xl text-[#2A7AE4]" />
            <p className="font-medium text-lg">
              <strong className="text-[#2A7AE4]">Alura</strong>Geek
            </p>
          </div>
          <ul className="flex flex-col gap-2">
            <Enlace title="Quienes somos" href="/" />
            <Enlace title="Política de privacidad" href="/" />
            <Enlace title="Programa de fidelidad" href="/" />
            <Enlace title="Nuestras tiendas" href="/" />
            <Enlace title="Quiero ser franquiciado" href="/" />
            <Enlace title="Anúncie aquí" href="/" />
          </ul>
        </div>
        <Form />
      </div>
      <p className="py-4 bg-white text-center">Desarrollado Por Jhon Campo 2024</p>
    </footer>
  );
};

export default Footer;
