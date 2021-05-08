import express from "express"
import SurrenderedPets from "../../../models/SurrenderedPets.js";

const surrenderApplicationRouter = new express.Router()

surrenderApplicationRouter.get("/surrenderedPets", async (req, res) => {
  try{
    const surrenderedPets = await SurrenderedPets.findAll()
    res.status(200).json({ surrenderedPets })
  } catch(error) {
    console.error(error)
  }
})

export default surrenderApplicationRouter