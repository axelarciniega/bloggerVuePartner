<template>
    <div v-if="activeBlog" class="container-fluid">
    <section class="row">
        <div class="d-flex justify-content-center" >
            <img class="imgs" :src="activeBlog.imgUrl" alt="">
        </div>
<div class="col-12 text-center"><h1>{{ activeBlog.title }}</h1></div>
<div class="text-center">{{ activeBlog.body }}</div>


<router-link :to="{name: 'Profile Details' , params: {profileId: activeBlog.creatorId}}">
<div class="text-center">
    
    {{ activeBlog.creator.name }} <img class="img" :src="activeBlog.creator.picture" alt=""> 

</div>
</router-link>



<div class="text-center">{{ activeBlog.creator.email }}</div>
<div class="text-center">{{ activeBlog.createdAt }}</div>
    </section>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { useRoute, useRouter } from 'vue-router';
import { blogsService } from '../services/BlogsService.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import { Blog } from '../models/Blog.js';






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
    activeBlog: computed(() => AppState.activeBlog),
    profile: computed(() => AppState.activeProfile)

  };
},
};
</script>


<style>
.imgs{
    height: 40vh;
    width: 40vh;
}
</style>