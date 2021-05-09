import React, {useState, useEffect} from "react"
import AdminForm from "./AdminForm"
import AdminSurrenderForm from "./AdminSurrenderForm"

const Admin = props => {
  const [adoptForms, setAdoptForms] = useState([])
  const [surrenderForms, setSurrenderForms] = useState([])

  const fetchAllForm = async () => {
    try {
      const response = await fetch("/api/v1/admin")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const body = await response.json()
      setAdoptForms(body.adoptionApplications)
    } catch (err) {
      console.log(`Error in fetch: ${err.message}`)
    }
  }

  const fetchAllSurrender = async () => {
    try {
      const response = await fetch("/api/v1/surrenders")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const body = await response.json()
      setSurrenderForms(body.surrenderedPets)
    } catch (err) {
      console.log(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchAllForm()
    fetchAllSurrender()
  }, [])

  const allAdoptForms = adoptForms.map( form => {
    return (
        <div>
          <AdminForm
              key={form.id}
              ownerName={form.name}
              phoneNumber={form.phoneNumber}
              email={form.email}
              homeStatus={form.homeStatus}
              applicationStatus={form.applicationStatus}
              petId={form.petId}
          />
        </div>

    )
  })

  const allSurrenderForms = surrenderForms.map( form => {
    return (
      <AdminSurrenderForm
        key={form.id}
        ownerName={form.name}
        phoneNumber={form.phoneNumber}
        email={form.email}
        homeStatus={form.homeStatus}
        applicationStatus={form.applicationStatus}
        surrender={form}
        typeId={form.petTypeId}
      />
    )
  })

  return (
    <div className="container">
      <div className="content">
        <div className="max-width-800">
          <h1>Welcome, Admin!</h1>
          <h2>Adoption Form Awaits:</h2>
          <ul>
          {allAdoptForms}
          </ul>
        </div>

        <div className="max-width-800">
          <h1>=====================</h1>
          <h2>Surrender Form Awaits:</h2>
          {allSurrenderForms}
        </div>
      </div>
    </div>
  )
}

export default Admin