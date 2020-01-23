import React, { useState } from "react";
import "../../assets/css/paper-dashboard.css";
import { FormCliente } from "../Cliente/FormCliente";
import { SelectProfesion, FormProfesion } from "../Profesion/FormProfesion";
import { FormPolitica, SelectPolitica } from "../Politica/FormPolitica";
import { urlApi } from "Utils/FormUtil";
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
  ModalFooter,
  ListGroup,
  ListGroupItem
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
      politicas: [],
      garantia: null,
      valoracion: null,
      garantias: [],
      fiadores: [],
      estadoCivilArray: [],
      zonasArray: [],
      listIdProfesion: [],
      credito: {
        monto: null,
        fecha: null,
        cobro: null,
        idPolitica: null,
        estado: null,
        idCliente: null,
        tipoCredito: null,
        fiador: {
          nombres: null,
          apellidos: null,
          dui: null,
          telefono: null,
          genero: null,
          salario: null,
          idProfesion: null,
          fechaN: null,
          direccion: null,
          zona: null,
          estadoCivil: null,
          nit: null
        }
      }
    };
    this.data = {
      monto: null,
      fecha: null,
      cobro: null,
      idPolitica: null,
      estado: null,
      idCliente: null,
      tipoCredito: null,
      fiador: {
        nombres: null,
        apellidos: null,
        dui: null,
        telefono: null,
        genero: null,
        salario: null,
        idProfesion: null,
        fechaN: null,
        direccion: null,
        zona: null,
        estadoCivil: null,
        nit: null
      }
    };

    this.garantia = React.createRef();
    this.valoracion = React.createRef();
    this.data.monto = React.createRef();
    this.data.fecha = React.createRef();
    this.data.cobro = React.createRef();
    this.data.idPolitica = React.createRef();
    this.data.estado = React.createRef();
    this.data.idCliente = React.createRef();
    this.data.tipoCredito = React.createRef();
    this.data.fiador.nombres = React.createRef();
    this.data.fiador.apellidos = React.createRef();
    this.data.fiador.dui = React.createRef();
    this.data.fiador.telefono = React.createRef();
    this.data.fiador.genero = React.createRef();
    this.data.fiador.salario = React.createRef();
    this.data.fiador.idProfesion = React.createRef();
    this.data.fiador.fechaN = React.createRef();
    this.data.fiador.direccion = React.createRef();
    this.data.fiador.zona = React.createRef();
    this.data.fiador.estadoCivil = React.createRef();
    this.data.fiador.nit = React.createRef();
  }

  handleSubmitEmpleado(event) {
    event.preventDefault();
    var obj = {
      credito: {},
      garantias: [],
      fiadores: []
    };
    for (var prop in this.data) {
      if (Object.prototype.hasOwnProperty.call(this.data.credito, prop)) {
        obj[prop] = this.state[prop].current.value;
      }
    }
    obj.garantias = this.state.garantias;
    obj.fiadores = this.state.fiadores;
  }
  addFiador = event => {
    var fiador = {
      nombres: null,
      apellidos: null,
      dui: null,
      telefono: null,
      genero: null,
      salario: null,
      idProfesion: null,
      fechaN: null,
      direccion: null,
      zona: null,
      estadoCivil: null,
      nit: null
    };
    console.log(this.data);
    fiador.nombres = this.data.fiador.nombres.current.value;
    fiador.apellidos = this.data.fiador.apellidos.current.value;
    fiador.dui = this.data.fiador.dui.current.value;
    fiador.telefono = this.data.fiador.telefono.current.value;
    fiador.genero = this.data.fiador.genero.current.value;
    fiador.salario = this.data.fiador.salario.current.value;
    fiador.idProfesion = this.data.fiador.idProfesion.current.value;
    fiador.fechaN = this.data.fiador.fechaN.current.value;
    fiador.direccion = this.data.fiador.direccion.current.value;
    fiador.zona = this.data.fiador.zona.current.value;
    fiador.estadoCivil = this.data.fiador.estadoCivil.current.value;
    fiador.nit = this.data.fiador.nit.current.value;
    this.state.fiadores.push(fiador);
    this.setState({ fiadores: this.state.fiadores });
    console.log(this.state.fiadores);
    this.data.fiador.nombres.current.value = "";
    this.data.fiador.apellidos.current.value = "";
    this.data.fiador.dui.current.value = "";
    this.data.fiador.telefono.current.value = "";
    this.data.fiador.genero.current.value = "";
    this.data.fiador.salario.current.value = "";
    this.data.fiador.idProfesion.current.value = "";
    this.data.fiador.fechaN.current.value = "";
    this.data.fiador.direccion.current.value = "";
    this.data.fiador.zona.current.value = "";
    this.data.fiador.estadoCivil.current.value = "";
    this.data.fiador.nit.current.value = "";
  };
  handleSubmit(event) {
    event.preventDefault();
    var obj = {
      credito : {},
      garantias : [],
      fiadores :[]
    };
    obj.credito = {
      monto : this.data.monto.current.value,
      fecha : this.data.fecha.current.value ,
      cobro : this.data.cobro.current.value,
      idPolitica: this.data.idPolitica.current.value,
      estado : this.data.estado.current.value,
      idCliente : this.data.idCliente.current.value,
      tipoCredito : this.data.tipoCredito.current.value
    };
    obj.garantias = this.state.garantias;
    obj.fiadores = this.state.fiadores;
    var init = {
      method: "post",
      body: JSON.stringify(obj),
      headers: { "Content-Type": "application/json" }
    };
    fetch(urlApi + "/credito", init)
      .then(function(response) {
        return response.json();
      })
      .then(this.handleUpdate);
  }
  componentDidMount() {
    fetch("http://localhost:4000/api/cliente/enum")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            zonasArray: result.zona,
            estadoCivilArray: result.estadocivil
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
    fetch("http://localhost:4000/api/credito/enum")
      .then(res => res.json())
      .then(
        result => {
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
                      <SelectPolitica
                        refer={this.data}
                        listIdPolitica={this.state.politicas}
                      />
                      <FormPolitica buttonLabel="Crear" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Row form>
                        <Col md={6}>
                          <Label for="garantia">Garantia</Label>
                          <Input
                            type="text"
                            name="garantia"
                            id="garantia"
                            innerRef={this.garantia}
                          />
                        </Col>
                        <Col md={6}>
                          <Label for="valoracion">Valoración Real</Label>
                          <Input
                            type="number"
                            name="valoracion"
                            id="valoracion"
                            innerRef={this.valoracion}
                          />
                        </Col>
                      </Row>
                      <Button
                        type="button"
                        color="success"
                        onClick={() => {
                          if (
                            this.garantia.current.value === "" ||
                            this.valoracion.current.value === ""
                          ) {
                            return;
                          } else {
                            var garantia = {
                              nombre: this.garantia.current.value,
                              valoracion: this.valoracion.current.value
                            };
                            console.log(garantia);
                            this.state.garantias.push(garantia);
                            this.setState({ garantias: this.state.garantias });
                            this.garantia.current.value = "";
                            this.valoracion.current.value = "";
                          }
                        }}
                      >
                        Agregar Garantia
                      </Button>
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
                      <ModalFiador
                        buttonLabel="Crear"
                        refer={this.data.fiador}
                        estadoCivilArray={this.state.estadoCivilArray}
                        zonasArray={this.state.zonasArray}
                        listIdProfesion={this.state.listIdProfesion}
                        addFiador={this.addFiador}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="garantia">Garantia</Label>
                      <ListaGarantia items={this.state.garantias} />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="fiador">Fiador</Label>
                      <ListaFiador items={this.state.fiadores} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Button className="mx-auto" onClick={this.handleSubmit}>Registrar Credito</Button>
                </Row>
                {/* <div>
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
                <div>¿Cómo se va a cargar la garantía?</div> */}
              </Form>
            </CardBody>
          </Card>
        </>
      );
    }
  }
}

const ModalCliente = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className} size="xl">
        <ModalHeader toggle={toggle}>Registro de Cliente</ModalHeader>
        <ModalBody>
          <FormCliente />
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

const ModalFiador = props => {
  const { buttonLabel, className, estadoCivilArray, zonasArray } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className} size="xl">
        <ModalHeader toggle={toggle}>Registro de Fiador</ModalHeader>
        <ModalBody>
          <Form>
            <Row form>
              <Col md="4">
                <FormGroup>
                  <Label>Nombres</Label>
                  <Input
                    name="nombres"
                    innerRef={props.refer.nombres}
                    defaultValue=""
                    placeholder="Digite su nombre"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Apellidos</Label>
                  <Input
                    name="apellidos"
                    innerRef={props.refer.apellidos}
                    defaultValue=""
                    placeholder="Digite sus apellidos"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>DUI</Label>
                  <Input
                    name="dui"
                    innerRef={props.refer.dui}
                    defaultValue=""
                    placeholder="########-#"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md="4">
                <FormGroup>
                  <label>Sexo</label>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        innerRef={props.refer.genero}
                        name="genero"
                        value="masculino"
                      />
                      Masculino
                    </Label>
                    <Label check>
                      <Input
                        type="radio"
                        innerRef={props.refer.genero}
                        name="genero"
                        value="femenino"
                      />
                      Femenino
                    </Label>
                  </FormGroup>
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <FormGroup>
                    <Label>Estado civil</Label>
                    <CustomInput
                      type="select"
                      innerRef={props.refer.estadoCivil}
                      name="estadoCivil"
                      id="estadoCivil"
                    >
                      <option value="">Seleccione...</option>
                      {estadoCivilArray.map((item, indice) => (
                        <option key={indice} value={item}>
                          {item}
                        </option>
                      ))}
                    </CustomInput>
                  </FormGroup>
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>NIT</Label>
                  <Input
                    name="nit"
                    innerRef={props.refer.nit}
                    defaultValue=""
                    placeholder="####-######-###-#"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md="4">
                <FormGroup>
                  <SelectProfesion
                    refer={props.refer}
                    listIdProfesion={props.listIdProfesion}
                  />
                  <FormProfesion />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Teléfono</Label>
                  <Input
                    name="telefono"
                    innerRef={props.refer.telefono}
                    defaultValue=""
                    placeholder="####-####"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Nº de ISSS</Label>
                  <Input
                    innerRef={props.refer.isss}
                    name="isss"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md="4">
                <FormGroup>
                  <Label>Fecha de Nacimiento</Label>
                  <Input
                    name="fechaN"
                    innerRef={props.refer.fechaN}
                    placeholder="dd/MM/yyyy"
                    type="Date"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Salario</Label>
                  <Input
                    name="salario"
                    innerRef={props.refer.salario}
                    defaultValue=""
                    placeholder="###.##"
                    type="number"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <Label>Zona:</Label>
                <FormGroup>
                  <CustomInput
                    type="select"
                    innerRef={props.refer.zona}
                    name="zona"
                    id="zona"
                  >
                    <option value=""> Seleccione </option>
                    {zonasArray.map((item, indice) => (
                      <option key={indice} value={item}>
                        {item}
                      </option>
                    ))}
                  </CustomInput>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md="12">
                <FormGroup>
                  <label>Direcciòn</label>
                  <FormGroup>
                    <Input
                      type="textarea"
                      name="direccion"
                      innerRef={props.refer.direccion}
                      cols="30"
                      rows="10"
                      className="form-control"
                    />
                  </FormGroup>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              props.addFiador();
              toggle();
            }}
          >
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

const ListaGarantia = ({ items }) => {
  console.log(items);
  if (items.length === 0) {
    return (
      <ListGroup>
        <ListGroupItem>
          <Label>Sin registros</Label>
        </ListGroupItem>
      </ListGroup>
    );
  } else {
    return (
      <ListGroup>
        <ListGroupItem>
          {items.map((garantia, indice) => {
            return (
              <Row key={indice}>
                <Col md={7}>{garantia.nombre}</Col>
                <Col md={4}>{garantia.valoracion}</Col>
                <Col md={1}>
                  <i className="fas fa-trash text-danger puntero"></i>
                </Col>
              </Row>
            );
          })}
        </ListGroupItem>
      </ListGroup>
    );
  }
};

const ListaFiador = ({ items }) => {
  console.log(items);
  if (items.length === 0) {
    return (
      <ListGroup>
        <ListGroupItem>
          <Label>Sin registros</Label>
        </ListGroupItem>
      </ListGroup>
    );
  } else {
    return (
      <ListGroup>
        <ListGroupItem>
          {items.map((fiador, indice) => {
            return (
              <Row key={indice}>
                <Col md={7}>{fiador.nombres + " " + fiador.apellidos}</Col>
                <Col md={4}>{fiador.dui}</Col>
                <Col md={1}>
                  <i className="fas fa-trash text-danger puntero"></i>
                </Col>
              </Row>
            );
          })}
        </ListGroupItem>
      </ListGroup>
    );
  }
};

export { FormCredito };
