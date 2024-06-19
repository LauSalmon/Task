import {createWebHistory, createRouter} from 'vue-router'

const routes = [
    {
        path : "/",
        alias : "/contacts",
        name : "contacts",
        component : ()=> import ("./components/ContactList.vue")
    },
    {
        path : "/add",
        name : "add",
        component : () => import ("./components/AddContact.vue")
    }
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
);

export default router;