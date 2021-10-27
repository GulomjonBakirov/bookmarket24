import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Burger from "./components/Burger/Burger";
import Footer from "./components/Footer";
import NewsBlog from "./pages/NewsBlog";

function App() {
  return (
    <div className="App" id="outer-container">
      <Router>
        <Burger
          width={280}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          style={{ backgroundColor: "#111" }}
        />
        <div id="page-wrap">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Registration} />
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/news" component={NewsBlog} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
