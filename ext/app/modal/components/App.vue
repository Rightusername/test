<template>
  <div class="container">

  </div> 
    
</template>

<script>
  import clone from 'lodash/clone';
  import throttle from 'lodash/throttle';

  export default {
    name: 'App',
    components: {
      'sketch-picker': Sketch,
      TextPicker
    },
    data: () => {
      return{
        canvas: null
      }
    },
    methods: {

    }

}
</script>

<style lang="scss" scoped>

  
  
</style>
