import React, {useState, useEffect} from "react"

const AdminForm = props => {
  //find pet by the id
  const [submitSuccessful, setSubmitSuccessful] = useState(null)
  const [petToRemove, setPetToRemove] = useState({})

  const getPetWithId = async () => {
    const petIdForAdoption = props.petId
    try {
      const response = await fetch(`/api/v1/pets/${petIdForAdoption}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setPetToRemove(responseBody.petForAdoption)
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getPetWithId()
  }, [])

  console.log(petToRemove)
  //delete the obj

  const handleApprove = (event) => {
    event.preventDefault()
    setSubmitSuccessful(true)
  }

  const handleDeny = (event) => {
    event.preventDefault()
    setSubmitSuccessful(false)
    console.log("Deny")
  }

  if (submitSuccessful) {
    return (
        <div >
          <div>
            <form onSubmit={handleApprove}>
              <label><strong>Name: </strong>{props.ownerName}</label><br/>
              <label><strong>Contact: </strong>{props.phoneNumber}</label><br/>
              <label><strong>Email: </strong>{props.email}</label><br/>
              <label><strong>Application status: </strong>APPROVED</label><br/>
            </form>
          </div>
        </div>
    )
  } else if (submitSuccessful == false) {
    return (
        <div >
          <div>
            <form onSubmit={handleApprove}>
              <label><strong>Name: </strong>{props.ownerName}</label><br/>
              <label><strong>Contact: </strong>{props.phoneNumber}</label><br/>
              <label><strong>Email: </strong>{props.email}</label><br/>
              <label><strong>Application
                status: </strong>DENY</label><br/>
            </form>
          </div>
        </div>
    )
  } else {
    return (
        <div >
          <div>
            <form onSubmit={handleApprove}>
              <label><strong>Name: </strong>{props.ownerName}</label><br/>
              <label><strong>Contact: </strong>{props.phoneNumber}</label><br/>
              <label><strong>Email: </strong>{props.email}</label><br/>
              <label><strong>Application status: </strong>{props.applicationStatus}</label><br/>

              <input type="submit" value="Approve" />

            </form>
            <form onSubmit={handleDeny}>
              <input type="submit" value="Deny"/>
            </form>
          </div>
        </div>
    )
  }

}

export default AdminForm