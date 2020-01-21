import React from "react";
import "../../assets/css/paper-dashboard.css";
import { FormGroup, Input, Row, Col, Label } from "reactstrap";

function ElementsUsuario(props) {
  return (
    <>
      <Row form>
        <Col md="4">
          <FormGroup>
            <Label>Nombre de usuario</Label>
            <Input type="text" placeholder="username" name="username" />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label>Contraseña</Label>
            <Input type="password" placeholder="********" name="password" />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label>Reescribir contraseña</Label>
            <Input type="password" placeholder="********" name="repassword" />
          </FormGroup>
        </Col>
      </Row>
    </>
  );
}
export { ElementsUsuario };
