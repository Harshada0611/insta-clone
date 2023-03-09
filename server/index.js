const express = require('express')
const cors = require('cors')

const User = require('./model/signup.js')
const PostData=require('./model/postform.js')

const app = express()
app.use(express.json())
app.use(cors())

const mongoose=require('mongoose')
mongoose.set('strictQuery', false)
DB='mongodb+srv://Harshadaa1997:Harshadaa1997@cluster0.cmxb8d3.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log('Connected to DB')})
.catch((err)=>{console.log('Mongo connection failed',err)})


app.get('/', (req, resp) => {
    resp.send('This is instaclone project')
})

app.post('/signup', async (req, resp) => {
    let user = new User(req.body)
    let result=await user.save()
    resp.send(result)
})


app.post('/postform', async (req, resp) => {
    let postuser = new PostData(req.body)
    let postresult=await postuser.save()
    resp.send(postresult)
})


app.get('/postview',async (req,resp)=>{
    let postData=await PostData.find()
    resp.send(postData)
})

app.listen(8000, () => { console.log('server started') })