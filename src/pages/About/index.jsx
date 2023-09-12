import ModelPost from "components/ModelPost";
import coverPhoto from "assets/img/sobre_mim_capa.png";

export default function About() {
  return (
    <div className="">
      <ModelPost coverPhoto={coverPhoto} title="Sobre mim">
        <h3 className="subtitle">Olá, eu sou o Murillo Zubk!</h3>
        <p className="paragraph">
          Oi, tudo certo? Bem-vindo ao Ruptura! Pode me chamar de MZubk,
          desenvolvedor frontend React.
        </p>
        <p className="paragraph">
          Este blog é o meu espaço pessoal onde pretendo compartilhar com vocês
          um pouco do mundo do código.
        </p>
        <p className="paragraph">
          Sou apaixonado por criar interfaces incríveis e interativas usando as
          tecnologias mais recentes do desenvolvimento web, especialmente o
          framework React. Fique à vontade para explorar, aprender e, mais
          importante.
          <br />
          Vamos construir coisas incríveis e desbravar o universo do
          desenvolvimento web juntos. Junte-se a mim nessa jornada emocionante e
          vamos tornar o código mais acessível e divertido para todos. Espero
          que encontre inspiração e conhecimento aqui no Ruptura.
        </p>
        <p className="paragraph">
          Então, pegue sua xícara de café (chá ou chimarrão), acomode-se e vamos
          começar a criar o futuro digital!
        </p>
        <p className="paragraph font-bold">Bora codar juntos!</p>
      </ModelPost>
    </div>
  );
}
