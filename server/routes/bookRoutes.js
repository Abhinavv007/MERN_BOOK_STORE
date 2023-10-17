import express from "express"
import bookController from "../controllers/bookController.js"
const router  = express.Router()

router.get("/books",bookController.getAllBooks)
router.post("/add/book",bookController.addBook)
router.get("/single/:id",bookController.getSingleBook)
router.put("/update/:id",bookController.updateBook)
router.delete("/delete/:id",bookController.deleteBook)

export default router 