<template>
    <section class="row">
        <div v-if="activeBlog">
            this is the detail page
        </div>
    </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { useRoute, useRouter } from 'vue-router';
import { blogsService } from '../services/BlogsService.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';






export default {
setup() {
    const route = useRoute()
onMounted(() => {
    getBlogById()
    logger.log(route)
})

async function getBlogById(){
    try {
        const blogId = route.params.blogId
        await blogsService.getBlogsById(blogId)
    } catch (error) {
        Pop.error(error)
    }
}
  return {
    activeBlog: computed(() => AppState.activeBlog)
  };
},
};
</script>


<style>
</style>