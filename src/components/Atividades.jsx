import React, { Component } from "react";
import { Container } from "react-bootstrap";
import diamercado from "../assets/diamercado.jpg";
import lacos from "../assets/lacos.jpg";
import diad from "../assets/diad.jpg";

class Atividades extends Component {
  render() {
    return (
      <Container>
        <h4 style={{color: "#A23234"}}>ATIVIDADES</h4>
        <br/>
        <br/>
        <br/>
        <h5 style={{color: 'white', backgroundColor: "#A23234", display: "inline", borderRadius: "5px", 
          fontSize:"24px", borderStyle: "solid", borderColor: "#A23234", marginBottom: "10px"}}>
            Dias de Mercado
        </h5>
        <br/>
        <br/>
        <p>
          Nos dias de mercado, os mebros e voluntários da Operação Natal ficam o sabado inteiro
          nas portas dos mercados são carlenses arrecadando donativos de alimentos e produtos
          de higiene.
          <br/>
          <br/>
          Os alimentos doados são então separados e categorizados para semrem posteriormente
          enviados para as instituições assistidas. No primeiro dia de mercado de 2019, 
          aproximadamente 5.4 toneladas foram arrecadadas e isso foi suficente para suprir as
          necessidades das instituições assistidas por cerca de um mês
          <img src={diamercado} style={{width:"40%", height:"auto", display:"block", marginLeft:"auto", marginRight:"auto"}}/>
        </p>
        <br/>
        <br/>
        <br/>
        <h5 style={{color: 'white', backgroundColor: "#A23234", display: "inline", borderRadius: "5px", 
          fontSize:"24px", borderStyle: "solid", borderColor: "#A23234", marginBottom: "10px"}}>
            Laços - Semana da saúde mental
        </h5>
        <br/>
        <br/>
        <p>
        Setembro é o mês mundial de prevenção ao suicídio, período em que se busca 
        conscientizar a população sobre fatores de risco relacionados ao comportamento
        suicida e orientar para o tratamento adequado dos transtornos mentais. No Brasil, 
        cerca de 11 mil pessoas morrem vítimas de suicídio a cada ano, gerando a quarta maior
        causa de morte entre homens e mulheres de 15 a 29 anos. Além disso, houve um aumento 
        de 16,8% da taxa de mortalidade por suicídio de 2007 a 2016.*
        <br/>
        <br/>
        *Fonte: Ministério da Saúde (2018)
        <br/>
        <br/>
        Pensando no bem estar da comunidade universitária de São Carlos, 
        a Sanca Social e a Operação Natal se unem para promover uma semana de 
        debate e conscientização a respeito da saúde mental. Serão diversas atividades, 
        tanto na USP quanto na UFSCar: rodas de conversa, cine debate, atendimento psicológico, 
        aulas de meditação, cães terapeutas e plantio de árvores, além de, claro, poder conhecer 
        muita gente legal! Não precisa se inscrever, só chegar e participar!
        <br/>
        <br/>
        <img src={lacos} style={{width:"35%", height:"auto", display:"block", marginLeft:"auto", marginRight:"auto"}}/>
        </p>
        <br/>
        <br/>
        
      
        <h5 style={{color: 'white', backgroundColor: "#A23234", display: "inline", borderRadius: "5px", 
          fontSize:"24px", borderStyle: "solid", borderColor: "#A23234", marginBottom: "10px"}}>
            Dia D
        </h5>
        <br/>
        <br/>
        <p>
        É dia 24 de dezembro, as crianças fingem dormir para que o bom velhinho apareça e 
        deixe seu merecido presente embaixo da árvore, afinal, elas se comportaram bem nesses 
        últimos meses. Lá na sala, os adultos jogam uma boa conversa fora enquanto arrumam a 
        casa após a ceia. E que farta ceia esse ano! Depois de preparar bem a casa, deixando 
        traços da magia natalina, todos vão descansar para o dia seguinte, dia de 
        confraternização e agradecimentos, de esquecer as diferenças e compartilhar a 
        felicidade do momento.
        <br/>
        <br/>
        Esperamos que essa narração tenha trazido boas memórias a você, porém, não podemos 
        esquecer das pessoas que nem sequer percebem o Natal, por simplesmente não terem a 
        chance de passar por nenhuma das experiências descritas. Podemos, juntos, melhorar a 
        realidade dessas pessoas e trazer dias mais felizes a inúmeras famílias. 
        <br/>
        <br/>
        <br/>
        <img src={diad} style={{width:"60%", height:"auto", display:"block", marginLeft:"auto", marginRight:"auto"}}/>
        <br/>
        <br/>
        <br/>
        </p>
        <p>
          ETC...
        </p>
      </Container>
    
    );
  }
}

export default Atividades;
