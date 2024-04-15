<template>
    <div class="modal" v-if="isOpen">
      <div class="modal-content">
        <form @submit.prevent="register">
          <input type="text" v-model="lastName" placeholder="Фамилия" required />
          <input type="text" v-model="firstName" placeholder="Имя" required />
          <input type="text" v-model="middleName" placeholder="Отчество" />
          <input type="date" v-model="dob" placeholder="Дата рождения" required />
          <input type="tel" v-model="phone" placeholder="Мобильный телефон" required />
          <input type="email" v-model="email" placeholder="Email" required />
          <button type="submit">Зарегистрироваться</button>
        </form>
        <!-- Ссылка на регистрацию через госуслуги -->
        <p>Или <a href="#">зарегистрируйтесь через госуслуги</a>.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    isOpen: Boolean, // Свойство для контроля отображения модального окна
    data() {
      return {
        lastName: "",
        firstName: "",
        middleName: "",
        dob: "",
        phone: "",
        email: "",
      };
    },
    methods: {
      register() {
        // Логика для регистрации пользователя
        // Отправка данных на сервер и т.д.
        console.log("Данные для регистрации:", {
          lastName: this.lastName,
          firstName: this.firstName,
          middleName: this.middleName,
          dob: this.dob,
          phone: this.phone,
          email: this.email,
        });
        // После успешной регистрации закрываем модальное окно
        this.$emit("close");
      },
    },
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 500px;
    height: 500px;
    background-color: rgba(0, 0, 0, 0.5); /* Затемнение фона */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
  </style>