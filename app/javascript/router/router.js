import Vue          from 'vue'
import VueRouter    from 'vue-router'
import QuizHome     from '../pages/QuizHome.vue'
import QuizCreate   from '../pages/QuizCreate.vue'
import QuizEdit     from '../pages/QuizUpdate.vue'
import Signup       from '../pages/Signup.vue'
import Signin       from '../pages/Signin.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',  name: 'QuizHome', component: QuizHome },
  { path: '/create',  component: QuizCreate },
  { path: '/edit/:id',  name: 'QuizEdit',    component: QuizEdit },
  { path: '/signup',    name: 'Signup',      component: Signup },
  { path: '/signin',    name: 'Signin',      component: Signin }
];

export default new VueRouter({ routes });