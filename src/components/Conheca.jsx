import React, { Component } from "react";
import {Container} from "react-bootstrap";
import quemsomos from "../assets/quemsomos.jpg";
import "./styles.css"

class Conheca extends Component {
  render() {
    return (
      <Container>
        <h4 style={{color: "#A23234"}}>QUEM SOMOS</h4>
        <p>
          A Operação Natal (OPN) é um projeto de extensão da UFSCar e da USP São
          Carlos, agrupando voluntários dessas duas universidades. Com a missão
          de contagiar as pessoas com o espírito natalino contínuo, criando
          laços e gerando impacto altruísta na sociedade, promove-se durante o
          segundo semestre ações voltadas para ajudar instituições carentes da
          cidade.
        </p>
        <br/>

        <img  src={quemsomos} style={{width: "auto", height: "350px", display: "block", marginLeft: "auto", marginRight: "auto"}}/>
        <br/>
        <br/>
        <br/>
        
        <h4 style={{color: "#A23234"}}>HISTÓRIA</h4>
        <p>
          Foi criado em 2006 no PET da Produção da UFSCar, a partir de
          uma grande ideia, mas com poucos participantes; atualmente, após 11
          anos de crescimento contínuo, o projeto de extensão é sólido e tem
          conquistado grande reconhecimento perante os moradores da cidade e
          instituições parceiras.

        </p>

        <br/>
    
        <h4 style={{color: "#A23234"}}>VALORES</h4>
        <p>
          Tendo como valores fundamentais o amor pelo próximo, empatia, vontade,
          respeito e justiça, a Operação Natal almeja consolidar-se como projeto
          social universitário de referência, com expansão para outras
          universidades. O envolvimento dos voluntários com as atividades faz
          com que a vontade de ajudar o próximo se estenda pelo ano todo; o
          impacto gerado pelo espírito natalino, a priori pontual, torna-se
          contínuo.
        </p>
      </Container>
    );
  }
}

export default Conheca;
