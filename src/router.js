import { createRouter, createWebHistory } from 'vue-router';

import CoachDetails from './Pages/coaches/CoachDetails.vue';
import CoachRegistration from './Pages/coaches/CoachRegistration.vue';
import CoachesList from './Pages/coaches/CoachesList.vue';
import RequestReceived from './Pages/requests/RequestReceived.vue';
import ContactCoach from './Pages/requests/ContactCoach.vue';
// import NotFound from './Pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: './coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id', 
            props: true, 
            component: CoachDetails, 
            children:[{
                path: 'contact', component: ContactCoach
            }] 
        },
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestReceived },
        // { path: '/:notFound(.*)', component: NotFound }
    ]
});

export default router;
