export function SignIn(userName, userPassword) {

    let DB = JSON.parse(localStorage.getItem('database'))

    return new Promise((resolve, reject) => {
        if (!userName) {
            reject(alert('Пожалуйста введите ваше имя'))
        } else if (+userName) {
            reject(alert('Имя не может состоять из цифр'))
        } else if (!userPassword) {
            reject(alert('Введите пароль'))
        } else if (userPassword.length < 8) {
            reject(alert('Этот пароль слишкой короткий'))
        } else {
            setTimeout(() => {
                let findUser = DB.users.find(user => user.name === userName && user.password === userPassword)

                if (findUser) {
                    resolve()
                }
                else {
                    reject(alert('Данного пользователя не существует или вы неправильно ввели свой пароль'))
                }
            }, 3000);
        }
    })
}

export function CheckIn(userName, userEmail, userPassword, confirmPassword) {
    return new Promise((resolve, reject) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let user = {
            name: userName,
            email: userEmail,
            password: userPassword
        }

        if (!userName) {
            reject(alert('Пожалуйста введите ваше имя'))
        } else if (+userName) {
            reject(alert('Имя не может состоять из цифр'))
        } else if (!userEmail) {
            reject(alert('Введите почту'))
        } else if (!reg.test(userEmail)) {
            reject(alert('Почта некорректна'))
        } else if (!userPassword) {
            reject(alert('Введите пароль'))
        } else if (userPassword.length < 8) {
            reject(alert('Этот пароль слишкой короткий'))
        } else if (userPassword !== confirmPassword) {
            reject(alert('Пароли не совпадают'))
        } else {
            setTimeout(() => {
                resolve(user)
            }, 3000);
        }
    }).then((user) => {
        return new Promise((resolve, reject) => {
            let DB = JSON.parse(localStorage.getItem('database'))
            let duplicate = DB.users.find(user => user.email === userEmail)

            if (duplicate) {
                reject(alert('Данная почта занята'))
            }
            else {
                localStorage.setItem('database', JSON.stringify(user))
                DB.users.push(user)
                localStorage.setItem('database', JSON.stringify(DB))
                resolve()
            }
        })
    }).catch(() => {})
}