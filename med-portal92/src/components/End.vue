<template>
    <footer class="border">
        <div class="container footer">
            <div class="footer__sites">
                <router-link to="/" class="footer__sites_main">
                    <img class="footer__sites_img" src="@/assets/img/logo.jpg" alt="Logo">
                    <h2 class="footer__sites_title">МедПортал92</h2>
                </router-link>
                <p class="footer__sites_text">Портал электронных сервисов системы здравоохранения г. Севастополя</p>

            </div>
            <div class="footer__page">
                <h3 class="footer__page_title">Разделы</h3>
                <router-link v-for="(link) in links" :key="link" :to="link.url" class="footer__page_link"> {{ link.title
                    }} </router-link>
            </div>
            <div class="footer__contact">
                <h3 class="footer__contact">Доступно для скачивания</h3>
                <div class="footer__contact_adress" v-for="site in sites" :key="site.id">
                    <a :href="site.link"> <img class="footer__contact_img" :src="site.img" :alt='site.title'></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
    data() {
        return {
            links: [
                {
                    id: uuidv4(),
                    title: 'Главная',
                    url: '/',
                },
                {
                    id: uuidv4(),
                    title: 'О портале',
                    url: '/about',
                },
                {
                    id: uuidv4(),
                    title: 'Новости',
                    url: '/news',
                },
                {
                    id: uuidv4(),
                    title: 'Карта сайта',
                    url: '/map',
                },
                {
                    id: uuidv4(),
                    title: 'Помощь',
                    url: '/help',
                }
            ],
            sites: [
                {
                    id: uuidv4(),
                    title: 'RuStore',
                    link: 'https://apps.rustore.ru',
                    img: require('@/assets/img/RuStore.jpg'),
                },
                {
                    id: uuidv4(),
                    title: 'AuroraStore',
                    link: 'https://aurorastore.org/',
                    img: require('@/assets/img/AuroraStore.jpg'),
                },
                {
                    id: uuidv4(),
                    title: 'AppStore',
                    link: 'https://itunes.apple.com',
                    img: require('@/assets/img/app_store.jpg'),
                },
            ]
        };
    },
};
</script>
