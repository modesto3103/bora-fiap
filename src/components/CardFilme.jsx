"use client"

import { HeartIcon } from '@heroicons/react/24/outline'

import { useState } from 'react'

export default function CardFilme({filme}){
    const [favorito, setFavorito] = useState(false)

    return(
    <div id="card" className="flex flex-col w-40 justify-center items-center m-2">
        { favorito ? 
            <HeartIcon onClick ={() => setFavorito(false)} className="h-6 w-6 text-rose-600" />
        :
            <HeartIcon onClick ={() => setFavorito(true)} className="h-6 w-6 text-black" />
        }
        <img className="rounded" src={filme.poster} alt="" />
        <span className="font-bold text-center line-clamp-1 text-black">
            {filme.titulo}
        </span>
        <div>
            <span className="text-black">{filme.nota}</span>
        </div>
        <a href="/" className="bg-pink-600 py-2 w-full rounded text-center">
            mais dicas
        </a>
    </div>

    )
}