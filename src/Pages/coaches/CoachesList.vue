<template>
  <section>
    <h3>FILTER</h3>
  </section>
  <section>
    <h3>All coaches</h3>
    <button>Refresh</button>
    <button>
      <router-link to="/register">Resgister for a Coach</router-link>
    </button>
    <ul v-if="coachesAvaliable">
        <li v-for="coach in filtercoaches" :key="coach.id">
            {{ coach.firstName }}
        </li>
    </ul>
    <h3 v-else>There are No coaches Available</h3>
  </section>
</template>

<script>
export default {
    computed:{
        filtercoaches(){
            return this.$store.getters['coaches/coaches']
        },
        coachesAvaliable(){
            return this.$store.getters['coaches/hasCoaches']
        }
    }

};
</script>

<style scoped>
</style>