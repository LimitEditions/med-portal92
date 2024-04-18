<template>
    <div>
        <Start />
        <main>
            <div class=" main">
                <div class="main__desc">
                    <h1 class="main__desc_headding">Портал электронных сервисов здравоохранения г. Севастополя</h1>
                    <div class="main__btn">
                        <div>
                            <button @click="showEnter()" class="main__desc_btn">
                                <p class="main__desc_btn-text">Войти</p>
                                <svg class="main__desc_btn-img" xmlns="http://www.w3.org/2000/svg" width="25"
                                    height="25" viewBox="0 0 18 17" fill="#f0a350">
                                    <path d="M1 8.43542L14.7232 8.29857M9.61818
                            1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2"
                                        stroke-linecap="square" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <button class="main__desc_btn" @click="showReg()">
                                <p class="main__desc_btn-text">Зарегистрироваться</p>
                                <svg class="main__desc_btn-img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="50" height="50" viewBox="0 0 512 512">
                                    <path fill="#f0a350"
                                        d="M424.3,180c-1-1.2-1.5-2.8-1.5-4.3c-14.8-26.1-15.7-58-30.5-84.1c-41.7,23.4-70.2,65.1-97.4,103.1c-16.4,22.9-31.1,46.4-44.6,71.1c-13.6,24.8-26.8,49.9-42,73.8c-2.2,3.4-7.9,5-10.3,0.7c-7.2-13.3-15.3-26.2-24.6-38.2c-8-10.3-17.1-19.5-25.3-29.6c-12.7-15.7-26.3-34.5-43.9-45.4c-6.4,21-13.9,41.8-17.2,63.6c24.6,15.9,43.4,38.9,61.5,61.6c21.2,26.6,43.1,52,66.9,76.3c15.4-20.1,26-43.5,38.8-65.3c15.1-25.7,32.7-49.4,51.4-72.6c18.7-23.2,40.3-43.7,62-63.9c10.2-9.5,22.2-17.3,33.1-26c8.2-6.6,16.2-13.4,23.7-20.7C424.4,180.2,424.4,180.1,424.3,180z">
                                    </path>
                                    <path
                                        d="M436.2,170.3h-2.8c-16.3-27.7-16.2-62.6-34-89.9c-1.9-3-5.4-3.1-8.3-1.6c-45.6,23.1-76.2,67.7-105.2,108.1c-16.6,23.2-31.6,47-45.4,72c-12.3,22.3-24.1,44.8-37.4,66.6c-6-10.4-12.6-20.4-19.9-29.9c-8.2-10.8-17.8-20.3-26.3-30.8c-15.2-18.7-31.4-40.9-53.7-51.5c-3.7-1.8-7.4,0.5-8.5,4.2c-6.8,23.7-15.8,47-19.5,71.4c0,0.1,0,0.2,0,0.4c-2,2.7-2.2,7.1,1.6,9.4c26.5,15.6,46,40.8,64.9,64.6c22,27.7,45.2,54.1,70.2,79.1c2.3,2.3,6.4,1.8,8.4-0.5c17.2-20.6,28.7-45,41.8-68.2c14.7-25.9,32-50.3,51.1-73.2c19.2-22.9,40-43.7,61.9-64c10.4-9.7,22.6-17.7,33.8-26.6c9-7.2,17.7-14.7,25.9-22.8c2.3-0.5,4.2-2.1,4.6-4.7c0.6-0.6,1.2-1.3,1.8-1.9C445,176.1,441.2,170.3,436.2,170.3z M400.7,201c-10.9,8.7-22.8,16.5-33.1,26c-21.8,20.2-43.4,40.7-62,63.9c-18.7,23.2-36.3,46.8-51.4,72.6c-12.8,21.8-23.4,45.2-38.8,65.3c-23.8-24.2-45.8-49.7-66.9-76.3c-18.1-22.7-37-45.8-61.5-61.6c3.3-21.8,10.8-42.6,17.2-63.6c17.7,10.9,31.2,29.7,43.9,45.4c8.2,10.1,17.3,19.3,25.3,29.6c9.3,12,17.4,24.9,24.6,38.2c2.4,4.4,8.1,2.7,10.3-0.7c15.3-23.9,28.4-49,42-73.8c13.5-24.7,28.2-48.2,44.6-71.1c27.2-38,55.8-79.8,97.4-103.1c14.8,26.1,15.7,58,30.5,84.1c0,1.5,0.5,3.1,1.5,4.3c0,0.1,0.1,0.2,0.1,0.2C416.9,187.6,408.9,194.4,400.7,201z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <img class="main__img" src="../assets/img/main.jpg" alt="Main">
                </div>
            </div>
        </main>
        <Registration v-if="reg" @close="closeReg" />
        <LoginForm v-if="enter" @close="closeEnter" />
        <MenuSlider />
        <section>
            <div class="container">
                <div class="news">
                    <h2 class="main__desc_headding">Новости</h2>
                    <hr class="news_line">
                    <router-link to="/news">
                        <button class="main__desc_btn">
                            <p class="main__desc_btn-text">Все новости</p>
                        </button>
                    </router-link>
                </div>
                <swiper :effect="'flip'" :grabCursor="true" :pagination="true" :navigation="true" :modules="modules"
                    class="mySwiper">
                    <swiper-slide class="swiper-slide" v-for="news in newses" :key="news.id">
                        <div :style="{ backgroundImage: 'url(' + news.img + ')', height: '50vh', backgroundSize: 'cover', backgroundPosition: 'center' }"
                            class="news_block">
                            <div class="news_date">{{ news.data }}
                            </div>
                            <div class="news_title">{{ news.title }}</div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </section>
        <section>
            <div class="count">
                <div class="count__counter">
                    <div v-for="stat in statics" :key="stat.id" class="count__counter_block">
                        <h3 class="count__num">{{ stat.number }}</h3>
                        <p class="count__text">{{ stat.title }}</p>
                    </div>
                </div>
            </div>
        </section>
        <End />
    </div>
</template>

<script>
import End from './End.vue';
import MenuSlider from './MenuSlider.vue';
import Registration from './Registration.vue';
import Start from './Start.vue';
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/swiper.css';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import LoginForm from './LoginForm.vue';

export default {
    components: {
        Start, End, MenuSlider, Registration, Swiper,
        SwiperSlide, LoginForm
    },
    data() {
        return {
            reg: false,
            enter: false,
            url: '/login',
            newses: [
                {
                    id: uuidv4(),
                    title: 'Стартовала неделя популяризации донорства крови. Расскажем, как правильно быть донором, чтобы помогать людям',
                    data: '15 апреля 2024',
                    img: require('@/assets/img/news_donor.jpg')
                },
                {
                    id: uuidv4(),
                    title: 'В Севастополе стартовала неделя продвижения здорового образа жизни',
                    data: '1 апреля 2024',
                    img: require('@/assets/img/news_week.jpg')
                },
                {
                    id: uuidv4(),
                    title: 'Главные врачи севастопольских городских больниц встретились с населением',
                    data: '28 марта 2024',
                    img: require('@/assets/img/news_glavvrach.jpg')
                },
                {
                    id: uuidv4(),
                    title: 'В Севастопольском противотуберкулезном диспансере прошел День открытых дверей',
                    data: '22 марта 2024',
                    img: require('@/assets/img/news_tbc.jpg')
                },

                {
                    id: uuidv4(),
                    title: 'Как работают медицинские учреждения Севастополя в праздничные дни, посвященные 18 марта',
                    data: '14 марта 2024',
                    img: require('@/assets/img/news_date.jpg')
                },
                {
                    id: uuidv4(),
                    title: '«Ласковый убийца»: стартовала Неделя по борьбе с заражением и распространением хронического вирусного гепатита С',
                    data: '11 марта 2024',
                    img: require('@/assets/img/news_gepC.jpg')
                }
            ],

            statics: [
                {
                    id: uuidv4(),
                    number: '5',
                    title: 'Мед. организаций'
                },
                {
                    id: uuidv4(),
                    number: '18',
                    title: 'Поликлиник'
                },
                {
                    id: uuidv4(),
                    number: '600',
                    title: 'Врачей'
                },
                {
                    id: uuidv4(),
                    number: '2000+',
                    title: 'овольных пациентов'
                }
            ]
        }
    },
    methods: {
        showReg() {
            this.reg = true;
        },
        closeReg() {
            this.reg = false;
        },
        showEnter() {
            this.enter = true;
        },
        closeEnter() {
            this.enter = false;
        },
        closeMenu() {
            this.reg = false;
        }
    },
    setup() {
        return {
            modules: [EffectFlip, Pagination, Navigation],
        };
    },
}
</script>

<style lang="scss" scoped></style>