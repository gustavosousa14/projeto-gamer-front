// --- Efeito do botão Voltar ao Topo ---

// Pega o botão
var mybutton = document.getElementById("voltar-topo");

// Quando o usuário rola 20px para baixo, mostra o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Quando o usuário clica no botão, rola para o topo
function topo() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}


// --- Validação de Login (Simples) ---
function login() {
    // Usei os IDs corrigidos que adicionei ao login.html
    var usuario = document.getElementById("usuario-login").value;
    var senha = document.getElementById("senha-login").value;

    if (usuario === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        // Simulação de login
        alert("Login efetuado com sucesso! Redirecionando para a Home.");
        // Redireciona o usuário para a index.html
        window.location.href = "index.html";
    }
}


// --- Ativar alert no botão cadastrar ---
function cadastro() {
    // Usei os IDs corrigidos do formulário de cadastro
    var usuario = document.getElementById("usuario-cad").value;
    var email = document.getElementById("email-cad").value;
    var senha = document.getElementById("senha-cad").value;

    if (usuario === "" || email === "" || senha === "") {
        alert("Por favor, preencha todos os campos para o cadastro.");
    } else {
        alert("Cadastro realizado com sucesso!");
        // Aqui você poderia limpar os campos ou esconder o formulário
        document.getElementById("cadastro-form").reset();
    }
}