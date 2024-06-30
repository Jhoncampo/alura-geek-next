"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BotonLogin = () => {
    const pathname = usePathname();
    return (
        <>
            {pathname !== "/" ? (
                <></>
            ) : (
                <Link
                    href="/login"
                    className="border text-[#2A7AE4] border-[#2A7AE4] px-8 py-2"
                >
                    Login
                </Link>
            )}
        </>
    );
};

export default BotonLogin;
