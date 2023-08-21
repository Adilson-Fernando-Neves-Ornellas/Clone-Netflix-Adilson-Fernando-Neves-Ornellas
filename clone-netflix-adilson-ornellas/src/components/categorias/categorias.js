import React, { useEffect } from "react";
import { filmes } from "../api/apiCategorias";
import "./categorias.scss"

const imgHost = "https://image.tmdb.org/t/p/original/"

function Categorias ({ title, path}) {

    const [filme, setFilme] = React.useState([])
    
    const buscaFilme = async (_path) => {
        try{
            const infoFilme = await filmes(_path);
            console.log("const infoFilme em buscarFilme(categorias.js): ", infoFilme )
            setFilme(infoFilme?.results);
        }catch(error){
            console.log("error nas informações dos filmes, em buscarFilme(categorias.js): ", error)
        }
    };

    useEffect(() => {
      buscaFilme(path)
    }, [path]);


    return(
        <div className="contaneirCategorias">
            <h2 className="tituloCategorias">{title}</h2>
            <div className="caroselFilmes">
                {filme?.map((filme) => {
                    return (
                        <img 
                            className={`imgFilme ${title === "Em alta" &&  "imgFilmeMaior"}`}
                            key={filme.id}
                            src={`${imgHost}${title === "Em alta" ? filme.backdrop_path : filme.poster_path }`}
                            alt= {filme.name}
                        ></img>
                    )
                })}
            </div>
        </div>
    )
}

export default Categorias