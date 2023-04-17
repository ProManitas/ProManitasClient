import React, { useEffect } from 'react';
import ContractPDF from './ContractPDF'
import { useAuth0 } from "@auth0/auth0-react"; 
import { useDispatch, useSelector } from "react-redux";
import { getAllContracts } from "../../Redux/Actions/contractAction"
import { getAllUsers } from "../../Redux/Actions/userAction";
import {Link} from "react-router-dom"


const ContractsAll = () => {

const {user} = useAuth0()
const dispatch = useDispatch()

    //LLENO EL ESTADO CON LOS CONTRATOS Y LOS USUARIOS
useEffect(()=>{
dispatch(getAllContracts())
dispatch(getAllUsers());
console.log('entre al useEffect')
}, [dispatch])

  // ME TRAIGO EL ESTADO DE USER Y CONTRACTS
  const allContracts = useSelector((state) => state.contracts.contracts);
  const usersDb = useSelector((state) => state.user.allUsers);

//FILTRO EL USUARIO QUE COINCIDA CON EL MAIL QUE ESTA EN SESION
const filteredUser = usersDb.filter((elem) => elem.email === user.email);
console.log(filteredUser)

//COMPARO EL USUARIO CON EL USERID DEL CONTRATO PARA OBTENER LA INFO DE ESE CONTRATO
const filterInfo = allContracts.filter(inf => inf.UserId === filteredUser[0].id)
console.log(filterInfo)

const textDescription =
"**Con la creación de este contrato, usted acepta y se compromete a cumplir con nuestros términos y condiciones donde se describen las obligaciones y responsabilidades tanto del usuario como de nuestra empresa. ";


    return (
    <div>{
        filterInfo?.map(inf => (
            <ContractPDF 
            contractId = {inf.id}
            username = {filteredUser[0].username}
            description = {textDescription}
            detail = {inf.detail}
            payment = {inf.payment}
            />
        ))
        }
        <Link to= "/contract"><button>Back</button></Link>
        
    </div>
        );
}

export default ContractsAll;