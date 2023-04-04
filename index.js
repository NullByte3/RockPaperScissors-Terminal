const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function loop () {
  let one = 'kivi'
  let two = 'kivi'

  rl.question('Pelaaja yksi: ', input => {
    one = input.toLowerCase()
    rl.question('Pelaaja kaksi: ', input => {
      two = input.toLowerCase()
      if (two == one) {
        console.log('Tasa peli!')
      } else if (two == 'paperi' && one == 'kivi') {
        console.log('Pelaaja kaksi voitti!')
      } else if (one == 'paperi' && two == 'kivi') {
        console.log('Pelaaja yksi voitti!')
      } else if (two == 'kivi' && one == 'sakset') {
        console.log('Pelaaja kaksi voitti!')
      } else if (two == 'sakset' && one == 'kivi') {
        console.log('Pelaaja yksi voitti!')
      } else if (two == 'sakset' && one == 'paperi') {
        console.log('Pelaaja kaksi voitti!')
      } else if (two == 'sakset' && one == 'paperi') {
        console.log('Pelaaja yksi voitti!')
      }
      loop()
    })
  })
}

loop()
