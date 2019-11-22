import React from "react";
import "../../assets/css/paper-dashboard.css";
import {
    Card,
    CardHeader,
    CardBody,
    Row,
    Col
} from "reactstrap";

function ButtonEmpleado({value, icon, itype, mostrar, opc}){
    return (
        <>
            <Card className="card-stats">
                <CardHeader>
                    <Row>
                        <Col md="12" xs="12" className="text-center">
                            <span className="h6">{value}</span>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col md="12" xs="5">
                            <div className={`icon-big text-center icon-${itype}`}>
                                <i className={`nc-icon ${icon} text-${itype}  puntero`} onClick={()=>{
                                    mostrar(opc);
                                }}/>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
}

export default ButtonEmpleado;