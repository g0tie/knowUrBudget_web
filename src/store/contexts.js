import React from "react";

const MainContext = React.createContext();


function MainReducer(state, action) {
    switch (action.type) {
      case 'updateLimit': {
        state.limit = action.payload;
        return;
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
    const [state, dispatch] = React.useReducer(MainReducer, {
        types: [
          "Alimentaire",
          "Vehicule",
          "Divertissement",
          "Santé",
          "Vêtements",
          "Sport"
        ],
        limit: {value:150},
        expenses: [
          {id:0, name:"Burger King", amount:"36", type:"alimentaire", date:"26/05/2021"},
          {id:1, name:"Burger King", amount:"45", type:"alimentaire", date:"13/05/2021"},
        ],
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