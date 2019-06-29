import React, { Component } from "react";

import {
    Button,
    Card,
    CardHeader,
    Col,
    Container,
    DatePicker,
    Form,
    FormInput,
    FormTextarea,
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
                        <h6 className="m-0">Editar</h6>
                    </CardHeader> 
                    <ListGroup flush>
                        <ListGroupItem className="p-3">
                            <Row>
                                <Col>
                                    <Form>
                                        <Row form>
                                            {/* Nome */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feNome">Nome</label>
                                                <FormInput
                                                    id="feNome"
                                                    placeholder="Nome"
                                                    value={this.state.nome}
                                                    onChange={() => {}}
                                                />
                                            </Col>
                                            {/* E-mail */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feEmail">E-mail</label>
                                                <FormInput
                                                    type="email"
                                                    id="feEmail"
                                                    placeholder="E-mail"
                                                    value={this.state.email}
                                                    onChange={() => {}}
                                                    autoComplete="email"
                                                />
                                            </Col>
                                        </Row>
                                        <Row form>
                                            {/* Data de Nascimento */}
                                            <Col md="4" className="form-group">
                                                <label htmlFor="feDataNascimento">Data de Nascimento</label>
                                                <InputGroup>
                                                    <DatePicker
                                                    size="sm"
                                                    selected={this.state.startDate}
                                                    onChange={this.handleStartDateChange}
                                                    placeholderText="Data de Nascimento"
                                                    dropdownMode="select"
                                                    className="text-center"
                                                    value={this.state.dataNascimento}
                                                    /> 
                                                    <InputGroupAddon type="append">
                                                        <InputGroupText>
                                                            <i className="material-icons">&#xE916;</i>
                                                        </InputGroupText>
                                                    </InputGroupAddon>     
                                                </InputGroup>                                            
                                            </Col>
                                            {/* Peso */}
                                            <Col md="4" className="form-group">
                                                <label htmlFor="fePeso">Peso</label>
                                                <FormInput
                                                    id="fePeso"
                                                    placeholder="Peso"
                                                    value={this.state.peso}
                                                    onChange={() => {}}
                                                />
                                            </Col>
                                            {/* Altura */}
                                            <Col md="4" className="form-group">
                                                <label htmlFor="feAltura">Altura</label>
                                                <FormInput
                                                    id="feAltura"
                                                    placeholder="Altura"
                                                    value={this.state.altura}
                                                    onChange={() => {}}
                                                />
                                            </Col>
                                        </Row>
                                        <Row form>
                                            {/* Observacoes */}
                                            <Col md="12" className="form-group">
                                                <label htmlFor="feObservacoes">Observações</label>
                                                <FormTextarea id="feObservacoes" rows="5" value={this.state.observacoes} />
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