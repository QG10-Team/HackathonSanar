import React from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem
} from "shards-react";

const Detalhe = props => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <h4 className="mb-0">Atendimento</h4>
      <span className="text-muted d-block mb-2">{props.status}</span>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          Paciente
        </strong>
        <span>{props.paciente}</span>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          Nível de Atendimento
        </strong>
        <span>{props.nivelAtendimento}</span>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          Data do Atendimento
        </strong>
        <span>{props.dataAtendimento}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

export default Detalhe;
