import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBar from "./TopBar";
import Inicio from "../routes/inicio/index";
import Conheca from "./Conheca";
import Times from "./Times";
import Atividades from "./Atividades";
import Impacto from "./Impacto";
import Relatorios from "./Relatorios";
import Prestacao from "./Prestacao";
import Contato from "./Contato";
import SejaMembro from "./SejaMembro";
import Instituicoes from "./Instituicoes";
import Login from "./Login";
import AreaMembro from "./AreaMembro"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TopBar />
        <hr />
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/conheca" component={Conheca} />
            <Route exact path="/times" component={Times} />
            <Route exact path="/atividades" component={Atividades} />
            <Route exact path="/impacto" component={Impacto} />
            <Route exact path="/relatorios" component={Relatorios} />
            <Route exact path="/prestacao" component={Prestacao} />
            <Route exact path="/contato" component={Contato} />
            <Route exact path="/seja_membro" component={SejaMembro} />
            <Route exact path="/instituicoes" component={Instituicoes} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/area_membro" component={AreaMembro} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
