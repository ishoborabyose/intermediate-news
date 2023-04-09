import Articles from "../components/Articles";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";

const ArticleRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<News />}> */}
          <Route path="/" element={<Layout />} />
          <Route
            path="/publisher/:publisherId/articles"
            element={<Articles />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default ArticleRoutes;
