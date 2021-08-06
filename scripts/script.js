
// Get movies list to DOM.
const list = document.querySelector("#list");

// Function to add movies to dom.
const addMoviesToDom = (movie) => {
    const newLi = document.createElement("li");
    const link = document.createElement("a");
    const image = document.createElement("img");
    list.appendChild(newLi);
    newLi.appendChild(link);
    link.appendChild(image);
    image.classList.add("poster");
    image.src = movie.Poster;
    link.setAttribute("target", "_blank");
    link.href = "http://www.imdb.com/title/" + movie.imdbID;
};

// Function add all movies.
const addMovies = (movies) => {
    movies.forEach((movie) => {
        addMoviesToDom(movie);
    });
};
addMovies(movies);

// Funcion to remove the previous list movies before to filter the next list.
const removeMovies = () => {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    };
};

/* 
Function to filter movies with X-men.Its the same function to filter movies
for other choices. But we can use just one funcion instead. See under.

const filterX-menMovies = () => {
    removeMovies();
    const filteredX-men = movies.filter((movie) => movie.Title.includes("X-Men"));
    filteredX-menMovies.forEach((movie) => {
    addMoviesToDom(movie);
    });
};
*/

// Function to filter the movies in one function.
const filterMovies = (filterFilm) => {
    removeMovies();
    const filteredMovies = movies.filter((i) => i.Title.includes(filterFilm));
    filteredMovies.forEach((i) => {
        addMoviesToDom(i);
    });
};


// Function to filter the moviers from year 2014 till now.
const filterLatestMovies = () => {
    removeMovies();
    const filteredLatest = movies.filter((movie) => movie.Year >= 2014);
    filteredLatest.forEach((movie) => {
        addMoviesToDom(movie);
    });
};

// Get radio buttons and add event listener 
const buttons = document.getElementsByName("films");

buttons.forEach((button) => {
    button.addEventListener("change", (event) => {
        let target = event.target;
        switch (target.id) {
            case "latest":
                filterLatestMovies();
                break;
            case "avengers":
                filterMovies("Avengers");
                break;
            case "x-men":
                filterMovies("X-Men");
                break;
            case "princess":
                filterMovies("Princess");
                break;
            case "batman":
                filterMovies("Batman");
                break;
        }
    })
});
