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

function FormGarantia({ mostrar, opc }) {
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
                        <ElementsGarantia mostrar={mostrar} opc={opc} />
                    </Form>
                </CardBody>
            </Card>
        </>
    );
}

function ElementsGarantia({ mostrar, opc }) {
    return (
        <>
            <Row>
                <Col className="pr-1" md="4">
                    <label>Nombre</label>
                    <FormGroup>
                        <Input type="text" name="nombre" placeholder="##.##" />
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="4">
                    <label>Valoración real</label>
                    <FormGroup>
                        <Input type="text" name="valoracionReal" placeholder="##.##"/>
                    </FormGroup>
                </Col>
            </Row>
        </>
    );
}

export { FormGarantia, ElementsGarantia };