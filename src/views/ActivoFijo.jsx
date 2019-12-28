import React from "react";
import "../assets/css/paper-dashboard.css";
import Cbuttom from "../components/Buttons/Cbuttom";
import {
    Row,
    Col
} from "reactstrap";
import FormActivoFijo from "components/ActivoFijo/FormActivoFijo";
import ListaActivoFijo from "components/ActivoFijo/ListaActivoFijo";

class ActivoFijo extends React.Component {
    state = {
        opc: 0
    }
    toggleOpc = (opc) => {
        this.setState(opc);
    };
    render() {
        if (this.state.opc === 0) {
            return (
                <>
                    <div className="content">
                        <Row className="pb-4">
                            <Col lg="12" md="12" sm="12" className="text-center">
                                <span className="h2">Activo Fijo</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6" md="6" sm="6">
                                <Cbuttom value="Nuevo Registro" icon="nc-simple-add" itype="success" mostrar={this.toggleOpc} opc={{opc:1}}/>
                            </Col>
                            <Col lg="6" md="6" sm="6">
                                <Cbuttom value="Listado" icon="nc-align-left-2" itype="warning" mostrar={this.toggleOpc} opc={{opc:2}}/>
                            </Col>
                        </Row>
                    </div>
                </>
            );
        } else if(this.state.opc === 1){
            return (
                <>
                    <div className="content">
                        <Row className="pb-4">
                            <Col lg="12" md="12" sm="12" className="text-center">
                                <span className="h2">Activo Fijo</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="12" md="12" sm="12">
                                <FormActivoFijo mostrar={this.toggleOpc} opc={{opc:0}}/>
                            </Col>
                        </Row>
                    </div>
                </>
            );
        } else if(this.state.opc === 2){
            return(
                <>
                    <div className="content">
                        <Row className="pb-4">
                            <Col lg="12" md="12" sm="12" className="text-center">
                                <span className="h2">Activo Fijo</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="12" md="12" sm="12">
                                 <ListaActivoFijo mostrar={this.toggleOpc} opc={{opc:0}}/>
                            </Col>
                        </Row>
                    </div>
                </>
            );
        }
    };
}

export default ActivoFijo;