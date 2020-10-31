const app = Vue.createApp({
  data() {
    return {
      courseGoal1: "Finish the course!",
      courseGoal2: "Master this course!",
      vueLink: "https://v3.vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoal1;
      }
      return this.courseGoal2;
    },
  },
});

app.mount("#user-goal");
