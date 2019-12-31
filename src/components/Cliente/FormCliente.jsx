import React from "react";
import { ElementsPersona } from "components/Persona/FormPersona";
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
                        <Col md="11">
                            <CardTitle tag="h5" className="text center" >Registro de Cliente</CardTitle>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <Form>
                        <ElementsCliente mostrar={mostrar} opc={opc}/>
                    </Form>
                </CardBody>
            </Card>
        </>
    );
}
function ElementsCliente({ mostrar, opc }) {
    return (
        <>
            <ElementsPersona mostrar={mostrar} opc={opc} />
            <hr />
            <Row>
                <Col className="pr-1" md="4">
                    <label>Tipo</label>
                    <FormGroup>
                        <CustomInput type="select" name="tipo">
                            <option value="">Seleccione ...</option>
                            <option value="Persona Natural">Persona Natural</option>
                            <option value="Persona Jurídica">Persona Jurídica</option>
                        </CustomInput>
                    </FormGroup>

                </Col>
                <Col className="pr-1" md="4">

                    <label>Clasificación</label>
                    <div>
                        <CustomInput type="radio" id="radioA" name="clasificacion" label="A" />
                        <CustomInput type="radio" id="radioB" name="clasificacion" label="B" />
                        <CustomInput type="radio" id="radioC" name="clasificacion" label="C" />
                        <CustomInput type="radio" id="RadioD" name="clasificacion" label="D" />
                    </div>

                </Col>
            </Row>
        </>
    );
}
export { FormCliente, ElementsCliente };