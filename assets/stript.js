var requestUrl = '    https://api.urbandictionary.com/v0/random'

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  })