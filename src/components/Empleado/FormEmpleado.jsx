import React from "react";
import "../../assets/css/paper-dashboard.css";
import { ElementsPersona } from "components/Persona/FormPersona";
import { ElementsUsuario } from "components/Usuario/FormUsuario";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  CustomInput,
  Row,
  Col,
  Label
} from "reactstrap";

const ViewEmpleado = props => {
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
            <Col>
              <CardTitle tag="h5">Registro de Empleado</CardTitle>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
            <FormEmpleado />
        </CardBody>
      </Card>
    </>
  );
};
class FormEmpleado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      zona: [],
      estadoCivil: [],
      cargo: [],
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
      cargo: null,
      username: null,
      password: null
    }; //
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
    fetch("http://localhost:4000/api/empleado/enum")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            zona: result.zona,
            cargo: result.cargo,
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
        <ElementsEmpleado
          isLoaded={this.state.isLoaded}
          zona={this.state.zona}
          cargo={this.state.cargo}
          estadoCivil={this.state.estadoCivil}
          listIdProfesion={this.state.listIdProfesion}
          refer={this.data}
        />
      </Form>
    );
  }
}

function ElementsEmpleado(props) {
  const { error, isLoaded } = props;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <ElementsPersona
          refer={props.refer}
          zona={props.zona}
          estadoCivil={props.estadoCivil}
          listIdProfesion={props.listIdProfesion}
        />
        <hr />
        <ElementsUsuario />
        <Row form>
          <Col md="3">
            <FormGroup>
              <Label>Cargo</Label>
              <FormGroup>
                <CustomInput
                  type="select"
                  innerRef={props.refer.cargo}
                  name="cargo"
                >
                  <option value="">Seleccione...</option>
                  {props.cargo.map(item => (
                    <option value={item}>{item}</option>
                  ))}
                </CustomInput>
              </FormGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <div className="update ml-auto mr-auto">
            <Button className="btn-round" color="primary" type="submit">
              Registrar Empleado
            </Button>
          </div>
        </Row>
      </>
    );
  }
}

function SelectEmpleado(props) {
  return (
    <Col className="pr-1" md="4">
      <label>Empleado</label>
      <FormGroup>
        <CustomInput type="select" name="idEmpleado">
          <option value=""> Seleccione </option>
        </CustomInput>
      </FormGroup>
    </Col>
  );
}

export { SelectEmpleado, ElementsEmpleado, FormEmpleado , ViewEmpleado};
