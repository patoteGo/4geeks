<template lang="pug">
    .card
        .head
            .title {{ title }}
            .number 10/14
        img( :src="url") 
        .desc {{ desc }}
</template>
<script>
export default {
     props: {
    parentData: Object,
    stringProp: String,
    title: String,
    url: String,
    desc: String
  }
}
</script>
<style lang="sass">
    .card
        display: flex
        flex-direction: column
        color: white
        border-radius: 5px
        max-width: 500px
        margin: 30px 0px
        box-shadow: 2px 2px 4px 0px #bfbfbf
        background: white
        .head
            display: flex
            justify-content: space-between
            flex-direction: row
            padding: 20px 10px
            .title
                font-weight: bold
                color: black
                font-family: 'Oswald', sans-serif
            .number
                color: gray
                font-family: 'Oswald', sans-serif
        img
        .desc
            padding: 20px 10px
            color: black
            font-family: 'Oswald', sans-serif
</style>