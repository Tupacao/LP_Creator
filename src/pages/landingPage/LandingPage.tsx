import { Box } from '@mui/material';
import { Header1, Header2 } from './components/Header';
import { Footer1, Footer2} from './components/Footer';
import { Section1, Section2, Section3, Section4 } from './components/Section';
import { SectionData, SiteData } from './types';
import { useEffect, useState } from 'react';
import LandingPageService from '../../shared/services/LandingPageService';
import { useParams } from 'react-router-dom';


const LandingPage = () => {
    const [siteData, setSiteData] = useState<SiteData | null>(null);
    const { siteId } = useParams();

    useEffect(() => {
        const fetchSiteData = async () => {
            if (siteId) {
                try {
                    const data = await LandingPageService.getSiteData(siteId);
                    setSiteData(data);
                } catch (error) {
                    console.error('Error fetching site data:', error);
                }
            }
        };

        fetchSiteData();
    }, [siteId]);

    if (!siteData) {
        return null;
    }

    const renderHeader = () => {
        return siteData.header.type === "1"
            ? <Header1 data={siteData.header} />
            : <Header2 data={siteData.header} />;
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
        return siteData.footer.type === "1"
            ? <Footer1 data={siteData.footer} />
            : <Footer2 data={siteData.footer} />;
    }

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }} >
            {renderHeader()}
            <Box sx={{ flex: 1 }}>
                {siteData.sections
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