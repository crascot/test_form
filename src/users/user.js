export class User {
    static create(user) {
        return fetch('https://test-form.firebaseio.com/users.json', {
            method: 'POST',
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(response => {
                user.id = response.name
                return user
            })
            .then(addToLocalStorage)
            .then(User.renderList)
    }

    static renderList() {
        const users = getUsersFromLocalStorage()
        
        const html = users.length
            ? users.map(toCard).join('')
            : `<div>Пользователей нет</div>`

        const list = document.getElementById('list')

        list.innerHTML = html
    }
}

function addToLocalStorage(user) {
    const all = getUsersFromLocalStorage()
    all.push(user)
    localStorage.setItem('users', JSON.stringify(all))
}

function getUsersFromLocalStorage() {
    return JSON.parse(localStorage.getItem('users') || '[]')
}

function toCard(user) {
    alert(`Поздравляю ${user.name} вы успешно зарегистрировались`)
}