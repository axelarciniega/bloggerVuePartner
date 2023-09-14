<template>
  <section class="row">
    <div v-for="blog in blogs" :key="blog.id">
        <blogCard :blog="blog"/>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from 'vue'
import Pop from '../utils/Pop.js'
import { blogsService } from '../services/BlogsService.js'
import { AppState } from '../AppState.js'

export default {
  setup() {
    onMounted(() => {
      getBlogs()
    })
    async function getBlogs(){
      try {
        await blogsService.getBlogs()
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
