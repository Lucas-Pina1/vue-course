const app = Vue.createApp({
  data() {
    return {
      name: "Lucas",
      age: 27,
      imgLink:
        "https://mundoconectado.com.br/uploads/chamadas/capa_145.jpg",
    };
  },
  methods: {
    ageIn5years() {
      return this.age + 5;
    },

    randomFavoriteNumber() {
      const radomNunber = Math.random();
      return radomNunber;
    },
  },
});

app.mount("#assignment");
