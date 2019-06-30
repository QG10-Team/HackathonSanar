<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Base_model extends CI_Model {

  /**
   * __construct function.
   *
   * @access public
   * @return void
   */
  public function __construct()
  {
    parent::__construct();
    $this->db_master = $this->load->database('master', TRUE);
    $this->db_slave = $this->load->database('slave', TRUE);
  }

  public function auth_usuario ($email,$senha) // MVPZÃO
  {
    $return = '';
    $this->db_master->select('id_usuario');
    $this->db_master->from('usuario');
    $this->db_master->where('email',$email);
    $this->db_master->where('senha',$senha);
    $resposta = $this->db_master->get()->result_array();

    if ( !empty($resposta) ) {
      $return = 1;
    }

    return $return;
  }

  public function get_leito_list ()
  {
    $this->db_master->select('a.id_leito,a.codigo,a.id_atendimento,c.nome,c.data_nascimento,b.descricao');
    $this->db_master->from('leito a');
    $this->db_master->join('atendimento b','a.id_atendimento = b.id_atendimento','left');
    $this->db_master->join('paciente c','b.id_paciente = c.id_paciente','left');
    $return = $this->db_master->get()->result_array();

    foreach ($return as $key => $leito) {
      if (!empty($leito['data_nascimento'])) {

        $idade =  strtotime(date('Y-m-d H:i:s')) - strtotime($leito['data_nascimento']);
        $idade = $idade/(365*24*60*60);

        $return[$key]['idade']=(int)$idade;
      }
    }

    return $return;
  }

  public function get_leito_by_id ($id_leito)
  {
    $this->db_master->select('a.id_leito,a.codigo,a.id_atendimento');
    $this->db_master->from('leito a');
    $this->db_master->join('atendimento b','a.id_atendimento = b.id_atendimento','left');
    //$this->db_master->join('atendimento b','a.id_atendimento = b.id_atendimento','left');
    $this->db_master->where('id_leito',$id_leito);
    $return = $this->db_master->get()->result_array();

    return $return;
  }

  public function get_espera_list ()
  {
    $this->db_master->select('a.id_atendimento id,b.nome name,a.nivel,a.data_entrada date,b.data_nascimento dataNascimento');
    $this->db_master->from('atendimento a');
    $this->db_master->join('paciente b','a.id_paciente = b.id_paciente','left');
    $this->db_master->where('a.status','E');
    $this->db_master->order_by('a.nivel','desc');
    $return = $this->db_master->get()->result_array();

    foreach ($return as $key => $paciente) {
      if (!empty($paciente['dataNascimento'])) {

        $idade =  strtotime(date('Y-m-d H:i:s')) - strtotime($paciente['dataNascimento']);
        $idade = $idade/(365*24*60*60);

        $return[$key]['idade']=(int)$idade;
      }
    }

    return $return;
  }

  public function get_paciente_list ()
  {
    $param = array('E','A');
    $this->db_master->select('a.id_atendimento id,b.nome name,b.email,a.nivel,a.data_entrada date,b.data_nascimento dataNascimento,b.peso,b.altura');
    $this->db_master->from('atendimento a');
    $this->db_master->join('paciente b','a.id_paciente = b.id_paciente','left');
    $this->db_master->where_in('a.status',$param);
    $return = $this->db_master->get()->result_array();

    foreach ($return as $key => $paciente) {
      if (!empty($paciente['dataNascimento'])) {

        $idade =  strtotime(date('Y-m-d H:i:s')) - strtotime($paciente['dataNascimento']);
        $idade = $idade/(365*24*60*60);

        $return[$key]['idade']=(int)$idade;
      }
    }

    return $return;
  }

  public function get_atendimento_by_id ($id_atendimento)
  {
    $select_str = 'a.id_atendimento,a.nivel,a.status,a.data_entrada,a.data_saida,';
    $select_str .='b.id_leito,c.nome,c.data_nascimento,c.peso,c.altura,c.observacoes';

    $this->db_master->select($select_str);
    $this->db_master->from('atendimento a');
    $this->db_master->join('leito b','a.id_atendimento = b.id_atendimento','left');
    $this->db_master->join('paciente c','a.id_paciente = c.id_paciente','left');
    $this->db_master->where('a.id_atendimento',$id_atendimento);
    $return = $this->db_master->get()->result_array();

    return $return;
  }

  public function get_procedimento_by_id_atendimento ($id_atendimento)
  {
    $select_str = 'id_procedimento,descricao,observacao,status,data_criacao,data_validacao';
    $select_str .='';
    $this->db_master->select($select_str);
    $this->db_master->from('procedimento');
    $this->db_master->where('id_atendimento',$id_atendimento);
    $return = $this->db_master->get()->result_array();

    return $return;
  }

  public function cadastrar_paciente ($array)
  {
    $resposta = [];
    if (!empty($array['cpf'])){$dados['cpf']=$array['cpf'];}
    if (!empty($array['nome'])){$dados['nome']=$array['nome'];}
    if (!empty($array['email'])){$dados['email']=$array['email'];}
    if (!empty($array['data_nascimento'])){$dados['data_nascimento']=$array['data_nascimento'];}
    if (!empty($array['peso'])){$dados['peso']=$array['peso'];}
    if (!empty($array['altura'])){$dados['altura']=$array['altura'];}
    if (!empty($array['observacoes'])){$dados['observacoes']=$array['observacoes'];}

    if ( !empty($dados) ) {
      $resposta = $this->db_master->insert('paciente', $dados);
    }

    return $resposta;
  }

  public function cadastrar_atendimento ($array)
  {
    $resposta=[];
    if ( !empty($array['id_paciente']) ) {
      $dados['id_paciente']=$array['id_paciente'];
      $dados['status']='E';
      $dados['id_usuario']=1;
      $dados['nivel']=1;
      $dados['data_entrada']=date('Y-m-d H:i:s');

      if (!empty($array['nivel'])){$dados['nivel']=$array['nivel'];}
      if (!empty($array['descricao'])){$dados['descricao']=$array['descricao'];}
      if (!empty($array['id_usuario'])){$dados['id_usuario']=$array['id_usuario'];}

      $resposta = $this->db_master->insert('atendimento', $dados);
    }

    return $resposta;
  }

  public function cadastrar_procedimento($array)
  {
    $resposta=[];
    if ( !empty($array['id_atendimento']) && !empty($array['descricao']) ) {
      $dados['id_atendimento']=$array['id_atendimento'];
      $dados['descricao']=$array['descricao'];
      $dados['data_criacao']=date('Y-m-d H:i:s');
      $dados['id_usuario_criacao']=1;

      if (!empty($array['data'])){$dados['data']=$array['data'];}
      if (!empty($array['observacao'])){$dados['observacao']=$array['observacao'];}
      if (!empty($array['id_usuario_criacao'])){$dados['id_usuario_criacao']=$array['id_usuario_criacao'];}

      $resposta = $this->db_master->insert('procedimento', $dados);
    }

    return $resposta;
  }

  public function alocar_atendimento($id_atendimento,$id_leito)
  {
    $return='';
    $this->db_master->select('id_leito,id_atendimento');
    $this->db_master->from('leito');
    $this->db_master->where('id_leito',$id_leito);
    $leito = $this->db_master->get()->result_array();
    $this->db_master->reset_query();

    if ( empty($leito['id_atendimento']) ) {
      $dados_atendimento['status']='A';
      $this->db_master->where('id_atendimento',$id_atendimento);
      $this->db_master->update('atendimento',$dados_atendimento);
      $this->db_master->reset_query();

      $dados_leito['id_atendimento']=$id_atendimento;
      $this->db_master->where('id_leito',$id_leito);
      $this->db_master->update('leito',$dados_leito);
      $update=$this->db_master->affected_rows();

      if ( $update ) {
        $return=1;
      }
    }

    return $return;
  }

  public function validar_procedimento($id_procedimento,$id_usuario=1)
  {
    $return='';
    $dados['status']=1;
    $dados['data_validacao']=date('Y-m-d H:i:s');
    $dados['id_usuario_validacao']=$id_usuario;

    $this->db_master->where('id_procedimento',$id_procedimento);
    $this->db_master->update('procedimento',$dados);
    $update=$this->db_master->affected_rows();

    if ( $update ) {
      $return=1;
    }

    return $return;
  }

  public function finalizar_atendimento($id_atendimento)
  {
    $return='';
    $this->db_master->select('id_procedimento');
    $this->db_master->from('procedimento');
    $this->db_master->where('id_atendimento',$id_atendimento);
    $this->db_master->where('status!=',1);
    $procedimento = $this->db_master->get()->result_array();
    $this->db_master->reset_query();

    if ( empty($procedimento) ) {

      $dados['status']='F';
      $dados['data_saida']=date('Y-m-d H:i:s');
      $this->db_master->where('id_atendimento',$id_atendimento);
      $this->db_master->update('atendimento',$dados);
      $this->db_master->reset_query();

      $this->db_master->set('id_atendimento','NULL',FALSE);
      $this->db_master->where('id_atendimento', $id_atendimento);
			$this->db_master->update('leito');
      $update=$this->db_master->affected_rows();

      if ( $update ) {
        $return=1;
      }

    }

    return $return;
  }




}
