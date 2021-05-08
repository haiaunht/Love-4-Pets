import React, {useState, useEffect} from "react"

const AdminForm = props => {

  console.log(props.petId)
  const awaitApplication = {
    name : props.petName,
    imgUrl : props.imgUrl,
    age : props.petAge,
    vaccinationStatus: props.vaccinationStatus,
    adoptionStory : "Just join from the Surrender shelter",
    adoptionStatus : true,
    typeId: props.petTypeId
  }

  // const addToPetsAfterApproval = async () => {
  //   console.log(awaitApplication)
  //   try {
  //     const response = await fetch("/api/v1/admin/get-all-pets", {
  //       method: "POST",
  //       headers: new Headers({
  //         "Content-Type": "application/json"
  //       }),
  //       body: JSON.stringify(awaitApplication)
  //     })
  //     if (!response.ok) {
  //       const errorMessage = `${response.status} (${response.statusText})`
  //       const error = new Error(errorMessage)
  //       throw error
  //     }
  //     const body = await response.json()
  //     console.log(awaitApplication)
  //   } catch (error) {
  //     console.error(`Error in Fetch: ${error.message}`)
  //   }
  //   console.log("Approved")
  // }

    const handleApprove = (event) => {
      event.preventDefault()
      // addToPetsAfterApproval()
      console.log("Approval for Adoption application!")
    }

    const handleDeny = (event) => {
      event.preventDefault()
      console.log("Deny the Adoption Application")
    }

    return (
        <div className="adiminform">
          <div>
            <form>
              <label><strong>Name: </strong>{props.ownerName}</label><br/>
              <label><strong>Contact: </strong>{props.phoneNumber}</label><br/>
              <label><strong>Email: </strong>{props.email}</label><br/>
              <label><strong>Application
                status: </strong>{props.applicationStatus}</label><br/>

              <button onClick={handleApprove}>Approve</button>
              <button onClick={handleDeny}>Deny</button>
            </form>
          </div>
        </div>
    )

}

export default AdminForm