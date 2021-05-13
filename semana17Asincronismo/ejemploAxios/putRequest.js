//importar axios
const axios = require('axios').default;

const data={
    name: 'Garfield',
    age: '2',
    color: 'Naranja',
    id: 54
};

const postRequest = async()=>{
    try{
        const resp= await axios.post('http://localhost/api/update.php', data);//primero se proporciona la url y luego los datos de la solicitud
        console.log(resp.data);
    }catch(err){
        console.error(err);
    }
}


postRequest();