<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
  // import { mapMutations } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    methods: {
      // increment() {
      //   this.$store.commit('increment');
      // },
      // decrement() {
      //   this.$store.commit('decrement');
      // }
      // ...mapMutations([
      //   'increment',
      //   'decrement'
      // ])
      ...mapActions([
        'increment',
        'decrement'
      ]),
      increment(by) {
        this.$store.dispatch('increment', by)
      }
    }
  }
</script>
