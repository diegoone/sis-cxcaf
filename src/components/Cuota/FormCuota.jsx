import React from "react";
import "../../assets/css/paper-dashboard.css";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    Label
} from "reactstrap";
import ModalSel from "./ModalSel";

class FormCuota extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombres : "",
            apellidos : "",
            dui : "",
            id : -1
        };
    }

    changeState = (nombres, apellidos, dui, id) => {
        this.setState({nombres, apellidos, dui, id});
    }

    render() {
        const { mostrar, opc } = this.props;
        return (
            <Card className="card-user">
                <CardHeader>
                    <Row>
                        <Col md="1">
                            <div className="icon-big text-center icon-success mt-3">
                                <i className="nc-icon nc-minimal-left puntero" onClick={() => {
                                    mostrar(opc);
                                }} />
                            </div>
                        </Col>
                        <Col>
                            <CardTitle tag="h5">Registro de Coutas</CardTitle>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup row>
                            <Col md="5">
                                <Label for="nombre">Nombre</Label>
                                <Input type="text" name="nombre" id="nombre" placeholder="" value={`${this.state.nombres} ${this.state.apellidos}`} readOnly/>
                            </Col>
                            <Col md="5">
                                <Label for="dui">Dui</Label>
                                <Input type="text" name="dui" id="dui" placeholder="" value={this.state.dui} readOnly/>
                            </Col>
                            <Col md="2">
                                <ModalSel buttonLabel="Seleccionar Cliente" changeState={this.changeState}/>
                            </Col>
                        </FormGroup>
                    </Form>        
                </CardBody>
            </Card>
        )
    }
}

export { FormCuota };