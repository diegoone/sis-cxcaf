import React from "react";
import "../../assets/css/paper-dashboard.css";
import {
    FormGroup,
    CustomInput,
    Input,
    Row,
    Col,
    Label,
} from "reactstrap";

class Profesion extends React.Component {
    constructor(props) {
        super(props);
        this.data = {
            id: null,
            nombre: null,
        };
        for (var prop in this.data) {
            if (Object.prototype.hasOwnProperty.call(this.data, prop)) {
                this.data[prop] = React.createRef();
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleSubmit(event) {
        event.preventDefault();

    }
}
function ElementsProfesion(props) {

    const { mostrar, opc } = props;
    return (
        <>
            <Row>
                <Col className="pr-1" md="4">
                    <FormGroup>
                        <label>Nueva profesión </label>
                        <Input defaultValue="" name="profesion.nombre" type="text" placeholder="Aaaa" />
                    </FormGroup>
                </Col>
            </Row>
        </>
    );
}
function SelectProfesion() {
    return (
        <Col className="pr-1" md="4">
            <label>Profeciòn u oficio</label>
            <FormGroup>
                <CustomInput type="select" name="idProfesion">
                    <option value=""> Seleccione </option>
                </CustomInput>
            </FormGroup>
        </Col>
    );
}
function fetchProfesion() {
    fetch("http://localhost:4000/items")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
}
export { ElementsProfesion, SelectProfesion };