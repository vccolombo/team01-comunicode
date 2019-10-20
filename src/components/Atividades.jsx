import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Atividades extends Component {
  render() {
    return (
      <Container>
        <h4 style={{color: "#A23234"}}>ATIVIDADES</h4>
        <p>
          Nas instituições, promove-se dinâmicas entre voluntários e moradores;
          as ações mais importantes são as que acontecem na entregas dos
          donativos (obtidos por meio de panfletagens em supermercados, escolas
          e em bairros da cidade, no evento Dia D) e das sacolinhas-presente,
          preparadas pelos “padrinhos” que se voluntariam a “adotar” uma
          criança, completando-as com os itens necessários. Além disso,
          conduz-se atividades de conscientização em algumas escolas
          particulares da cidade, bem como uma intervenção pontual com
          transeuntes no Pit Stop.
        </p>
      </Container>
    );
  }
}

export default Atividades;
