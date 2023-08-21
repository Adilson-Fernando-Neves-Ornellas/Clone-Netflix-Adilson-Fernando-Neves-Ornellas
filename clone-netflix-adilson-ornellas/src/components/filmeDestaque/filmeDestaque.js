import React, { useState, useEffect } from "react";
import ApiCategorias, { filmes } from "../api/apiCategorias";
import "./filmeDestaque.scss";

function FilmeDestaque() {
  const [linkImgFilmeDestaque, setLinkImgFilmeDestaque] = useState({});
  const [quintoFilme, setquintoFilme] = useState({});

  useEffect(() => {
    const categoriaEmAlta = ApiCategorias.find(
      (category) => category.name === "trending"
    );
    const dadosCategorias = filmes(categoriaEmAlta.path);

    dadosCategorias.then((resultado) => {
      const quintoFilme = resultado.results[5];
      setquintoFilme(quintoFilme)
      const imgFilmeDestaque = quintoFilme.backdrop_path;
      const linkImgFilmeDestaque =
        "https://image.tmdb.org/t/p/original" + imgFilmeDestaque;

      setLinkImgFilmeDestaque(linkImgFilmeDestaque);
    });
  }, []); 

  return (
    <header
      className="conteinerfilmeDestaque"
      style={{
        backgroundImage: linkImgFilmeDestaque ? `url(${linkImgFilmeDestaque})`: "none" 
      }}
    >
      <div className="infoFilmeDestque">
        <h1 className="tituloFilmeDestaque">
        {quintoFilme?.title || 
          quintoFilme?.name || 
          quintoFilme?.original_name
        }
        </h1>
        <div className="buttonsFilmeDestaqueConteiner">
          <button className="buttonFilmeDestaque">Assistir</button>
          <button className="buttonFilmeDestaque">Minha Lista</button>
        </div>
      </div>
    </header>
  );
}

export default FilmeDestaque;

