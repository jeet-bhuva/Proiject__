// Models
const user = require("../Modules/usersSchema")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const jwtkey = "instagramer"

// ========================== User Create ===================================

const createUser = async (req, res) => {
    const { fname, mname, lname, gender, age, mobile, email, password, isActive } = req.body
    if (!fname || !mname || !lname || !gender || !age || !mobile || !email || !password || !isActive) {
        return res.send({
            status: "404",
            error: "Please Required All Field"
        })
    }

    const oldUSer = await user.findOne({ email: email })

    if (oldUSer) {
        return res.send({
            status: 404,
            message: "User Already Exist"
        })
    }

    const Passwordhash = bcrypt.hashSync(password, 12);

    const createUser = await new user({
        fname: fname,
        mname: mname,
        lname: lname,
        gender: gender,
        age: age,
        mobile: mobile,
        email: email.toLowerCase(),
        password: Passwordhash,
        isActive: isActive
    })

    // const tokan = jwt.sign({ _id: oldUSer._id }, jwtkey)
    // res.json({ tokan })

    await createUser.save().then(() => {
        return res.send({
            status: 200,
            message: "User Created Successfully...!"
        })
    }).catch((err => {
        console.log(err)
        return res.send({
            status: 404,
            message: "Something Is Wrong"
        })
    }))
}

// =================== User Signin =================================

const usersignin = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.send({
            status: 404,
            message: "Plz Add Email or Password",
        })
    }
    const signUser = await user.findOne({ email: email.toLowerCase() })
    if (!signUser) {
        res.send({
            status: 404,
            message: "User Are Not Login...!"
        })
    } else {
        bcrypt.compare(password, signUser.password).then(Pass_match => {
            if (Pass_match) {
                const tokan1 = jwt.sign({ _id: signUser._id }, jwtkey)
                res.json({ tokan1 })
            } else (
                res.send({
                    status: 404,
                    message: "Invalid Email Or Password"
                })
            )
        }).catch(
            err => console.log(err)
        )
    }
}

module.exports = {
    createUser,
    usersignin
}