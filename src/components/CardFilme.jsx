"use client"

import useFavorito from '@/hooks/filmes'
import { HeartIcon } from '@heroicons/react/24/outline'


export default function CardFilme({filme}){
    const { favorito, favoritar, desfavoritar } = useFavorito()
    const url_image = `https://image.tmdb.org/t/p/w500/${filme.poster_path}`

    

    

    return(
    <div id="card" className="flex flex-col w-40 justify-center items-center m-2">
        { favorito ? 
            <HeartIcon onClick ={() => desfavoritar(filme)} className="h-6 w-6 text-rose-600" />
        :
            <HeartIcon onClick ={() => favoritar(filme)} className="h-6 w-6 text-black" />
        }
        <img className="rounded" src={url_image} alt="" />
        <span className="font-bold text-center line-clamp-1 text-black">
            {filme.title}
        </span>
        <div>
            <span className="text-black">{filme.vote_average.toFixed(1)}</span>
        </div>
        <a href="/" className="bg-pink-600 py-2 w-full rounded text-center">
            mais dicas
        </a>
    </div>

    )
}