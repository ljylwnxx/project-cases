import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import About from "../views/About";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        // redirect: '/home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },

]
//...省略原有不需修改的代码，以下是修改后的代码
const router = new VueRouter({
	mode:'history',
	base: '',
	routes
})
export default router;