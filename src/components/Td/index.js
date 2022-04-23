import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpense } from "../../actions";
import Button from '../Button';

function Td() {
  const dispatch = useDispatch();
  const expenses = useSelector(({ wallet }) => wallet.expenses);

  return (
    expenses.map(({ id, description, tag, method, value, currency, exchangeRates }) => {
      const cambioUtilizado = Number(exchangeRates[currency].ask);
      const valueExpense = Number(value);
      const moedaConversao = (exchangeRates[currency].name);

      return (
        <tr key={`${id} 0`}>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{Number(valueExpense).toFixed(2)}</td>
          <td>{moedaConversao}</td>
          <td>{Number(cambioUtilizado).toFixed(2)}</td>
          <td>{Number(cambioUtilizado * valueExpense).toFixed(2)}</td>
          <td>Real</td>
          <td>
            <Button type="button" aria-disabled="true" onClick={() => global.alert('Funcionalidade Indisponível')}>Editar</Button>
            <Button type="button" onClick={() => dispatch(deleteExpense(id))}>Excluir</Button>
          </td>
        </tr>
      );
    })
  )
}

export default Td;