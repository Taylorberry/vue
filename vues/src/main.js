
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Index from './components/index'
import List from './components/list'
import Content from './components/content'
import Calendar from '../node_modules/vux/dist/components/calendar'

console.log(Calendar);

Vue.use(VueRouter)

let router=new VueRouter();

router.map({

	'/index':{
		component:Index
	},
	'/list':{
		component:List
	},
	'/content':{
		component:Content
	}

})

	router.start(App,'#apps')/* eslint-disable no-new */
	router.redirect({
		'*':'/index',
		'/':'/list'
	})