var exchange;

fetch('https://api.exchangeratesapi.io/latest')
  .then( (response) => {
      return response.json();
  })
  .then ( (data) => {
    exchange = data;
  })
  