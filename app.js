const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
    };
  },
  watch: {
    counter(newValue, oldValue) {
      if (newValue > 50) {
        this.counter = 0;
      }
    },
    /*
    name(newValue, oldValue) {
      if (this.name === "") {
        this.fullName = "";
      } else {
        this.fullName = `${newValue} ${this.lastName}`;
      }
    },
    lastName(newValue, oldValue) {
      if (this.name === "") {
        this.fullName = "";
      } else {
        this.fullName = `${this.name} ${newValue}`;
      }
    },
    */
  },
  computed: {
    fullName() {
      return `${this.name} ${this.lastName}`;
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
      this.lastName = "";
    },
    submitForm() {
      alert("Submitted");
    },
  },
});

app.mount("#events");
