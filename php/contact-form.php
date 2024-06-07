<?
$hoje_tmp = getdate();
$hoje = ($hoje_tmp[hours].":".$hoje_tmp[minutes].":".$hoje_tmp[seconds]);

$nome = $_POST["nome"];
$email = $_POST["email"];
$telefone = $_POST["telefone"];
$mensagem = $_POST["mensagem"];

/*
Editado por cefas gomes
*/


global $email;

// FAÇA ESTAS CONFIGURAÇÕES

$enviou = mail("ruan@hitmidia.com.br",  // "", COLOQUE SEU E-MAIL AQUI!
"Mensagem de Contato", // COLOQUE O ASSUNTO DO E-MAIL A SER RECEBIDO

// TERMINO DA CONFIGURAÇÃO


"Nome: $nome
E-Mail: $email
Telefone: $telefone
Cidade: $cidade
Assunto: $assunto
Mensagem: $mensagem"
,
"From: $email");

if ($enviou){
?> <script language="javascript"> alert ('<? echo "Seus dados foram enviados com sucesso! Aguarde o nosso retorno."; ?>') </script> <?
}

else {
?> <script language="javascript"> alert ('<? echo "Erro ao enviar,<br>Por favor, tente novamente."; ?>') </script> <?

}
?>

<script>document.location.href='http://hitbasic.com.br/encontrodenoivas/contato.html';</script>