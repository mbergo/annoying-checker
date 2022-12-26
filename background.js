// background.js
// Use the Grammarly API to check the grammar of the given text
async function checkGrammar (text) {
  const apiKey = 'YOUR_GRAMMARLY_API_KEY' // Replace with your API key
  const url = `https://api.grammarly.com/v2/grammar?api_key=${apiKey}&text=${encodeURIComponent(
    text
  )}`

  const response = await fetch(url)
  const data = await response.json()

  return data.grammar
}

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'checkGrammar') {
    checkGrammar(request.text).then(grammar => {
      sendResponse({ grammar })
    })
  }
  return true // Required for asynchronous response
})
