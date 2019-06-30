import React from "react";

const procedimento = props => (
    <tr>
        <td>{props.descricao}</td>
        <td>{props.status}</td>
        <td>{props.horario}</td>
        <td>{props.dataProcedimento}</td>
    </tr>
);

export default procedimento;