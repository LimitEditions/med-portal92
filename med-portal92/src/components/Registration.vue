<template>
  <div class="modal">
    <div class="modal__content">
      <div>
        <h2 class="modal__content_text">Регистрация</h2>
        <form class="login_form" @submit.prevent="register">
          <input class="login_input" type="text" v-model="lastName" placeholder="Фамилия" required
            @input="checkLettersOnly('lastName')" />
          <p v-if="errors.lastName" class="error">{{ errors.lastName }}</p>
          <input class="login_input" type="text" v-model="firstName" placeholder="Имя" required
            @input="checkLettersOnly('firstName')" />
          <p v-if="errors.firstName" class="error">{{ errors.firstName }}</p>
          <input class="login_input" type="text" v-model="middleName" placeholder="Отчество"
            @input="checkLettersOnly('middleName')" />
          <p v-if="errors.middleName" class="error">{{ errors.middleName }}</p>
          <input class="login_input" type="date" v-model="dob" placeholder="Дата рождения" required
            @input="checkDataOfBirth" />
          <p v-if="errors.dob" class="error">{{ errors.dob }}</p>
          <input class="login_input" type="tel" v-model="phone" placeholder="Мобильный телефон" required
            @input="checkPhoneNumber()" />
          <p v-if="errors.phone" class="error">{{ errors.phone }}</p>
          <input class="login_input" type="email" v-model="email" placeholder="Email" required @input="checkEmail()" />
          <p v-if="errors.email" class="error">{{ errors.email }}</p>
          <input class="login_input" type="password" v-model="password" placeholder="Введите пароль" required @input="checkPassword()" />
          <p v-if="errors.password" class="error">{{ errors.password }}</p>
          <input class="login_input" type="password" v-model="passwordAgain" placeholder="Введите пароль еще раз" required @input="checkPassword()" >
            <p v-if="errors.passwordAgain" class="error">{{ errors.passwordAgain }}</p>
          <button class="modal__content_btn" type="submit">Зарегистрироваться</button>
        </form>
      </div>
      <div>
        <p class="modal__content_text">Или зарегистрируйтесь через
          <a href="https://www.gosuslugi.ru">
            <img class="modal__content_img" src="../assets/img/gosUslugi.png" alt="goduslugi">
          </a>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
import Joi from 'joi';
export default {
  data() {
    return {
      lastName: "",
      firstName: "",
      middleName: "",
      dob: "",
      phone: "",
      email: "",
      password: "",
      passwordAgain: "",
      errorMessages: {},
      errors: {
        lastName: "",
        firstName: "",
        middleName: "",
        dob: "",
        phone: "",
        email: "",
        password: "",
        passwordAgain: "",
      }
    };
  },
  methods: {
    checkLettersOnly(fieldName) {
      const value = this[fieldName];
      if (!/^[a-zA-Zа-яА-ЯёЁ-]*$/.test(value)) {
        this.errors[fieldName] = "Поле должно состоять только из букв и -";
        this[fieldName] = value.replace(/[^a-zA-Zа-яА-ЯёЁ-]/g, '');
      } else {
        this.errors[fieldName] = "";
      }
    },
    checkDataOfBirth() {
      const dobDate = new Date(this.dob);
      const minYear = 1900;
      const nowDate = new Date();
      if (dobDate.getFullYear() < minYear || dobDate > nowDate) {
        this.errors.dob = "Дата рождения не может быть раньше 1900 года и позже текущего года";
      } else {
        this.errors.dob = "";
      }
    },
    checkPhoneNumber() {
      const cleanedPhone = this.phone.replace(/\D/g, '');
      const phoneNumber = (cleanedPhone.startsWith('7') 
      || cleanedPhone.startsWith('8')) ? '+7' + cleanedPhone.slice(1) : cleanedPhone;
      const phoneRegex = /^\+7\d{10}$/;

      if (!phoneRegex.test(phoneNumber)) {
        this.errors.phone = "Номер телефона должен начинаться с +7 или 8 и содержать ровно 10 цифр";
        this.phone = this.phone.replace(/[^+0-9]/g, '');
      } else {
        this.errors.phone = "";
      }
      this.phone = phoneNumber;
    },
    checkEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(this.email)) {
    this.errors.email = "email должен содержать @ и .";
  } else {
    this.errors.email = "";
  }
},
checkPassword() {
  const password = this.password;
  const passwordAgain = this.passwordAgain;

  const hasUpperCase = /[A-ZА-ЯЁ]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

  if (
    password.length < 8 ||
    !hasUpperCase ||
    !hasNumber ||
    !hasSpecialChar
  ) {
    this.errors.password = "Пароль должен содержать не менее 8 символов, хотя бы одну заглавную букву, одну цифру, один специальный символ";
  } else {
    this.errors.password = "";
  }
  if (password !== passwordAgain){
    this.errors.passwordAgain = 'Пароли должны совпадать';
  } else {
    this.errors.passwordAgain = ""; 
  }
},

    async register() {
      const schema = Joi.object({
        lastName: Joi.string().max(50).required(),
        firstName: Joi.string().max(50).required(),
        middleName: Joi.string().max(50),
        dob: Joi.date().min('1-1-1900').required(),
        phone: Joi.string().pattern(/^\+7\d{10}$/).required(),
        email: Joi.string().required(),
        password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),
        passwordAgain: Joi.ref('password')
      });

      try {
        await schema.validateAsync({
          lastName: this.lastName,
          firstName: this.firstName,
          middleName: this.middleName,
          dob: this.dob,
          phone: this.phone,
          email: this.email,
          password: this.password,
          passwordAgain: this.passwordAgain
        });
        this.errorMessages = {};
      } catch (error) {
        if (error.details) {
          error.details.forEach(detail => {
            this.errorMessages[detail.context.key] = detail.message;
          });
        } else {
          console.error('Ошибка при валидации:', error);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/mixins.scss';

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  @include flex(flex, center, center);
  z-index: 2;
}

.modal__content {
  background-color: white;
  padding: 20px;
  border-radius: 25px;
  width: 600px;
  height: 700px;
  background-image: url(../assets/img/background.jpg);
  @include flex(flex, space-between, center);
  flex-direction: column;
  border: $border-style;
  z-index: 10;

  &_text {
    font-size: 30px;
    margin-bottom: 15px;
    @include flex(flex, center, center);
  }

  &_btn {
    height: 50px;
    padding: 0 20px;
    border-radius: 20px;
    background-color: $main-colorText;
    color: white;
    font-size: 15px;
    cursor: pointer;
  }

  &_img {
    width: 80px;
    border-radius: 35px;
    margin-left: 20px;
  }
}

.login {
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
</style>