import {
    ADD_ITEM_SPENDING,
    ADD_ITEM_INCOME
} from '../action/actionTypes'


interface ADDITEMSPENDING {
    type: typeof ADD_ITEM_SPENDING
    payload: ISpending
}

interface ADDITEMINCOME {
    type: typeof ADD_ITEM_INCOME,
    payload: IIncome
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

type Action_Type = ADDITEMSPENDING | ADDITEMINCOME

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
        default: 
            return state
    }
}