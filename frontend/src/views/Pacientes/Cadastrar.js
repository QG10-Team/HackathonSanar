import React, { Component } from "react";

import {
  Button,
  Card,
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
import API from "../../services/api";

import PageTitle from "../../components/common/PageTitle";

class Cadastrar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: undefined,
      paciente: {
        cpf: undefined,
        nome: undefined,
        data_nascimento: undefined,
        peso: undefined,
        altura: undefined,
        observacoes: undefined
      }
    };

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
  }

  handleStartDateChange(value) {
    this.setState({
      startDate: new Date(value)
    });
  }

  handleChange = e => {
    const { name, value } = e.target;
    const { paciente } = this.state;

    this.setState({
      paciente: { ...paciente, [name]: value }
    });
  };

  handleSubmit = async e => {
    const response = await API.get(
      `/cadastrar_paciente?cpf=${this.state.paciente.cpf}&nome=${this.state.paciente.nome}&data_nascimento=${this.state.paciente.data_nascimento}&peso=${this.state.paciente.peso}&altura=${this.state.paciente.altura}&observacoes=${this.state.paciente.observacoes}`
    );
    console.log(response);

    return this.props.history.push("/pacientes");
  };

  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Cadastrar"
            subtitle="Pacientes"
            className="text-sm-left"
          />
        </Row>
        <Card small className="mb-4">
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
                          name="nome"
                          onChange={e => this.handleChange(e)}
                        />
                      </Col>
                      {/* E-mail */}
                      <Col md="6" className="form-group">
                        <label htmlFor="feEmail">E-mail</label>
                        <FormInput
                          type="email"
                          id="feEmail"
                          placeholder="E-mail"
                          name="email"
                          onChange={e => this.handleChange(e)}
                          autoComplete="email"
                        />
                      </Col>
                    </Row>
                    <Row form>
                      {/* Data de Nascimento */}
                      <Col md="4" className="form-group">
                        <label htmlFor="feDataNascimento">
                          Data de Nascimento
                        </label>
                        <InputGroup>
                          <DatePicker
                            size="sm"
                            selected={this.state.startDate}
                            onChange={this.handleStartDateChange}
                            placeholderText="Data de Nascimento"
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
                      {/* Peso */}
                      <Col md="4" className="form-group">
                        <label htmlFor="fePeso">Peso</label>
                        <FormInput
                          id="fePeso"
                          placeholder="Peso"
                          name="peso"
                          onChange={e => this.handleChange(e)}
                        />
                      </Col>
                      {/* Altura */}
                      <Col md="4" className="form-group">
                        <label htmlFor="feAltura">Altura</label>
                        <FormInput
                          id="feAltura"
                          placeholder="Altura"
                          name="altura"
                          onChange={e => this.handleChange(e)}
                        />
                      </Col>
                    </Row>
                    <Row form>
                      {/* Observacoes */}
                      <Col md="12" className="form-group">
                        <label htmlFor="feObservacoes">Observações</label>
                        <FormTextarea
                          id="feObservacoes"
                          name="observacoes"
                          onChange={e => this.handleChange(e)}
                          rows="5"
                        />
                      </Col>
                    </Row>
                    <Button theme="accent" onClick={() => this.handleSubmit()}>
                      Cadastrar
                    </Button>
                  </Form>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Container>
    );
  }
}

export default Cadastrar;
