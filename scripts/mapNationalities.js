const fs = require('fs')
const countries = require('../countries.json')

const mapNationalities = () => {
  const result = countries.reduce((acc, value) => {
    return {
      ...acc,
      [value.alpha_2_code]: value.nationality,
    }
  }, {})

  fs.writeFileSync('./nationalities.json', JSON.stringify(result))
}

mapNationalities()
