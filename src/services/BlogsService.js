import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class BlogsService{
    async getBlogs(){
        const res = await api.get("api/blogs")
        logger.log(res.data)
        AppState.blogs = res.data.map(blog => new Blog(blog))

    }

    async getBlogsById(blogId){
        const res = await api.get(`api/blogs/${blogId}`)
        logger.log(res.data)
        AppState.activeBlog = new Blog(res.data)
    }



}

export const blogsService = new BlogsService()