import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

import Headertop from "./layout/Headertop";
import Headers from "./layout/Headers";
import HeaderButtom from "./layout/HeaderButtom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Reference from "./pages/Reference";
import Contactpage from "./pages/Contactpage";
import Products1 from "./pages/Products1";
import Products2 from "./pages/Products2";
import Products3 from "./pages/Products3";
import Products4 from "./pages/Products4";
import Products5 from "./pages/Products5";
import Products6 from "./pages/Products6";
import Products7 from "./pages/Products7";
import Products8 from "./pages/Products8";
import Sitemaps from "./pages/Sitemaps";
import Footer from "./layout/Footer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headertop />
        <Headers />

        <Switch>
          <Route path="/" exact>
            <HeaderButtom />
            <Homepage />
          </Route>

          <Route path="/aboutpage" exact>
            <Aboutpage />
          </Route>

          <Route path="/reference" exact>
            <Reference />
          </Route>

          <Route path="/contactpage" exact>
            <Contactpage />
          </Route>

          <Route path="/products1" exact>
            <Products1 />
          </Route>

          <Route path="/products2" exact>
            <Products2 />
          </Route>

          <Route path="/products3" exact>
            <Products3 />
          </Route>

          <Route path="/products4" exact>
            <Products4 />
          </Route>

          <Route path="/products5" exact>
            <Products5 />
          </Route>

          <Route path="/products6" exact>
            <Products6 />
          </Route>

          <Route path="/products7" exact>
            <Products7 />
          </Route>

          <Route path="/products8" exact>
            <Products8 />
          </Route>

          <Route path="/sitemaps" exact>
            <Sitemaps />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
