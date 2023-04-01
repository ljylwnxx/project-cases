import Vue from 'vue'
import App from './App.vue'
import router from './router'
//======================新增内容开始===============================
import {registerMicroApps, start} from 'qiankun' //新增部分，导入qiankun中的两个方法
const apps = [
{
	name:'sub-app', //子应用的名称
	entry:'//localhost:8082',//子应用的域名
	container:'#vueContainer',//承载子应用的容器，在上面App.vue中定义
	activeRule:'/sub-app', // 被激活的子应用的路由
}
]
registerMicroApps(apps);//注册子应用
start();//启动qiankun
//======================新增内容结束===============================
new Vue({
	router,
	render: h => h(App)
}).$mount('#app');

// router/index.js
//...省略原有不需修改的代码，以下是修改后的代码
const router = new VueRouter({
	mode:'history',
	base: '',
	routes
})