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


function FormTipoActivo() {
    return (
        <>
            <Row>
                <Col className="pr-1" md="4">
                    <FormGroup>
                        <label>Nueva tipo activo </label>
                        <Input defaultValue="" name="tipoActivo.nombre" type="text" placeholder="Aaaa" />
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="4">
                    <FormGroup>
                        <label>Código </label>
                        <Input defaultValue="" name="tipoActivo.codigo" type="text" placeholder="Aaaa" />
                    </FormGroup>
                </Col>
            </Row>
        </>
    );
}
const SelectTipoActivo = (props) => {
    return (
        <>
            <label>Tipo activo</label>
            <CustomInput type="select" name="idTipoActivo">
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