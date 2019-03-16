const readline = require('readline-sync')

function start() {
  const content = {}
  
  content.searchTerm = askReturnSearchTerm()
  content.prefix = askReturnPrefix()
	
  function askReturnSearchTerm() {
    return readline.question('Type a Winkpedia search term: ')
  }
  
  function askReturnPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes)
    const selectedPrefixText = prefixes[selectedPrefixIndex]

    return selectedPrefixText
  }

  console.log(content)
}


start()


