import React, { useState } from "react";
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
        const ModalMarca = (props) => {
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
                                <ElementsMarca refer={props.refer}/>
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
            <ModalMarca refer={this.data}/>
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