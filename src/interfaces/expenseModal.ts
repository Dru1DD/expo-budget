import React from 'react'

export interface IExpenseModalProps {
    expense: 'Spending' | 'Income'
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}