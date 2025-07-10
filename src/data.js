export const API_KEY = 'AIzaSyB7fFnZcXLwDf_-W-hYOE0-ewS38FkH8FU'

 export const value_converter = (value) =>{
    if(value>1000000){
        return  Math.floor(value/1000000)+"M"
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }
    else{
         return value
    }
}