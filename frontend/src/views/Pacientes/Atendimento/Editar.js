import React, { Component } from "react";

import {
    Button,
    Card,
    CardHeader,
    Col,
    Container,
    DatePicker,
    Form,
    FormRadio,
    FormSelect,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    ListGroup,
    ListGroupItem,
    Row
  } from "shards-react";

class Cadastro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: undefined,
            paciente: []
        };

        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        }

    handleStartDateChange(value) {
        this.setState({
            ...this.state,
            ...{ startDate: new Date(value) }
        });
    }

    render() {
        return (
            <Container fluid className="main-content-container px-4 pb-4">     
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Atendimento</h6>
                    </CardHeader> 
                    <ListGroup flush>
                        <ListGroupItem className="p-3">
                            <Row>
                                <Col>
                                    <Form>
                                        <Row form>
                                            {/* Nivel de Atendimento */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feNivelAtendimento">Nível de Atendimento</label>
                                                <FormSelect>
                                                    <option> .: Selecione :. </option>
                                                    <option value='1'>Alta</option>
                                                    <option value='2'>Estável</option>
                                                    <option value='3'>Grave</option>
                                                </FormSelect>
                                            </Col>
                                        </Row>
                                        <Row>
                                            {/* Data do Atendimento */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feDataAtendimento">Data de Atendimento</label>
                                                <InputGroup>
                                                    <DatePicker
                                                    size="sm"
                                                    selected={this.state.startDate}
                                                    onChange={this.handleStartDateChange}
                                                    placeholderText="Data de Atendimento"
                                                    dropdownMode="select"
                                                    className="text-center"
                                                    /> 
                                                    <InputGroupAddon type="append">
                                                        <InputGroupText>
                                                            <i className="material-icons">&#xE916;</i>
                                                        </InputGroupText>
                                                    </InputGroupAddon>     
                                                </InputGroup>                                        
                                            </Col>
                                        </Row>
                                        <Row>
                                            {/* Status */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feStatus">Status</label>
                                                <FormRadio>Finalizado</FormRadio>                   
                                            </Col>
                                        </Row>
                                        <Button theme="accent">Atualizar</Button>
                                    </Form>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Container>
        );
    }
};

export default Cadastro;