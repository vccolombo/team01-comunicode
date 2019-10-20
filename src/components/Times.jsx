import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Times extends Component {
  render() {
    return (
      <Container>
        <h1>Times</h1>
        <p>
          Estruturalmente, há atualmente 9 times entre os quais se dividem as
          tarefas:
        </p>
        <ul>
          <li>
            <h5>Arrecadação</h5>
            <p>
              Responsável por arrecadar todos os donativos para as instituições
              atendidas pela Operação Natal, organizando atividades que promovem
              divulgação do projeto e o contato direto com população. - O que
              fazemos? Dias de Mercado, Dia D, Abordagem contínua e novos tipos
              de arrecadação. - Carga Horária: 2 - 3 horas semanais. -
              Aprendizado: liderança, perda de timidez, comunicação.
              Coordenadores: Matheus (Fantone) e Vitor (Double).
            </p>
          </li>
          <li>Ação Social</li>
          <li>Logística</li>
          <li>Financeiro</li>
          <li>Eventos</li>
          <li>Marketing</li>
          <li>Qualidade</li>
          <li>Sacolinhas</li>
          <li>RH</li>
        </ul>
      </Container>
    );
  }
}

export default Times;
