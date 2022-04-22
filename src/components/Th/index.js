import React, { memo } from "react";

const TITLE_TABLE = ['Descrição', 'Tag', 'Método de Pagamento', 'Valor', 'Moeda', 'Câmbio Utilizado', 'valor Convertido', 'Moeda de Conversão', 'Ações']

function Th() {

    return (
        <tr>
            {TITLE_TABLE.map((title, i) => <th key={`${i} 0`}>{title}</th>)}
        </tr>
    )
}

export default memo(Th);