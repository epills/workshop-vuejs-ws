// based on code at https://github.com/iamshaunjp/vuejs-playlist/tree/65348d6c9202c7f573ca62305ca8c8cf19f15d58

new Vue({
  // note how Vue connects components--by their ID in the layout file
  // this is a little diferent from how they're imported and used in React
  el: '#main-app',
  data: {
    health: 100,
    ended: false,
  },
  methods: {
    punch() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart() {
      this.health = 100;
      this.ended = false;
    },
  },
  computed: {

  },
});
