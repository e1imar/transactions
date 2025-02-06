import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { addTransaction, getCategories } from './api';

function TransactionForm({ onAdd }) {
    const [form, setForm] = useState({ sum: '', category: '', comment: '', dateTime: new Date() });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(res => setCategories(res.data));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addTransaction(form);
        onAdd();
        setForm({ sum: '', category: '', comment: '', dateTime: new Date() });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Sum"
                value={form.sum}
                onChange={(e) => setForm({ ...form, sum: e.target.value })}
                required
            />

            {/* Calendar Date Picker */}
            <DatePicker
                selected={form.dateTime}
                onChange={(date) => setForm({ ...form, dateTime: date })}
                dateFormat="yyyy-MM-dd HH:mm"
                showTimeSelect
            />

            <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                required
            >
                <option value="">Select a Category</option>
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
            </select>

            <input
                type="text"
                placeholder="Comment"
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
            />
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default TransactionForm;