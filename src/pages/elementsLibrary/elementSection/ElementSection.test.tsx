import { render, screen } from "@testing-library/react"
import ElementSection from "./ElementSection"

describe('ElementSection', () => {
    
    test('should render correctly', () => {
        render(<ElementSection position={0} />)
        
        expect(screen.getByTestId('section1')).toBeInTheDocument()

        render(<ElementSection position={1} />)

        expect(screen.getByTestId('section2')).toBeInTheDocument()

        render(<ElementSection position={2} />)

        expect(screen.getByTestId('section3')).toBeInTheDocument()
        
        render(<ElementSection position={3} />)

        expect(screen.getByTestId('section4')).toBeInTheDocument()
    })
})