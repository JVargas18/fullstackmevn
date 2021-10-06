const Post = require('../models/posts')
const fs = require('fs')

module.exports = class API {
    // fetch all posts
    static async fetchAllPost(req, res){
        //res.send("Hello from API")
        try {
            const posts = await Post.find()
            res.status(200).json(posts)
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

    //fetch post by ID
    static async fetchPostId(req, res){
        //res.send("Fetch Post By ID")
        const id = req.params.id
        try {
            const post = await Post.findById(id)
            res.status(200).json(post)
        } catch (error) {
            res.status(404).json({message: error.message})
        }
    }

    //create a post
    static async createPost(req, res){
        //res.send("Create Post")
        const post = req.body
        const imagename = req.file.filename
        post.image = imagename
        try {
            await Post.create(post)
            res.status(201).json({ message: 'Post created successfully'})
        } catch (error) {
            res.status(400).json({ message: error.message})
        }
    }

    //update a post
    static async updatePost(req, res){
        //res.send("Update Post")
        const id = req.params.id
        let new_image = ''
        if(req.file){
            new_image = req.file.filename
            try {
                fs.unlinkSync('./uploads/'+ req.body.old_image)
            } catch (error) {
                console.log(error)
            }
        }else{
            new_image = req.body.old_image
        }
        const newPost = req.body
        newPost.image = new_image
        try {
            await Post.findByIdAndUpdate(id,newPost)
            res.status(200).json({message: 'Post updated successfull'})
        } catch (error) {
            res.status(404).json({message: error.message})
        }
    }

    //delete a post
    static async deletePost(req, res){
        //res.send("Delete Post")
        const id = req.params.id
        //console.log(req)
        //console.log(res)
        try {
            const result = await Post.findByIdAndDelete(id)            
            if(result.image != ''){
                try {
                    fs.unlinkSync('./uploads/'+result.image)
                } catch (error) {
                    console.log(error)
                }
            }
            res.status(200).json({message: 'Post deleted successfully'})
        } catch (error) {
            res.status(404).json({message: error.message})
        }
    }
}