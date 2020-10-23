import React from 'react'


const UpdatedComponent = (OriginalComponent: any) => {
    class Newcomponent extends React.Component{


     emailHandler = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        const re = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(!re.test(String(e.target.value).toLowerCase())){
            return ('Емейл некорректен!')
        }else
            return ''
    }

    passwordHandler = (e: any) =>{
        if(!e.target.value){
            return  ('пароль не может быть пустым');
        }
        if(e.target.value.length < 6 || e.target.value.length > 12 ){
            return ('Пароль должен быть длиннее 6  и меньше 12') && false;
        }else
        return true;
    }

        render(){
            return <OriginalComponent />
        }
    }
    return Newcomponent
}

export default UpdatedComponent