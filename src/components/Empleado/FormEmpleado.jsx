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
    Col
} from "reactstrap";

function FormEmpleado({mostrar, opc}) {
    return (
        <>
            <Card className="card-user">
                <CardHeader>
                    <Row>
                        <Col md="1">
                            <div className="icon-big text-center icon-success mt-3">
                                <i className="nc-icon nc-minimal-left puntero" onClick={()=>{
                                    mostrar(opc);
                                }}/>
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
                            <Col md="12">
                                <FormGroup>
                                    <label>Dirección</label>
                                    <Input
                                        defaultValue="Apastepeque, San Vicente"
                                        placeholder="Dirección de residencia"
                                        type="text"
                                    />
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
                                    <label>Teléfono</label>
                                    <Input
                                        defaultValue=""
                                        placeholder="####-####"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col className="px-1" md="4">
                                <FormGroup>
                                    <label>Usuario</label>
                                    <Input
                                        defaultValue=""
                                        placeholder="Digite su usuario"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col className="pl-1" md="4">
                                <FormGroup>
                                    <label>Contraseña</label>
                                    <Input placeholder="Digite su contraseña" type="password" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="pr-1" md="4">
                                <FormGroup>
                                    <label>Cargo</label>
                                    <select className="form-control">
                                        <option value="">Seleccione...</option>
                                        <option value="">Vendedor</option>
                                        <option value="">Administrador</option>
                                    </select>
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
};
export default FormEmpleado;



