import React from "react";
import "../../assets/css/paper-dashboard.css";
import FormPersona from "components/Persona/FormPersona";
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
    Col
} from "reactstrap";

function FormEmpleado({ mostrar, opc }) {
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
                        <FormPersona mostrar={mostrar} opc={opc} />
                        <hr />
                        <Row>
                            <Col className="pr-1" md="4">
                                <FormGroup>
                                    <label>Cargo</label>
                                    <select name="cargo" className="form-control">
                                        <option value="">Seleccione...</option>
                                        <option value="administrador/a">Administrador/a</option>
                                        <option value="empleado/a">empleado/a</option>
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

function SelectEmpleado({ mostrar, opc }) {
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

export default FormEmpleado;
//export default SelectEmpleado;