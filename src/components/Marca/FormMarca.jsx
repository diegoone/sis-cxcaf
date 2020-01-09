import React, { useState } from "react";
import { CaptureForm, CreateReferencies, urlApi } from "Utils/FormUtil";
import "../../assets/css/paper-dashboard.css";
import {
    FormGroup,
    CustomInput,
    Input,
    Row,
    Col,
    Form,
    Label,
    Modal,
    ModalHeader,
    ModalBody, ModalFooter,
    Button,
} from "reactstrap";

class FormMarca extends React.Component {
    constructor(props) {
        super(props);
        this.data = {
            nombre: null,
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
        fetch(urlApi + '/marca', init)
            .then(function (response) {
                return response.json();
            })
            .then(this.handleUpdate);

    }
    render() {
        const ModalMarca = (props) => {
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
                                <ElementsMarca refer={props.refer} />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" type='submit'>}Guardar</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancelar</Button>
                            </ModalFooter>
                        </Form>

                    </Modal>
                </>
            );
        }

        return (
            <ModalMarca refer={this.data} />
        );
    }
}




function ElementsMarca(props) {
    return (
        <>
            <FormGroup>
                <label>Nueva marca </label>
                <Input defaultValue=""
                    innerRef={props.refer.nombre}
                    name="nombre" type="text" placeholder="Aaaa" />
            </FormGroup>
        </>
    );
}
const SelectMarca = (props) => {

    return (
        <>
            <label>Marca</label>
            <CustomInput type="select" ref={props.refer.idMarca} name="idMarca">
                <option value=""> Seleccione </option>
                {props.listIdMarca.map(item =>
                    <option value={item.id}>{item.nombre}</option>
                )}
            </CustomInput>
        </>
    );
}
export { ElementsMarca, FormMarca, SelectMarca };