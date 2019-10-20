import React, { Component } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/LogoOp.png";
import "./styles.css";

class Instituicoes extends Component {
    render() {
        return(
            <Container>
                <h1 style={{textAlign: "center", margin:"24px"}}>Instituições Ajudadas pela Operação Natal</h1>
                <div class="row">
                    <div class="card col-md-4 mt-3  w-75" style={{width:"20rem"}}>
                        <img class="card-img-top" src={logo} alt="instituicao1"></img>
                        <div class="card-body">
                            <h3 class="card-title">Instituição 1</h3>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card col-md-4 mt-3  w-75" style={{width:"20rem"}}>
                        <img class="card-img-top" src={logo} alt="instituicao2"></img>
                        <div class="card-body">
                            <h3 class="card-title">Instituição 2</h3>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card col-md-4 mt-3  w-75" style={{width:"20rem"}}>
                        <img class="card-img-top" src={logo} alt="instituicao3"></img>
                        <div class="card-body">
                            <h3 class="card-title">Instituição 3</h3>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card col-md-4 mt-3  w-75" style={{width:"20rem"}}>
                        <img class="card-img-top" src={logo} alt="instituicao4"></img>
                        <div class="card-body">
                            <h3 class="card-title">Instituição 4</h3>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card col-md-4 mt-3  w-75" style={{width:"20rem"}}>
                        <img class="card-img-top" src={logo} alt="instituicao5"></img>
                        <div class="card-body">
                            <h3 class="card-title">Instituição 5</h3>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card col-md-4 mt-3  w-75" style={{width:"20rem"}}>
                        <img class="card-img-top" src={logo} alt="instituicao6"></img>
                        <div class="card-body">
                            <h3 class="card-title">Instituição 6</h3>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Instituicoes;