import React from "react";
import "../../assets/css/paper-dashboard.css";
import {
  FormProfesion,
  SelectProfesion
} from "components/Profesion/FormProfesion";
import { FormGroup, CustomInput, Input, Row, Col, Label } from "reactstrap";

function ElementsPersona(props) {
  return (
    <>
      <Row form>
        <Col md="4">
          <FormGroup>
            <Label>Nombres</Label>
            <Input
              name="nombres"
              innerRef={props.refer.nombres}
              defaultValue=""
              placeholder="Digite su nombre"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label>Apellidos</Label>
            <Input
              name="apellidos"
              innerRef={props.refer.apellidos}
              defaultValue=""
              placeholder="Digite sus apellidos"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label>DUI</Label>
            <Input
              name="dui"
              innerRef={props.refer.dui}
              defaultValue=""
              placeholder="########-#"
              type="text"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md="4">
          <FormGroup>
            <label>Sexo</label>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  innerRef={props.refer.genero}
                  name="genero"
                  value="masculino"
                />
                Masculino
              </Label>
              <Label check>
                <Input
                  type="radio"
                  innerRef={props.refer.genero}
                  name="genero"
                  value="femenino"
                />
                Femenino
              </Label>
            </FormGroup>
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <label>Estado civil</label>
            <FormGroup>
              <CustomInput
                type="select"
                innerRef={props.refer.estadoCivil}
                name="estadoCivil"
              >
                <option value="">Seleccione...</option>
                {props.estadoCivil.map(item => (
                  <option value={item}>{item}</option>
                ))}
              </CustomInput>
            </FormGroup>
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label>NIT</Label>
            <Input
              name="nit"
              innerRef={props.refer.nit}
              defaultValue=""
              placeholder="####-######-###-#"
              type="text"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md="4">
          <FormGroup>
            <SelectProfesion
              refer={props.refer}
              listIdProfesion={props.listIdProfesion}
            />
            <FormProfesion />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label>Teléfono</Label>
            <Input
              name="telefono"
              innerRef={props.refer.telefono}
              defaultValue=""
              placeholder="####-####"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label>Nº de ISSS</Label>
            <Input
              innerRef={props.refer.isss}
              name="isss"
              placeholder=""
              type="text"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md="4">
          <FormGroup>
            <Label>Fecha de Nacimiento</Label>
            <Input
              name="fechaN"
              innerRef={props.refer.fechaN}
              placeholder="dd/MM/yyyy"
              type="Date"
            />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label>Salario</Label>
            <Input
              name="salario"
              innerRef={props.refer.salario}
              defaultValue=""
              placeholder="###.##"
              type="number"
            />
          </FormGroup>
        </Col>
        <Col md="4">
          <Label>Zona:</Label>
          <FormGroup>
            <CustomInput type="select" innerRef={props.refer.zona} name="zona">
              <option value=""> Seleccione </option>
              {props.zona.map(item => (
                <option value={item}>{item}</option>
              ))}
            </CustomInput>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md="12">
          <FormGroup>
            <label>Direcciòn</label>
            <FormGroup>
              <Input
                type="textarea"
                name="direccion"
                innerRef={props.refer.direccion}
                cols="30"
                rows="10"
                className="form-control"
              />
            </FormGroup>
          </FormGroup>
        </Col>
      </Row>
    </>
  );
}

export { ElementsPersona };
