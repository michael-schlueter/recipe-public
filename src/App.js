import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MainPage from "./pages/MainPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import TagFilterPage from "./pages/TagFilterPage";
import TagsOverviewPage from "./pages/TagsOverviewPage";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/recipes/:id">
              <RecipeDetailsPage />
            </Route>
            <Route path="/tags/:tag">
              <TagFilterPage />
            </Route>
            <Route path="/tags/">
              <TagsOverviewPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
