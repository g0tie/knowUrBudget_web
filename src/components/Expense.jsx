const Expense = ({title, amount, date, type}) => {
    return (
      <div className="hover:cursor-pointer hover:bg-gray-100 rounded-lg overflow-hidden shadow-lg max-w-md">
          <div className="px-6 py-6">
            <h1 className="font-bold text-lg ">{title}</h1>

            <div className="flex flex-row">
                <div className="flex flex-col">
                    <span className="text-md text-slate-400	mt-2">{date}</span>
                    <span>{type}</span>
                </div>
                
                <span className="flex-grow text-right text-5xl">{amount} €</span>
            </div>

          </div>
      </div>
    );
  }
  
export default Expense;
  