import React, { useState } from "react";
import "../../assets/css/paper-dashboard.css";
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
    }
    render() {
        const ModalDepartamento = (props) => {
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
                                <ElementsDepartamento />
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
            <ModalDepartamento buttonLabel="abrir" />
        );
    }

}
function ElementsDepartamento(props) {
    return (
        <>
            <FormGroup>
                <label>Nueva departamento </label>
                <Input defaultValue="" name="departamento.nombre" type="text" placeholder="Aaaa" />
            </FormGroup>
            <FormGroup>
                <label>Código </label>
                <Input defaultValue="" name="departamento.codigo" type="text" placeholder="Aaaa" />
            </FormGroup>
        </>
    );
}
const SelectDepartamento = (props) => {
    return (
        <>
            <label>departamento</label>
            <CustomInput type="select" name="idDepartamento">
                <option value=""> Seleccione </option>
                {props.listIdDepartamento.map(item =>
                    <option value={item.id}>{item.nombre}</option>
                )}
            </CustomInput>
        </>
    );

}
export { FormDepartamento, SelectDepartamento };