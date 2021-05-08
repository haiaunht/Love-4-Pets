import React, {useState, useEffect} from "react"

const AdminSurrenderForm = props => {
  //set the state here to change the status

  console.log("SURRENDER: " + props.form.petName)
  const { petName, petImageUrl, age, vaccinationStatus, typeId } = props.form;
  console.log(petName + petImageUrl)
  const awaitApplication = {
    name : props.form.petName,
    imgUrl : props.form.imgUrl,
    age : props.form.petAge,
    vaccinationStatus: props.form.vaccinationStatus,
    adoptionStory : "Just join from the Surrender shelter",
    adoptionStatus : true,
    typeId: props.form.petTypeId
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
    addToPetsAfterApproval()
  }

  const handleDeny = (event) => {
    event.preventDefault()
    console.log("Deny")
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

export default AdminSurrenderForm