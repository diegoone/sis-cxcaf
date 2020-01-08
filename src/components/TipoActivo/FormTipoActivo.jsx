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


class FormTipoActivo extends React.Component {
    constructor(props) {
        super(props);
        this.data = {
            nombre: null,
            codigo: null
        };
    }
    render() {
        const ModalTipoActivo = (props) => {
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
                                <ElementsTipoActivo refer={props.refer} />
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
            <ModalTipoActivo refer={this.data} />
        );
    }

}
function ElementsTipoActivo(props) {
    return (
        <>
            <FormGroup>
                <label>Nueva tipo activo </label>
                <Input defaultValue=""
                innerRef={props.refer.nombre}
                name="nombre" type="text" placeholder="Aaaa" />
            </FormGroup>
            <FormGroup>
                <label>Código </label>
                <Input defaultValue=""
                innerRef={props.refer.nombre}
                name="codigo" type="text" placeholder="Aaaa" />
            </FormGroup>



        </>
    );
}
const SelectTipoActivo = (props) => {
    return (
        <>
            <label>Tipo activo</label>
            <CustomInput type="select"
            innerRef={props.refer.idTipoActivoFijo}
            name="idTipoActivo">
                <option value=""> Seleccione </option>
                {props.listIdTipoActivo.map(item =>
                    <option value={item.id}>{item.nombre}</option>
                )
                }
            </CustomInput>
        </>
    );
}
export { SelectTipoActivo, FormTipoActivo };