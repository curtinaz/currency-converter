fetch('https://api.exchangeratesapi.io/latest')
  .then( (response => {
      return response.json();
  }))