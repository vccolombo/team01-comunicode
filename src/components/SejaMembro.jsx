import React, { Component } from "react";
import {Container} from "react-bootstrap";
import siteopn from "../assets/siteopn.jpg";

class SejaMembro extends Component {
  render() {
    return (
      <Container>
        <h3 style={{color: "#A23234"}}>NOS AJUDE</h3>
        <br/>
        <h4 style={{color: "#A23234"}}>Seja um Voluntário</h4>
        <p> 
        “Voluntário é um cidadão que, motivado pelos valores de participação 
        e solidariedade doa seu tempo, trabalho e talento, de maneira espontânea 
        e não remunerada, para causa de interesse social e comunitário”. 
        <br/>
        <br/>
        Ou seja, voluntário é aquele que se responsabiliza pelo contexto em que está
        inserido e procura fazer a diferença com as condições que tem disponível. Com 
        isso em mente, convidamos todos vocês para ingressar no nosso TIMAÇO DE VOLUNTÁRIOS!
      
        <br/>
        <br/>
        <img src={siteopn} style={{width:"40%", height:"auto", display:"block", marginLeft:"auto", marginRight:"auto"}}/>
        <br/>
        Os voluntários são aqueles que querem muito participar deste projeto maravilhoso e não
        puderam ingressar como membro, seja por conta de carga horária, moradia em outra 
        cidade, entre outros fatores. 
        <br/>
        <br/>
        Para participar, é muito simples: basta preencher o formulário nessa postagem, que 
        ficará aberto durante o semestre, e aguardar mais informações.
        Seja um voluntário, seja #OperacaoNatal
        <br/>
        <br/>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLrbmgLY9RME0E1qqGYeEbKStEANsYpEtq9cF6d6vhRIhLxQ/viewform">Clique aqui para ser voluntário :)</a>
        </p>

        <h4 style={{color: "#A23234"}}>Seja Patrocinador</h4>
        <p>
          Se você tem uma empresa e quer nos ajudar a impactar a vida de centenas de crianças,
          mas não sabe exatamente como, entre em contato conosco. Sua empresa pode virar uma
          futura apoiadora/patrocinadora do Operação Natal!
        </p>
        <br/>
        <br/>
      </Container>
    );
  }
}

export default SejaMembro;
