import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import { supa, guid, tutti } from '../components/utenti';


export default function Todo({ todo, toggleComplete, handleDelete, handleEdit, flagStampa}) {

    //permessi utente
    let sup= supa.includes(localStorage.getItem("uid"))
    let gui= guid.includes(localStorage.getItem("uid"))
    let ta= tutti.includes(localStorage.getItem("uid"))  //se trova id esatto nell'array rispetto a quello corrente, ritorna true


  const [newNomeC, setNomeC] = React.useState(todo.nomeC);
  const [newDebito, setDebito] = React.useState(todo.debito);
  const [newQuota, setQuota] = React.useState(todo.quota);
  const [newNumAsc, setNumAsc] = React.useState(todo.numAsc);
  const [newNote, setNote] = React.useState(todo.note);
  const [newNumCartoni, setNumCartoni] = React.useState(todo.NumCartoni);

  const handleSubm = (e) => {
    e.preventDefault();
    handleEdit(todo, newNomeC, newNumAsc, newNote, newDebito, newQuota, newNumCartoni);
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNomeC(todo.nomeC);
    } else {
      todo.nomeC = "";
      setNomeC(e.target.value);
    }
  };

  const handleChangeN = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNumAsc(todo.numAsc);
    } else {
      todo.numAsc = "";
      setNumAsc(e.target.value);
    }
  };

  const handleChangeD = (e) => {
    e.preventDefault();
    if (todo.debito === true) {
      setDebito(todo.debito);
    } else {
      todo.debito = "";
      setDebito(e.target.value);
    }
  };

  const handleChangeQ = (e) => {
    e.preventDefault();
    if (todo.quota === true) {
      setQuota(todo.quota);
    } else {
      todo.quota = "";
      setQuota(e.target.value);
    }
  };

  const handleChangeNT = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNote(todo.note);
    } else {
      todo.note = "";
      setNote(e.target.value);
    }
  };

  const handleChangeNC = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNumCartoni(todo.NumCartoni);
    } else {
      todo.NumCartoni = "";
      setNumCartoni(e.target.value);
    }
  };

  return (
    <div className="prova">

    <hr style={{margin: "0"}}/>

    <form  onSubmit={handleSubm}>
    <div className="row ">
{/********************CLIENTE*********************************************************** */}
    <div className="col-2 diviCol" >
    {sup ===true && ( 
    <input
      style={{ textDecoration: todo.completed && "line-through", fontSize:"14px" }}
        type="text"
        onBlur={handleSubm}
        value={todo.nomeC === "" ? newNomeC : todo.nomeC}
        className="inpNumb"
        onChange={handleChange}
      />
    )}
    {gui ===true && ( 
    <h4
      style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        className="inpTab"
        >{ newNomeC}</h4>
    )}
    </div>
{/******************DEBITO************************************************************* */}

<div className="col-1 diviCol" style={{padding: "0px"}}>
    {sup ===true && ( 
    <input
      style={{ textDecoration: todo.completed && "line-through", fontSize:"14px" }}
        type="text"
        onBlur={handleSubm}
        value={todo.debito === "" ? newDebito : todo.debito}
        className="inpNumb"
        onChange={handleChangeD}
      />
    )}
    {gui ===true && ( 
    <h4
      style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        className="inpTab"
      >{newDebito}€</h4>
    )}
    </div>
{/***********************ASC************************************************************ */}
<div className="col-1 diviCol" style={{padding: "0px"}}>
    {sup ===true && ( 
    <input
      style={{ textDecoration: todo.completed && "line-through", fontSize:"14px" }}
        type="text"
        onBlur={handleSubm}
        value={todo.numAsc === "" ? newNumAsc : todo.numAsc}
        className="inpNumb"
        onChange={handleChangeN}
      />
    )}
    {gui ===true && ( 
    <h4
      style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        className="inpTab"
      >{ newNumAsc}</h4>
    )}
    </div>
  {/***********************Numero cartoni************************************************************ */}
  <div className="col-1 diviCol" style={{padding: "0px"}}>
    {sup ===true && ( 
    <input
      style={{ textDecoration: todo.completed && "line-through", fontSize:"14px" }}
        type="text"
        onBlur={handleSubm}
        value={todo.NumCartoni === "" ? newNumCartoni : todo.NumCartoni}
        className="inpNumb"
        onChange={handleChangeNC}
      />
    )}
    {gui ===true && ( 
    <h4
      style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        className="inpTab"
      >{ newNumCartoni}</h4>
    )}
    </div>
{/************************QUOTA*********************************************************** */}
<div className="col-1 diviCol" style={{padding: "0px"}}>
    {sup ===true && ( 
    <input
      style={{ textDecoration: todo.completed && "line-through", fontSize:"14px" }}
        type="text"
        onBlur={handleSubm}
        value={todo.quota === "" ? newQuota : todo.quota}
        className="inpNumb"
        onChange={handleChangeQ}
      />
    )}
    {gui ===true && ( 
    <h4
      style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        className="inpTab"
      >{ newQuota}€</h4>
    )}
    </div>
{/********************NOTE*************************************************************** */}
    <div className="col diviCol" style={{padding: "0px"}}> 
    <textarea
        style={{textAlign: "left"}}
        type="text"
        onBlur={handleSubm}
        value={todo.note === "" ? newNote : todo.note}
        className="inpNumb"
        onChange={handleChangeNT}
      />
    </div>
{/*************************BUTTON********************************************************** */}
    <div className="col diviCol">
      {flagStampa==false &&
      <>
    {gui ===true && (
    <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        )}
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newNomeC, newNumAsc, newNote, newDebito, newQuota)}
        >
          <EditIcon id="i" />
        </button>
        {sup ===true && (   
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
        )}
        </>
        }
    </div>
    </div>
    </form>

    </div>
  );
}