export const changeLanguage =(lang)=> {
    if(lang){
        localStorage.setItem('lang', lang)
    }
}

export const getLanguage=()=>{
    if(localStorage.getItem('lang')){
        return localStorage.getItem('lang')
    }

    return eng
}

export const getChangedLanguage= ()=>{
    switch(localStorage.getItem('lang')){
        case "uz":
            return "O'zbek";
        case "ru":
            return "Русский";
        default :
            return "English"    
    }
}