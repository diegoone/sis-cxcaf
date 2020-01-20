import React, { useState } from 'react';
import { EnumsRadio } from "../Enums/EnumsRadio";
import { EnumsSelect } from "../Enums/EnumsSelect";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

const ModalEmpleado = (props) => {
    const {
        buttonLabel,
        className,
        empleado,
        enums
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className} size="xl">
                <ModalHeader toggle={toggle}>Datos de Empleado</ModalHeader>
                <ModalBody>
                    <Form>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="nombres">Nombres</Label>
                                    <Input type="text" name="nombres" id="nombres" value={empleado.persona.nombres} disabled/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="apellidos">Apellidos</Label>
                                    <Input type="text" name="apellidos" id="apellidos" value={empleado.persona.apellidos} disabled/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="dui">DUI</Label>
                                    <Input type="text" name="dui" id="dui" value={empleado.persona.dui} disabled/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="genero">Genéro</Label>
                                    <div className="row">
                                        <EnumsRadio items={enums.genero} item={empleado.persona.genero}/>
                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="profesion">Profesión</Label>
                                    <Input type="text" name="profesion" id="profesion" value={empleado.persona.profesion.nombre} disabled/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="salario">Salario</Label>
                                    <Input type="text" name="salario" id="salario" value={empleado.persona.salario} disabled/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="cargo">Cargo</Label>
                                    <EnumsSelect items={enums.cargo} item={empleado.cargo} id="cargo"/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="nit">Nit</Label>
                                    <Input type="text" name="nit" id="nit" value={empleado.persona.nit} disabled/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="fechaN">Fecha de Nacimiento</Label>
                                    <Input type="date" name="fechaN" id="fechaN" value={empleado.persona.fechaN} disabled/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="zona">Zona</Label>
                                    <EnumsSelect items={enums.zona} item={empleado.persona.zona} id="zona"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="username">Usuario</Label>
                                    <Input type="text" name="username" id="username" value={empleado.persona.usuario.username} disabled/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="estadoCivil">EstadoCivil</Label>
                                    <EnumsSelect items={enums.estadocivil} item={empleado.persona.estadoCivil} id="estadoCivil"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="direccion">Dirección</Label>
                                    <Input type="textarea" name="direccion" id="direccion" value={empleado.persona.direccion} disabled/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="warning" onClick={toggle}>Modificar</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Salir</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalEmpleado;