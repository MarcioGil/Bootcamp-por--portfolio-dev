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
        <!-- Capa com Foto -->
        <div style="text-align: center; padding: 40px 0; page-break-after: always;">
            <div style="margin-bottom: 30px;">
                <img src="assets/foto-marcio-gil.jpg" alt="Márcio Gil" style="width: 180px; height: 180px; border-radius: 50%; border: 5px solid #8b5cf6; object-fit: cover; box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);">
            </div>
            <div style="font-size: 52px; margin-bottom: 15px;">🚀</div>
            <h1 style="font-size: 38px; color: #8b5cf6; margin: 15px 0; line-height: 1.2;">
                Trilhas da Transformação Tech
            </h1>
            <p style="font-size: 18px; color: #64748b; margin: 10px 0;">
                Descubra sua Trilha Tech e Transforme sua Carreira
            </p>
            <div style="margin-top: 30px; padding: 18px; background: #f8fafc; border-radius: 10px;">
                <p style="font-size: 16px; margin: 5px 0;"><strong>Por:</strong> Márcio Gil</p>
                <p style="font-size: 15px; margin: 5px 0; color: #8b5cf6;">🌟 Embaixador DIO Campus Expert</p>
                <p style="font-size: 14px; margin: 5px 0; color: #64748b;">🎓 Estudante de Engenharia de Software</p>
            </div>
            <div style="margin-top: 30px; padding: 15px; background: #ede9fe; border-radius: 10px;">
                <p style="font-size: 15px; margin: 5px 0;"><strong>E-book personalizado para:</strong></p>
                <p style="font-size: 17px; margin: 5px 0; color: #8b5cf6;">${userName}</p>
            </div>
        </div>

        <!-- Página Motivacional 1: O Poder da Educação -->
        <div style="page-break-after: always; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 64px; margin-bottom: 15px;">📚</div>
                <h2 style="color: #8b5cf6; font-size: 32px; margin: 15px 0;">
                    O Poder Transformador da Educação
                </h2>
            </div>
            
            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                A educação sempre foi e sempre será a ferramenta mais poderosa para transformar vidas. Mas vivemos em um momento único da história, onde o acesso ao conhecimento de qualidade nunca esteve tão democrático.
            </p>
            
            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Antigamente, aprender uma nova profissão exigia investimentos altos, deslocamentos diários e muitas vezes a interrupção de outras atividades. Hoje, com plataformas como a DIO, você pode estudar no seu tempo, do seu jeito, e <strong>completamente de graça</strong>.
            </p>

            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px; border-radius: 12px; color: white; margin: 25px 0;">
                <p style="font-size: 18px; margin: 0; text-align: center; font-weight: bold; line-height: 1.6;">
                    "A educação é a arma mais poderosa que você pode usar para mudar o mundo."
                </p>
                <p style="text-align: center; margin-top: 10px; font-size: 14px; opacity: 0.9;">
                    — Nelson Mandela
                </p>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Cada bootcamp que você encontrará neste e-book representa centenas de horas de conteúdo desenvolvido por especialistas, projetos práticos, mentorias e uma comunidade vibrante de estudantes. Tudo isso disponível para você sem custo algum.
            </p>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                O que separa você da carreira dos seus sonhos não é mais dinheiro ou localização geográfica. É apenas <strong>decisão e dedicação</strong>.
            </p>
        </div>

        <!-- Página Motivacional 2: Uma Oportunidade Única -->
        <div style="page-break-after: always; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 64px; margin-bottom: 15px;">🌟</div>
                <h2 style="color: #8b5cf6; font-size: 32px; margin: 15px 0;">
                    Uma Oportunidade Única na História
                </h2>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Você está vivendo um momento histórico. Nunca antes na história da humanidade tantas oportunidades de aprendizado de alta qualidade estiveram disponíveis gratuitamente. E mais: nunca o mercado de tecnologia esteve tão aquecido e necessitado de profissionais qualificados.
            </p>

            <div style="background: #f0fdf4; padding: 20px; border-left: 5px solid #22c55e; margin: 25px 0; border-radius: 5px;">
                <h3 style="color: #16a34a; margin-top: 0; font-size: 20px;">💡 Pense nisso:</h3>
                <ul style="margin: 10px 0; padding-left: 25px; line-height: 1.8;">
                    <li style="margin: 10px 0;">📊 O mercado de tecnologia cresce <strong>3x mais rápido</strong> que outros setores</li>
                    <li style="margin: 10px 0;">💰 Salários na área tech estão entre os <strong>mais altos do mercado</strong></li>
                    <li style="margin: 10px 0;">🌍 Você pode trabalhar de <strong>qualquer lugar do mundo</strong></li>
                    <li style="margin: 10px 0;">🚀 Há <strong>mais vagas abertas</strong> do que profissionais qualificados</li>
                    <li style="margin: 10px 0;">🎓 Não é necessário diploma universitário para <strong>começar</strong></li>
                </ul>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                A DIO, através de parcerias com grandes empresas, oferece bootcamps que preparam você diretamente para o mercado de trabalho. São conteúdos práticos, atualizados e alinhados com o que as empresas realmente procuram.
            </p>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Enquanto algumas pessoas pagam milhares de reais em cursos, você tem acesso ao mesmo nível de qualidade — ou até superior — completamente gratuito. Essa é uma janela de oportunidade que não estará aberta para sempre.
            </p>

            <div style="background: #fef3c7; padding: 20px; border-left: 5px solid #f59e0b; margin: 25px 0; border-radius: 5px;">
                <p style="margin: 0; font-size: 16px; line-height: 1.8; color: #78350f;">
                    <strong>⚡ Momento de Agir:</strong> O melhor momento para começar foi há um ano. O segundo melhor momento é agora. Não deixe essa oportunidade passar!
                </p>
            </div>
        </div>

        <!-- Página Motivacional 3: Sua História Começa Aqui -->
        <div style="page-break-after: always; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 64px; margin-bottom: 15px;">🎯</div>
                <h2 style="color: #8b5cf6; font-size: 32px; margin: 15px 0;">
                    Sua História de Sucesso Começa Aqui
                </h2>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Cada grande profissional da tecnologia que você admira hoje começou exatamente onde você está agora: no início da jornada, com dúvidas, medos e incertezas. A diferença é que eles deram o primeiro passo.
            </p>

            <div style="background: #ede9fe; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h3 style="color: #6d28d9; margin-top: 0; font-size: 20px; text-align: center;">🌱 Os Três Pilares do Sucesso na Tech</h3>
                
                <div style="margin: 20px 0;">
                    <p style="font-size: 16px; margin-bottom: 10px;"><strong style="color: #8b5cf6;">1. Curiosidade Constante</strong></p>
                    <p style="font-size: 15px; margin: 0 0 15px 20px; line-height: 1.7;">
                        A tecnologia evolui rapidamente. Os profissionais de sucesso são aqueles que mantêm a curiosidade viva e nunca param de aprender.
                    </p>

                    <p style="font-size: 16px; margin-bottom: 10px;"><strong style="color: #8b5cf6;">2. Prática Deliberada</strong></p>
                    <p style="font-size: 15px; margin: 0 0 15px 20px; line-height: 1.7;">
                        Não basta assistir aulas. É preciso colocar a mão no código, errar, debugar e construir projetos reais. A prática torna permanente.
                    </p>

                    <p style="font-size: 16px; margin-bottom: 10px;"><strong style="color: #8b5cf6;">3. Comunidade e Networking</strong></p>
                    <p style="font-size: 15px; margin: 0 0 0 20px; line-height: 1.7;">
                        Conecte-se com outros estudantes, participe de fóruns, compartilhe seus projetos. Muitas oportunidades surgem através da rede de contatos.
                    </p>
                </div>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Este e-book não é apenas uma lista de cursos. É um <strong>mapa cuidadosamente desenhado</strong> para guiar você da curiosidade inicial até a realização profissional. Cada trilha foi pensada para formar profissionais completos e preparados para o mercado.
            </p>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Você não precisa fazer todas as trilhas de uma vez. Escolha uma que ressoe com você, dedique-se a ela e complete os bootcamps com excelência. Os resultados virão naturalmente.
            </p>

            <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 25px; border-radius: 12px; color: white; margin: 25px 0;">
                <p style="font-size: 17px; margin: 0; text-align: center; font-weight: bold; line-height: 1.6;">
                    Daqui a um ano, você pode estar trabalhando na área dos seus sonhos ou ainda pensando em começar. A escolha é sua.
                </p>
            </div>

            <p style="font-size: 16px; margin-bottom: 0; line-height: 1.8; text-align: center; font-style: italic; color: #64748b;">
                Acredite no seu potencial. Você é capaz de muito mais do que imagina. 💜
            </p>
        </div>

        <!-- Introdução Técnica -->
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
            description: 'Quer aprender a dar vida às telas que as pessoas usam todos os dias? Domine HTML, CSS, JavaScript, Angular e React criando interfaces modernas e responsivas.',
            bootcamps: [
                {
                    name: 'Santander 2025 - Front-End com Angular',
                    description: 'Crie interfaces modernas e construa um portfólio poderoso com Angular.',
                    url: 'https://www.dio.me/bootcamp/santander-2025-frontend-com-angular?ref=AFILIADOS66FD57E0D94'
                },
                {
                    name: 'Potência Tech iFood - Front-end',
                    description: 'Transforme criatividade em código com HTML, CSS, JavaScript e React.',
                    url: 'https://www.dio.me/bootcamp/potencia-tech-ifood-desenvolvimento-de-front-end?ref=AFILIADOS66FD57E0D94'
                }
            ]
        },
        {
            icon: '⚙️',
            title: 'Back-End',
            subtitle: 'O Poder por Trás do Código',
            description: 'Aprenda a desenvolver sistemas robustos e escaláveis. Domine Java, Python, Spring Boot e APIs REST que fazem tudo funcionar nos bastidores.',
            bootcamps: [
                {
                    name: 'GFT Start #7 - Java Developer',
                    description: 'Desenvolva sistemas robustos com Java, Spring Boot e APIs REST.',
                    url: 'https://www.dio.me/bootcamp/gft-start-7-java-developer?ref=AFILIADOS66FD57E0D94'
                },
                {
                    name: 'Potência Tech iFood - Back-End Python',
                    description: 'Construa soluções eficientes com Python e APIs.',
                    url: 'https://www.dio.me/bootcamp/potencia-tech-ifood-desenvolvimento-de-back-end-com-python?ref=AFILIADOS66FD57E0D94'
                }
            ]
        },
        {
            icon: '☁️',
            title: 'Cloud Computing',
            subtitle: 'O Futuro Está na Nuvem',
            description: 'Compreenda como funcionam os serviços de nuvem. Construa soluções escaláveis com Azure e AWS e prepare-se para certificações globais.',
            bootcamps: [
                {
                    name: 'Microsoft Azure Cloud Fundamentals',
                    description: 'Domine Azure e prepare-se para certificações que abrem portas globais.',
                    url: 'https://www.dio.me/bootcamp/microsoft-certification-challenge-1-ai-102?ref=AFILIADOS66FD57E0D94'
                },
                {
                    name: 'AWS Cloud Fundamentals',
                    description: 'Fundamentos da computação em nuvem com AWS e boas práticas.',
                    url: 'https://www.dio.me/bootcamp/aws-cloud-fundamentals?ref=AFILIADOS66FD57E0D94'
                }
            ]
        },
        {
            icon: '🧠',
            title: 'IA e Dados',
            subtitle: 'Transformando Informação em Conhecimento',
            description: 'Aprenda a coletar, analisar e visualizar dados. Descubra o poder da Inteligência Artificial Generativa e construa o futuro.',
            bootcamps: [
                {
                    name: 'Randstad - Análise de Dados com Power BI',
                    description: 'Construa insights que ajudam a tomar decisões inteligentes.',
                    url: 'https://www.dio.me/bootcamp/randstad-analise-de-dados-com-power-bi?ref=AFILIADOS66FD57E0D94'
                },
                {
                    name: 'Nexa - IA Generativa com Bedrock',
                    description: 'Descubra o poder da IA Generativa em soluções inovadoras.',
                    url: 'https://www.dio.me/bootcamp/nexa-fundamentos-de-ia-generativa-com-bedrock?ref=AFILIADOS66FD57E0D94'
                }
            ]
        },
        {
            icon: '🧩',
            title: 'Carreiras Tech',
            subtitle: 'Do Zero ao Primeiro Emprego',
            description: 'Comece do zero e construa uma base sólida. Lógica de programação, Git/GitHub, HTML, CSS e JavaScript para descobrir sua vocação.',
            bootcamps: [
                {
                    name: 'Potência Tech Start',
                    description: 'Base sólida em programação para abrir portas em qualquer trilha futura.',
                    url: 'https://www.dio.me/bootcamp/potencia-tech-start?ref=AFILIADOS66FD57E0D94'
                },
                {
                    name: 'MRV Tech - Primeiros Passos',
                    description: 'Fundamentos de programação, algoritmos e lógica essenciais.',
                    url: 'https://www.dio.me/bootcamp/mrv-tech-primeiros-passos-na-programacao?ref=AFILIADOS66FD57E0D94'
                }
            ]
        },
        {
            icon: '🎮',
            title: 'Game Development',
            subtitle: 'Transformando Ideias em Jogos',
            description: 'Crie jogos interativos e dinâmicos. Aprenda Unity, C#, game design e todo o processo de criação desde storytelling até deploy.',
            bootcamps: [
                {
                    name: 'DIO - Desenvolvimento de Games com Unity',
                    description: 'Desenvolva jogos com Unity e C#, dominando lógica e design.',
                    url: 'https://www.dio.me/bootcamp/desenvolvimento-de-games-com-unity?ref=AFILIADOS66FD57E0D94'
                },
                {
                    name: 'GameLab - Game Design e Programação',
                    description: 'Processo completo de criação: design, storytelling e programação.',
                    url: 'https://www.dio.me/bootcamp/gamelab-game-design-e-programacao?ref=AFILIADOS66FD57E0D94'
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
                            <p style="margin: 0 0 8px 0; font-weight: bold; color: #1e293b; font-size: 15px;">
                                ${bIndex + 1}. ${bootcamp.name}
                            </p>
                            <p style="margin: 0 0 8px 0; font-size: 14px; color: #64748b; line-height: 1.5;">
                                ${bootcamp.description}
                            </p>
                            <p style="margin: 0; font-size: 12px; color: #8b5cf6; word-break: break-all;">
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
