import React, { useState } from "react";
import "../../assets/css/paper-dashboard.css";
import { CaptureForm, CreateReferencies, urlApi } from "Utils/FormUtil";

import {
    FormGroup,
    CustomInput,
    Input,
    Row,
    Col,
    Form,
    Label, Modal,
    ModalHeader,
    ModalBody, ModalFooter,
    Button,
} from "reactstrap";


class FormSucursal extends React.Component {
    constructor(props) {
        super(props);
        this.data = {
            nombre: null,
            codigo: null
        };
        CreateReferencies(this.data);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(data) {
        this.props.handleUpdate && this.props.handleUpdate(data.id);
    }

    handleSubmit(event) {
        event.preventDefault();
        var obj = CaptureForm(this.data);
        var init = {
            method: 'post',
            body: JSON.stringify(obj),
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(urlApi + '/sucursal', init)
            .then(function (response) {
                return response.json();
            })
            .then(this.handleUpdate);

    }
    render() {
        const ModalSucursal = (props) => {
            const {
                className
            } = props;
            const [modal, setModal] = useState(false);
            const toggle = () => setModal(!modal);
            return (
                <>
                    <Button color="danger" onClick={toggle}>Crear<i className='fas fa-plus'></i></Button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                        <Form onSubmit={this.handleSubmit}>
                            <ModalHeader toggle={toggle}>Modal title</ModalHeader>

                            <ModalBody>
                                <ElementsSucursal refer={props.refer} />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary">Guardar</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancelar</Button>
                            </ModalFooter>
                        </Form>

                    </Modal>
                </>
            );
        }

        return (
            <ModalSucursal refer={this.data} />
        );
    }
}
function ElementsSucursal(props) {
    return (
        <>
            <FormGroup>
                <label>Nueva sucursal </label>
                <Input defaultValue=""
                    innerRef={props.refer.nombre}
                    name="nombre" type="text" placeholder="Aaaa" />
            </FormGroup>
            <FormGroup>
                <label>Código </label>
                <Input defaultValue=""
                    innerRef={props.refer.codigo}
                    name="codigo" type="text" placeholder="Aaaa" />
            </FormGroup>
        </>
    );
}
const SelectSucursal = (props) => {
    return (
        <>
            <label>Sucursal</label>
            <CustomInput type="select"
                innerRef={props.refer.idSucursal}
                name="idSucursal">
                <option value=""> Seleccione </option>
                {props.listIdSucursal.map(item =>
                    <option value={item.id}>{item.nombre}</option>
                )
                }
            </CustomInput>
        </>
    );
}
export { FormSucursal, SelectSucursal };