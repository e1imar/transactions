import { useEffect, useState } from 'react';
import { getTransactions } from './api';

function TransactionsTable() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        getTransactions().then(res => setTransactions(res.data));
    }, []);

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Sum</th>
                    <th>Category</th>
                    <th>Comment</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map(tx => (
                    <tr key={tx.id}>
                        <td>{new Date(tx.dateTime).toLocaleString()}</td>
                        <td>{tx.sum}</td>
                        <td>{tx.category.name}</td>
                        <td>{tx.comment}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionsTable;
