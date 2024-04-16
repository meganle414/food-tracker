const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
app.use(logger)

app.get('/', (req, res) => {
    res.render('index')
})

const userRouter = require('./routes/users')
const nutrientsRouter = require('./routes/nutrients')
// const postRouter = require('./routes/posts')

app.use('/users', userRouter)
app.use('/nutrients', nutrientsRouter)
// app.use('/posts', postRouter)

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

app.listen(3000)