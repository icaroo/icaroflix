import React,  {useState} from 'react';
import PageDefault from  '../../../Components/PageDefault';
import FormField from  '../../../Components/FormField';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    /* Using State */
   
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
      nome:'',
      descricao:'',
      cor:'',
    }

  const [values, setValues] = useState(valoresIniciais);

//chave : nome or descricao or cor
//using [] to define automatically which value it will be
function setValue(chave, valor){
    setValues({
      ...values,
      [chave]:valor, 
    })
}

function funcaoHandleNome(infoEventoNome){
  // setValues(infoEventoNome.target.value);
  const { getAttribute, value} = infoEventoNome.target;
  setValue(getAttribute('name'),
   value);
}

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1> 


          <form onSubmit={function handleSubmit(infoEvento){
            infoEvento.preventDefault();
            setCategorias([
              //... get everything from the last list and append it
                ...categorias,
                values
            ]);

          setValues(valoresIniciais)

          }}>
       
       {/* FORMFIELD é um componente que recebe uma props dentro da tag. Para funcionar, você teria que pegar a primeira forma, colocar uma childreen entre tags recebendo no index do FORMFIELD */}
      <FormField
            label ="Nome da Categoria: "
            name="nome"
            type="text"
            value=  {values.nome}
            onChange = {funcaoHandleNome}
            />

      <FormField
            label ="Descricao: "
            name="descricao"
            ty  pe="text"
            value=  {values.descricao}
            onChange = {funcaoHandleNome}
            />

      <FormField
            label ="Cor: "
            name="cor"
            type="color"
            value=  {values.color}
            onChange = {funcaoHandleNome}
            />


        <button>
          Cadastrar
        </button>
      </form>

<ul>
  {categorias.map((categoria,indice) => {
    return (
      //concatenate string and number
      <li key={`${categoria}${indice}`}>
        {categoria.nome} 
        {/* categoria.nome is comming from values */}
      </li>
    )
  })}
</ul>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;