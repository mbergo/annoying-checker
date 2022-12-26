// content.js
// Send a message to the background script to check the grammar of the given text
function checkGrammar (text) {
  return new Promise(resolve => {
    chrome.runtime.sendMessage({ type: 'checkGrammar', text }, response => {
      resolve(response.grammar)
    })
  })
}

// Show a suggestion above the text with an error
function showSuggestion (element, suggestion) {
  // Create the suggestion element
  const suggestionElement = document.createElement('div')
  suggestionElement.style.position = 'absolute'
  suggestionElement.style.top = '0'
  suggestionElement.style.left = '0'
  suggestionElement.style.right = '0'
  suggestionElement.style.backgroundColor = 'yellow'
  suggestionElement.style.padding = '5px'
  suggestionElement.style.textAlign = 'center'
  suggestionElement.innerText = suggestion

  // Insert the suggestion element above the text input or textarea
  element.parentNode.insertBefore(suggestionElement, element)
}
