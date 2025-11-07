function Chat() {
  return (
    <div>
      <h1>Doctor-Patient Chat</h1>
      <div className="chat-box">
        <div className="messages">
          <p><strong>Doctor:</strong> Hello, how can I help you today?</p>
          <p><strong>You:</strong> I’m feeling unwell since yesterday.</p>
        </div>
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </div>
  )
}

export default Chat
