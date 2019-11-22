import React from "react";
import "../assets/css/paper-dashboard.css";
import ButtonEmpleado from "../components/Empleado/ButtonEmpleado.jsx";
import FormEmpleado from "../components/Empleado/FormEmpleado.jsx";
import ListaEmpleado from "../components/Empleado/ListaEmpleado.jsx"
import {
    Row,
    Col
} from "reactstrap";

class Empleados extends React.Component{
    state ={
        opc : 0
    }
    toggleOpc = (opc)=>{
        this.setState(opc);
    };
    render(){
        if(this.state.opc === 0){
            return (
                <>
                    <div className="content">
                        <Row className="pb-4">
                            <Col lg="12" md="12" sm="12" className="text-center">
                                <span className="h2">Empleados</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6" md="6" sm="6">
                                <ButtonEmpleado value="Nuevo Registro" icon="nc-simple-add" itype="success" mostrar={this.toggleOpc} opc={{opc:1}}/>
                            </Col>
                            <Col lg="6" md="6" sm="6">
                                <ButtonEmpleado value="Listado" icon="nc-align-left-2" itype="warning" mostrar={this.toggleOpc} opc={{opc:2}}/>
                            </Col>
                        </Row>
                    </div>
                </>
            );
        }else if(this.state.opc === 1){
            return (
                <>
                    <div className="content">
                        <Row className="pb-4">
                            <Col lg="12" md="12" sm="12" className="text-center">
                                <span className="h2">Empleados</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="12" md="12" sm="12">
                                <FormEmpleado mostrar={this.toggleOpc} opc={{opc:0}}/>
                            </Col>
                        </Row>
                    </div>
                </>
            );
        }else if(this.state.opc === 2){
            return(
                <>
                    <div className="content">
                        <Row className="pb-4">
                            <Col lg="12" md="12" sm="12" className="text-center">
                                <span className="h2">Empleados</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="12" md="12" sm="12">
                                <ListaEmpleado mostrar={this.toggleOpc} opc={{opc:0}}/>
                            </Col>
                        </Row>
                    </div>
                </>
            );
        }
    };
}

export default Empleados;