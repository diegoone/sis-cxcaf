import React from "react";
import FormPersona from "components/Persona/FormPersona";
import "../../assets/css/paper-dashboard.css";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    CustomInput,
    Input,
    Row,
    Col,
    Label,
} from "reactstrap";
import { ElementsPersona } from "components/Persona/FormPersona";

function ElementsFiador(props) {
    return (
        <>
            <hr className="border"></hr>
            <h4 className="offset-1">Datos del Fiador</h4>
            <ElementsPersona />
        </>
    );
}

export { ElementsFiador};