import React from "react";
import "../../assets/css/paper-dashboard.css";
import FormMarca from "components/Marca/FormMarca";
import FormSucursal from "components/Sucursal/FormSucursal";
import FormDepartamento from "components/Departamento/FormDepartamento";
import FormTipoActivo from "components/TipoActivo/FormTipoActivo";
import {
    Button,
    Card, CardHeader,
    CardBody, CardTitle,
    FormGroup, Form, TextArea,
    CustomInput, Input, Row, Col,
    Label
} from "reactstrap";

function FormActivoFijo({ mostrar, opc }) {
    return (
        <>
            <Card className="card-user">
                <CardHeader>
                    <Row>
                        <Col md="1">
                            <div className="icon-big text-center icon-success mt-3">
                                <i className="nc-icon nc-minimal-left puntero" onClick={() => mostrar(opc)}></i>
                            </div>
                        </Col>
                        <Col md="11">
                            <CardTitle tag="h5" className="text-center">Registro de Activo Fijo</CardTitle>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <Form>
                        <Row>
                            <Col className="pr-1" md="4">
                                <label>Nombre</label>
                                <FormGroup>
                                    <Input defaultValue="" name="nombre" placeholder="Aa" />
                                </FormGroup>
                            </Col>
                            <Col className="pr-1" md="6">
                                <label>Descripción</label>
                                <FormGroup>
                                    <textarea name="descripcion" cols="30" rows="10" className="form-control"></textarea>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="pr-1" md="4">

                                <label>Procedencia:</label>
                                <FormGroup>
                                    <CustomInput type="select" name="procedencia">
                                        <option value=""> Seleccione </option>
                                        <option value="NUEVO">NUEVO</option>
                                        <option value="USADO">USADO</option>
                                        <option value="DONADO NUEVO">DONADO NUEVO</option>
                                        <option value="DONADO USADO">DONADO USADO</option>
                                    </CustomInput>
                                </FormGroup>
                            </Col>
                            <Col className="pr-1" md="4">

                                <label>Precio:</label>
                                <FormGroup>
                                    <Input name="precio" type="text" placeholder="###.##"/>
                                </FormGroup>
                            </Col>
                            <Col className="pr-1" md="4">

                                <label>Fecha de adquisición:</label>
                                <FormGroup>
                                    <Input name="fechaAdquisicion" type="date" placeholder="###.##"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormMarca mostrar={mostrar} opc={opc} />
                        <FormSucursal mostrar={mostrar} opc={opc}/>
                        <FormDepartamento mostrar={mostrar} opc={opc}/>
                        <FormTipoActivo mostrar={mostrar} opc={opc}/>
                    </Form>
                </CardBody>
            </Card>
        </>
    );
}


export default FormActivoFijo;