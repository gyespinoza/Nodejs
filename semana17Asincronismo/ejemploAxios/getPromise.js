//importar axios
const axios = require('axios').default;

axios.get('http://localhost/api/read.php')
    .then(resp=>{
        console.log(resp.data);
    })
    .catch(err =>{
        console.error(err);
    })