const axios = require('axios')

axios({
  method: 'POST',
  url: 'http://localhost:8081/login',
  data: {
    username: 'test112',
    password: 'test112'
  }
})
.then( (res) => {
  console.log(res.data)
})
