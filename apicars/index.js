export async function fetchCars(){

    const headers ={
        'X-RapidAPI-Key': '8dccfa30bdmsh9f1580f7b697e02p1fec48jsn1b1c9ec67f2f',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera&limit=20' , {headers:headers});

    const result = await response.json();

    return result;
}