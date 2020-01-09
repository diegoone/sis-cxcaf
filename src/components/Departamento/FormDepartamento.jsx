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

class FormDepartamento extends React.Component {
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
        alert('a');
        event.preventDefault();
        var obj = CaptureForm(this.data);
        alert(JSON.stringify(obj));
        var init = {
            method: 'post',
            body: JSON.stringify(obj),
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(urlApi + '/departamento', init)
            .then(function (response) {
                return response.json();
            })
            .then(this.handleUpdate);

    }
    render() {
        const ModalDepartamento = (props) => {
            const {
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
                                <ElementsDepartamento refer={props.refer} />
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" color="primary">Guardar</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>
                </>
            );
        }

        return (
            <ModalDepartamento refer={this.data} />
        );
    }

}
function ElementsDepartamento(props) {
    return (
        <>
            <FormGroup>
                <label>Nueva departamento </label>
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
const SelectDepartamento = (props) => {
    return (
        <>
            <FormGroup>
                <label>departamento</label>
                <CustomInput type="select"
                    innerRef={props.refer.idDepartamento}
                    name="idDepartamento">
                    <option value=""> Seleccione </option>
                    {props.listIdDepartamento.map(item =>
                        <option value={item.id}>{item.nombre}</option>
                    )}
                </CustomInput>
            </FormGroup>
        </>
    );

}
export { FormDepartamento, SelectDepartamento };