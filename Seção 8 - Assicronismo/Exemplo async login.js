///////////////////////////USANDO SÓ PROMISE////////////////////////////
{
    users = {
        'ffersants': 'fernando123',
        'ohgosh': 'ohceus',
        'anampz': 'anapaz',
        'skawel': 'skywell'
    }


    async function verificaLogin(user, pswd) {
        return new Promise((resolve, reject) => {

            let accounts = Object.keys(users);
            verificaUsuario = accounts.forEach(account => {
                if (user === account && users[account] === pswd) {
                    resolve('Login realizado com sucesso!')
                } else {
                    reject('Usuário e/ou senha não válido(s)')
                }
            })

        })
    }

    verificaLogin('ffersants', 'fernando123')
        .then(mensagem => {
            console.log(mensagem)
        })
        .catch(err => {
            console.log(err)
        })
}
///////////////////////////USANDO ASYNC AWAIT////////////////////////////
{
    users = {
        'ffersants': 'fernando123',
        'ohgosh': 'ohceus',
        'anampz': 'anapaz',
        'skawel': 'skywell'
    }


    function verificaLogin(user, pswd) {
        return new Promise((resolve, reject) => {

            let accounts = Object.keys(users);
            verificaUsuario = accounts.forEach(account => {
                if (user === account && users[account] === pswd) {
                    resolve('Login realizado com sucesso!')
                } else {
                    reject('Usuário e/ou senha não válido(s)')
                }
            })

        })
    }

    async function login(user, pswd) {
        console.log('verificando credenciais')
        try {
            await verificaLogin(user, pswd);
        } catch (err) {
            console.log(err)
        }
    }

    login('ffersants', '12356')
}