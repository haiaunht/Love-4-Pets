import express from "express"

const clientRouter = new express.Router()

const clientRoutes = [
  "/",
  "/pets",
  "/pets/puppies",
  "/pets/puppies/:id",
  "/pets/pokemon",
  "/pets/pokemon/:id",
  "/surrenders/new",
  "/about",
  "/admin",
  "/surrenders",
  "/404"
]
clientRouter.get(clientRoutes, (req, res) => {
  res.render("home")
})

export default clientRouter
