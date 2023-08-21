const chaveApi = "8ff8235ec2a961b906a47f849db24d94"

const apiCategorias = [{
    name: "trending",
    title: "Em alta",
    path: `/trending/all/week?api_key=${chaveApi}&language=pt-BR`,
    isLarge: true
  },
  {
    name: "originals",
    title: "Originais Netflix",
    path: `/discover/tv?api_key=${chaveApi}&with_networks=213`,
    isLarge: false
  },
  {
    name: "rated",
    title: "Populares",
    path: `/movie/top_rated?api_key=${chaveApi}&language=pt-BR`,
    isLarge: false
  },
  {
    name: "comedy",
    title: "Comédias",
    path: `/discover/tv?api_key=${chaveApi}&with_genres=35`,
    isLarge: false
  },
  {
    name: "romances",
    title: "Romances",
    path: `/discover/tv?api_key=${chaveApi}&with_genres=10749`,
    isLarge: false
  },
  {
    name: "documentaries",
    title: "Documentários",
    path: `/discover/tv?api_key=${chaveApi}&with_genres=99`,
    isLarge: false
  }
];

export const filmes = async (path) => {
  try {
    let url = `https://api.themoviedb.org/3${path}`;
    const respostaApi = await fetch(url);
    return await respostaApi.json();
  } catch (error) {
    console.log("error filmes, na api.js ao buscar informações da api: ", error);
  }
};

export default apiCategorias;