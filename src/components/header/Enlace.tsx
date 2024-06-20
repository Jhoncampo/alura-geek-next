import Link from "next/link";
import React from "react";

const Enlace = ({href, title}: {href: string, title: string}) => {
  return (
    <li className=" text-center">
        <Link  href={href}>{title}</Link>
    </li>
  );
};

export default Enlace;
