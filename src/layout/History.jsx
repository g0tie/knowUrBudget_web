import Expense from "../components/Expense";
import TypeDropdown from "../components/TypeDropdown";
import { useMainContext } from "../store/contexts";

const History = () => {
    const { state } = useMainContext();

    return (
      <div className="p-4 lg:order-none xs:order-1">
        
        <TypeDropdown typelist={state.types}/>
        <div 
        style={{
          height:"70vh",
          width:"470px"
          }}
        className="sm:w-full scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-indigo-600 scrollbar-track-gray-100  overflow-y-auto">
          {
            state.expenses.map(expense => 
              <Expense title={expense.name} date={expense.date} type={expense.type} amount={expense.amount}/>
            )
          }
        </div>
      </div>
    );
  }
  
export default History;
  