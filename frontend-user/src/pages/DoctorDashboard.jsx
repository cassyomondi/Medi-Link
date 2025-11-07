import '../styles.css'

function DoctorDashboard() {
  return (
    <div className="container">
      <h1>Doctor Dashboard</h1>
      <p>Welcome, Doctor! Here you can manage your appointments and respond to patient chats.</p>

      <div className="dashboard-actions">
        <button>View Patient Requests</button>
        <button>Start a Chat</button>
        <button>Update Availability</button>
      </div>
    </div>
  )
}

export default DoctorDashboard