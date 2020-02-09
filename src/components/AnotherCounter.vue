<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 1000})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement">Decrement</button>
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
        'asyncIncrement',
        'asyncDecrement'
      ])
    }
  }
</script>
