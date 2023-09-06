import CardFilme from "@/components/CardFilme";
import Title from "@/components/Title";

async function carregarFilmes(){
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e&language=pt-br"
  const resposta = await fetch(url)
  const json = await resposta.json()
  console.log(json)
  return json.results
}

export default async function Home() {

  carregarFilmes()

  const filmes = await carregarFilmes()

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

      <Title>DICA DE FILMES PRA ALMOÇAR OU JANTAR</Title>

      <section className="flex flex-wrap">
        {filmes.map(filme => <CardFilme filme={filme}/>)}
      </section>

      <Title>lançamentos</Title>
      <Title>favoritos</Title>
    </>
  );
}
