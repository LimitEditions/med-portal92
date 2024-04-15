<template>
    <section class="parent">
        <div class="login">
            <router-link to="/" class="header__logo header__logo_login">
                <img class="header__logo_img" src="@/assets/img/logo.jpg" alt="Logo">
            </router-link>
            <div class="form__login">
                <h2 class="form__login_text">Форма входа</h2>
                <!-- Форма входа -->
                <form class="login_form" @submit.prevent="login">
                    <input class="login_input" type="email" v-model="email" placeholder="Email" required>
                    <input class="login_input" type="password" v-model="password" placeholder="Пароль" required>
                    <button class="form__login_btn" type="submit">Войти</button>
                </form>
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
            // Логика для входа пользователя
            // Здесь вы можете отправить данные на сервер для проверки и аутентификации пользователя
            console.log('Вход пользователя с email:', this.email);
            console.log('Пароль:', this.password);

        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/mixins.scss';


.login {
    background-image: url(../assets/img/background.jpg);
    width: 500px;
    height: 500px;
    flex-direction: column;
    margin: 300px auto;
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
        border-radius: 18px;
        background-color: $main-colorText;
        @include flex(flex, center, center);
        gap: 10px;
        color: white;
        font-size: 15px;
        cursor: pointer;
    }
}

</style>