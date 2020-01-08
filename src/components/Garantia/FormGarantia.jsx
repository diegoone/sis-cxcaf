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
    CustomInput,
    Input,
    Row,
    Col,
    Label,
} from "reactstrap";

class FormGarantia extends React.Componente {
    constructor(props) {
        super(props);
        this.data = {
            id: null,
            nombre: null,
            valoracionReal: null,
            idCredito: null
        };
    }
    render() {
        const { mostrar, opc } = this.props;
        return (
            <>
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
                            <Col md="11">
                                <CardTitle tag="h5" className="text center" >Registro de Garantía</CardTitle>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <ElementsGarantia refer={this.data} />
                        </Form>
                    </CardBody>
                </Card>
            </>
        );
    }
}

function ElementsGarantia({ mostrar, opc }) {
    return (
        <>
            <Row>
                <Col className="pr-1" md="4">
                    <label>Nombre</label>
                    <FormGroup>
                        <Input type="text"
                            innerRef={props.refer.nombre}
                            name="nombre" placeholder="##.##" />
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="4">
                    <label>Valoración real</label>
                    <FormGroup>
                        <Input type="text"
                            innerRef={props.refer.valoracionReal}
                            name="valoracionReal" placeholder="##.##" />
                    </FormGroup>
                </Col>
            </Row>
        </>
    );
}

export { FormGarantia, ElementsGarantia };