const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  computed: {
    fullName() {
      if (this.name === "") {
        return "";
      }
      return `${this.name} Roy`;
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    },
    submitForm() {
      alert("Submitted");
    },
  },
});

app.mount("#events");
