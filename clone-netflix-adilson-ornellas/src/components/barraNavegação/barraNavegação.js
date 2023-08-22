import React , {useEffect} from 'react'
import"./barraNavegação.scss"

function BarraNavegacao() {
    const [rolagemTela, setRolagemTela] = React.useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setRolagemTela(window.scrollY > 150);
      });
    }, []);
  
    return (
      <div className={`conteineirBarraNav ${rolagemTela && "conteineirBarraNavBlack"}`}>
        <img
          className="logoBarraNav"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
        ></img>
        <img
          className="avatarBarraNav"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU"
          alt="Pasquadev"
        ></img>
      </div>
    );
}

export default BarraNavegacao