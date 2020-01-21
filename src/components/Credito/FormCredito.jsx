import React, { useState } from "react";
import "../../assets/css/paper-dashboard.css";
import { FormEmpleado } from "../Empleado/FormEmpleado";
import { FormPolitica, SelectPolitica} from "../Politica/FormPolitica";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  CustomInput,
  Input,
  Row,
  Col,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
class FormCredito extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      estado: [],
      tipoCredito: [],
      clientes: [],
      empleados: [],
      politicas: []
    };
    this.data = {
      monto: null,
      fecha: null,
      cobro: null,
      idEmpleado: null,
      idPolitica: null,
      estado: null,
      idCliente: null,
      tipoCredito: null
    };
  }

  handleSubmitEmpleado(event) {
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
    fetch("http://localhost:4000/api/credito/enum")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            estado: result.estado,
            tipoCredito: result.tipocredito
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ); //end fetch
    fetch("http://localhost:4000/api/cliente")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            clientes: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ); //end fetch
    fetch("http://localhost:4000/api/empleado")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            empleados: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ); //end fetch
      fetch("http://localhost:4000/api/politica")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            politicas: result
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
    const { error, isLoaded, clientes, empleados } = this.state;
    const { mostrar, opc } = this.props;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
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
                    Registro de Crédito
                  </CardTitle>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>
                <Row form>
                  <Col md="4">
                    <FormGroup>
                      <Label>Monto</Label>
                      <Input
                        type="number"
                        name="monto"
                        innerRef={this.data.monto}
                        placeholder="##.##"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <Label>Cuota de cobro</Label>
                      <Input
                        type="number"
                        innerRef={this.data.cuota}
                        name="cuota"
                        placeholder="##.##"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <Label>Fecha</Label>
                      <Input
                        type="date"
                        innerRef={this.data.fecha}
                        name="fecha"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md="4">
                    <FormGroup>
                      <Label>Estado</Label>
                      <CustomInput
                        type="select"
                        innerRef={this.data.estado}
                        name="estado"
                        id="estado"
                      >
                        <option value="">Seleccione ...</option>
                        {this.state.estado.map((item, indice) => (
                          <option key={indice} value={item}>
                            {item}
                          </option>
                        ))}
                      </CustomInput>
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <Label>Tipo de crédito</Label>
                    <FormGroup>
                      <CustomInput
                        type="select"
                        innerRef={this.data.tipoCredito}
                        name="tipoCredito"
                        id="tipoCredito"
                      >
                        <option value="">Seleccione ...</option>
                        {this.state.tipoCredito.map((item, indice) => (
                          <option key={indice} value={item}>
                            {item}
                          </option>
                        ))}
                      </CustomInput>
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <SelectPolitica refer={this.data} listIdPolitica={this.state.politicas}/>
                      <FormPolitica buttonLabel="Crear" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="empleado">Empleado</Label>
                      <Input type="select" name="empleado" id="empleado">
                        <option value="">Seleccione ...</option>
                        {empleados.map((empleado, indice) => {
                          return (
                            <option key={indice} value={empleado.id}>
                              {`${empleado.persona.nombres} ${empleado.persona.apellidos}`}
                            </option>
                          );
                        })}
                      </Input>
                      <ModalEmpleado buttonLabel="Crear" />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="cliente">Cliente</Label>
                      <Input type="select" name="cliente" id="cliente">
                        <option value="">Seleccione ...</option>
                        {clientes.map((cliente, indice) => {
                          return (
                            <option key={indice} value={cliente.id}>
                              {`${cliente.persona.nombres} ${cliente.persona.apellidos}`}
                            </option>
                          );
                        })}
                      </Input>
                      <ModalCliente buttonLabel="Crear" />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="fiador">Fiador</Label>
                      <Input type="select" name="fiador" id="fiador">
                        <option value="">Seleccione ...</option>
                      </Input>
                      <ModalFiador buttonLabel="Crear" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="garantia">Garantia</Label>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="fiador">Fiador</Label>
                    </FormGroup>
                  </Col>
                </Row>
                <div>
                  ¿Cómo se va a determinar la cuota, en base a numero de pagos,
                  o en base a la tuota se calcula el numero de pagos?
                </div>
                <div>Obtener el empleado de la session</div>
                <div>
                  Seleccionar cliente (DUI) ... VERIFICAR QUE SUS CREDITOS ESTEN
                  CANCELADOS o agregar nuevo
                </div>
                <div>
                  Seleccionar fiador (DUI) VERIFICAR QUE NO SEA FIADOR EN UN
                  CREDITO QUE ESTA EN COBRO o agregar nuevo
                </div>
                <div>¿Cómo se va a cargar la garantía?</div>
              </Form>
            </CardBody>
          </Card>
        </>
      );
    }
  }
}

const ModalEmpleado = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className} size="xl">
        <ModalHeader toggle={toggle}>Registro de Empleado</ModalHeader>
        <ModalBody>
          <FormEmpleado />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Guardar
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const ModalCliente = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Registro de Cliente</ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Guardar
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const ModalFiador = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Registro de Fiador</ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Guardar
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export { FormCredito };
