import { createRouter, createWebHashHistory } from "vue-router"
import HomePage from './views/HomePage.vue'
import SubnetCalc from './views/SubnetCalc.vue'
import IPChecker from './views/IPChecker.vue'
import BinaryEncoderDecoder from './views/BinaryEncoderDecoder.vue'
import TLSCertChecker from './views/TLSCertChecker.vue'

const routes = [
    {path:'/',component: HomePage},

    {path:'/SubnetCalc',component: SubnetCalc},

    {path:'/IPChecker', component: IPChecker},

    {path:'/BinaryEncoderDecoder', component: BinaryEncoderDecoder},

    {path:'/TLSCertChecker', component: TLSCertChecker}
]
    
const router = createRouter ({
    history : createWebHashHistory(),
    routes
})
export default router