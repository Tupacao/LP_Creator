import { SiteData } from './types';

export const mockSiteData: SiteData = {
    id: "1",
    userId: "101",
    siteName: "Nome do Site",
    createdAt: new Date().toISOString(),
    header: {
        type: "1",
        title: "Bem-vindo ao Nosso Site",
        subtitle: "Soluções inovadoras para seu negócio",
        buttonText: "Comece Agora"
    },
    sections: [
        {
            type: "1",
            orderIndex: 1,
            title: "Nossa Solução Principal",
            description: "Uma solução completa que atende todas as suas necessidades",
            imageUrl: "/assets/solution.jpg"
        },
        {
            type: "2",
            orderIndex: 2,
            features: [
                {
                    title: "Recursos Avançados",
                    description: "Ferramentas poderosas para impulsionar seu negócio"
                },
                {
                    title: "Suporte 24/7",
                    description: "Equipe especializada sempre disponível para ajudar"
                },
                {
                    title: "Interface Intuitiva",
                    description: "Fácil de usar, sem necessidade de treinamento"
                },
                {
                    title: "Segurança",
                    description: "Proteção de dados de última geração"
                }
            ]
        },
        {
            type: "3",
            orderIndex: 3,
            testimonials: [
                {
                    author: "João Silva",
                    text: "Excelente serviço! Superou todas as expectativas."
                },
                {
                    author: "Maria Santos",
                    text: "A melhor solução que já utilizamos. Recomendo!"
                }
            ]
        },
        {
            type: "4",
            orderIndex: 4,
            email: "contato@empresa.com",
            phone: "(11) 99999-9999",
            address: "Rua Exemplo, 123 - São Paulo, SP"
        }
    ],
    footer: {
        type: "1",
        title: "Fale Conosco",
        address: "Rua Exemplo, 123 - São Paulo, SP",
        socialMedia: true,
        copyright: "© 2024 Sua Empresa. Todos os direitos reservados."
    }
};