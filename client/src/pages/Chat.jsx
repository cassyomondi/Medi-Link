import { useEffect } from 'react'

function Chat() {
  useEffect(() => {
    // Replace this with your actual chat link later (e.g., WhatsApp, chat route, etc.)
    const chatLink = "https://wa.me/254700000000"  // Example: WhatsApp redirect link
    window.location.href = chatLink
  }, [])

  return (
    <div>
      <h1>Redirecting to Chat...</h1>
      <p>If you’re not redirected automatically, <a href="https://wa.me/254700000000">click here</a>.</p>
    </div>
  )
}

export default Chat
