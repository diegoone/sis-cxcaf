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

class FormDepartamento extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Row>
                    <Col className="pr-1" md="4">
                        <FormGroup>
                            <label>Nueva departamento </label>
                            <Input defaultValue="" name="departamento.nombre" type="text" placeholder="Aaaa" />
                        </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                        <FormGroup>
                            <label>Código </label>
                            <Input defaultValue="" name="departamento.codigo" type="text" placeholder="Aaaa" />
                        </FormGroup>
                    </Col>
                </Row>
            </>
        );
    }
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