"use client"

import { serverLogout } from "@/actions/user";
import { useRouter } from "next/navigation";

export default function NavBar(){

    const { push } = useRouter()

    function handleLogout(){
        serverLogout()
        push("/login")
      }

    return(
        <nav className="flex px-8 py-4 bg-rose-600">
        <ul className="flex gap-64.6">
          <li>
            <a href="#">
              <h1>SNACK AND MOVIES</h1>
            </a>
          </li>

          <li>
            <a href="#">___</a>
          </li>

          <li>
            <a href="#">Melhores filmes</a>
          </li>

          <li>
            <a href="#">___</a>
          </li>

          <li>
            <a href="#">Melhores Snacks</a>
          </li>

          <li>
            <a href="#">    </a>
          </li>

          <li>
            <a href="#">___</a>
          </li>
        </ul>

        <button onClick={handleLogout}>logout</button>
      </nav>
    )
}