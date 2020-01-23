import React, { useState } from "react";
import "../../assets/css/paper-dashboard.css";
import {
  FormGroup,
  CustomInput,
  Input,
  Row,
  Col,
  Label,
  Form,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "reactstrap";

class FormPolitica extends React.Component {
  constructor(props) {
    super(props);
    this.data = {
      tasaMora: null,
      montoInicial: null,
      montoFinal: null,
      diasCobro: null,
      tasaInteres: null,
      diasIncobrabilidad: null
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
        obj[prop] = this.state[prop].current.value;
      }
    }
  }
  render() {
    const ModalPolitica = props => {
      const { className } = props;
      const [modal, setModal] = useState(false);
      const toggle = () => setModal(!modal);
      return (
        <>
          <Button color="success" onClick={toggle}>
            Crear
          </Button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Registro Politica</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleSubmit}>
                <ElementsPolitica refer={this.data} />
              </Form>
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
        </>
      );
    };

    return <ModalPolitica buttonLabel="abrir" />;
  }
}

function ElementsPolitica(props) {
  return (
    <>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="tasaMora">Tasa de Mora</Label>
            <Input
              defaultValue=""
              innerRef={props.refer.tasaMora}
              type="number"
              name="tasaMora"
              id="tasaMora"
              placeholder="##.##"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="diasIncobrabilidad">Dias de Incobrabilidad</Label>
            <Input
              defaultValue=""
              innerRef={props.refer.diasIncobrabilidad}
              type="number"
              name="diasIncobrabilidad"
              id="diasIncobrabilidad"
              placeholder="##"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="montoInicial">Monto Inicial</Label>
            <Input
              defaultValue=""
              innerRef={props.refer.montoInicial}
              type="number"
              name="montoInicial"
              id="montoInicial"
              placeholder="##.##"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="montoFinal">Monto Final</Label>
            <Input
              defaultValue=""
              innerRef={props.refer.montoFinal}
              type="number"
              name="montoFinal"
              id="montoFinal"
              placeholder="##.##"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="diasCobro">Dias de Cobro</Label>
            <Input
              defaultValue=""
              innerRef={props.refer.diasCobro}
              type="number"
              name="diasCobro"
              id="diasCobro"
              placeholder="##"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="tasaInteres">Tasa de Interes</Label>
            <Input
              defaultValue=""
              innerRef={props.refer.tasaInteres}
              type="number"
              name="tasaInteres"
              id="tasaInteres"
              placeholder="##.##"
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  );
}
const SelectPolitica = props => {
  return (
    <>
      <Label>Politica</Label>
      <CustomInput
        type="select"
        innerRef={props.refer.idPolitica}
        name="idPolitica"
        id="idPolitica"
      >
        <option value=""> Seleccione </option>
        {props.listIdPolitica.map((item, indice) => (
          <option key={indice} value={item.id}>{item.tasaInteres}</option>
        ))}
      </CustomInput>
    </>
  );
};
export { FormPolitica, SelectPolitica };
