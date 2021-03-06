const Expense = ({title, amount, date, type}) => {
    return (
      <div className="hover:cursor-pointer hover:bg-gray-100 rounded-lg overflow-hidden shadow-lg max-w-md">
          <div className="px-6 py-6">
            <div className="flex flex-row justify-between">

              <h1 className="font-bold text-lg ">{title}</h1>
              <button className="w-8 h-8 p-0 m-0 text-red-500 rounded-full translate-x-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="flex flex-row">
                <div className="flex flex-col">
                    <span className="text-md text-slate-400	mt-2">{date}</span>
                    <span>{type}</span>
                </div>
                
                <span className="flex-grow text-right text-4xl">{amount} €</span>
            </div>

          </div>
      </div>
    );
  }
  
export default Expense;
  