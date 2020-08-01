/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
import FormField from '../../../Components/FormField';
import Button from '../../../Components/Button';

function CadastroCategoria() {
  /* Using State */

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [categorias, setCategorias] = useState([]);

  // values are the valoresIniciais and setValues
  const [values, setValues] = useState(valoresIniciais);

  // chave : nome or descricao or cor // nome: 'valor'
  // using [] to define dinamically which type and value it will be
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function funcaoHandleNome(infoEventoNome) {
  // setValues(infoEventoNome.target.value);
    // const { getAttribute, value } = infoEventoNome.target;
    setValue(
      infoEventoNome.target.getAttribute('name'),
      infoEventoNome.target.value,
    );
  }

// param: what it will happen; and when it will happen. [] means it will happen just one time, if we remove [] the Effect run everytime
  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            // setCategorias([...resposta]);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      {/* // On the event onSubmit, when we press the button casdastrar. we call the function handleSubmit with parameter
        and create a new list of Categorias */}
      <form onSubmit={function handleSubmit(infoEvento) {
        infoEvento.preventDefault();
        // setCategorias is adding or creating a new list of categorias, we have to pass the previous list and add a new item
        setCategorias([
          // ... get everything from the last list and append it. values is object with the fields
          ...categorias,
          values,
        ]);

        // set back the default values
        setValues(valoresIniciais);
      }}
      >

        {/* FORMFIELD é um componente que recebe uma props dentro da tag.
        Para funcionar, você teria que pegar a primeira forma, colocar uma childreen entre tags
        recebendo no index do FORMFIELD */}
        <FormField
          label="Nome da Categoria: "
          name="nome"
          type="text"
          value={values.nome}
          onChange={funcaoHandleNome}
        />
        {/* <div>
                  <label>
                    Descrição:
                    <textarea
                      type="text"
                      value={values.descricao}
                      name="descricao"
                      onChange={handleChange}
                    />
                  </label>
          </div> */}
        <FormField
          label="Descricao: "
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={funcaoHandleNome}
        />

        <FormField
          label="Cor: "
          name="cor"
          type="color"
          value={values.cor}
          onChange={funcaoHandleNome}
        />

        {/* <button type="submit">
          Cadastrar
        </button> */}

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          // concatenate string and number
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
            {/* categoria.nome is comming from values */}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
