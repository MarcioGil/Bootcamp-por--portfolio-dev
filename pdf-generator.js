// ============================================
// GERADOR DE PDF DO E-BOOK
// Usa html2pdf.js para gerar PDF a partir do conteúdo HTML
// ============================================

/**
 * Gera e baixa o PDF do e-book completo
 */
async function downloadEbookPDF() {
    try {
        // Mostrar loading
        showPDFLoading();

        // Criar conteúdo do PDF
        const content = createPDFContent();

        // Configurações do PDF
        const opt = {
            margin: [15, 10, 15, 10],
            filename: 'trilhas-transformacao-tech.pdf',
            image: { type: 'jpeg', quality: 0.95 },
            html2canvas: { 
                scale: 2,
                useCORS: true,
                logging: false
            },
            jsPDF: { 
                unit: 'mm', 
                format: 'a4', 
                orientation: 'portrait' 
            },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        };

        // Gerar PDF
        await html2pdf().set(opt).from(content).save();

        // Remover loading
        hidePDFLoading();

        // Mostrar mensagem de sucesso
        alert('✅ E-book baixado com sucesso!');

    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        hidePDFLoading();
        alert('❌ Erro ao gerar PDF. Tente novamente.');
    }
}

/**
 * Cria o conteúdo HTML formatado para o PDF
 */
function createPDFContent() {
    const user = getCurrentUser();
    const userName = user ? user.name : 'Estudante';

    const content = document.createElement('div');
    content.style.cssText = `
        font-family: 'Arial', sans-serif;
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
        color: #1e293b;
        line-height: 1.6;
    `;

    content.innerHTML = `
        <!-- Capa -->
        <div style="text-align: center; padding: 60px 0; page-break-after: always;">
            <div style="font-size: 72px; margin-bottom: 20px;">🚀</div>
            <h1 style="font-size: 42px; color: #8b5cf6; margin: 20px 0;">
                Trilhas da Transformação Tech
            </h1>
            <p style="font-size: 20px; color: #64748b; margin: 10px 0;">
                Descubra sua Trilha Tech e Transforme sua Carreira
            </p>
            <div style="margin-top: 40px; padding: 20px; background: #f8fafc; border-radius: 10px;">
                <p style="font-size: 18px; margin: 5px 0;"><strong>Por:</strong> Márcio Gil</p>
                <p style="font-size: 16px; margin: 5px 0; color: #8b5cf6;">Embaixador DIO Campus Expert</p>
            </div>
            <div style="margin-top: 40px; padding: 15px; background: #ede9fe; border-radius: 10px;">
                <p style="font-size: 16px; margin: 5px 0;"><strong>E-book personalizado para:</strong></p>
                <p style="font-size: 18px; margin: 5px 0; color: #8b5cf6;">${userName}</p>
            </div>
        </div>

        <!-- Introdução -->
        <div style="page-break-after: always;">
            <h2 style="color: #8b5cf6; font-size: 32px; margin-bottom: 20px; border-bottom: 3px solid #8b5cf6; padding-bottom: 10px;">
                📖 Bem-vindo à sua Jornada Tech!
            </h2>
            <p style="font-size: 16px; margin-bottom: 15px;">
                Você já imaginou poder escolher o caminho da sua carreira na tecnologia com total clareza e segurança?
            </p>
            <p style="font-size: 16px; margin-bottom: 15px;">
                Este e-book foi criado para ser o seu mapa nessa jornada. Aqui, você vai encontrar as principais <strong>trilhas de aprendizado</strong> na tecnologia, cada uma com bootcamps cuidadosamente selecionados da <strong>DIO (Digital Innovation One)</strong>, uma das maiores plataformas de educação tech do Brasil.
            </p>
            <p style="font-size: 16px; margin-bottom: 15px;">
                Meu objetivo é simples: <strong>ajudar você a transformar curiosidade em carreira</strong>.
            </p>
            <p style="font-size: 16px; margin-bottom: 15px;">
                Seja você iniciante ou alguém que já está na área e busca se especializar, este guia vai te mostrar o caminho mais direto para o sucesso.
            </p>

            <div style="background: #f0fdf4; padding: 20px; border-left: 5px solid #22c55e; margin: 30px 0; border-radius: 5px;">
                <h3 style="color: #16a34a; margin-top: 0;">🎯 O que você vai encontrar:</h3>
                <ul style="margin: 10px 0; padding-left: 25px;">
                    <li style="margin: 8px 0;">✅ <strong>6 trilhas completas</strong> de tecnologia</li>
                    <li style="margin: 8px 0;">✅ <strong>Mais de 12 bootcamps</strong> selecionados</li>
                    <li style="margin: 8px 0;">✅ <strong>Links diretos</strong> com código de indicação</li>
                    <li style="margin: 8px 0;">✅ <strong>Dicas práticas</strong> para cada trilha</li>
                    <li style="margin: 8px 0;">✅ <strong>Caminho claro</strong> do zero ao profissional</li>
                </ul>
            </div>
        </div>

        ${generateAllTrilhasContent()}

        <!-- Conclusão -->
        <div style="page-break-before: always;">
            <h2 style="color: #8b5cf6; font-size: 32px; margin-bottom: 20px; border-bottom: 3px solid #8b5cf6; padding-bottom: 10px;">
                🚀 Próximos Passos
            </h2>
            <p style="font-size: 16px; margin-bottom: 15px;">
                Agora que você conhece todas as trilhas disponíveis, é hora de <strong>agir</strong>!
            </p>
            <div style="background: #fef3c7; padding: 20px; border-left: 5px solid #f59e0b; margin: 20px 0; border-radius: 5px;">
                <h3 style="color: #d97706; margin-top: 0;">📝 Seu Plano de Ação:</h3>
                <ol style="margin: 10px 0; padding-left: 25px;">
                    <li style="margin: 10px 0;"><strong>Escolha sua trilha:</strong> Qual delas mais combina com você?</li>
                    <li style="margin: 10px 0;"><strong>Acesse os bootcamps:</strong> Use os links incluídos no e-book</li>
                    <li style="margin: 10px 0;"><strong>Inscreva-se gratuitamente:</strong> Todos os bootcamps são gratuitos!</li>
                    <li style="margin: 10px 0;"><strong>Comece a estudar:</strong> Dedique tempo diariamente</li>
                    <li style="margin: 10px 0;"><strong>Compartilhe sua evolução:</strong> Conecte-se com a comunidade</li>
                </ol>
            </div>
        </div>

        <!-- Autor -->
        <div style="page-break-before: always; text-align: center;">
            <h2 style="color: #8b5cf6; font-size: 32px; margin-bottom: 20px;">
                👨‍💻 Sobre o Autor
            </h2>
            <div style="background: #f8fafc; padding: 30px; border-radius: 10px; margin: 20px 0;">
                <h3 style="color: #1e293b; margin-top: 0;">Márcio Gil</h3>
                <p style="color: #8b5cf6; font-weight: bold; margin: 10px 0;">
                    🌟 Embaixador DIO Campus Expert
                </p>
                <p style="color: #64748b; margin: 10px 0;">
                    🎓 Estudante de Engenharia de Software
                </p>
                <p style="font-size: 16px; margin: 20px 0; line-height: 1.8;">
                    Apaixonado por <strong>educação, inovação, tecnologia e justiça social</strong>. 
                    Acredito que a tecnologia pode ser uma ponte para transformar vidas e criar 
                    oportunidades para todos.
                </p>
                <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #e2e8f0;">
                    <p style="font-size: 14px; color: #64748b; margin: 5px 0;">
                        🔗 LinkedIn: linkedin.com/in/márcio-gil-1b7669309
                    </p>
                    <p style="font-size: 14px; color: #64748b; margin: 5px 0;">
                        🔗 GitHub: github.com/MarcioGil
                    </p>
                    <p style="font-size: 14px; color: #64748b; margin: 5px 0;">
                        🔗 Portfólio: marciogil.github.io/curriculum-vitae
                    </p>
                </div>
            </div>
        </div>

        <!-- Rodapé -->
        <div style="text-align: center; padding: 40px 20px; color: #64748b; font-size: 14px;">
            <p style="margin: 10px 0;">💜 <strong>Feito com amor para a comunidade tech!</strong></p>
            <p style="margin: 10px 0;">🚀 <strong>Transforme curiosidade em carreira com propósito.</strong></p>
            <p style="margin: 20px 0; font-style: italic;">
                "Educação e tecnologia são as ferramentas mais poderosas para transformar o mundo."
            </p>
            <p style="margin: 10px 0;">© 2025 Márcio Gil - Todos os direitos reservados</p>
        </div>
    `;

    return content;
}

/**
 * Gera o conteúdo de todas as trilhas
 */
function generateAllTrilhasContent() {
    const trilhas = [
        {
            icon: '💻',
            title: 'Front-End',
            subtitle: 'Criando Experiências Digitais',
            description: 'Aprenda a criar interfaces visuais incríveis e experiências de usuário que fazem a diferença.',
            bootcamps: [
                {
                    name: 'Coding The Future Squadio - Desenvolvedora Front-End',
                    url: 'https://web.dio.me/track/coding-future-squadio-front-end?ref=AFILIADOS66FD57E0D94'
                },
                {
                    name: 'Coding The Future Claro - Java com Spring Boot',
                    url: 'https://web.dio.me/track/coding-future-claro-java-spring-boot?ref=AFILIADOS66FD57E0D94'
                }
            ]
        },
        {
            icon: '⚙️',
            title: 'Back-End',
            subtitle: 'O Poder por Trás do Código',
            description: 'Domine a lógica de programação, bancos de dados e APIs que sustentam aplicações robustas.',
            bootcamps: [
                {
                    name: 'Coding The Future Vivo - Python AI Backend Developer',
                    url: 'https://web.dio.me/track/coding-future-vivo-python-ai-backend-developer?ref=AFILIADOS66FD57E0D94'
                },
                {
                    name: 'Coding The Future GFT - Desenvolvimento Java com IA',
                    url: 'https://web.dio.me/track/coding-future-gft-desenvolvimento-java-com-ia?ref=AFILIADOS66FD57E0D94'
                }
            ]
        },
        {
            icon: '☁️',
            title: 'Cloud Computing',
            subtitle: 'O Futuro Está na Nuvem',
            description: 'Entre no universo da computação em nuvem e aprenda a escalar sistemas globalmente.',
            bootcamps: [
                {
                    name: 'Coding The Future XP Inc. - Full Stack Developer',
                    url: 'https://web.dio.me/track/coding-future-xp-full-stack-developer?ref=AFILIADOS66FD57E0D94'
                },
                {
                    name: 'Coding The Future Philips - Fullstack Developer',
                    url: 'https://web.dio.me/track/coding-future-philips-fullstack-developer?ref=AFILIADOS66FD57E0D94'
                }
            ]
        },
        {
            icon: '🧠',
            title: 'IA e Dados',
            subtitle: 'Transformando Informação em Conhecimento',
            description: 'Descubra o mundo da Inteligência Artificial, Machine Learning e análise de dados.',
            bootcamps: [
                {
                    name: 'Coding The Future Squadio - IA Generativa para Devs',
                    url: 'https://web.dio.me/track/coding-future-squadio-ia-generativa-para-devs?ref=AFILIADOS66FD57E0D94'
                },
                {
                    name: 'Microsoft Copilot AI',
                    url: 'https://web.dio.me/track/microsoft-copilot-ai?ref=AFILIADOS66FD57E0D94'
                }
            ]
        },
        {
            icon: '🧩',
            title: 'Carreiras Tech',
            subtitle: 'Do Zero ao Primeiro Emprego',
            description: 'Trilhas completas para quem está começando e quer garantir a primeira vaga.',
            bootcamps: [
                {
                    name: 'Potência Tech iFood - Desenvolvimento de Jogos',
                    url: 'https://web.dio.me/track/potencia-tech-ifood-desenvolvimento-de-jogos?ref=AFILIADOS66FD57E0D94'
                },
                {
                    name: 'GFT - Desenvolvimento Java com Cloud AWS',
                    url: 'https://web.dio.me/track/gft-desenvolvimento-java-com-cloud-aws?ref=AFILIADOS66FD57E0D94'
                }
            ]
        },
        {
            icon: '🎮',
            title: 'Game Development',
            subtitle: 'Transformando Ideias em Jogos',
            description: 'Aprenda a criar jogos incríveis do zero, da programação ao design de gameplay.',
            bootcamps: [
                {
                    name: 'Coding The Future Philips - Fullstack Developer',
                    url: 'https://web.dio.me/track/coding-future-philips-fullstack-developer?ref=AFILIADOS66FD57E0D94'
                },
                {
                    name: 'Microsoft AI for Tech',
                    url: 'https://web.dio.me/track/microsoft-ai-for-tech?ref=AFILIADOS66FD57E0D94'
                }
            ]
        }
    ];

    let content = '';

    trilhas.forEach((trilha, index) => {
        content += `
            <div style="page-break-before: always;">
                <h2 style="color: #8b5cf6; font-size: 32px; margin-bottom: 15px; border-bottom: 3px solid #8b5cf6; padding-bottom: 10px;">
                    ${trilha.icon} ${trilha.title}
                </h2>
                <h3 style="color: #64748b; font-size: 20px; margin-bottom: 20px; font-weight: normal;">
                    ${trilha.subtitle}
                </h3>
                <p style="font-size: 16px; margin-bottom: 25px; line-height: 1.8;">
                    ${trilha.description}
                </p>

                <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <h4 style="color: #1e293b; margin-top: 0; margin-bottom: 15px; font-size: 18px;">
                        🎯 Bootcamps Recomendados:
                    </h4>
                    ${trilha.bootcamps.map((bootcamp, bIndex) => `
                        <div style="background: white; padding: 15px; margin-bottom: 12px; border-radius: 8px; border-left: 4px solid #8b5cf6;">
                            <p style="margin: 0; font-weight: bold; color: #1e293b; margin-bottom: 5px;">
                                ${bIndex + 1}. ${bootcamp.name}
                            </p>
                            <p style="margin: 0; font-size: 13px; color: #64748b; word-break: break-all;">
                                🔗 ${bootcamp.url}
                            </p>
                        </div>
                    `).join('')}
                </div>

                <div style="background: #ede9fe; padding: 15px; border-radius: 8px; margin-top: 20px;">
                    <p style="margin: 0; font-size: 14px; color: #6d28d9;">
                        💡 <strong>Dica:</strong> Clique nos links acima para acessar os bootcamps com código de indicação já incluído!
                    </p>
                </div>
            </div>
        `;
    });

    return content;
}

/**
 * Mostra indicador de loading durante geração do PDF
 */
function showPDFLoading() {
    const loading = document.createElement('div');
    loading.id = 'pdf-loading';
    loading.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    loading.innerHTML = `
        <div style="text-align: center; color: white;">
            <div style="font-size: 48px; margin-bottom: 20px;">📄</div>
            <h3 style="margin: 0 0 10px 0;">Gerando seu E-book...</h3>
            <p style="margin: 0; color: #a78bfa;">Isso pode levar alguns segundos</p>
        </div>
    `;
    document.body.appendChild(loading);
}

/**
 * Remove indicador de loading
 */
function hidePDFLoading() {
    const loading = document.getElementById('pdf-loading');
    if (loading) {
        loading.remove();
    }
}
