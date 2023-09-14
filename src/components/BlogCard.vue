<template>
    🐄{{ blog.title }} 
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
</style>