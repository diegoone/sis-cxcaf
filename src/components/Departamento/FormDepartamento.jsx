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


function FormDepartamento({mostrar, opc}) {
    return (
        <>
            <Row>
                <Col className="pr-1" md="4">
                    <label>departamento</label>
                    <FormGroup>
                        <CustomInput type="select" name="idDepartamento">
                            <option value=""> Seleccione </option>
                        </CustomInput>
                    </FormGroup>
                </Col>
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
export default FormDepartamento;