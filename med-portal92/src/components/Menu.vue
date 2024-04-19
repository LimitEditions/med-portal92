<template>
    <div class="menu-overlay">
        <div class="menu" >
            <details v-for="menu in menus" :key="menu.id" class="menu-section">
                <summary class="menu-title">{{ menu.title }}</summary>
                <ul>
                    <li class="menu_list" v-for="(option, index) in menu.options" :key="index"><a href="#">{{ option }}</a> </li>
                </ul>
            </details>
            <div @click="closeMenu"><img class="close" src="../assets/img/close.png" alt=""></div>
        </div>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
    data() {
        return {
            menus: [
                {
                    id: uuidv4(),
                    title: 'Запись на прием к врачу',
                    options: [
                        'Свободная запись на вакцинацию от COVID - 19',
                        'По направлению',
                        'Предстоящие посещения',
                        'Чат с врачом',
                        'По полису ОМС',
                        'Журнал отложенной записи',
                        'На диспансеризацию',
                        'Вызов врача на дом',
                        'Просмотр и отмена записи к врачу',
                        'Запись по телефону',
                        'Запись на углубленную диспансеризацию'
                    ]
                },
                {
                    id: uuidv4(),
                    title: 'Медицинская карта',
                    options: [
                        'Случаи медицинского обслуживания',
                        'Результаты анализов',
                        'Мои направления',
                        'Сведения о льготах и рецептах на льготные лекарства',
                        'Мой анамнез',
                        'Календарь прививок',
                        'Календарь беременности',
                        'Управление доступом к медицинской карте',
                        'Журнал просмотра медицинской карты',
                        'Листки нетрудоспособности',
                        'Результаты инструментальных исследований'
                    ]
                },
                {
                    id: uuidv4(),
                    title: 'Сервисы ОМС',
                    options: [
                        'Медицинские организации по прикреплению',
                        'Проверить прикрепление полиса ОМС к медицинской организации',
                        'Сведения о медицинском полисе ОМС',
                        'Сведения об оказанных услугах по ОМС и их стоимости'
                    ]
                },
                {
                    id: uuidv4(),
                    title: 'Справочные сервисы',
                    options: [
                        'Справочник медицинских организаций',
                        'Медицинские организации на карте',
                        'Расписание приема врачей',
                        'Поиск льготных лекарственных препаратов в аптеках города'
                    ]
                },
                {
                    id: uuidv4(),
                    title: 'Полезная информация',
                    options: [
                        'Контакты',
                        'Организации',
                        'Разное',
                        'Вопросы и ответы'
                    ]
                },
                {
                    id: uuidv4(),
                    title: 'О портале',
                }
            ]
        }
    },
    methods: {
        closeMenu() {
            this.$emit('close');
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/mixins.scss';

.menu-overlay {
    min-width: 100%;
    min-height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
}

.menu {
    position: relative;
    top: 170px;
    right: 0;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    max-width: 100%;
    margin: 0 auto;

    &_list{
        font-size: 25px;
        margin-bottom: 15px;
    }

}

.menu-title{
    color: $main-colorText;
    font-size: 32px;
}
.menu-title:last-child{
    list-style: none;
}

.menu-section {
    margin-bottom: 750px;
    width: 250px;
}

.menu-section summary {
    margin-bottom: 10px;
    cursor: pointer;
}

.menu-section ul {
    list-style-type: none;
    padding: 0;
    display: none;
}

.menu-section ul li a {
    text-decoration: none;
    color: #354336;;
}

.menu-section ul li a:hover {
    text-decoration: underline;
}

.menu-section[open] ul {
    display: block;
}



.close{
    width: 50px;
    height: 50px;
    cursor: pointer;
}
</style>