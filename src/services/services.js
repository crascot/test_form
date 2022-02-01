export const reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
export let DB = JSON.parse(localStorage.getItem('database'));

export function SignIn(userEmail, userPassword) {
    return new Promise((resolve, reject) => {
        if (!userEmail || !reg.test(userEmail)) {
            reject(userEmail)
        } else if (!userPassword || userPassword.length < 8) {
            reject(userPassword)
        } else {
            setTimeout(() => {
                let findUser = DB.users.find(user => user.email === userEmail && user.password === userPassword)

                if (findUser) {
                    localStorage.setItem('id', findUser.id)
                    resolve()
                }
                else {
                    reject(alert('Данного пользователя не существует или вы неправильно ввели данные'))
                }
            }, 3000);
        }
    })
}

export function CheckIn(userName, userEmail, userPassword, confirmPassword) {
    return new Promise((resolve, reject) => {
        const id = JSON.parse(localStorage.getItem('database')).users.length;

        let user = {
            id: id,
            name: userName,
            email: userEmail,
            password: userPassword
        }

        if (!userName || +userName) {
            reject(userName)
        } else if (!userEmail || !reg.test(userEmail)) {
            reject(userEmail)
        } else if (!userPassword || userPassword.length < 8) {
            reject(userPassword)
        } else if (userPassword !== confirmPassword) {
            reject(confirmPassword)
        } else {
            setTimeout(() => {
                resolve(user)
            }, 3000);
        }
    }).then((user) => {
        return new Promise((resolve, reject) => {
            let duplicate = DB.users.find(user => user.email === userEmail);

            if (duplicate) reject(alert('Данная почта занята'))
            else resolve(user)
        })
    })
}

export function changeData(userName, userBirthday, userGender, userPassword, userPhone, userEmail) {
    return new Promise((resolve, reject) => {
        let duplicate = DB.users.find(user => user.email === userEmail && user.id !== JSON.parse(localStorage.getItem('id')))

        if (!userName || +userName) reject('Имя некорректно')
        if (!userPassword || userPassword.length < 8) reject('Пароль слишком короткий')
        if (userPhone < 11) reject('Некорректный номер телефона')
        if (!userEmail || !reg.test(userEmail)) reject('Почта некорректна')
        if (duplicate) reject('Данная почта занята')

        resolve(userName, userBirthday, userGender, userPassword, userPhone, userEmail);
    })
}

export function FeedPush() {
    return new Promise((resolve) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => resolve(JSON.stringify(json)))
    })
}