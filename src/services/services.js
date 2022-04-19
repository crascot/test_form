export const reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
export let DB = JSON.parse(localStorage.getItem('database'));

export function SignIn(userEmail, userPassword) {
    return new Promise((resolve, reject) => {
        let findUser = DB.users.find(user => user.email === userEmail && user.password === userPassword)
        const login = () => {
            localStorage.setItem('auth_token', true)
            localStorage.setItem('id', findUser.id)
            resolve()
        }

        if (!userEmail || !reg.test(userEmail)) reject()
        else if (!userPassword || userPassword.length < 8) reject()
        else {
            setTimeout(() => {
                if (findUser) login()
                else reject(alert('Данного пользователя не существует или вы неправильно ввели данные'))
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
            password: userPassword,
            gender: 'Мужской'
        }
        if (!userName || +userName) reject()
        if (!userEmail || !reg.test(userEmail)) reject()
        if (!userPassword || userPassword.length < 8) reject()
        if (userPassword !== confirmPassword) reject()
        else setTimeout(() => resolve(user), 3000)
    }).then((user) => {
        return new Promise((resolve, reject) => {
            let duplicate = DB.users.find(user => user.email === userEmail)
            duplicate ? reject(alert('Данная почта занята')) : resolve(user)
        })
    })
}

export function changeData(user) {
    return new Promise((resolve, reject) => {
        let duplicate = DB.users.find(e => e.email === user.email && e.id !== JSON.parse(localStorage.getItem('id')))
        if (!user.name || +user.name) reject('Имя некорректно')
        if (!user.password || user.password.length < 8) reject('Пароль слишком короткий')
        if (!user.phone || user.phone.length < 11) reject('Некорректный номер телефона')
        if (!user.email || !reg.test(user.email)) reject('Почта некорректна')
        if (duplicate) reject('Данная почта занята')
        resolve(user)
    })
}

export function FeedPush() {
    return new Promise((resolve) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => resolve(JSON.stringify(json)))
    })
}