import Title from "@/components/Title";

export default function Home() {
  return (
    <>
      <nav className="flex px-8 py-4 bg-rose-600">
        <ul className="flex gap-64.6">
          <li>
            <a href="#">
              <h1>Bora?</h1>
            </a>
          </li>

          <li>
            <a href="#">Salgados</a>
          </li>

          <li>
            <a href="#">Padocas</a>
          </li>

          <li>
            <a href="#">Hambúrguers</a>
          </li>

          <li>
            <a href="#">Podrão</a>
          </li>

          <li>
            <a href="#">Café</a>
          </li>
        </ul>
      </nav>

      <Title>dicas do dia</Title>

      
        <div id="card" className="flex flex-col w-40 justify-center items-center m-2">
          <img className="rounded" src="https://place-hold.it/150x220/666" alt="" />
          <span className="font-bold text-center line-clamp-1">A dica do dia é...</span>
          <div>
            <span>dica...</span>
          </div>
          <a href="/" className="bg-pink-600 py-2 w-full rounded text-center">
            mais dicas
          </a>
        </div>
      

      <Title>lançamentos</Title>
      <Title>favoritos</Title>
    </>
  );
}
