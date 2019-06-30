import React from "react";
import { format } from "date-fns";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Badge,
  CardFooter,
  ButtonGroup,
  Button
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import API from "../../services/api";

class Leitos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leitos: [],
      pacientes: []
    };
  }

  async componentDidMount() {
    const responsePacientes = await API.get("/espera");
    const responseLeitos = await API.get("/leito_lista");
    this.setState({
      leitos: responseLeitos.data.empty !== 1 ? responseLeitos.data : [],
      pacientes: responsePacientes.data
    });
  }

  handlePriorityColor = key => {
    switch (key) {
      case "1":
        return "#5F6368";
      case "2":
        return "#FFC130";
      case "3":
        return "#FFB400";
      case "4":
        return "#C43C5A";
      case "5":
        return "#C4183C";
      default:
        return "#5F6368";
    }
  };

  render() {
    const { pacientes, leitos } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Leitos"
            subtitle="Controle"
            className="text-sm-left"
          />
        </Row>

        {/* Leitos disponiveis */}
        <Row>
          <Col md="7" sm="12">
            <Card small className="blog-comments">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Lista de espera</h6>
              </CardHeader>

              <CardBody className="p-0">
                {pacientes.map((paciente, idx) => (
                  <div key={idx} className="blog-comments__item d-flex p-3">
                    {/* Avatar */}
                    <div className="blog-comments__avatar mr-3">
                      <img
                        src="https://png.pngtree.com/svg/20161027/631929649c.svg"
                        alt={paciente.name}
                      />
                    </div>

                    {/* Content */}
                    <div className="blog-comments__content">
                      {/* Content :: Title */}
                      <div className="blog-comments__meta text-mutes">
                        <span className="text-mutes">
                          <Badge
                            pill
                            style={{
                              borderRadius: "50%",
                              padding: "8px",
                              marginBottom: "-2px",
                              backgroundColor: `${this.handlePriorityColor(
                                paciente.nivel
                              )}`
                            }}
                            className={`card-post__category`}
                          >
                            {" "}
                          </Badge>
                        </span>
                        <a className="text-secondary" href={paciente.url}>
                          {" "}
                          {paciente.name} (
                          {format(
                            new Date(paciente.dataNascimento),
                            "DD/MM/YYYY"
                          )}
                          )
                        </a>
                        <span className="text-mutes">
                          {" "}
                          - {format(paciente.date, "DD/MM/YYYY")}
                        </span>
                      </div>

                      {/* Content :: Body */}
                      <p className="m-0 my-1 mb-2 text-muted">
                        {paciente.descricao}
                      </p>

                      {/* Content :: Actions */}
                      <div className="blog-comments__actions">
                        <ButtonGroup size="sm">
                          <Button
                            theme="white"
                            onClick={() =>
                              this.props.history.push(`/${paciente.id}`)
                            }
                          >
                            <span className="text-success">
                              <i className="material-icons">check</i>
                            </span>{" "}
                            Ir para o atendimento
                          </Button>
                        </ButtonGroup>
                      </div>
                    </div>
                  </div>
                ))}
              </CardBody>

              <CardFooter className="border-top">
                <Row>
                  <Col className="text-center view-report">
                    {/* <Button theme="white" type="submit">
                  View All Comments
                </Button> */}
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
          <Col md="5" sm="12">
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Leitos Disponíveis </h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        #
                      </th>
                      <th scope="col" className="border-0">
                        Status
                      </th>
                      <th scope="col" className="border-0">
                        Código
                      </th>
                      <th scope="col" className="border-0">
                        Paciente
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {leitos.map((leito, idx) => (
                      <tr key={idx}>
                        <td>{leito.id}</td>
                        <td>
                          <Badge
                            pill
                            className={`card-post__category bg-${
                              leito.nome ? "danger" : "success"
                            }`}
                          >
                            {leito.nome ? "Ocupado" : "Disponível"}
                          </Badge>
                        </td>
                        <td>{leito.codigo}</td>
                        <td>
                          {leito.nome ? (
                            leito.nome
                          ) : (
                            <span style={{ color: "#5F6368" }}>Disponível</span>
                          )}
                        </td>
                        <td>
                          <a
                            href={`/events/data/${1}`}
                            size="sm"
                            theme="white"
                            className="mb-2 mr-1"
                          >
                            <i class="material-icons">edit</i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Leitos;
