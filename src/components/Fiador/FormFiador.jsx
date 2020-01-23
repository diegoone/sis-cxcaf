import React from "react";
import "../../assets/css/paper-dashboard.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Form,
  Row,
  Col
} from "reactstrap";
import { ElementsPersona } from "components/Persona/FormPersona";

const ViewFiador = props => {
  const { mostrar, opc } = props;
  return (
    <>
      <Card className="card-user">
        <CardHeader>
          <Row>
            <Col md="1">
              <div className="icon-big text-center icon-success mt-3">
                <i
                  className="nc-icon nc-minimal-left puntero"
                  onClick={() => {
                    mostrar(opc);
                  }}
                />
              </div>
            </Col>
            <Col md="11">
              <CardTitle tag="h5" className="text center">
                Registro de Fiador
              </CardTitle>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <FormFiador />
        </CardBody>
      </Card>
    </>
  );
};
class FormFiador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      zona: [],
      estadoCivil: [],
      tipo: [],
      listIdProfesion: []
    };
    this.data = {
      nombres: null,
      apellidos: null,
      dui: null,
      telefono: null,
      genero: null,
      salario: null,
      nit: null,
      fechaN: null,
      direccion: null,
      zona: null,
      estadoCivil: null,
      idProfesion: null,
      tipo: null,
      clasificacion: null,
      username: null,
      password: null
    };
    for (var prop in this.data) {
      if (Object.prototype.hasOwnProperty.call(this.data, prop)) {
        this.data[prop] = React.createRef();
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    var obj = {};
    for (var prop in this.data) {
      if (Object.prototype.hasOwnProperty.call(this.data, prop)) {
        console.log(prop, this.data[prop].current);
        obj[prop] = this.state[prop].current.value;
      }
    }
    console.log(this.data);
  }
  componentDidMount() {
    fetch("http://localhost:4000/api/cliente/enum")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            zona: result.zona,
            tipo: result.tipo,
            estadoCivil: result.estadocivil
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ); //end fetch
    fetch("http://localhost:4000/api/profesion")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            listIdProfesion: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ); //end fetch
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <ElementsFiador
          zona={this.state.zona}
          isLoaded={this.state.isLoaded}
          estadoCivil={this.state.estadoCivil}
          tipo={this.state.tipo}
          listIdProfesion={this.state.listIdProfesion}
          refer={this.data}
        />
      </Form>
    );
  }
}

function ElementsFiador(props) {
  return (
    <>
      <ElementsPersona
        zona={props.zona}
        isLoaded={props.isLoaded}
        estadoCivil={props.estadoCivil}
        listIdProfesion={props.listIdProfesion}
        refer={props.refer}
      />
    </>
  );
}

export { ElementsFiador, FormFiador, ViewFiador };
