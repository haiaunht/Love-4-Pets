import React, {useState, useEffect} from "react"
import AdminForm from "./AdminForm"

const Admin = props => {
  const [adoptForms, setadoptForms] = useState([])
  const fetchAllForm = async () => {
    try {
      const response = await fetch("/api/v1/admin")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const body = await response.json()
      setadoptForms(body.adoptionApplications)
    } catch (err) {
      console.log(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchAllForm()
  }, [])

  const allAdoptForms = adoptForms.map( form => {
    return (
      <AdminForm 
        key={form.id} 
        name={form.name} 
        phoneNumber={form.phoneNumber}
        email={form.email}
        homeStatus={form.homeStatus}
        applicationStatus={form.applicationStatus}
      />
    )
  })

  return (
    <div className="container">
      <div className="content">
        <div className="max-width-800">
          <h1>Welcome, Admin!</h1>
          {allAdoptForms}
        </div>
      </div>
    </div>
  )
}

export default Admin