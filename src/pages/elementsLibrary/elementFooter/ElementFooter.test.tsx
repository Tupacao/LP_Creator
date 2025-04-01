import { render, screen } from "@testing-library/react"
import ElementFooter from "./ElementFooter"

describe('ElementFooter', () => {
    
    test('should render correctly', () => {
        render(<ElementFooter position={0} />)
        
        expect(screen.getByTestId('footer1')).toBeInTheDocument()

        render(<ElementFooter position={1} />)

        expect(screen.getByTestId('footer2')).toBeInTheDocument()
    })
})