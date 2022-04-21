import React from 'react';
import { deleteExpense } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import Th from '../Th';

function TableExpense () {
  const dispatch = useDispatch();
  const expenses = useSelector( ({ wallet }) => wallet.expenses);

 return (
      <table>
        <thead>
        <tr>
          <Th/>
          </tr>
        </thead>
        <tbody>
          { expenses.map(({
            id,
            description,
            tag,
            method,
            value,
            currency,
            exchangeRates }) => {
            const cambioUtilizado = Number(exchangeRates[currency].ask);
            const valueExpense = Number(value);
            const moedaConversao = (exchangeRates[currency].name);

            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ Number(valueExpense).toFixed(2)}</td>
                <td>{ moedaConversao }</td>
                <td>{ Number(cambioUtilizado).toFixed(2) }</td>
                <td>{ Number(cambioUtilizado * valueExpense).toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button type="button">Editar</button>
                  <button
                    type="button"
                    onClick={ () => dispatch(deleteExpense(id)) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

export default TableExpense;
