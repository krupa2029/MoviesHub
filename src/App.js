import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const MovieDetailPage = React.lazy(() => import("./pages/MovieDetailPage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const SearchedMovie = React.lazy(() => import("./pages/SearchedMovie"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/movies" />
          </Route>
          <Route path="/movies" exact>
            <HomePage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailPage />
          </Route>
          <Route path="/search/:search_term">
            <SearchedMovie />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
