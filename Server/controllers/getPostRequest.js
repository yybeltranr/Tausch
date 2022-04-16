// Los controladores son la api que se encarga de procesar las llamadas de react y responder a las peticiones, bien sea llamando un modelo o enviando un json de respuesta

const postRegister = (req,res)=>{
    
    try{
        const {userName, 
            password,
            email, 
            firstName, 
            lastName, 
            age, 
            phoneNumber,
            facebook,
            twitter,
            instagram} = req.body

        res.status(200).send(`
        usuario: ${userName},
        contraseña: ${password},
        correo: ${email},
        nombre: ${firstName},
        apellido: ${lastName},
        edad: ${age},
        telefono: ${phoneNumber},
        facebook: ${facebook},
        twitter: ${twitter},
        instagram: ${instagram}
        `)
    }
    catch (err) {
        console.log('error in controller');
        res.status(403).json(err)
    }
}

const postLogin = (req,res) => {
    res.send('<h1> Esta es una petición post a la url /login </h1>')
}

module.exports = {postRegister, postLogin}