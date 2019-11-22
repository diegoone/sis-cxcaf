import React from "react";
import "../assets/css/paper-dashboard.css";
import ButtonEmpleado from "../components/Empleado/ButtonEmpleado.jsx";
import FormEmpleado from "../components/Empleado/FormEmpleado.jsx";
import {
    Row,
    Col
} from "reactstrap";

class Empleados extends React.Component{
    state ={
        show : true
    }

    toggleShow = ()=>{
        console.log("funciona el click");
        this.setState({show : !this.state.show});
    };
    render(){
        if(this.state.show){
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
                                <ButtonEmpleado value="Nuevo Registro" icon="nc-simple-add" itype="success" ocultar={this.toggleShow}/>
                            </Col>
                            <Col lg="6" md="6" sm="6">
                                <ButtonEmpleado value="Listado" icon="nc-align-left-2" itype="warning"/>
                            </Col>
                        </Row>
                    </div>
                </>
            );
        }else{
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
                                <FormEmpleado/>
                            </Col>
                        </Row>
                    </div>
                </>
            );
        }
    };
}

export default Empleados;