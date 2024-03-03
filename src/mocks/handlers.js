import { http, HttpResponse } from 'msw'
import md5 from "md5"
import { apiUrl } from '../api/api'

const users = [{
    id: 1,
    name: "Mark Fahrheit",
    profession: 'engineer',
    email: "mark@gmail.com",
    lastLogin: "12:11:08, 2 Oct, 2023",
    status: 'active',
    password: md5("1")
},
{
    id: 2,
    name: "Mary Lasson",
    profession: 'dancer',
    email: "mary@gmail.com",
    lastLogin: "05:10:08, 4 Jun, 2023",
    status: 'blocked',
    password: md5("2")
},
{
    id: 3,
    name: "Chris Brown",
    profession: 'economist',
    email: "brown@gmail.com",
    lastLogin: "07:01:18, 14 Jan, 2024",
    status: 'active',
    password: md5("3")
},
{
    id: 4,
    name: "Kira Blossom",
    profession: 'designer',
    email: "kirbloss@gmail.com",
    lastLogin: "10:51:08, 17 Jan, 2024",
    status: 'active',
    password: md5("4")
}]

let maxId = 4

// response resolver
async function postLoginResolver({ request, params, cookies }) {

    const data = await request.json()

    const userIndex = users.findIndex(user => user.email === data.email);
    if (userIndex < 0) {
        return new HttpResponse({
            status: 401
        })
    }

    if (users[userIndex].password !== md5(data.password)) {
        return new HttpResponse({
            status: 401
        })
    }
    return HttpResponse.json(users[userIndex]);
}

async function getUsersResolver({ request, params, cookies }) {
    if (!users) {
        return new HttpResponse("Пользователи не найдены", {
            status: 404
        })
    } else {
        return HttpResponse.json(users)
    }
}

async function getLogoutResolver({ request, params, cookies }) {

    await params.email

    // const email = req.query.email
    return new HttpResponse({
        status: 200
    })

}

async function postCreateUserResolver({ request, params, cookies }) {

    const data = await request.json()
    if (!data || !data.name || !data.profession || !data.email || !data.password) {
        return new HttpResponse({
            status: 400
        })
    }
    // 2. if ok, add new user to users
    const newUser = {
        id: maxId + 1,
        name: data.name,
        profession: data.profession,
        email: data.email,
        lastLogin: new Date(),
        password: md5(data.password),
        status: "active"
    }
    maxId = maxId + 1
    users.push(newUser)
    return HttpResponse.json(newUser)
}

async function putBlockUserResolver({ request, params, cookies }) {

    const { id } = params;
    const userIndex = users.findIndex(user => user.id === Number(id));
    if (userIndex >= 0) {
        users[userIndex].status = "blocked"

    }
    return HttpResponse.json(users)

}
async function putUnblockUserResolver({ request, params, cookies }) {

    const { id } = params;
    const userIndex = users.findIndex(user => user.id === Number(id));
    if (userIndex >= 0) {
        users[userIndex].status = "active"

    }
    return HttpResponse.json(users)

}

async function deleteUserResolver({ request, params, cookies }) {

    const { id } = params;
    const userIndex = users.findIndex(user => user.id === Number(id));
    if (userIndex >= 0) {
        users.splice(userIndex, 1)
    }
    return HttpResponse.json(users)

}

// request resolver
const postLoginHandler = http.post(`${apiUrl}/auth`, postLoginResolver);
const getUsersHandler = http.get(`${apiUrl}/users`, getUsersResolver)
const getLogoutHandler = http.get(`${apiUrl}/logout`, getLogoutResolver)
const postCreateUserHandler = http.post(`${apiUrl}/users/create`, postCreateUserResolver)
const putBlockUserHander = http.put(`${apiUrl}/users/:id/block`, putBlockUserResolver)
const putUnblockUserHandler = http.put(`${apiUrl}/users/:id/unblock`, putUnblockUserResolver)
const deleteUserHandler = http.delete(`${apiUrl}/users/:id/delete`, deleteUserResolver)


export const handlers = [postLoginHandler, getUsersHandler, getLogoutHandler, postCreateUserHandler, deleteUserHandler, putBlockUserHander, putUnblockUserHandler];