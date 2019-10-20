import React, { Component } from "react";
import TopBar from "../../components/TopBar";
import { Form, Button, Carousel } from "react-bootstrap";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";

class Inicio extends Component {
  render() {
    return (
      <div>
        <Form.Label className="text-center" style={{display: 'flex',  justifyContent:'center', alignItems:'center', color:"#A23234", fontWeight:"bold", fontSize:"24px"}}>
          Cadastre seu email para receber as Newsletter e ficar por dentro de
          todas as atividades!
        </Form.Label>
        <Form className="form-inline" style={{display: 'flex',  justifyContent:'center', alignItems:'center', paddingBottom: "42px"}}>
            <Form.Control style={{backgroundColor: "#F2F2F2", borderRadius: "20px", fontSize:"24px", margin:"12px"}} className="col-4" type="text" placeholder="Digite aqui seu email" />
            <Button style={{borderRadius: "20px", backgroundColor:"#416F54", fontWeight:"bold", fontSize:"24px"}} variant="primary" type="submit">
              Inscreva-me! :D
            </Button>

          {/* <div
            id="mc_embed_signup_scroll"
            class="d-flex d-inline-block justify-content-center"
          >
            <div class="md-form col-6 col-md-9 my-0">
              <input
                type="email"
                id="mce-EMAIL"
                class="form-control my-0"
                value=""
                placeholder="Your Email"
                name="EMAIL"
              />
            </div>
            <div class="mc-field-group input-group d-none">
              <strong>React</strong>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    value="1024"
                    name="group[4677][1024]"
                    id="mce-group[4677]-4677-0"
                    checked="checked"
                  />
                  <label for="mce-group[4677]-4677-0">MDB Updates</label>
                </li>
              </ul>
            </div>

            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_461480655ccce528d909d3f42_bc222039b5"
                tabindex="-1"
                value=""
              />
            </div>
            <div class="d-flex flex-row-reverse w-100">
              <div class="clear p-0">
                <span class="waves-input-wrapper waves-effect waves-light">
                  <input
                    type="submit"
                    value="Join"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="rounded btn btn-info btn-join m-0"
                    alt="Step 2: Join newsletter"
                  />
                </span>
              </div>
            </div>
          </div> */}
        </Form>

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={slide1} alt="First slide" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide2} alt="Third slide" />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide3} alt="Third slide" />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Inicio;
