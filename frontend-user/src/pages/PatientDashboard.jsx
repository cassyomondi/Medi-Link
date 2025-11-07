import '../styles.css'

function PatientDashboard() {
  return (
    <div className="container">
      <h1>Patient Dashboard</h1>
      <p>Welcome! You can chat with doctors, view your appointments, and read health tips.</p>

      <div className="dashboard-actions">
        <button>Chat with a Doctor</button>
        <button>View My Appointments</button>
        <button>Health Tips</button>
      </div>
    </div>
  )
}

export default PatientDashboard