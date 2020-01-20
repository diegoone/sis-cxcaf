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
    CustomInput
} from 'reactstrap';

const ModalCliente = (props) => {
    const {
        buttonLabel,
        className,
        cliente,
        enums
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className} size="xl">
                <ModalHeader toggle={toggle}>Datos de Cliente</ModalHeader>
                <ModalBody>
                    <Form>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="nombres">Nombres</Label>
                                    <Input type="text" name="nombres" id="nombres" value={cliente.persona.nombres} disabled />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="apellidos">Apellidos</Label>
                                    <Input type="text" name="apellidos" id="apellidos" value={cliente.persona.apellidos} disabled />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="dui">DUI</Label>
                                    <Input type="text" name="dui" id="dui" value={cliente.persona.dui} disabled />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="genero">Genero</Label>
                                    <div className="row">
                                        <EnumsRadio items={enums.genero} item={cliente.persona.genero} />
                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="profesion">Profesion</Label>
                                    <Input type="text" name="profesion" id="profesion" value={cliente.persona.profesion.nombre} disabled />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="salario">Salario</Label>
                                    <Input type="text" name="salario" id="salario" value={cliente.persona.salario} disabled />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={3}>
                                <FormGroup>
                                    <Label >Clasificasión</Label>
                                    <div className="row">
                                        <Tipo tipo={cliente.clasificacion} />
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="tipo">Tipo</Label>
                                    <EnumsSelect items={enums.tipo} item={cliente.tipo} id="tipo" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="nit">Nit</Label>
                                    <Input type="text" name="nit" id="nit" value={cliente.persona.nit} disabled />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="fechaN">Fecha de Nacimiento</Label>
                                    <Input type="date" name="fechaN" id="fechaN" value={cliente.persona.fechaN} disabled />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="zona">Zona</Label>
                                    <EnumsSelect items={enums.zona} item={cliente.persona.zona} id="zona" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="username">Usuario</Label>
                                    <Input type="date" name="username" id="username" value={cliente.persona.usuario.username} disabled />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="estadoCivil">EstadoCivil</Label>
                                    <EnumsSelect items={enums.estadocivil} item={cliente.persona.tipo} id="estadoCivil" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="direccion">Dirección</Label>
                                    <Input type="textarea" name="direccion" id="direccion" value={cliente.persona.direccion} disabled />
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

const Tipo = ({ tipo }) => {
    if (tipo == "A") {
        return (
            <>
                <CustomInput className="ml-4" type="radio" id="A" name="A" label="A" checked disabled />
                <CustomInput className="ml-4" type="radio" id="B" name="B" label="B" disabled />
                <CustomInput className="ml-4" type="radio" id="C" name="C" label="C" disabled />
                <CustomInput className="ml-4" type="radio" id="D" name="D" label="D" disabled />
            </>
        )
    } else {
        if (tipo == "B") {
            return (
                <>
                    <CustomInput className="ml-4" type="radio" id="A" name="A" label="A" disabled />
                    <CustomInput className="ml-4" type="radio" id="B" name="B" label="B" checked disabled />
                    <CustomInput className="ml-4" type="radio" id="C" name="C" label="C" disabled />
                    <CustomInput className="ml-4" type="radio" id="D" name="D" label="D" disabled />
                </>
            )
        } else {
            if (tipo == "C") {
                return (
                    <>
                        <CustomInput className="ml-4" type="radio" id="A" name="A" label="A" disabled />
                        <CustomInput className="ml-4" type="radio" id="B" name="B" label="B" disabled />
                        <CustomInput className="ml-4" type="radio" id="C" name="C" label="C" checked disabled />
                        <CustomInput className="ml-4" type="radio" id="D" name="D" label="D" disabled />
                    </>
                )
            } else {
                if (tipo == "D") {
                    return (
                        <>
                            <CustomInput className="ml-4" type="radio" id="A" name="A" label="A" disabled />
                            <CustomInput className="ml-4" type="radio" id="B" name="B" label="B" disabled />
                            <CustomInput className="ml-4" type="radio" id="C" name="C" label="C" disabled />
                            <CustomInput className="ml-4" type="radio" id="D" name="D" label="D" checked disabled />
                        </>
                    )
                }
            }
        }
    }
}

export default ModalCliente;