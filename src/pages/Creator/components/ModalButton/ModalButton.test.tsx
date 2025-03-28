import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import ModalButton from './ModalButton'

describe('ModalButton', () => {
    beforeEach(() => {
        render(<ModalButton titleButton='Title' titleModal='Modal' url='url'/>)
    })

    test('Should render modalButton', () => {
        expect(screen.getByText('Title')).toBeInTheDocument()
    })

    test('Should execute handleOpen on click', () => {
        const button = screen.getByText('Title')
        fireEvent.click(button)
        expect(screen.getByText('Modal')).toBeInTheDocument()
    })

    test('Should execute handleClose on click', () => {
        const button = screen.getByText('Title')
        fireEvent.click(button)

        const closeButton = screen.getByText('Não')
        fireEvent.click(closeButton)
        expect(screen.queryByText('Modal')).not.toBeInTheDocument()
    })

    test('Should render titleModel and url', () => {
        const button = screen.getByText('Title')
        fireEvent.click(button)
        expect(screen.getByText('Modal')).toBeInTheDocument()
        
        const link = screen.getByText('Sim')
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', 'url')
    })

})