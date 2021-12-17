# MoviesHub

A website that shows list of latest movies, movie details and searched movies. The application is built using HTML, CSS and React.js. 
* Visit: **[Live Demo](https://movieshub-f5945.web.app/)**

## Used React Concepts
* [React Components & Props](https://reactjs.org/docs/components-and-props.html): Reusable components, Passing data through parent to child component using props.
* [React Hooks](https://reactjs.org/docs/hooks-intro.html) : useEffect, useState, useReducer, useCallback, useRef
* [React-Routing](https://reactrouter.com/) : react-router-dom @v.5
* [Custom Hooks](https://reactjs.org/docs/hooks-custom.html) : use-http


## Dependencies Installed
* node_modules
* react-router-dom@5

## Pages
* HomePage
* Movie-Detail Page
* SearchedMovie Page

## HomePage

Home page displays list of latest movies. It displays movie title, ratigs, release date and movie poster.

Using nested components because it illustrates a nesting of components 3 levels deep. A Movie component has a MovieList component has a MovieCard component. 

HomePage is composed of the following components:

* Header - A component contains  application title and searchbar. 
* LatestMovies - The primary component that manages state for Movies and all underlying components. It is also responsible for connecting to api endpoint to retrieve movie data.
* MovieList - Groups a collection of movies 
* MovieCard - Represents a single instance of a movie

![HomePage](https://github.com/krupa2029/MoviesHub/blob/main/src/assets/images/Screenshot%20(63).png)

## Movie-Detail Page

This page display the movie detail that is selected by user by clicking on "Show More" button of MovieCard.\
It display Movie poster, movie title, Overview, ratings, release date, genres.

Movie-Detail Page is composed of the following components:

* Header - A component contains  application title and searchbar. 
* MovieDetail - Manages states, sending request to detail endpoint, fetching movie deatil using movieId.

![HomePage](https://github.com/krupa2029/MoviesHub/blob/main/src/assets/images/Screenshot%20(64).png)
![HomePage](https://github.com/krupa2029/MoviesHub/blob/main/src/assets/images/Screenshot%20(65).png)

## SearchedMovie Page

The movies searched by user will be displayed in this page.  

SearchedMovie Page is composed of the following components:

* SearchButton - Handle search input and manage page redirection
* SearchedMovie - The primary component that is responsible to load SearchedMovie Page. Send request to the search endpoint when searchbutton is clicked. 

![HomePage](https://github.com/krupa2029/MoviesHub/blob/main/src/assets/images/Search.png)

## API Endpoints used to fetch data
* Latest Movies : https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US
* Movie Detail: https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US&append_to_response=videos
* Search Movie: https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&query={movie_name}
  
## Run

   ```bash 
   npm install
   npm start
   ```
