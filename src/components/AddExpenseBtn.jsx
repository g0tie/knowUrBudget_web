import TypeDropdown from './TypeDropdown';
import Modal from "./Modal";
import { useState } from 'react';


const AddExpenseBtn = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <>
            <button 
            onClick={() => setIsOpen(true)}
            className='float-right text-center rounded-full w-16 h-16 sticky bottom-8 right-8 bg-indigo-600 text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            </button>

            <Modal isOpen={isOpen} title="Ajouter une dépense" action={() => alert("test")} closeAction={setIsOpen}> 
            <form className="">
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Titre
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Titre" />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Montant
                </label>
                <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Montant en €" />
                </div>

                <TypeDropdown />
            </form>
            </Modal>
        </>
    )
}

export default AddExpenseBtn;