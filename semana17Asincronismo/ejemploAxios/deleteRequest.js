//importar axios
const axios = require('axios').default;

const deleteRequest = async()=>{
    try{
        const resp= await axios.delete('http://localhost/api/delete.php',{
            data:{id:17}
        });
        console.log(resp.data);
    }catch(err){
        console.error(err);
    }
}

deleteRequest();