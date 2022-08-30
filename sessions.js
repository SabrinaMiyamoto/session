//sessions salva informações  de um usuário, no servidor. quando chega a pg do navegador, a sessão se encerra.

//instalar npm install express-session --save
//para configurar a session, precisa ser antes de tudo. a não ser a nivel de sistema.(as que começam, como aap.set())
// a session sempre vai ficar disponivel na requisição para que possamos trabalhar com ela.
//const session= require("express-session")

app.use(session({
    secret:'pode ser qualquer coisa',
    resave: true,
    saveUninitialized: true
}))


//no controller, na parte de usuario.

req.session.usuario = usuarioSalvo

//no controller de produto, dentro de listagem de produtos. no return de produtos, colocar:

usuario: req.session.usuario
