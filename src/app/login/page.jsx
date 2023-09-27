"use client"

import Image from "next/image";
import loginimage from "@/images/login.png"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { serverLogin } from "@/actions/user";

export default function Login(){

    const[email, setEmail]= useState("")
    const[senha, setSenha]= useState("")
    const { push } = useRouter()

    function login(e){
        e.preventDefault()
        if (email == "pedromesquita3103@gmail.com" && senha == "123"){
            serverLogin() 
            push("/")
        }else{
            toast.error("dados inválidos")
            
        }
    }

    return(
        <div className="flex">
            <aside className="h-screen hidden lg:flex">
                <Image src={loginimage} className="h-auto w-auto object-cover"/>
            </aside>

            <main className="flex flex-col justify-center items-center p-4 h-screen w-full">

                <h2 className="text-pink-600">SNACK AND MOVIES</h2>

                <form onSubmit={login} action="" className="text-black flex flex-col gap-2">

                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="bg-slate-600 p-1 rounded text-white" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />


                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="bg-slate-600 p-1 rounded text-white"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} 
                    />


                    <button className="bg-pink-600 p-2 rounded mt-2 text-white">entrar</button>
                </form>

            </main>
        </div>
    )
}