import React from 'react';
import { CustomInput } from 'reactstrap';
const EnumsRadio = ({items, item}) =>{
    return (
        <>
            {
                items.map(
                    (valor, indice) => {
                        if(valor == item){
                            return <CustomInput className="ml-4" key={indice} type="radio" id={valor} name={valor} label={valor} checked disabled/>;
                        }else{
                            return <CustomInput className="ml-4" key={indice} type="radio" id={valor} name={valor} label={valor} disabled/>;
                        }
                    }
                )
            }
        </>
    );
}

export { EnumsRadio };