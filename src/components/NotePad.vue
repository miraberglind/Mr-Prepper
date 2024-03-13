<template>
    <div id="Checklist">
      <ul>
        <li v-for="(item, index) in items" :key="index" @click="toggleCheck(index)" :class="{ checked: item.checked }">
          {{ item.text }}
          <span class="checkmark" v-if="item.checked">✔</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { text: 'Water', checked: false },
          { text: 'Flashlight', checked: false },
          { text: 'Lighter', checked: false },
          { text: 'Axe', checked: false },
          { text: 'Tent', checked: false },
          { text: 'Firesteel', checked: false },
        ],
      };
    },
    methods: {
      toggleCheck(index) {
        this.items[index].checked = !this.items[index].checked;
      },
    },
  };
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    padding: 0;
    font-size: 60px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  
  li {
    cursor: pointer;
    position: relative;
    padding-left: 100px;
    margin-bottom: 10px;
  }
  
  li.checked {
    color: rgb(255, 255, 255);
    text-decoration: line-through;
    text-decoration-color: red;
  }
  
  .checkmark {
    color: red;
    position: absolute;
    left: 0;
    animation: checkmark 0.5s ease-in-out forwards;
  }
  
  @keyframes checkmark {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  </style>
  