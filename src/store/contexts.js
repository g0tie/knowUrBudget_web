import React from "react";
import {getDatas, getData} from "./database";
import { calculateTotalExpenses } from "../helpers/common";
import {updateData} from "../store/database";

const MainContext = React.createContext();

function MainReducer(state, action) {
    switch (action.type) {
      case 'setLimit': {
        updateData(1,'limit', action.payload);
        return state;
      }

      case 'removeExpense': {
        return state.expenses.filter(expense => expense.id !== action.payload)
      }

      case 'addExpense': {
        return [
            ...state.expenses, 
               action.payload
        ];
      }

      default: {
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
}

    
function MainProvider({children}) {
    let expenses = getDatas('expenses');
    let totalExpenses = calculateTotalExpenses(expenses);

    const [state, dispatch] = React.useReducer(MainReducer, {
        types: getDatas("types"),
        limit: {value: getData(1, 'limit').amount},
        expenses,
        totalExpenses,
        user: {
          name:"Pablo"
        }
    })

    const value = {state, dispatch}
    return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}

function useMainContext() {
    const context = React.useContext(MainContext)
    if (context === undefined) {
        throw new Error('useMainContext must be used within a MainProvider')
    }
    return context
}
  
export{
    MainProvider,
    useMainContext
};