import React from "react";
import "../../assets/css/paper-dashboard.css";
import {ElementsProfesion} from "components/Profesion/FormProfesion";
import {
    FormGroup,
    CustomInput,
    Input,
    Row,
    Col,
    Label,
} from "reactstrap";

function ElementsPersona({ mostrar, opc }) {
    return (
        <>
            <Row>
                <Col className="pr-1" md="4">
                    <FormGroup>
                        <label>DUI</label>
                        <Input
                            name="dui"
                            defaultValue=""
                            placeholder="########-#"
                            type="text"
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col className="pr-1" md="4">
                    <FormGroup>
                        <label>Nombres</label>
                        <Input name="nombres"
                            defaultValue=""
                            placeholder="Digite su nombre"
                            type="text"
                        />
                    </FormGroup>
                </Col>
                <Col className="pl-1" md="4">
                    <FormGroup>
                        <label>Apellidos</label>
                        <Input
                            name="apellidos"
                            defaultValue=""
                            placeholder="Digite sus apellidos"
                            type="text"
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <FormGroup>
                        <label>Sexo</label>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="genero" value="masculino" />
                                Masculino
                                        </Label>
                            <Label check>
                                <Input type="radio" name="genero" value="femenino" />
                                Femenino
                                        </Label>
                        </FormGroup>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <label >Estado civil</label>
                        <FormGroup>
                            <CustomInput type="select" name="estadoCivil">
                                <option value="">Seleccione...</option>
                                <option value="soltero/a">soltero/a</option>
                                <option value="casado/a">casado/a</option>
                                <option value="acompañado/a">acompañado/a</option>
                                <option value="viudo/a">viudo/a</option>
                                <option value="divorciado/a">divorciado/a</option>
                            </CustomInput>
                        </FormGroup>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col className="pr-1" md="4">
                    <FormGroup>
                        <label>NIT</label>
                        <Input
                            name="nit"
                            defaultValue=""
                            placeholder="####-######-###-#"
                            type="text"
                        />
                    </FormGroup>
                </Col>
                <Col className="pl-1" md="4">
                    <FormGroup>
                        <label>Fecha de Nacimiento</label>
                        <Input name="fechaN" placeholder="dd/MM/yyyy" type="Date" />
                    </FormGroup>
                </Col>
            </Row>
            <ElementsProfesion mostrar={mostrar} opc={opc} />
            <Row>
                <Col className="pr-1" md="4">
                    <FormGroup>
                        <label>Teléfono</label>
                        <Input
                            name="telefono"
                            defaultValue=""
                            placeholder="####-####"
                            type="text"
                        />
                    </FormGroup>
                </Col>
                <Col className="pl-1" md="4">
                    <FormGroup>
                        <label>Nº de ISSS</label>
                        <Input
                            name="isss"
                            placeholder="" type="text" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col className="pr-1" md="4">
                    <FormGroup>
                        <label>Salario</label>
                        <Input
                            name="salario"
                            defaultValue=""
                            placeholder=""
                            type="text"
                        />
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="4">

                    <label>Zona:</label>
                    <FormGroup>
                        <CustomInput type="select" name="zona">
                            <option value=""> Seleccione </option>
                            <option value="occidental">Occidental</option>
                            <option value="central">Central</option>
                            <option value="paracentral">Paracentral</option>
                            <option value="oriental">Oriental</option>
                        </CustomInput>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col className="pr-1" md="8">
                    <FormGroup>
                        <label>Direcciòn</label>
                        <FormGroup>
                            <textarea name="direccion" cols="30" rows="10" className="form-control"></textarea>
                        </FormGroup>
                    </FormGroup>
                </Col>
            </Row>

        </>
    );
}

export {ElementsPersona};