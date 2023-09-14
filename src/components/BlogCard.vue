<template>
    <router-link :to="{name: 'Blog Details', params: {blogId: blog.id}}">

        <div class="container card elevation-5 my-4">
            <section class="row align-items-center selectable blog-card">
                <div class="col-6">
                    <img  class="imgs" :src="blog.imgUrl" :alt="blog.creator.name">
                </div>
                <div class="col-6">
                    <h4>{{ blog.title }}</h4>
                    <div class="h-100 ">

                        <span>Creator: {{ blog.creator.name }} <img class="profile-pic" :src="blog.creator.picture" alt=""></span>
                </div>
            </div>
        </section>
    </div>
</router-link>
    
</template>

<script>
import { Blog } from '../models/Blog.js';

export default {
    props: {blog: {type: Blog, required: true}},
setup() {
  return {};
},
};
</script>


<style>
.imgs{
    width: 100%;
    height: 30vh;
    background-position: center;
    background-size: cover;
}

.blog-card{
   
    &:hover{
        transition: all ease 1s;
        transform: scale(1.02);
    }
}


.profile-pic{
    height: 10vh;
    width: 10vh;
    border-radius: 50%;
}
</style>