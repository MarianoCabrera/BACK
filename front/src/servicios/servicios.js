const API_URL='http://localhost:3500';


//trae a los productos de la base de datos por el metodo get
export async function getProductos(){
    try{
        const response = await fetch(`${API_URL}/productos`);
        const data = await response.json();
        return data;
    
    }catch(error){
        console.log('Nuestro error es ', error);
    }
}

