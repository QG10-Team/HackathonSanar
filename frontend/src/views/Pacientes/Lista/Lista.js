import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Button
} from "shards-react";

import PageTitle from "../../../components/common/PageTitle";
import Paciente from "./Paciente";

import API from "../../../services/api";

class Pacientes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pacientes: []
    };
  }

  async componentDidMount() {
    const responsePacientes = await API.get("/paciente");
    this.setState({ pacientes: responsePacientes.data });
  }

  render() {
    const { pacientes } = this.state;
    const listaPacientes = pacientes.map((paciente, idx) => (
      <Paciente key={idx} paciente={paciente} />
    ));

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Lista"
            subtitle="Pacientes"
            className="text-sm-left"
          />
        </Row>

        {/* Default Light Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0 10px"
                  }}
                >
                  <h6 className="m-0">Pacientes</h6>
                  <Button
                    size="sm"
                    theme="success"
                    className="mb-2 mr-1"
                    href="/pacientes/cadastrar"
                  >
                    Novo Paciente
                  </Button>
                </Row>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        #
                      </th>
                      <th scope="col" className="border-0">
                        Nome
                      </th>
                      <th scope="col" className="border-0">
                        E-mail
                      </th>
                      <th scope="col" className="border-0">
                        Data de Nascimento
                      </th>
                      <th scope="col" className="border-0">
                        Peso
                      </th>
                      <th scope="col" className="border-0">
                        Altura
                      </th>
                      <th scope="col" className="border-0">
                        Ação
                      </th>
                    </tr>
                  </thead>
                  <tbody>{listaPacientes}</tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Pacientes;
