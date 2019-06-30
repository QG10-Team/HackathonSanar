import React from "react";
import { format } from "date-fns";

const paciente = props => (
  <tr>
    <td>{props.key}</td>
    <td>{props.paciente.name}</td>
    <td>{props.paciente.email}</td>
    <td>{format(new Date(props.paciente.dataNascimento), "DD/MM/YYYY")}</td>
    <td>{props.paciente.peso}</td>
    <td>{props.paciente.altura}</td>
    <td>
      <a
        href={`/atendimento/editar/${props.paciente.id}`}
        size="sm"
        theme="white"
        className="mb-2 mr-1"
      >
        <i class="material-icons">edit</i>
      </a>
      <a
        href={`/atendimento/cadastrar/${props.paciente.id}`}
        size="sm"
        theme="white"
        className="mb-2 mr-1"
      >
        <i class="material-icons">add_circle</i>
      </a>
    </td>
  </tr>
);

export default paciente;
