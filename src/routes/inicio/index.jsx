import React, { Component } from "react";
import { Form, Button, Carousel } from "react-bootstrap";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import snowflake from "../../assets/snowflake.jpg";
import "../../components/styles.css"


class Inicio extends Component {
  render() {
    return (
      <div>
        <Form.Label className="text-center" style={{display: 'flex',  justifyContent:'center', alignItems:'center', color:"#A23234", fontWeight:"bold", fontSize:"24px"}}>
          Cadastre seu email para receber as Newsletter e ficar por dentro de
          todas as atividades!
        </Form.Label>
        <Form className="form-inline" style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginBottom: "18px"}}>
            <Form.Control style={{backgroundColor: "#F2F2F2", borderRadius: "20px", fontSize:"18px", margin:"12px"}} className="col-4" type="text" placeholder="Digite aqui seu email" />
            <Button style={{borderRadius: "20px", backgroundColor:"#416F54", fontWeight:"bold", fontSize:"18px"}} variant="primary" type="submit">
              Inscreva-me! :D
            </Button>
        </Form>

        <Carousel>
          <Carousel.Item>
            <img class="d-block w-100" src={slide1} alt="First slide" style={{width: "auto", height:"720px"}}/>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img class="d-block w-100" src={slide2} alt="Second slide" style={{width: "auto", height:"720px"}}/>

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img class="d-block w-100" src={slide3} alt="Third slide" style={{width: "auto", height:"720px"}}/>

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Inicio;
