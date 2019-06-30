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
      <h4 className="mb-0">Procedimento</h4>
      <span className="text-muted d-block mb-2">{props.status}</span>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          Descrição
        </strong>
        <span>{props.descricao}</span>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          Horário
        </strong>
        <span>{props.horario}</span>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          Data do Procedimento
        </strong>
        <span>{props.dataProcedimento}</span>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          Observações
        </strong>
        <span>{props.observacoes}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

export default Detalhe;
