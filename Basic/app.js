let data=[]
const fetchMovies = async () => {
   const response= await fetch("https://api.jikan.moe/v4/anime");
   const result = await response.json();
   data=result.data;
   renderMovies(data);
}
fetchMovies();
const handleSearch = ()=>{
    const searchInput = document.getElementById("search").value.toLowerCase();
    const filtered = data.filter((movie) =>
         movie.title.toLowerCase().includes(searchInput)
    );
    renderMovies(filtered);

};
const sortAsc = () => {
  const sorted = [...data].sort((a, b) => a.score - b.score);
  renderMovies(sorted);
};
const sortDesc = () => {
  const sorted = [...data].sort((a, b) => b.score - a.score);
  renderMovies(sorted);
};

const renderMovies=(movies) =>{
    const moviesDiv=document.getElementById("movies");
    moviesDiv.innerHTML="";
    movies.forEach((movie) => {
    const div=document.createElement("div");
    div.className="movies";
    div.innerHTML =`
    <img src="${movie.images.jpg.image_url}" alt="${movie.title}"/>;
    <h3>${movie.title}</h3>
    <p>Score:${movie.score ?? "N/A"}</p>
    `;
     moviesDiv.appendChild(div);
    });
}