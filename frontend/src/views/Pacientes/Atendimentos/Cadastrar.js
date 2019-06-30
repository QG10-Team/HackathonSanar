import React, { Component } from "react";

import {
  Button,
  Card,
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
  FormTextarea,
  Row
} from "shards-react";

import API from "../../../services/api";

import PageTitle from "../../../components/common/PageTitle";

class Cadastrar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: undefined,
      leito: [],
      pacientes: [],
      id: undefined,
      atendimento: {
        id_paciente: undefined,
        id_usuario: undefined,
        nivel: undefined,
        descricao: undefined,
        id_leito: undefined
      }
    };

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const responseLeitos = await API.get("/leito_lista");
    this.setState({ id, leito: responseLeitos.data });
  }

  handleStartDateChange(value) {
    this.setState({
      startDate: new Date(value)
    });
  }

  handleChange = e => {
    const { name, value } = e.target;
    const { atendimento } = this.state;

    this.setState({
      atendimento: { ...atendimento, [name]: value }
    });
  };

  handleSubmit = async e => {
    const response = await API.get(
      `/cadastrar_atendimento?id_paciente=${this.state.id}&id_usuario=${this.state.id_usuario}&nivel=${this.state.nivel}&descricao=${this.state.descricao}&id_leito=${this.state.leito}`
    );
    return this.props.history.push("/pacientes");
  };

  render() {
    const listarLeito = this.state.leito.map(leito => (
      <option key={leito.id} value={leito.id}>
        {leito.codigo}
      </option>
    ));

    // const listarPacientes = this.state.pacientes.map(paciente => (
    //   <option key={this.state.pacientes.id} value="">
    //     {this.state.leito.nome}
    //   </option>
    // ));

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Cadastrar"
            subtitle="Atendimento"
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
                      {/* Paciente */}
                      {/* <Col md="4" className="form-group">
                        <label htmlFor="fePaciente">Paciente</label>
                        <FormSelect>
                          <option> .: Selecione :. </option>
                          {listarPacientes}
                        </FormSelect>
                      </Col> */}
                      {/* Leito */}
                      <Col md="6" className="form-group">
                        <label htmlFor="feLeito">Leito</label>
                        <FormSelect
                          name="leito"
                          onChange={e => this.handleChange(e)}
                        >
                          <option> .: Selecione :. </option>
                          {listarLeito}
                        </FormSelect>
                      </Col>
                      {/* Nivel de Atendimento */}
                      <Col md="6" className="form-group">
                        <label htmlFor="feNivelAtendimento">
                          Nível de Atendimento
                        </label>
                        <FormSelect
                          name="nivel"
                          onChange={e => this.handleChange(e)}
                        >
                          <option> .: Selecione :. </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </FormSelect>
                      </Col>
                    </Row>
                    <Row>
                      {/* Data do Atendimento */}
                      <Col md="3" className="form-group">
                        <label htmlFor="feDataAtendimento">
                          Data do Atendimento
                        </label>
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
                      {/* Status */}
                      <Col md="3" className="form-group">
                        <label htmlFor="feStatus">Status</label>
                        <FormRadio>Finalizado</FormRadio>
                      </Col>
                    </Row>
                    <Row form>
                      {/* Description */}
                      <Col md="12" className="form-group">
                        <label htmlFor="feObservacoes">Observacoes</label>
                        <FormTextarea
                          id="observacao"
                          name="observacao"
                          rows="5"
                          onChange={e => this.handleChange(e)}
                        />
                      </Col>
                    </Row>
                    <Button theme="accent" onClick={e => this.handleSubmit(e)}>
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
