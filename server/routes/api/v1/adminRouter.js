import express from "express"
import AdoptionApplications from "../../../models/AdoptionApplications.js"

const adminRouter = new express.Router()

adminRouter.get("/", async (req, res) => {
  try {
    const adoptionApplications = await AdoptionApplications.findAll()
    res.status(200).json({ adoptionApplications })
  } catch(error) {
    console.error(error)
    res.status(500).json({ error: error })
  }
})

// adminRouter.post("/", async (req, res) => {
//   try {
//     const newApplication = new AdoptionApplications(req.body)
//     await newApplication.save()
//     res.status(200).json({newApplication})
//   } catch(error) {
//     console.error(error)
//     res.status(500).json({ error: error })
//   }
// })


export default adminRouter