import { fireEvent, render, screen } from "@testing-library/react"
import ChangeBox from "./ChangeBox"

describe('ChangeBox', () => {
    test('Should render ChangeBox component', () => {
        render(<ChangeBox title="Teste" color={false}/>)
        expect(screen.getByText('Teste')).toBeInTheDocument()
    })

    test('Should render ChangeBox with primary color', () => {
        render(<ChangeBox title="Teste" color={true}/>)
        const changeBox = screen.getByText('Teste')
        console.log(changeBox)
        expect(changeBox).toHaveStyle('backgroundColor: primary.light')
    })

    test('Should render ChangeBox with background color', () => {
        render(<ChangeBox title="Teste" color={false}/>)
        const changeBox = screen.getByText('Teste')
        expect(changeBox).toHaveStyle('backgroundColor: background.default')
    })

    test('Should call onClickFunction when cliked', () => {
        const handleClick = jest.fn()
        render(<ChangeBox title="Teste" color={false} onClickFunction={handleClick}/>)
        
        const changeBox = screen.getByText('Teste')
        fireEvent.click(changeBox)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

})