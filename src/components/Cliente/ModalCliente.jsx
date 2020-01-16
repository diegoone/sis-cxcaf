import React, { useState } from 'react';
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
        cliente
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Datos de Cliente</ModalHeader>
                <ModalBody>
                    <Form>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="nombres">Nombres</Label>
                                    <Input type="text" name="nombres" id="nombres" value={cliente.persona.nombres} disabled/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="apellidos">Apellidos</Label>
                                    <Input type="text" name="apellidos" id="apellidos" value={cliente.persona.apellidos} disabled/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="dui">DUI</Label>
                                    <Input type="text" name="dui" id="dui" value={cliente.persona.dui} disabled/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="genero">Genero</Label>
                                    <Genero genero={cliente.persona.genero}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="profesion">Profesion</Label>
                                    <Input type="text" name="profesion" id="profesion" value={cliente.persona.profesion.nombre} disabled/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="salario">Salario</Label>
                                    <Input type="text" name="salario" id="salario" value={cliente.persona.salario} disabled/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label >Clasificasión : {cliente.clasificacion}</Label>
                                    <Label >Tipo : {cliente.tipo}</Label>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="nit">Nit</Label>
                                    <Input type="text" name="nit" id="nit" value={cliente.persona.nit} disabled/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="fechaN">Fecha de Nacimiento</Label>
                                    <Input type="date" name="fechaN" id="fechaN" value={cliente.persona.fechaN} disabled/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="zona">Zona</Label>
                                    <Input type="text" name="zona" id="zona" value={cliente.persona.zona} disabled/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="username">Usuario</Label>
                                    <Input type="date" name="username" id="username" value={cliente.persona.usuario.username} disabled/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="estadoCivil">EstadoCivil</Label>
                                    <Input type="text" name="estadoCivil" id="estadoCivil" value={cliente.persona.estadoCivil} disabled/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="direccion">Dirección</Label>
                                    <Input type="textarea" name="direccion" id="direccion" value={cliente.persona.direccion} disabled/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Salir</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const Genero = ({genero}) =>{
    if(genero == "masculino"){
        return (
            <>
                <CustomInput type="radio" id="masculino" name="genero" label="masculino" checked disabled/>
                <CustomInput type="radio" id="femenino" name="genero" label="femenino" disabled/>
            </>
        );
    }else{
        return (
            <>
                <CustomInput type="radio" id="masculino" name="genero" label="masculino" disabled/>
                <CustomInput type="radio" id="femenino" name="genero" label="femenino" checked disabled/>
            </>
        );
    }
}

export default ModalCliente;