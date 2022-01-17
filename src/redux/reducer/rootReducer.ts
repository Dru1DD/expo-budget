import {
    ADD_ITEM_SPENDING,
    ADD_ITEM_INCOME,
    REMOVE_ITEM_INCOME,
    REMOVE_ITEM_SPENDING
} from '../action/actionTypes'


interface ADDITEMSPENDING {
    type: typeof ADD_ITEM_SPENDING
    payload: ISpending
}

interface ADDITEMINCOME {
    type: typeof ADD_ITEM_INCOME,
    payload: IIncome
}

interface REMOVEITEMSPENDING {
    type: typeof REMOVE_ITEM_SPENDING,
    payload: string
}

interface REMOVEITEMINCOME { 
    type: typeof REMOVE_ITEM_INCOME,
    payload: string
}

export interface ISpending {
    data: string
    price: number
    catagory: string
    discription: string
}

export interface IIncome {
    data: string
    price: number
    catagory: string
    discription: string
}

export interface IState {
    balance: number
    total_spending: number
    total_income: number
    spendingItems:  ISpending[],
    incomeItems: IIncome[]
}

export const initialState: IState = {
    balance: 0,
    total_spending: 0,
    total_income: 0,
    spendingItems: [],
    incomeItems: []
}

type Action_Type = ADDITEMSPENDING | ADDITEMINCOME | REMOVEITEMINCOME | REMOVEITEMSPENDING

export const rootReducer = (state: IState = initialState, action: Action_Type) => {
    switch(action.type) {
        case ADD_ITEM_SPENDING:
            return {
                ...state,
                total_spending: state.total_spending + action.payload.price,
                spendingItems: [...state.spendingItems, action.payload]
            }
        case ADD_ITEM_INCOME:
            return {
                ...state,
                total_income: state.total_income + action.payload.price,
                incomeItems: [...state.incomeItems, action.payload]
            }
        case REMOVE_ITEM_SPENDING: 
            const newList = state.spendingItems.filter((item: ISpending) => item.discription !== action.payload)
            let totalSpending = 0
            let spending_sum = newList.length === 0 ? 0 : newList.map((item: ISpending) => totalSpending += item.price)
            return {
                ...state,
                spendingItems: newList,
                total_spending: totalSpending
            }
        case REMOVE_ITEM_INCOME:
            const newIncomeList = state.incomeItems.filter((item: IIncome) => item.discription !== action.payload)
            let totalIncome = 0
            let income_sum = newIncomeList.length === 0 ? 0 : newIncomeList.map((item: IIncome) => totalIncome += item.price)
            return {
                ...state,
                incomeItems: newIncomeList,
                total_income: totalIncome
            }
        default: 
            return state
    }
}