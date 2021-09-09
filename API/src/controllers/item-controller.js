const express = require('express')
const Router = express.Router
const controller = new Router()
const Item = require('../model/item.js')

// add new to do item
controller.post('/add', async (req, res) => {
  try {
    console.log(req.body)
    res.send(req.body) // this doesn't seem to be showing in mongo atlas
	} 
	catch (err) {
		res.status(500).json({
			"message": `Unable to complete request. ${err}`
		})
	}
})

// get all items
controller.get('/', async (req, res) => {
  try {
		let items = await Item.find();
    if(items.length === 0) {
			res.status(404).json({
				"message": "No items found"
			})
		} else {
			res.send(items)
		}
    console.log(items)

	} 
	catch (err) {
		res.status(500).json({
			"message": `Unable to complete request. ${err}`
		})
	}
})
// get all and filer by category?
// get all and filer by status
// get all and filer by type

// update a single item (get and put)

// delete a single item

module.exports = controller