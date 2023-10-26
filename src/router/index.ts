import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/Home/HomeWindow.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name : 'home',
      component: HomeView,
      children :[
        
      ],
    },
    { 
      path:"/auth/login",
      component: ()=> import ("../views/Auth/LoginView.vue")
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   const token = Cookies.get('access_token');
//   if (to.path !== '/auth/login') {
//     if (token) {
//       try {
//         const payload = jwtDecode(token)
//         const currentTime = Math.floor(Date.now() / 1000); 
//         if ((payload as any).exp < currentTime) {
//           next('/auth/login');
//         } else {
//            if ((payload as { [key: string]: string })['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'SuperAdmin' || (payload as { [key: string]: string })['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'Admin') {
//             next(); 
//           } else {
//             next("/");
//           }
//         }
//       } catch (error) {
//         next('/auth/login');
//       }
//     } else {
//       next('/auth/login');
//     }
//   } else {
//     next();
//   }
// });
export default router
