const app = Vue.createApp({
  data() {
    return {
      selectedBoxA: false,
      selectedBoxB: false,
      selectedBoxC: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.selectedBoxA = true;
      } else if (box === "B") {
        this.selectedBoxB = true;
      } else if (box === "C") {
        this.selectedBoxC = true;
      }
    },
  },
});

app.mount("#styling");
