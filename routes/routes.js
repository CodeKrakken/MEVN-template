const { Router } = require('express')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const response = 'I am the Message Centre'
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = routes;