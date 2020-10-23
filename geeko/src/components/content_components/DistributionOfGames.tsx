import React, { ReactElement, useEffect, useState } from 'react'
import "../../styles/content_component_styles/DistributionOfgames.css";

interface Props {
    
}



function Distributionofgames({}: Props): ReactElement {
    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('Емейл не может быть пустым');
    const [formValid, setFormValid] = useState(false);
    let count: number;
    count = 0;

    useEffect(() => {
        if (emailError){
            setFormValid(false)
        }else
            setFormValid(true)
            count++;
    }, [emailError])
        

    const emailHandler = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
        const re = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Емейл некорректен!')
        }else
            setEmailError('')
           // e.preventDefault();
    }


    const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        switch (e.target.name){
            case 'email':
                setEmailDirty(true)
                break
        }
    }

    

    return (
    <div className='distributionofgames'>
        <form className="form">
           <h1>Подписка</h1>
           {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
           <input className="form__field" onChange={e => emailHandler(e)} value = {email} onBlur={e => blurHandler(e)} name='email' type='text' placeholder='Your E-Mail Address' />
           <button className="btn btn--primary btn--inside uppercase" disabled={!formValid} type='submit'>Участвовать</button>
       </form>
   </div>
    )
}

export default Distributionofgames