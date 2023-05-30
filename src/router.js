import { createRouter, createWebHashHistory } from "vue-router"
import HomePage from './views/HomePage.vue'
import SubnetCalc from './views/SubnetCalc.vue'
import DNSChecker from './views/DNSChecker.vue'
import IPChecker from './views/IPChecker.vue'

const routes = [
    {path:'/',component: HomePage},
    {path:'/SubnetCalc',component: SubnetCalc},
    {path:'/DNSChecker', component: DNSChecker},
    {path:'/IPChecker', component: IPChecker}
]
    
const router = createRouter ({
    history : createWebHashHistory(),
    routes
})
export default router