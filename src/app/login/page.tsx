"use client";

import { FormEvent, useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, " ", password);
    };
    return (
        <div className="bg-[#f5f5f5]">
            <div className="max-w-[1100px] mx-auto px-4">
                <form
                    onSubmit={onSubmit}
                    className="flex flex-col gap-3 mx-auto py-20 px-4 max-w-lg"
                >
                    <h2 className="text-center text-lg font-bold">Iniciar sesión</h2>
                    <div className="">
                        <input
                            type="email"
                            className="w-full p-3 rounded-md outline-none border-b border-gray-200"
                            placeholder="Escriba su correo electrónico"
                            value={email}
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="">
                        <input
                            type="password"
                            className="w-full p-3 rounded-md outline-none border-b border-gray-200"
                            placeholder="******"
                            value={password}
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        className="bg-[#2A7AE4] py-2 text-white"
                        type="submit"
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
