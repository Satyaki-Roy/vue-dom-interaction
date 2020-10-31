const app = Vue.createApp({
  data() {
    return {
      courseGoal1: "Finish the course!",
      vueLink: "https://v3.vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn Vue!";
      }
      return "Master Vue!";
    },
  },
});

app.mount("#user-goal");
