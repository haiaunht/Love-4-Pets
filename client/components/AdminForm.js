import React from "react"

const AdminForm = props => {
  const handleApprove = (event) => {
    event.preventDefault()
    console.log("Apporve")
  }

  const handleDeny = (event) => {
    event.preventDefault()
    console.log("Deny")
  }

  return (
    <div className="adiminform">
      <div>
        <form>
          <label><strong>Name: </strong>{props.name}</label><br/>
          <label><strong>Contact: </strong>{props.phoneNumber}</label><br/>
          <label><strong>Email: </strong>{props.email}</label><br/>
          <label><strong>Application status: </strong>{props.applicationStatus}</label><br/>

          <button onClick={handleApprove}>Approve</button>
          <button onClick={handleDeny}>Deny</button>
        </form>     
      </div>
    </div>
  )
}

export default AdminForm