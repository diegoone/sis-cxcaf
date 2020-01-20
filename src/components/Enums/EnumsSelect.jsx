import React from 'react';
import {
    Input,
} from 'reactstrap';

const EnumsSelect = ({items, item, id}) =>{
    return (
        <Input type="select" name={id} id={id} disabled>
            {
                items.map(
                    (valor, indice) => {
                        if(valor == item){
                            return <option key={indice} value={valor} selected>{valor}</option>;
                        }else{
                            return <option key={indice} value={valor}>{valor}</option>;
                        }
                    }
                )
            }
        </Input>    
    );
}

export { EnumsSelect };