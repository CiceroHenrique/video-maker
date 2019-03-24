const readline = require('readline-sync')
const robots = {
  text: require('./robots/text.js')
}

async function start() {
  const content = {
    maximumSentences: 7
  }
  
  content.searchTerm = askReturnSearchTerm()
  content.prefix = askReturnPrefix()

  await robots.text(content)

  function askReturnSearchTerm() {
    return readline.question('Type a Winkpedia search term: ')
  }
  
  function askReturnPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes)
    const selectedPrefixText = prefixes[selectedPrefixIndex]

    return selectedPrefixText
  }

  console.log(JSON.stringify(content, null, 4))
}


start()


