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

const mapAlpha3ToAlpha2 = () => {
  const result = countries.reduce((acc, value) => {
    return {
      ...acc,
      [value.alpha_3_code]: value.alpha_2_code,
    }
  }, {})

  fs.writeFileSync('./alpha_3_to_alpha_2.json', JSON.stringify(result))
}

mapNationalities()
mapAlpha3ToAlpha2()
