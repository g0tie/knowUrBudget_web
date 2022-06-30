import Expense from "../components/Expense";
import TypeDropdown from "../components/TypeDropdown";

const History = () => {

    return (
      <div className="p-4">
        
        <TypeDropdown typelist={["Alimentaire", "Divertissement", "Vehicule"]}/>
        <div 
        style={{
          height:"70vh",
          width:"470px"
          }}
        className="scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-indigo-600 scrollbar-track-gray-100  overflow-y-auto">
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
          <Expense title="Burger King" date="12/05/2022" type="alimentaire" amount={25}/>
        </div>
      </div>
    );
  }
  
export default History;
  