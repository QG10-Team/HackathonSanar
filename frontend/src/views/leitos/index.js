import React from "react";
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
import PropTypes from "prop-types";

import PageTitle from "../../components/common/PageTitle";

const Tables = ({ title, discussions }) => (
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
      <Col md="8" sm="12">
        <Card small className="blog-comments">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Lista de espera</h6>
          </CardHeader>

          <CardBody className="p-0">
            {discussions.map((discussion, idx) => (
              <div key={idx} className="blog-comments__item d-flex p-3">
                {/* Avatar */}
                <div className="blog-comments__avatar mr-3">
                  <img src={discussion.image} alt={discussion.name} />
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
                          marginBottom: "-2px"
                        }}
                        className={`card-post__category bg-danger`}
                      >
                        {" "}
                      </Badge>
                    </span>
                    <a className="text-secondary" href={discussion.url}>
                      {" "}
                      {discussion.name} ({discussion.dataNascimento})
                    </a>
                    <span className="text-mutes"> - {discussion.date}</span>
                  </div>

                  {/* Content :: Body */}
                  <p className="m-0 my-1 mb-2 text-muted">{discussion.body}</p>

                  {/* Content :: Actions */}
                  <div className="blog-comments__actions">
                    <ButtonGroup size="sm">
                      <Button theme="white">
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
      <Col md="4" sm="12">
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
                <tr>
                  <td>1</td>
                  <td>
                    <Badge pill className={`card-post__category bg-danger`}>
                      Ocupado
                    </Badge>
                  </td>
                  <td>2015</td>
                  <td>Kerry</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <Badge pill className={`card-post__category bg-success`}>
                      Disponível
                    </Badge>
                  </td>
                  <td>3659</td>
                  <td>
                    <span style={{ color: "#5F6368" }}>Disponível</span>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <Badge pill className={`card-post__category bg-danger`}>
                      Ocupado
                    </Badge>
                  </td>
                  <td>4685</td>
                  <td>Nathan</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <Badge pill className={`card-post__category bg-danger`}>
                      Ocupado
                    </Badge>
                  </td>
                  <td>9623</td>
                  <td>Angela</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

Tables.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The discussions dataset.
   */
  discussions: PropTypes.array
};

Tables.defaultProps = {
  discussions: [
    {
      id: 1,
      date: "3 days ago",
      image: require("../../images/avatars/1.jpg"),
      name: "John Doe",
      url: "#",
      dataNascimento: "22/05/1995",
      body: "Well, the way they make shows is, they make one show ..."
    },
    {
      id: 1,
      date: "3 days ago",
      image: require("../../images/avatars/1.jpg"),
      name: "John Doe",
      url: "#",
      dataNascimento: "22/05/1995",
      body: "Well, the way they make shows is, they make one show ..."
    },
    {
      id: 1,
      date: "3 days ago",
      image: require("../../images/avatars/1.jpg"),
      name: "John Doe",
      url: "#",
      dataNascimento: "22/05/1995",
      body: "Well, the way they make shows is, they make one show ..."
    }
  ]
};

export default Tables;
