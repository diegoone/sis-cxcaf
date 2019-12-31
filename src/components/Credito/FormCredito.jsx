import React from "react";
import {ElementsCliente} from "components/Cliente/FormCliente";
import {ElementsFiador} from "components/Fiador/FormFiador";
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

function FormCredito({ mostrar, opc }) {
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
                            <CardTitle tag="h5" className="text center" >Registro de Crédito</CardTitle>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <Form>
                        <Row>
                            <Col className="pr-1" md="4">
                                <label>Monto</label>
                                <FormGroup>
                                    <Input type="text" name="monto" placeholder="##.##"/>
                                </FormGroup>
                            </Col>
                            <Col className="pr-1" md="4">
                                <label>Fecha</label>
                                <FormGroup>
                                    <Input type="date" name="fecha"/>
                                </FormGroup>
                            </Col>
                            <Col className="pr-1" md="4">
                                <label>Cuota de cobro</label>
                                <FormGroup>
                                    <Input type="text" name="cuota" placeholder="##.##"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="pr-1" md="4">
                                <label>Estado</label>
                                <FormGroup>
                                    <CustomInput type="select" name="estado">
                                        <option value="">Seleccione ...</option>
                                        <option value="cancelado">cancelado</option>
                                        <option value="en cobro">en cobro</option>
                                        <option value="incobrable">incobrable</option>
                                    </CustomInput>
                                </FormGroup>
                            </Col>
                            <Col className="pr-1" md="4">
                                <label>Tipo de crédito</label>
                                <FormGroup>
                                    <CustomInput type="select" name="tipoCredito">
                                        <option value="">Seleccione ...</option>
                                        <option value="PERSONAL">PERSONAL</option>
                                        <option value="HIPOTECARIO">HIPOTECARIO</option>
                                        <option value="NOMINA">NOMINA</option>
                                        <option value="DE INVERSION">DE INVERSION</option>
                                        <option value="DE VIVIENDA">DE VIVIENDA</option>
                                        <option value="DE CONSUMO">DE CONSUMO</option>
                                        <option value="DE ESTUDIO">DE ESTUDIO</option>
                                        <option value="DE AVIO">DE AVIO</option>
                                        <option value="AGRARIO">AGRARIO</option>
                                    </CustomInput>
                                </FormGroup>
                            </Col>
                        </Row>
                        <div>¿Cómo se va a determinar la cuota, en base a numero de pagos, o en base a la tuota se calcula el numero de pagos?</div>
                        <div>Obtener el empleado de la session</div>
                        <div>Seleccionar cliente (DUI) ... VERIFICAR QUE SUS CREDITOS ESTEN CANCELADOS o agregar nuevo</div>
                        <div>Seleccionar fiador (DUI) VERIFICAR QUE NO SEA FIADOR EN UN CREDITO QUE ESTA EN COBRO o agregar nuevo</div>
                        
                    </Form>
                </CardBody>
            </Card>
        </>
    );
}

export  {FormCredito};