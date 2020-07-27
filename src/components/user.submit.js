const axios = require('axios')

axios({
  method: 'POST',
  url: 'http://localhost:8081/login',
  data: {
    username: 'test11222',
    password: 'test111dasd'
  }
})
.then( (res) => {
  console.log(res.data)
})
