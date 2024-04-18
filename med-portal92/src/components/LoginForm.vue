<template>
    <section class="modal">
        <div class="login">
            <router-link to="/" class="header__logo header__logo_login">
                <img class="header__logo_img" src="@/assets/img/logo.jpg" alt="Logo">
            </router-link>
            <div class="form__login">
                <h2 class="form__login_text">Форма входа</h2>
                <form class="login_form" @submit.prevent="login">
                    <input class="login_input" type="email" v-model="email" placeholder="Email" required>
                    <input class="login_input" type="password" v-model="password" placeholder="Пароль" required>
                    <button Class="form__login_btn" type="submit">Войти</button>
                </form>
                <p class="modal__content_text">Или войдите через <a href="https://www.gosuslugi.ru"> <img class="modal__content_img" src="../assets/img/gosUslugi.png" alt="goduslugi"> </a></p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login(event) {
            event.preventDefault();
            this.$emit('close');
        },
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/mixins.scss';

.modal {
    background-color: rgba(0, 0, 0, 0.85);
    position: fixed;
    @include flex(flex, center, center);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;

    &__content {
        &_text {
            font-size: 30px;
            margin-bottom: 15px;
            @include flex(flex, center, center);
        }

        &_img {
            width: 80px;
            border-radius: 35px;
            margin-left: 20px;
        }
    }
}

.login {
    background-image: url(../assets/img/background.jpg);
    width: 500px;
    height: 500px;
    flex-direction: column;
    box-shadow: 0px 20px 50px 0px rgb(68, 78, 68);
    @include flex(flex, flex-start, center);
    border-radius: 25px;
    border: $border-style;

    &_form {
        @include flex(flex, center, center);
        flex-direction: column;
        gap: 15px;
    }

    &_input {
        height: 30px;
        border-radius: 10px;
        padding-left: 15px;
    }

}

.form__login {
    &_text {
        font-size: 30px;
        margin-bottom: 15px;
    }

    &_btn {
        height: 50px;
        width: 100px;
        padding: 0 20px;
        border-radius: 20px;
        background-color: $main-colorText;
        @include flex(flex, center, center);
        gap: 10px;
        color: white;
        font-size: 15px;
        cursor: pointer;
    }
}
</style>