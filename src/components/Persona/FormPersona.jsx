import React from "react";
import "../../assets/css/paper-dashboard.css";
import { FormProfesion, SelectProfesion } from "components/Profesion/FormProfesion";
import {
    FormGroup,
    CustomInput,
    Input,
    Row,
    Col,
    Label,
} from "reactstrap";

function ElementsPersona(props) {

    const { mostrar, opc } = props;
    return (
        <>
            <Row>
                <Col className="pr-1" md="4">
                    <FormGroup>
                        <label>DUI</label>
                        <Input
                            name="dui"
                            innerRef={props.refer.dui}
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
                            innerRef={props.refer.nombres}
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
                            innerRef={props.refer.apellidos}
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
                                <Input type="radio" innerRef={props.refer.genero} name="genero" value="masculino" />
                                Masculino
                                        </Label>
                            <Label check>
                                <Input type="radio" innerRef={props.refer.genero} name="genero" value="femenino" />
                                Femenino
                                        </Label>
                        </FormGroup>
                    </FormGroup>
                </Col>
                <Col md="4">
                    <FormGroup>
                        <label >Estado civil</label>
                        <FormGroup>
                            <CustomInput type="select" innerRef={props.refer.estadoCivil} name="estadoCivil">
                                <option value="">Seleccione...</option>
                                {props.estadoCivil.map(item => (
                                    <option value={item}>{item}</option>
                                )
                                )}
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
                            innerRef={props.refer.nit}
                            defaultValue=""
                            placeholder="####-######-###-#"
                            type="text"
                        />
                    </FormGroup>
                </Col>
                <Col className="pl-1" md="4">
                    <FormGroup>
                        <label>Fecha de Nacimiento</label>
                        <Input
                            name="fechaN"
                            innerRef={props.refer.fechaN}
                            placeholder="dd/MM/yyyy"
                            type="Date" />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col className='pr-1' md='4'>
                    <FormGroup>
                        <SelectProfesion
                        refer={props.refer}
                        listIdProfesion={props.listIdProfesion}/>
                        <FormProfesion />
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="4">
                    <FormGroup>
                        <label>Teléfono</label>
                        <Input
                            name="telefono"
                            innerRef={props.refer.telefono}
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
                            innerRef={props.refer.isss}
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
                            innerRef={props.refer.salario}
                            defaultValue=""
                            placeholder=""
                            type="text"
                        />
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="4">

                    <label>Zona:</label>
                    <FormGroup>
                        <CustomInput type="select" innerRef={props.refer.zona} name="zona">
                            <option value=""> Seleccione </option>
                            {props.zona.map(item => (
                                <option value={item}>{item}</option>
                            )
                            )}
                        </CustomInput>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col className="pr-1" md="8">
                    <FormGroup>
                        <label>Direcciòn</label>
                        <FormGroup>
                            <Input type="textarea" name="direccion"
                                innerRef={props.refer.direccion}
                                cols="30" rows="10" className="form-control" />
                        </FormGroup>
                    </FormGroup>
                </Col>
            </Row>

        </>
    );
}

export { ElementsPersona };