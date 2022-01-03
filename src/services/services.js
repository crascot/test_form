export const reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
export let DB = JSON.parse(localStorage.getItem('database'));

export function SignIn(userName, userPassword) {
    return new Promise((resolve, reject) => {
        if (!userName || +userName) {
            reject(userName)
        } else if (!userPassword || userPassword.length < 8) {
            reject(userPassword)
        } else {
            setTimeout(() => {
                let findUser = DB.users.find(user => user.name === userName && user.password === userPassword)

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
    })
}

export function FeedPush() {
    return new Promise((resolve) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => resolve(JSON.stringify(json)))
    })
}