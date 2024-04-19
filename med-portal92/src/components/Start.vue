<template>
    <header>
        <div class="container header">
            <router-link to="/" class="header__logo">
                <img class="header__logo_img" src="@/assets/img/logo.jpg" alt="Logo">
            </router-link>
            <input class="header__find" type="text" placeholder="Поиск">
            <div class="header__nav">
                <div @click="showEnter()" class="header__nav_text">
                    <img class="header__nav_img" src="../assets/img/enter.png" alt="Enter">
                    <span class="footer__page_link">Вход</span>
                </div>
                <LoginForm v-if="enter" @close="closeEnter"/>
                <div @click="showReg()" class="header__nav_text">
                    <img class="header__nav_img" src="../assets/img/registration.png" alt="registrarion">
                    <span class="footer__page_link">Регистрация</span>
                </div>
                <Registration v-if="reg" @close="closeReg" />
                <div @click="showMenu()" class="header__nav_menu">
                    <img class="header__nav_img" src="@/assets/img/menu.png" alt="Sign">
                    <span class="footer__page_link">Меню</span>
                </div>
                <Menu v-if="isOpen" @close="closeMenu"/>
            </div>
        </div>
    </header>
</template>

<script>
import Menu from './Menu.vue'
import Registration from './Registration.vue';
import LoginForm from './LoginForm.vue';
export default {
    components: { Menu, Registration, LoginForm },
    data() {
        return {
            isOpen: false,
            reg: false,
            enter: false,
        };
    },
    methods: {
        showMenu() {
            this.isOpen = true;
        },
        closeMenu() {
            this.isOpen = false;
        },
        showReg() {
            this.reg = true;
        },
        closeReg() {
            this.reg = false;
        },
        showEnter(){
            this.enter = true;
        },
        closeEnter() {
            this.enter = false;
        },
    },
};
</script>
