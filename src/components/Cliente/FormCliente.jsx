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
    Label,
} from "reactstrap";

function FormCliente({ mostrar, opc }) {
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
                        <Col>
                            <CardTitle tag="h5">Registro de Empleado</CardTitle>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <Form>
                        <Row>
                            <Col className="pr-1" md="6">
                                <FormGroup>
                                    <label>Nombres</label>
                                    <Input
                                        defaultValue=""
                                        placeholder="Digite su nombre"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col className="pl-1" md="6">
                                <FormGroup>
                                    <label>Apellidos</label>
                                    <Input
                                        defaultValue=""
                                        placeholder="Digite sus apellidos"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <label>Sexo</label>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="rsex" />{' '}
                                            Masculino
                                        </Label>
                                        <Label check>
                                            <Input type="radio" name="rsex" />{' '}
                                            Femenino
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    <label >Estado civil</label>
                                    <FormGroup>
                                        <select name="" id="">
                                            <option value="">Seleccione...</option>
                                            <option value="">Soltero</option>
                                            <option value="">Casado</option>
                                            <option value="">Acompañado</option>
                                            <option value="">Divorciado</option>
                                            <option value="">Viudo</option>
                                        </select>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="pr-1" md="4">
                                <FormGroup>
                                    <label>DUI</label>
                                    <Input
                                        defaultValue=""
                                        placeholder="########-#"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col className="px-1" md="4">
                                <FormGroup>
                                    <label>NIT</label>
                                    <Input
                                        defaultValue=""
                                        placeholder="####-######-###-#"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col className="pl-1" md="4">
                                <FormGroup>
                                    <label>Fecha de Nacimiento</label>
                                    <Input placeholder="dd/MM/yyyy" type="Date" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="pr-1" md="4">
                                <FormGroup>
                                    <label>Profeciòn u oficio</label>
                                    <Input
                                        defaultValue=""
                                        placeholder=""
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col className="px-1" md="4">
                                <FormGroup>
                                    <label>Teléfono</label>
                                    <Input
                                        defaultValue=""
                                        placeholder="####-####"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col className="pl-1" md="4">
                                <FormGroup>
                                    <label>Nº de ISSS</label>
                                    <Input placeholder="" type="text" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="pr-1" md="12">
                                <FormGroup>
                                    <label>Direcciòn</label>
                                    <FormGroup>
                                        <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <div className="update ml-auto mr-auto">
                                <Button
                                    className="btn-round"
                                    color="primary"
                                    type="submit"
                                >
                                    Registrar Empleado
                        </Button>
                            </div>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </>
    );
}

export default FormCliente;