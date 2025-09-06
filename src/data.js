export const API_KEY = 'AIzaSyA5QZzpuG4DZxENLrOV1kjrRR1JNjqH6jE'

export const valueConverter = (value) => {
    if(value >= 1000000){
        return Math.round(value/1000000*10)/10+'M';
    } else if(value >= 1000){
        return Math.floor(value/1000)+'K'
    } else {
        return value
    }
}

export const fetchData = async (url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();
      return data.items;
    } catch(err){
      console.error('Error fetching data: ', err);
    }
}