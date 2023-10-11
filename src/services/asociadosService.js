import { v4 as uuidv4 } from 'uuid';



export default function getAssociateService () {    

    

    return (
         [
            {
                _id:uuidv4(),
                name:'Juan',
                lastname:'Toloza',
                rut:'28.908.796-9',
                email :'jtoloza@gmail.com',
                cell: '898765664',
                address : 'Enrique Segoviano 124',
                done : false
        
            },
            {
                _id:uuidv4(),
                name:'Sofia',
                lastname:'Escalona',
                rut:'24.908.796-9',
                email :'sescalona@gmail.com',
                cell: '898765664',
                address : 'Av. Siempreviva 742',
                done : true
            }         
        ]

        
    )
}