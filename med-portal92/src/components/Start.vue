<template>
    <header>
        <div class="container header">
            <router-link to="/" class="header__logo">
                <img class="header__logo_img" src="@/assets/img/logo.jpg" alt="Logo">
                <!-- <h3 class="header__logo_text">МедПортал92</h3> -->
            </router-link>
            <input class="header__find" type="text" placeholder="Поиск" >
            <div class="header__nav">
                <router-link v-for="(link) in links" :key="link.id" :to="link.url" class="header__nav_text">
                    <img class="header__nav_img" :src="link.img" alt="Sign">
                    <span class="footer__page_link">{{ link.title }}</span>
                </router-link>
                <div class="header__nav_menu">
                    <img class="header__nav_img" src="@/assets/img/menu.png" alt="Sign">
                    <span class="footer__page_link">Меню</span>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
    data() {
        return {
            links: [
            {
                    id: uuidv4(),
                    title: 'Регистация',
                    url: '/registration',
                    img: require('@/assets/img/registration.png')
                },    
            {
                    id: uuidv4(),
                    title: 'Вход',
                    url: '/login',
                    img: require('@/assets/img/enter.png')
                },
                
            ]
        };
    },
};
</script>
