import React from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";

const Detalhe = props => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <h4 className="mb-0">{props.nome}</h4>
      <span className="text-muted d-block mb-2">{props.jobTitle}</span>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="px-4">
        <div className="progress-wrapper">
          <strong className="text-muted d-block mb-2">
            Procedimento
          </strong>
          <Progress
            className="progress-sm"
            value={props.performanceReportValue}
          >
            <span className="progress-value">
              {props.performanceReportValue}%
            </span>
          </Progress>
        </div>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          Observação
        </strong>
        <span>{props.observacao}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

export default Detalhe;
