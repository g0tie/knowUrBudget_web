import Modal from "./Modal";
import { useState } from 'react';
import { useMainContext } from '../store/contexts';
import { getDatetime } from '../helpers/common';

const AddExpenseBtn = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState(1);

    const {state, dispatch} = useMainContext();
    
    function addExpense() {
        const expense = {
            name: title,
            amount,
            typeid:type,
            date: getDatetime()
        }
        dispatch({type:'addExpense', payload:expense});
        setIsOpen(false);
    }

    return (
        <>
            <button 
            onClick={() => setIsOpen(true)}
            className='float-right text-center rounded-full w-16 h-16 sticky bottom-8 right-8 bg-indigo-600 text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            </button>

            <Modal isOpen={isOpen} title="Ajouter une dépense" action={addExpense} closeAction={setIsOpen}> 
            <form className="">
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Titre
                </label>
                <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="username" type="text" placeholder="Titre" 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Montant
                </label>
                <input 
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Montant en €" />
                </div>

                <div className="flex flex-row items-center my-2 ">
                    <p>Sélectionner un type: </p> 
                    <select 
                    value={type}
                    onChange={e => setType(e.target.value)}
                    className="ml-2 p-2 form-select appearance-none
                    w-56
                    block
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">

                        {
                            state.types && state.types.map((type, index) => (
                                <option key={type.id} value={type.id}>{type.name}</option>
                            ))
                        }
                    </select>
                </div>
            </form>
            </Modal>
        </>
    )
}

export default AddExpenseBtn;