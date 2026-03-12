import AboutPage from '@/views/about-page.vue';
import ContactPage from '@/views/contact-page.vue';
import MainPage from '@/views/main-page.vue';
import MenuPage from '@/views/menu-page.vue';
import SignInPage from '@/views/sign-in-page.vue';
import SignUpPage from '@/views/sign-up-page.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: MainPage, name: 'Main', meta: { generalBackground: true } },
    { path: '/about', component: AboutPage, name: 'About', meta: { aboutPage: true } },
    { path: '/menu', component: MenuPage, name: 'Menu', meta: { menuPage: true } },
    { path: '/contacts', component: ContactPage, name: 'Contacts', meta: { contactsPage: true } },
    { path: '/signIn', component: SignInPage, name: 'SignInPage' },
    { path: '/signUp', component: SignUpPage, name: 'SignUpPage' },
  ],
});

export default router;
