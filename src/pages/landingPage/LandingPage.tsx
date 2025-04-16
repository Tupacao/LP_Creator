import { Box } from '@mui/material';
import { Header1, Header2 } from './components/Header';
import { Footer1, Footer2} from './components/Footer';
import { Section1, Section2, Section3, Section4 } from './components/Section';
import { mockSiteData } from './siteData';
import { SectionData } from './types';


const LandingPage = () => {
    const renderHeader = () => {
        return mockSiteData.header.type === "1"
            ? <Header1 data={mockSiteData.header} />
            : <Header2 data={mockSiteData.header} />;
    };

    const renderSection = (section: SectionData) => {
        switch (section.type) {
            case "1": return <Section1 data={section} />;
            case "2": return <Section2 data={section} />;
            case "3": return <Section3 data={section} />;
            case "4": return <Section4 data={section} />;
        }
    };

    const renderFooter = () => {
        return mockSiteData.footer.type === "1"
            ? <Footer1 data={mockSiteData.footer} />
            : <Footer2 data={mockSiteData.footer} />;
    }

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {renderHeader()}
            <Box sx={{ flex: 1 }}>
                {mockSiteData.sections
                    .sort((a, b) => a.orderIndex - b.orderIndex)
                    .map((section, index) => (
                        <Box key={index}>
                            {renderSection(section)}
                        </Box>
                    ))}
            </Box>
            {renderFooter()}
        </Box>
    );
};

export default LandingPage;