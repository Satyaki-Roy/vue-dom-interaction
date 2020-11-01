const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      fullName: "",
    };
  },
  watch: {
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
  },
  computed: {
    // fullName() {
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return `${this.name} Roy`;
    // },
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
