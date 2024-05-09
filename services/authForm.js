
 function registrarUsuario(email, senha, username) {
  firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(function(userCredential) {

      var user = userCredential.user
      console.log('Usuário registrado:', user)
      

      firebase.firestore().collection('usuarios').doc(user.uid).set({
        username: username
      })
      .then(function() {
        console.log('Nome de usuário salvo com sucesso!')
        window.location.href = "index.html"
      })
      .catch(function(error) {
        console.error('Erro ao salvar nome de usuário:', error)
      })
      
    })
    .catch(function(error) {
      var errorCode = error.code
      var errorMessage = error.message
      console.error('Erro ao registrar usuário:', errorMessage)
    })
}

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault() // Evita o envio padrão do formulário

  var email = document.getElementById('email').value

  if (emailIsValid(email)) {
    // Se o e-mail for válido, oculta o formulário de e-mail e exibe o formulário de senha
    document.getElementById('cadastroForm').style.display = 'none'
    document.getElementById('senhaForm').style.display = 'block'
    document.getElementById('header-lgn').style.display = 'none'
  } 
});

document.getElementById('senhaForm').addEventListener('submit', function(event) {
  event.preventDefault()

  var senha = document.getElementById('senha').value
  var email = document.getElementById('email').value
  var username = document.getElementById('username').value
  var confirmarSenha = document.getElementById('confirmar').value

  if (senha !== confirmarSenha) {
    document.getElementById('erroSenha').textContent = 'As senhas não coincidem'
  } else {
    registrarUsuario(email, senha, username);
  }
})

document.getElementById('voltarEtapa').addEventListener('click', function() {

  document.getElementById('cadastroForm').style.display = 'block'
  document.getElementById('senhaForm').style.display = 'none'
  document.getElementById('header-lgn').style.display = 'block'
})

// Função para validar o formato do e-mail
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
