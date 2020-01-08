
import React from "react";
import "../../assets/css/paper-dashboard.css";

import { SelectMarca, FormMarca } from "components/Marca/FormMarca";
import { FormSucursal, SelectSucursal } from "components/Sucursal/FormSucursal";
import { FormDepartamento, SelectDepartamento } from "components/Departamento/FormDepartamento";
import { SelectTipoActivo, FormTipoActivo } from "components/TipoActivo/FormTipoActivo";
import { SelectEmpleado } from "components/Empleado/FormEmpleado";

import {
    Button,
    Card, CardHeader,
    CardBody, CardTitle,
    FormGroup, Form, TextArea,
    CustomInput, Input, Row, Col,
    Label
} from "reactstrap";
class FormActivoFijo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listIdMarca: [],
            listIdSucursal: [],
            listIdDepartamento: [],
            listIdTipoActivo: [],
        };
    }
    componentDidMount() {
        fetch("http://localhost:4000/api/sucursal/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        listIdSucursal: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );//end fetch
        fetch("http://localhost:4000/api/marca/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        listIdMarca: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );//end fetch
        fetch("http://localhost:4000/api/departamento/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        listIdDepartamento: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );//end fetch
        fetch("http://localhost:4000/api/tipoactivo/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        listIdTipoActivo: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );//end fetch
    }
    render() {
        const { mostrar, opc } = this.props;

        return (
            <>
                <Card className="card-user">
                    <CardHeader>
                        <Row>
                            <Col md="1">
                                <div className="icon-big text-center icon-success mt-3">
                                    <i className="nc-icon nc-minimal-left puntero" onClick={() => mostrar(opc)}></i>
                                </div>
                            </Col>
                            <Col md="11">
                                <CardTitle tag="h5" className="text-center">Registro de Activo Fijo</CardTitle>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <div>
                                <ElementsActivoFijo />
                            </div>
                            <div>
                                <SelectEmpleado />
                            </div>
                            <Row>
                                <Col className='pr-1' md='4'>
                                    <FormGroup>
                                        <SelectMarca listIdMarca={this.state.listIdMarca} />
                                        <FormMarca />
                                    </FormGroup>
                                </Col>
                                <Col className='pr-1' md='4'>
                                     <FormGroup>
                                        <SelectSucursal listIdSucursal={this.state.listIdSucursal} />
                                        <FormSucursal />
                                    </FormGroup> 
                                </Col>
                                <Col className='pr-1' md='4'>
                                    <FormGroup>
                                        <SelectDepartamento listIdDepartamento={this.state.listIdDepartamento} />
                                        <FormDepartamento />
                                    </FormGroup>
                                </Col>
                                <Col className='pr-1' md='4'>
                                    <FormGroup>
                                        <SelectTipoActivo listIdTipoActivo={this.state.listIdTipoActivo}/>
                                        <FormTipoActivo />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            </>
        );
    }
}

function ElementsActivoFijo({ mostrar, opc }) {
    return (
        <>
            <Row>
                <Col className="pr-1" md="4">
                    <label>Nombre</label>
                    <FormGroup>
                        <Input defaultValue="" name="nombre" placeholder="Aa" />
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="6">
                    <label>Descripción</label>
                    <FormGroup>
                        <textarea name="descripcion" cols="30" rows="10" className="form-control"></textarea>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col className="pr-1" md="4">

                    <label>Procedencia:</label>
                    <FormGroup>
                        <CustomInput type="select" name="procedencia">
                            <option value=""> Seleccione </option>
                            <option value="NUEVO">NUEVO</option>
                            <option value="USADO">USADO</option>
                            <option value="DONADO NUEVO">DONADO NUEVO</option>
                            <option value="DONADO USADO">DONADO USADO</option>
                        </CustomInput>
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="4">

                    <label>Precio:</label>
                    <FormGroup>
                        <Input name="precio" type="text" placeholder="###.##" />
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="4">

                    <label>Fecha de adquisición:</label>
                    <FormGroup>
                        <Input name="fechaAdquisicion" type="date" placeholder="###.##" />
                    </FormGroup>
                </Col>
            </Row>

        </>
    );
}

export { FormActivoFijo, ElementsActivoFijo };
