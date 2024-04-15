<template>
  <div class=" container slider-container">
    <button class="controls" @click="prevSlide" :disabled="currentPage === 0"> < </button>
        <div class="slider">
          <div class="slide" v-for="(section) in visibleSections" :key="section.id">
            <img class="slide__img" :src="section.image" alt="Section Image">
            <h3 class="slide__title">{{ section.title }}</h3>
            <p class="slide__desc">{{ section.description }}</p>
          </div>
        </div>
        <button class="controls" @click="nextSlide" :disabled="currentPage === maxPage">></button>
  </div>
  <div class="pagination">
    <span v-for="i in pageCount" :key="i" @click="goToPage(i - 1)" :class="{ active: currentPage === (i - 1) }"><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="15" height="15" rx="10" ry="10" style="fill:white; stroke:#1a471c; stroke-width:2; fill-opacity:0.7; stroke-opacity:0.3" />
</svg>
  </span>
  </div>

</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  data() {
    return {
      sections: [
        {
          id: uuidv4(),
          title: 'Записаться на прием к врачу',
          description: 'Запись на прием к врачу в удобное для вас время',
          image: require('@/assets/img/appoiintments.png'),
          route: '/appointments'
        },
        {
          id: uuidv4(),
          title: 'Медицинская карта',
          description: 'Вся информация о вашем здоровье в одном месте',
          image: require('@/assets/img/medical_card.png'),
          route: '/medical-record'
        },
        {
          id: uuidv4(),
          title: 'Дневник здоровья',
          description: 'Отслеживайте изменения вашего здоровья',
          image: require('@/assets/img/health_diary.jpg'),
          route: '/health-diary'
        },
        {
          id: uuidv4(),
          title: 'Медицинские организации',
          description: 'Список медицинских учреждений в Севастополе',
          image: require('@/assets/img/med_org.jpg'),
          route: '/medical-organizations'
        },
        {
          id: uuidv4(),
          title: 'Прикрепиться к поликлинике',
          description: 'Узнайте как прикрепиться к ближайшей поликлинике',
          image: require('@/assets/img/attach_clinic.gif'),
          route: '/attach-to-clinic'
        }
      ],
      itemsPerPage: 3,
      currentPage: 0,
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.sections.length / this.itemsPerPage);
    },
    visibleSections() {
      const start = this.currentPage * this.itemsPerPage;
      return this.sections.slice(start, start + this.itemsPerPage);
    },
    maxPage() {
      return this.pageCount - 1;
    }
  },
  methods: {
    prevSlide() {
      this.currentPage--;
    },
    nextSlide() {
      this.currentPage++;
    },
    goToPage(page) {
      this.currentPage = page;
    }
  }
};
</script>

<style scoped>
/* Styles for slider and slides */
.slider-container {
  height: 250px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  position: relative;
  top: -30px;
}

.slider {
  display: flex;
  cursor: pointer;
}

.slide {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.slide__img {
  width: 100px;
}

.slide__title {
  font-size: 20px;
  color: #1a471c;
  text-align: center;
}

.slide__desc {
  width: 200px;
  color: #354336;
  text-align: center;
}

/* Styles for controls */
.controls {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #1a471c;
  color: #f0a350;
  font-size: 25px;
  cursor: pointer;
}

.controls button {
  margin-right: 10px;
}

/* Styles for pagination */
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: relative;
  top: -30px;
}

.pagination span {
  cursor: pointer;
  margin: 0 5px;
}

.pagination_img :hover path{
  fill: #1a471c;
}

.pagination span.active {
  font-weight: bold;
}
</style>