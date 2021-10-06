import axios from 'axios'
const url = "/api/post"

export default class API {
    //to get all posts from the server
    static async getAllPost(){
        const res = await axios.get(url)
        return res.data
    }

    //to get single post by ID from the server
    static async getPostByID(id){
        const res = await axios.get(`${url}/${id}`)
        return res.data
    }

    //to insert post into from the server
    static async addPost(post){
        const res = await axios.post(url, post)
        return res.data
    }

    //to update post into from the server
    static async updatePost(id, post){
        const res = await axios.patch(`${url}/${id}`,post)
        return res.data
    }

    //to delete post from the server
    static async deletePost(id){
        const res = await axios.delete(`${url}/${id}`)
        return res.data
    }
}