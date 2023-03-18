const app = Vue.createApp({
  data() {
    return {
      output: "",
      confirmedOutput: "",
    };
  },
  methods: {
    alert() {
      return alert("atention!");
    },

    captionInputValue(event) {
      this.output = event.target.value;
    },

    handleConfirmedOutput() {
      this.confirmedOutput = this.output;
    },
  },
});

app.mount("#assignment");
