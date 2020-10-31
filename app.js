const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      finalName: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    addName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    finalNameEvent() {
      this.finalName = this.name;
    },
    submitForm() {
      alert("Submitted");
    },
  },
});

app.mount("#events");
