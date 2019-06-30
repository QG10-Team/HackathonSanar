<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Index extends CI_Controller {

  /*public function __construct($config = 'rest')
  {
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    parent::__construct();
    $this->load->model("Base_model");
    $this->load->helper(array('form', 'url'));
  }*/

  public function __construct() {
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    $method = $_SERVER['REQUEST_METHOD'];
    if($method == "OPTIONS") {
      die();
    }
    parent::__construct();
    $this->load->model("Base_model");
    $this->load->helper(array('form', 'url'));
  }

  public function index()
	{

    $lista = $this->Base_model->get_leito_list();

    if (!empty($lista)) {
      $lista_json = json_encode($lista);
      print_r($lista_json);
      echo '<br><br>';
    }

  }





//==============================================================================
//==============================================================================

  public function login()
  {
    $email = $this->input->get('email');
    $senha = $this->input->get('senha');

    $login = $this->Base_model->auth_usuario($email,$senha);

    if ($login) {
      $return['msg']='success';
    } else {
      $return['msg']='error';
    }

    echo (json_encode($return));
  }

  public function leito_lista()
  {
    $lista = $this->Base_model->get_leito_list();

    if (!empty($lista)) {
      $lista_json = json_encode($lista);
      print_r($lista_json);
    }

  }


  public function leito()
  {
    $id_leito = $this->input->get('id');
    $leito = $this->Base_model->get_leito_by_id($id_leito);

    if (empty($leito)) {
      $leito['error']=1;
    }
    echo (json_encode($leito));
  }

  public function get_atendimento()
	{
    $id_atendimento = $this->input->get('id');
    $atendimento = $this->Base_model->get_atendimento_by_id($id_atendimento);
    $procedimento = $this->Base_model->get_procedimento_by_id_atendimento($id_atendimento);
    $return['atendimento']=$atendimento;
    $return['procedimento']=$procedimento;
    if (empty($atendimento)) {
      $return=[];
      $return['error']=1;
    }
    echo (json_encode($return));
  }

  public function get_espera_lista()
  {
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    $lista = $this->Base_model->get_espera_list();

    if ( empty($lista) ) {
      $return['empty']=1;
    } else {
      $return = $lista;
    }

    echo (json_encode($return));
  }

  public function get_paciente_list()
  {
    $lista = $this->Base_model->get_paciente_list();

    if ( empty($lista) ) {
      $return['empty']=1;
    } else {
      $return = $lista;
    }

    echo (json_encode($return));
  }

  public function cadastrar_paciente()
  {
    $dados['cpf']=$this->input->get('cpf');
    $dados['nome']=$this->input->get('nome');
    $dados['email']=$this->input->get('email');
    $dados['data_nascimento']=$this->input->get('data_nascimento');
    $dados['peso']=$this->input->get('peso');
    $dados['altura']=$this->input->get('altura');
    $dados['observacoes']=$this->input->get('observacoes');

    $return = $this->Base_model->cadastrar_paciente($dados);

    if ($return) {
      $resposta['msg']='success';
    } else {
      $resposta['msg']='error';
    }
    echo (json_encode($resposta));
  }

  public function cadastrar_atendimento()
  {
    $dados['id_paciente']=$this->input->get('id_paciente');
    $dados['id_usuario']=$this->input->get('id_usuario');
    $dados['nivel']=$this->input->get('nivel');
    $dados['descricao']=$this->input->get('descricao');

    $return = $this->Base_model->cadastrar_atendimento($dados);

    if ($return) {
      $resposta['msg']='success';
    } else {
      $resposta['msg']='error';
    }
    echo (json_encode($resposta));
  }

  public function cadastrar_procedimento()
  {
    $data=$this->input->get('data');
    $hora=$this->input->get('hora');

    $dados['id_atendimento']=$this->input->get('id_atendimento');
    $dados['descricao']=$this->input->get('descricao');
    $dados['data']=$data.' '.$hora;
    $dados['observacao']=$this->input->get('observacao');

    $return = $this->Base_model->cadastrar_procedimento($dados);

    if ($return) {
      $resposta['msg']='success';
    } else {
      $resposta['msg']='error';
    }
    echo (json_encode($resposta));
  }

  public function alocar_atendimento()
  {
    $id_atendimento = $this->input->get('id_atendimento');
    $id_leito = $this->input->get('id_leito');
    $return = $this->Base_model->alocar_atendimento($id_atendimento,$id_leito);

    if ($return) {
      $resposta['msg']='success';
    } else {
      $resposta['msg']='error';
    }
    echo (json_encode($resposta));
  }

  public function validar_procedimento()
  {
    $id_procedimento = $this->input->get('id_procedimento');
    $id_usuario = $this->input->get('id_usuario');

    $return = $this->Base_model->validar_procedimento($id_procedimento,$id_usuario);

    if ($return) {
      $resposta['msg']='success';
    } else {
      $resposta['msg']='error';
    }
    echo (json_encode($resposta));
  }

  public function finalizar_atendimento()
  {
    $id_atendimento = $this->input->get('id_atendimento');

    $return = $this->Base_model->finalizar_atendimento($id_atendimento);

    if ($return) {
      $resposta['msg']='success';
    } else {
      $resposta['msg']='error';
    }
    echo (json_encode($resposta));
  }


}
