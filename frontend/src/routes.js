import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Dashboard from "./views/dashboard";
import Leitos from "./views/leitos";
// import Errors from "./views/Errors";
import CadastrarPacientes from "./views/Pacientes/Cadastrar";
import Lista from "./views/Pacientes/Lista/Lista";
import Informacoes from "./views/Pacientes/Informacoes";
import CadastrarAtendimento from "./views/Pacientes/Atendimentos/Cadastrar";
import EditarAtendimento from "./views/Pacientes/Atendimentos/Editar";
import ListarAtendimento from "./views/Pacientes/Atendimentos/Listar";
import VisualizarAtendimento from "./views/Pacientes/Atendimentos/Visualizar";
import CadastrarProcedimento from "./views/Pacientes/Procedimentos/Cadastrar";
import EditarProcedimento from "./views/Pacientes/Procedimentos/Editar";
import ListarProcedimento from "./views/Pacientes/Procedimentos/Listar";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard" />
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/leitos",
    layout: DefaultLayout,
    component: Leitos
  },
  {
    path: "/pacientes",
    layout: DefaultLayout,
    component: Lista
  },
  {
    path: "/pacientes/cadastrar",
    layout: DefaultLayout,
    component: CadastrarPacientes
  },
  {
    path: "/informacoes",
    layout: DefaultLayout,
    component: Informacoes
  },
  {
    path: "/atendimento/cadastrar/:id",
    layout: DefaultLayout,
    component: CadastrarAtendimento
  },
  {
    path: "/atendimento/editar/:id",
    layout: DefaultLayout,
    component: EditarAtendimento
  },
  {
    path: "/atendimento/listar",
    layout: DefaultLayout,
    component: ListarAtendimento
  },
  {
    path: "/atendimento/visualizar",
    layout: DefaultLayout,
    component: VisualizarAtendimento
  },
  {
    path: "/procedimento/cadastrar",
    layout: DefaultLayout,
    component: CadastrarProcedimento
  },
  {
    path: "/procedimento/editar",
    layout: DefaultLayout,
    component: EditarProcedimento
  },
  {
    path: "/procedimento/listar",
    layout: DefaultLayout,
    component: ListarProcedimento
  }
];
