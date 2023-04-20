import React, { useEffect } from 'react';
import ContractPDF from '../ContractForm/ContractPDF'
import { useAuth0 } from "@auth0/auth0-react"; 
import { useDispatch, useSelector } from "react-redux";
import { getAllContracts } from "../../Redux/Actions/contractAction"
import { getAllUsers } from "../../Redux/Actions/userAction";


const MyContrat = () => {

const {user} = useAuth0()
const dispatch = useDispatch()

useEffect(()=>{
dispatch(getAllContracts())
dispatch(getAllUsers());

}, [dispatch])

  const allContracts = useSelector((state) => state.contracts.contracts);
  const usersDb = useSelector((state) => state.user.allUsers);

const filteredUser = usersDb.filter((elem) => elem.email === user.email);

const filterInfo = allContracts.filter(inf => inf.UserId === filteredUser[0].id)



const lastContractId = filterInfo.length > 0 ? filterInfo[filterInfo.length - 1].id : null;

return (
    <div>
        {filterInfo?.map(inf => (
            <ContractPDF 
                contractId = {inf.id}
                username = {filteredUser[0].username}
                detail = {inf.detail}
                payment = {inf.payment}
            />
        ))}
        {/* REDIRIGIR AL PAGO CON EL ID DEL ÚLTIMO CONTRATO GENERADO */}

    </div>
);
}

export default MyContrat;
//