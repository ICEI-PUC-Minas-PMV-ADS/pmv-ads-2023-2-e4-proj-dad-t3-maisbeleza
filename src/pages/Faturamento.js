import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../App.css';
import {Modal, ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import { IoMdCreate } from "react-icons/io";
import {IoIosTrash} from 'react-icons/io';
import  Menu from '../components/Navbar';
import Footer from '../components/Footer2';



function Faturamento () {

    const baseUrl = "https://maisbeleza20231125193603.azurewebsites.net/api/Faturamentos";

    const [data, setData] = useState ([]);
    const [updateData, setUpdateData] = useState(true);

    const[modalIncluir, setModalIncluir] = useState(false);
    const[modalEditar, setModalEditar] = useState(false);
    const[modalExcluir, setModalExcluir] = useState(false);
    const[faturamentoSelecionado, setFaturamentoSelecionado] = useState({
      id: '',
      data: '',
      valorTotal: '',
      meiId: 1
    })

    const selecionarFaturamento=(faturamentos,opcao) => {
      setFaturamentoSelecionado(faturamentos);
        (opcao === "Editar") ?
        AbrirFecharModalEditar() : AbrirFecharModalExcluir();
    }

    const handleChange = e=>{
      const {name,value} = e.target;
      setFaturamentoSelecionado({
        ...faturamentoSelecionado,[name]:value 
      });
      console.log(faturamentoSelecionado);
    }

    const pedidoGet = async()=>{
        await axios.get(baseUrl)
        .then(response => {
          setData(response.data);
        }).catch(error=>{
          console.log(error);
        })
    }
    
    useEffect(()=>{
        if (updateData){
          pedidoGet();
          setUpdateData(false);  
        }
      }, [updateData])

    const pedidoPost = async()=>{
      delete faturamentoSelecionado.id;
      await axios.post(baseUrl, faturamentoSelecionado)
      .then(response => {
        setData(data.concat(response.data));
        setUpdateData(true); 
        AbrirFecharModalIncluir();
      }).catch(error=>{
        console.log(error);
      })
  }
  const pedidoDelete=async()=>{
    await axios.delete(baseUrl+ "/" +faturamentoSelecionado.id)
      .then(response => {
        setData(data.filter(faturamentos => faturamentos.id !== response.data)); 
        AbrirFecharModalExcluir();
        setUpdateData(true); 
      }).catch(error => {
        console.log(error);
      })
  }

    const AbrirFecharModalIncluir = () => {
      setModalIncluir(!modalIncluir)
    }
    const AbrirFecharModalEditar = () => {
      setModalEditar(!modalEditar)
    }
    const AbrirFecharModalExcluir = () => {
        setModalExcluir(!modalExcluir);
      }

    const pedidoPut = async () => {
      try {
        const response = await axios.put(baseUrl + "/" + faturamentoSelecionado.id, faturamentoSelecionado);
        const resposta = response.data;
        setData(data.map((faturamentos) => {
          if (faturamentos.id === faturamentoSelecionado.id) {
            faturamentos.data = resposta.data;
            faturamentos.valorTotal = resposta.valorTotal;
          }
          return faturamentos; 
        }));
        setUpdateData(true); 
        AbrirFecharModalEditar();
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <div className = "cadastro-container">
        <Menu/>
      <h3>Faturamento</h3>
      <header>
      {' '}
        <button className="botaoInicial" onClick={()=>AbrirFecharModalIncluir()}>Incluir faturamento</button> {' '}
      </header>
    <table className= "table table-bordered">
      <thead>
        <tr className='tabela'>
          <th>Data</th>
          <th>Valor (R$)</th>
          <th>Gestão</th>
        </tr>
      </thead>
      <tbody>
        {data.map(faturamentos=>(
          <tr key = {faturamentos.id}>
            <td>{new Date(faturamentos.data).toLocaleDateString()}</td>
            <td>{faturamentos.valorTotal}</td>
            <td>
            <IoMdCreate  onClick={()=>selecionarFaturamento(faturamentos,"Editar")} size = {20} color = " #81007F" title="Editar"/>{"   "}
            <IoIosTrash onClick={()=>selecionarFaturamento(faturamentos,"Excluir")} size = {20} color = "red" title="Excluir"/>{"   "}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <Modal isOpen ={modalIncluir} >
      <ModalHeader>Incluir novo Faturamento: </ModalHeader>
      <ModalBody>
        <div className = "form-group">
          <label>Data: </label>
          <input type = "date" className = "form-control mb-2" name ="data" onChange={handleChange}/>
          <p/>
          <label>Valor (R$): </label>
          <input type = "number" className = "form-control mb-2" name ="valorTotal" onChange={handleChange}/>
        </div>
      </ModalBody>
      <ModalFooter>
        <button className ="btn btn-primary" onClick={() =>pedidoPost()}>Incluir</button>{"   "}
        <button className ="btn btn-danger"  onClick={() =>AbrirFecharModalIncluir()}>Cancelar</button>
      </ModalFooter>
    </Modal>
    <Modal isOpen ={modalEditar} >
      <ModalHeader>Editar faturamento: </ModalHeader>
      <ModalBody>
        <div className = "form-group">
          <label>Data: </label>
          <input type = "date" className = "form-control mb-2" name ="data" onChange={handleChange}
            value = {faturamentoSelecionado && faturamentoSelecionado.data.split("T")[0]} />
          <p/>
          <label>Valor (R$): </label>
          <input type = "number" className = "form-control mb-2" name ="valorTotal" onChange={handleChange}
              value = {faturamentoSelecionado && faturamentoSelecionado.valorTotal} />
        </div>      
      </ModalBody>
      <ModalFooter>
        <button className ="btn btn-primary" onClick={() =>pedidoPut()}>Salvar</button>{"   "}
        <button className ="btn btn-danger"  onClick={() =>AbrirFecharModalEditar()}>Cancelar</button>
      </ModalFooter>
      </Modal>
      <Modal isOpen={modalExcluir}>
          <ModalBody>
            Deseja realmente excluir este faturamento ?
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-danger' onClick={()=> pedidoDelete()}> Sim </button>
            <button className='btn btn-secondary' onClick={()=> AbrirFecharModalExcluir()}> Não </button>
      </ModalFooter>
    </Modal>
    <Footer/>
    </div>
  );
}

export default Faturamento;
