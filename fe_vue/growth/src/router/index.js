import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import HealthLayout from '@/components/HealthLayout'
import HealthCheck from '@/components/HealthCheck'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		component: Layout,
  		children: [
  			{
  				path: '/',
  				component: HealthLayout,
  				children: [
  					{
	  					path: '/',
	  					component: HealthCheck
	  				}
  				]
  			}
  		]
  	}
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
