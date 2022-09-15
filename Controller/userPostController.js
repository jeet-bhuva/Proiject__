// Models
const  postmodel = require("../Modules/usersSchema")


// ========================== User Posts ==================================

const userpost = async (req, res) => {
    const { Posttitel, Description, image, Likes, Comment } = req.body
    if (!Posttitel || !Description || !image || !Likes || !Comment) {
        return res.send({
            status: 404,
            message: "Plase Add All The Fields"
        })
    } else {
        res.send("Okk")
    }

    const userpost = await new postmodel({
        Posttitel: Posttitel,
        Description: Description,
        image: image,
        Likes: Likes,
        Comment: Comment
    })

    userpost.save().then((data) => {
        res.send({
            status: 200,
            message: "Post Successfuly..."
        })
    }).catch((error) => {
        throw error
    })
}

// ========================= User Post Update =====================================

const userPostUpdate = async (req, res) => {
    await postmodel.findByIdAndUpdate({ _id: req.params.id }, {
        $set: {
            Posttitel: req.body.Posttitel,
            Description: req.body.Description,
            image: req.body.image,
            Likes: req.body.Likes,
            Comment: req.body.Comment
        }
    }).then(() => {
        res.send({
            status: 200,
            message: "Update Post Successfuly..."
        })
    }).catch((err) => {
        res.send({
            status: 404,
            Error: err
        })
    })
}

// ========================= User Post Delete =====================================


const userPostDelete = async (req, res) => {
    const { id } = req.body;
    await postmodel.findByIdAndDelete(id).then((data) => {
        return res.send({
            status: 200,
            error: "Post removed successfully!"
        })
    }).catch((error) => {
        return res.send({
            status: 404,
            error: "POst doesn't exit"
        })
    })
}

module.exports= {
    userpost,
    userPostUpdate,
    userPostDelete
}