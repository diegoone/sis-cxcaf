import React, { useState } from "react";
import "../../assets/css/paper-dashboard.css";
import {
    FormGroup,
    CustomInput,
    Input,
    Row,
    Col,
    Label,
    Form, Button, Modal, ModalBody, ModalHeader, ModalFooter,
} from "reactstrap";

class FormProfesion extends React.Component {
    constructor(props) {
        super(props);
        this.data = {
            nombre: null,
        };
        for (var prop in this.data) {
            if (Object.prototype.hasOwnProperty.call(this.data, prop)) {
                this.data[prop] = React.createRef();
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        var obj = {};
        for (var prop in this.data) {
            if (Object.prototype.hasOwnProperty.call(this.data, prop)) {
                console.log(prop, this.data[prop].current);
                obj[prop] = this.state[prop].current.value;
            }
        }

        console.log(this.data);
    }
    render() {
        const ModalProfesion = (props) => {
            const {
                buttonLabel,
                className
            } = props;
            const [modal, setModal] = useState(false);
            const toggle = () => setModal(!modal);
            return (
                <>
                    <Button color="danger" onClick={toggle}>Crear<i className='fas fa-plus'></i></Button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSubmit}>
                                <ElementsProfesion />
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>Guardar</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>
                </>
            );
        }

        return (
            <ModalProfesion buttonLabel="abrir" />
        );
    }
}




function ElementsProfesion() {
    return (
        <>
            <label>Nueva profesión </label>
            <Input defaultValue="" name="profesion.nombre" type="text" placeholder="Aaaa" />
        </>
    );
}
const SelectProfesion = (props) => {
    return (
        <>
            <label>Profesión</label>
            <CustomInput type="select" name="idProfesion">
                <option value=""> Seleccione </option>
                {props.listIdProfesion.map(item => (
                    <option value={item.id}>{item.nombre}</option>
                )
                )}
            </CustomInput>
        </>
    );
}
export { FormProfesion, SelectProfesion };