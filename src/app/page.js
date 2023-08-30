import CardFilme from "@/components/CardFilme";
import Title from "@/components/Title";

export default function Home() {

  const filmes=[
    {
      titulo: "padaria Karol",
      nota: 6.2,
      poster: "https://vejasp.abril.com.br/wp-content/uploads/2021/10/Zestzing-Padaria-Artesanal-2.jpg?quality=70&strip=info&w=1280&h=720&crop=1"
    },
    {
      titulo: "Hamburguer espacial",
      nota: 6.2,
      poster: "https://cdn.deliway.com.br/blog/base/dc5/f43/ce4/melhores-hamburgueria-sao-paulo.jpg"
    }

  ]

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

      <section className="flex flex-wrap">
        {filmes.map(filme => <CardFilme filme={filme}/>)}
      </section>

      <Title>lançamentos</Title>
      <Title>favoritos</Title>
    </>
  );
}
