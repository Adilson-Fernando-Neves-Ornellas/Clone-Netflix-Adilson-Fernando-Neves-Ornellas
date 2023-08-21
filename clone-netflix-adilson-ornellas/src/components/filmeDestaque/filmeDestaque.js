import React, { useState, useEffect } from "react";
import ApiCategorias, { filmes } from "../api/apiCategorias";
import "./filmeDestaque.scss";

function FilmeDestaque() {
  const [linkImgFilmeDestaque, setLinkImgFilmeDestaque] = useState({});

  useEffect(() => {
    const categoriaEmAlta = ApiCategorias.find(
      (category) => category.name === "trending"
    );
    const dadosCategorias = filmes(categoriaEmAlta.path);

    dadosCategorias.then((resultado) => {
      const quintoFilme = resultado.results[5];
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
    </header>
  );
}

export default FilmeDestaque;

