import { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import NotFound from "./pages/NotFound";
import SearchedMovie from "./pages/SearchedMovie";

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
          <SearchedMovie/>
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
