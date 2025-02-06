import TransactionsTable from "./TransactionsTable";
import TransactionForm from "./TransactionForm";
import {useCallback, useState} from "react";

function App() {
    const [refresh, setRefresh] = useState(0);

    const handleRefresh = () => setRefresh(prev => prev + 1)

    return (
        <div  className="container">
            <h1>Transactions</h1>
            <TransactionForm onAdd={handleRefresh} />
            <TransactionsTable key={refresh} />
        </div>
    );
}

export default App;