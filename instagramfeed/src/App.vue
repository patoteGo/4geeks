<template lang="pug">
  #app
    h2 Breathe Code Photo Feed
    .container
      post-card(title="This is my title", url="https://picsum.photos/600/400", desc="Eiusmod enim sunt velit tempor ullamco dolore fugiat pariatur magna dolor excepteur do est.")
      post-card(title="This is my title2", url="https://picsum.photos/600/390", desc="Eiusmod enim sunt velit tempor ullamco dolore fugiat pariatur magna dolor excepteur do est.")
      post-card(title="This is my title3", url="https://picsum.photos/600/400", desc="Eiusmod enim sunt velit tempor ullamco dolore fugiat pariatur magna dolor excepteur do est.")
</template>

<script>
import postCard from '@/components/post-card.vue'

export default {
  name: 'app',
  components: { postCard },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Oswald:400,500,600,700&display=swap')
#app 
  font-family: 'Oswald', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
  h2
    font-family: 'Oswald', sans-serif
    font-size: 2em
    text-align: center
  .container
    background: #EAEAEA
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center


</style>
