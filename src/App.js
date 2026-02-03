import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import BlogPage from "./containers/blogPage/BlogPage";
import ResearchDetails from "./containers/researchDetails/ResearchDetails";
import BlogDetails from "./containers/blogDetails/BlogDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StyleProvider } from "./contexts/StyleContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/blogs" component={BlogPage} />
            <Route path="/blog-details/:id" component={BlogDetails} />
            <Route path="/research-details/:id" component={ResearchDetails} />
          </Switch>
        </Router>
      </StyleProvider>
    </div>
  );
}

export default App;
