//importar axios
const axios = require('axios').default;

const getRequest = async()=>{
    try{
        const resp= await axios.get('http://localhost/api/read.php');
        console.log(resp.data);
    }catch(err){
        console.error(err);
    }
}


getRequest();