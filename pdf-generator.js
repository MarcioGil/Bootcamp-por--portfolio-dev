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
        
        // IMPORTANTE: Adicionar ao DOM temporariamente para renderizar
        content.style.position = 'absolute';
        content.style.left = '-9999px';
        document.body.appendChild(content);

        // Aguardar imagens carregarem
        await new Promise(resolve => setTimeout(resolve, 500));

        // Configurações do PDF - SIMPLIFICADAS
        const opt = {
            margin: 15,
            filename: 'trilhas-transformacao-tech.pdf',
            image: { type: 'jpeg', quality: 0.95 },
            html2canvas: { 
                scale: 2,
                useCORS: true,
                logging: true
            },
            jsPDF: { 
                unit: 'mm', 
                format: 'a4', 
                orientation: 'portrait'
            },
            pagebreak: { mode: 'avoid-all' }
        };

        // Gerar PDF
        await html2pdf().set(opt).from(content).save();
        
        // Remover do DOM
        document.body.removeChild(content);

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
        font-family: Arial, sans-serif;
        color: #1e293b;
        line-height: 1.6;
    `;

    content.innerHTML = `
        <!-- CAPA -->
        <div style="text-align: center; padding: 80px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; min-height: 100vh;">
            <img src="assets/foto-marcio-gil.jpg" alt="Márcio Gil" style="width: 160px; height: 160px; border-radius: 50%; border: 5px solid white; object-fit: cover; margin-bottom: 30px;">
            
            <div style="font-size: 60px; margin-bottom: 20px;">🚀</div>
            
            <h1 style="font-size: 48px; color: white; margin: 20px 0; font-weight: bold;">
                TRILHAS DA<br>TRANSFORMAÇÃO TECH
            </h1>
            
            <p style="font-size: 20px; margin: 30px 0;">
                Seu Guia Completo para uma Carreira de Sucesso na Tecnologia
            </p>
            
            <div style="background: rgba(255,255,255,0.2); padding: 25px; border-radius: 12px; margin: 40px auto; max-width: 400px;">
                <p style="font-size: 16px; margin: 5px 0;">Criado por: <strong>Márcio Gil</strong></p>
                <p style="font-size: 14px; margin: 5px 0;">⭐ Embaixador DIO Campus Expert</p>
                <p style="font-size: 14px; margin: 5px 0;">🎓 Estudante de Engenharia de Software</p>
            </div>
            
            <div style="background: rgba(254,243,199,0.3); padding: 20px; border-radius: 10px; margin: 30px auto; max-width: 350px;">
                <p style="font-size: 14px; margin: 5px 0;">E-book personalizado para:</p>
                <p style="font-size: 24px; margin: 10px 0; font-weight: bold;">${userName}</p>
            </div>
        </div>

        <!-- PÁGINA 1: O QUE É UM BOOTCAMP -->
        <div style="page-break-before: always; padding: 40px 30px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 50px;">🎓</div>
                <h2 style="color: #8b5cf6; font-size: 28px; margin: 15px 0;">O Que É um Bootcamp?</h2>
            </div>
            
            <p style="font-size: 14px; margin-bottom: 15px; line-height: 1.8; text-align: justify;">
                Um <strong>bootcamp</strong> é um programa intensivo de aprendizado prático, projetado para transformar iniciantes em profissionais qualificados em um curto período de tempo. Diferente de cursos tradicionais que focam apenas na teoria, os bootcamps são 100% orientados à prática e aos desafios reais do mercado.
            </p>
            
            <p style="font-size: 14px; margin-bottom: 15px; line-height: 1.8; text-align: justify;">
                O termo "bootcamp" vem dos campos de treinamento militar. Na tecnologia, a ideia é a mesma: <strong>mergulhar de cabeça</strong> em projetos reais, resolver problemas complexos e desenvolver habilidades práticas que o mercado valoriza.
            </p>

            <div style="background: #f0fdf4; padding: 20px; border-left: 4px solid #22c55e; margin: 20px 0;">
                <h3 style="color: #16a34a; margin-top: 0; font-size: 18px;">🎯 O Que Torna um Bootcamp Diferente?</h3>
                <ul style="margin: 10px 0; padding-left: 25px; line-height: 1.8; font-size: 13px;">
                    <li><strong>Aprendizado Baseado em Projetos:</strong> Você constrói aplicações reais</li>
                    <li><strong>Mentoria de Especialistas:</strong> Profissionais guiam sua jornada</li>
                    <li><strong>Networking Real:</strong> Conecte-se com recrutadores e empresas</li>
                    <li><strong>Certificação Reconhecida:</strong> Certificados valorizados pelo mercado</li>
                    <li><strong>Portfólio Prático:</strong> Projetos reais para entrevistas</li>
                </ul>
            </div>

            <p style="font-size: 14px; margin-bottom: 15px; line-height: 1.8; text-align: justify;">
                Na <strong>DIO (Digital Innovation One)</strong>, os bootcamps são oferecidos gratuitamente através de parcerias com grandes empresas como Santander, iFood, GFT, Microsoft e outras gigantes do mercado.
            </p>

            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px; color: white; margin: 20px 0; text-align: center;">
                <p style="font-size: 16px; margin: 0; font-weight: bold;">
                    "Bootcamps não ensinam você a programar.<br>Eles ensinam você a PENSAR como um programador."
                </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8;">
                Página 1 • Trilhas da Transformação Tech • © 2025 Márcio Gil
            </div>
        </div>

        <!-- PÁGINA 2: A REVOLUÇÃO DA EDUCAÇÃO TECH -->            
            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Um <strong>bootcamp</strong> é um programa intensivo de aprendizado prático, projetado para transformar iniciantes em profissionais qualificados em um curto período de tempo. Diferente de cursos tradicionais que focam apenas na teoria, os bootcamps são 100% orientados à prática e aos desafios reais do mercado.
            </p>
            
            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                O termo "bootcamp" vem dos campos de treinamento militar, onde soldados passam por preparação intensa e imersiva. Na tecnologia, a ideia é a mesma: <strong>mergulhar de cabeça</strong> em projetos reais, resolver problemas complexos e desenvolver habilidades práticas que o mercado valoriza.
            </p>

            <div style="background: #f0fdf4; padding: 20px; border-left: 5px solid #22c55e; margin: 25px 0; border-radius: 5px;">
                <h3 style="color: #16a34a; margin-top: 0; font-size: 20px;">🎯 O Que Torna um Bootcamp Diferente?</h3>
                <ul style="margin: 10px 0; padding-left: 25px; line-height: 1.8;">
                    <li style="margin: 10px 0;"><strong>Aprendizado Baseado em Projetos:</strong> Você não apenas assiste aulas, você constrói aplicações reais do zero</li>
                    <li style="margin: 10px 0;"><strong>Mentoria de Especialistas:</strong> Profissionais experientes guiam sua jornada e compartilham insights do mercado</li>
                    <li style="margin: 10px 0;"><strong>Networking Real:</strong> Conecte-se com recrutadores, empresas parceiras e outros estudantes</li>
                    <li style="margin: 10px 0;"><strong>Certificação Reconhecida:</strong> Receba certificados que empresas respeitam e valorizam</li>
                    <li style="margin: 10px 0;"><strong>Portfólio Prático:</strong> Termine com projetos reais para mostrar em entrevistas</li>
                </ul>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Na <strong>DIO (Digital Innovation One)</strong>, os bootcamps são oferecidos gratuitamente através de parcerias com grandes empresas como Santander, iFood, GFT, Microsoft e outras gigantes do mercado. Essas empresas patrocinam os programas porque buscam talentos qualificados — e você pode ser um deles.
            </p>

            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px; border-radius: 12px; color: white; margin: 25px 0;">
                <p style="font-size: 18px; margin: 0; text-align: center; font-weight: bold; line-height: 1.6;">
                    "Bootcamps não ensinam você a programar. Eles ensinam você a PENSAR como um programador."
                </p>
            </div>
        </div>

        <!-- PÁGINA 2: A REVOLUÇÃO DA EDUCAÇÃO TECH -->
        <div style="page-break-before: always; padding: 40px 30px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 50px;">🚀</div>
                <h2 style="color: #8b5cf6; font-size: 28px; margin: 15px 0;">A Revolução da Educação Tech</h2>
            </div>

            <p style="font-size: 14px; margin-bottom: 15px; line-height: 1.8; text-align: justify;">
                Há 10 anos, entrar na área de tecnologia exigia faculdade de 4 anos e dezenas de milhares de reais. <strong>Esse modelo está morto.</strong> Empresas como Google, Apple e Microsoft não exigem mais diploma universitário. Elas valorizam <strong>habilidades práticas, portfólio e experiência</strong>.
            </p>

            <div style="background: #ede9fe; padding: 20px; border-left: 4px solid #8b5cf6; margin: 20px 0;">
                <h3 style="color: #6d28d9; margin-top: 0; font-size: 18px;">⚡ Por Que os Bootcamps Funcionam?</h3>
                <p style="font-size: 13px; margin: 8px 0;"><strong>Velocidade:</strong> Aprenda em 3-6 meses o que levaria anos</p>
                <p style="font-size: 13px; margin: 8px 0;"><strong>Empregabilidade:</strong> 73% conseguem emprego em 6 meses</p>
                <p style="font-size: 13px; margin: 8px 0;"><strong>ROI Incrível:</strong> Com bootcamps gratuitos, retorno infinito</p>
                <p style="font-size: 13px; margin: 8px 0;"><strong>Foco no Mercado:</strong> Conteúdo atualizado constantemente</p>
            </div>

            <p style="font-size: 14px; margin-bottom: 15px; line-height: 1.8; text-align: justify;">
                A pandemia acelerou essa revolução. Trabalho remoto funciona! Você pode trabalhar para empresas internacionais, ganhando em dólar ou euro, sem sair de casa.
            </p>

            <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; font-size: 13px; line-height: 1.7;">
                    <strong>💡 Fato Real:</strong> Desenvolvedores júnior no Brasil ganham R$ 3.500-5.000. Sênior podem ultrapassar R$ 20.000/mês. E começa com um bootcamp gratuito.
                </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8;">
                Página 2 • Trilhas da Transformação Tech • © 2025 Márcio Gil
            </div>
        </div>

        <!-- PÁGINA 3: OPORTUNIDADES REAIS -->
        <div style="page-break-before: always; padding: 40px 30px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 64px; margin-bottom: 15px;">🚀</div>
                <h2 style="color: #8b5cf6; font-size: 32px; margin: 15px 0;">
                    A Revolução da Educação em Tecnologia
                </h2>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Há 10 anos, se você quisesse entrar na área de tecnologia, precisaria de uma faculdade de 4 anos, investir dezenas de milhares de reais e torcer para conseguir um estágio mal remunerado. <strong>Esse modelo está morto.</strong>
            </p>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Empresas como Google, Apple e Microsoft não exigem mais diploma universitário para muitas de suas vagas. Elas valorizam <strong>habilidades práticas, portfólio e experiência</strong>. É exatamente isso que os bootcamps oferecem.
            </p>

            <div style="background: #ede9fe; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h3 style="color: #6d28d9; margin-top: 0; font-size: 20px; text-align: center;">� Por Que os Bootcamps Funcionam?</h3>
                
                <div style="margin: 20px 0;">
                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">⚡ Velocidade:</strong> Aprenda em 3-6 meses o que levaria 2-3 anos em cursos tradicionais
                    </p>

                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">💼 Empregabilidade:</strong> 73% dos graduados em bootcamps conseguem emprego em até 6 meses
                    </p>

                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">💰 ROI Incrível:</strong> Com bootcamps gratuitos, seu retorno sobre investimento é infinito
                    </p>

                    <p style="font-size: 15px; margin-bottom: 0; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">🎯 Foco no Mercado:</strong> Conteúdo atualizado constantemente com as tecnologias mais demandadas
                    </p>
                </div>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                A pandemia acelerou ainda mais essa revolução. Empresas descobriram que trabalho remoto funciona, e isso abriu portas globais. Você pode trabalhar para empresas internacionais, ganhando em dólar ou euro, sem sair de casa.
            </p>

            <div style="background: #fef3c7; padding: 20px; border-left: 5px solid #f59e0b; margin: 25px 0; border-radius: 5px;">
                <p style="margin: 0; font-size: 16px; line-height: 1.8; color: #78350f;">
                    <strong>💡 Fato Real:</strong> Desenvolvedores júnior no Brasil ganham em média R$ 3.500-5.000. Desenvolvedores sênior podem ultrapassar R$ 20.000/mês. E começa com um bootcamp gratuito.
                </p>
            </div>
        </div>

        <!-- Página 3: Oportunidades Reais de Carreira -->
        <div style="page-break-before: always; padding: 40px 30px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 64px; margin-bottom: 15px;">💼</div>
                <h2 style="color: #8b5cf6; font-size: 32px; margin: 15px 0;">
                    Oportunidades Reais de Carreira
                </h2>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Vamos falar de números reais. O mercado de tecnologia no Brasil possui <strong>mais de 530 mil vagas abertas</strong> que não conseguem ser preenchidas por falta de profissionais qualificados. Isso não é exagero — é uma estatística da Brasscom (Associação Brasileira das Empresas de Tecnologia).
            </p>

            <div style="background: #f0fdf4; padding: 20px; border-radius: 10px; margin: 25px 0;">
                <h3 style="color: #16a34a; margin-top: 0; font-size: 20px;">� Carreiras em Alta Demanda:</h3>
                <div style="margin: 15px 0;">
                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        <strong>👨‍💻 Desenvolvedor Full-Stack:</strong> Salário médio R$ 6.500 (júnior) | R$ 15.000+ (sênior)
                    </p>
                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        <strong>☁️ Engenheiro Cloud:</strong> Salário médio R$ 8.000 (júnior) | R$ 18.000+ (sênior)
                    </p>
                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        <strong>🤖 Cientista de Dados:</strong> Salário médio R$ 7.000 (júnior) | R$ 20.000+ (sênior)
                    </p>
                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        <strong>🔒 Especialista DevOps:</strong> Salário médio R$ 9.000 (júnior) | R$ 22.000+ (sênior)
                    </p>
                    <p style="font-size: 15px; margin-bottom: 0; line-height: 1.7;">
                        <strong>📱 Desenvolvedor Mobile:</strong> Salário médio R$ 5.500 (júnior) | R$ 14.000+ (sênior)
                    </p>
                </div>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Mas não é só sobre dinheiro. A área de tecnologia oferece <strong>qualidade de vida</strong>: trabalho remoto, horários flexíveis, dress code casual, ambiente de inovação e a possibilidade de impactar milhões de pessoas com seu código.
            </p>

            <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 25px; border-radius: 12px; color: white; margin: 25px 0;">
                <p style="font-size: 17px; margin: 0; text-align: center; font-weight: bold; line-height: 1.6;">
                    "Empresas parceiras da DIO recrutam ATIVAMENTE entre os alunos dos bootcamps. Seu próximo emprego pode estar a um bootcamp de distância."
                </p>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Muitos bootcamps da DIO oferecem <strong>vagas exclusivas</strong> para alunos que se destacam. Empresas como Santander, iFood, Microsoft, GFT e outras abrem processos seletivos diretos para quem completa os programas com excelência.
            </p>
        </div>

        <!-- Página 4: Como Funciona o Aprendizado Imersivo -->
        <div style="page-break-before: always; padding: 40px 30px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 64px; margin-bottom: 15px;">🎯</div>
                <h2 style="color: #8b5cf6; font-size: 32px; margin: 15px 0;">
                    Como Funciona o Aprendizado Imersivo
                </h2>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Bootcamps não seguem o modelo tradicional de ensino. Eles usam a metodologia <strong>"Learn by Doing"</strong> — aprender fazendo. Desde o primeiro dia, você coloca a mão no código e resolve problemas reais.
            </p>

            <div style="background: #ede9fe; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h3 style="color: #6d28d9; margin-top: 0; font-size: 20px;">🔄 O Ciclo de Aprendizado:</h3>
                
                <div style="margin: 20px 0;">
                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">1️⃣ Conceito Teórico:</strong> Aprenda os fundamentos e o "porquê" por trás da tecnologia
                    </p>

                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">2️⃣ Demonstração Prática:</strong> Veja especialistas aplicando o conceito em projetos reais
                    </p>

                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">3️⃣ Prática Guiada:</strong> Construa junto com os instrutores, linha por linha
                    </p>

                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">4️⃣ Desafio Independente:</strong> Resolva problemas sozinho e teste suas habilidades
                    </p>

                    <p style="font-size: 15px; margin-bottom: 0; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">5️⃣ Projeto Final:</strong> Crie algo único para seu portfólio
                    </p>
                </div>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Cada bootcamp na DIO é estruturado em <strong>módulos progressivos</strong>. Você começa pelos fundamentos e gradualmente avança para conceitos mais complexos. Há checkpoints, quizzes e desafios de código para garantir que você está realmente aprendendo.
            </p>

            <div style="background: #f0fdf4; padding: 20px; border-left: 5px solid #22c55e; margin: 25px 0; border-radius: 5px;">
                <p style="margin: 0; font-size: 16px; line-height: 1.8; color: #065f46;">
                    <strong>💡 Dica de Ouro:</strong> Não pule etapas! A tentação de avançar rápido é grande, mas cada módulo prepara você para o próximo. A consistência vence a velocidade.
                </p>
            </div>
        </div>

        <!-- Página 5: As Trilhas da Tecnologia -->
        <div style="page-break-before: always; padding: 40px 30px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 64px; margin-bottom: 15px;">🗺️</div>
                <h2 style="color: #8b5cf6; font-size: 32px; margin: 15px 0;">
                    Escolhendo Sua Trilha Tech
                </h2>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Uma das decisões mais importantes na sua jornada tech é escolher a trilha certa. Não existe trilha "melhor" — existe a trilha certa <strong>para você</strong>, baseada em seus interesses, objetivos e perfil.
            </p>

            <div style="background: #fff7ed; padding: 20px; border-radius: 10px; margin: 25px 0;">
                <h3 style="color: #ea580c; margin-top: 0; font-size: 18px;">🎨 Front-End: Para Quem Ama Criar Experiências Visuais</h3>
                <p style="font-size: 15px; margin: 10px 0; line-height: 1.7;">
                    Se você gosta de design, UX/UI e ver resultados visuais imediatos, o front-end é seu lugar. Você transforma ideias em interfaces que milhões de pessoas usam.
                </p>
            </div>

            <div style="background: #ecfeff; padding: 20px; border-radius: 10px; margin: 25px 0;">
                <h3 style="color: #0891b2; margin-top: 0; font-size: 18px;">⚙️ Back-End: Para Quem Gosta de Lógica e Sistemas</h3>
                <p style="font-size: 15px; margin: 10px 0; line-height: 1.7;">
                    Se você é fascinado por como as coisas funcionam por trás das cortinas, adora resolver problemas complexos e construir sistemas robustos, back-end é sua área.
                </p>
            </div>

            <div style="background: #f0f9ff; padding: 20px; border-radius: 10px; margin: 25px 0;">
                <h3 style="color: #0284c7; margin-top: 0; font-size: 18px;">☁️ Cloud: Para Quem Quer Dominar a Infraestrutura Moderna</h3>
                <p style="font-size: 15px; margin: 10px 0; line-height: 1.7;">
                    Se você se interessa por escalabilidade, servidores, segurança e arquitetura de sistemas distribuídos, cloud computing é o futuro.
                </p>
            </div>

            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px; border-radius: 12px; color: white; margin: 25px 0;">
                <p style="font-size: 16px; margin: 0; text-align: center; font-weight: bold; line-height: 1.6;">
                    "Não escolha pelo salário. Escolha pelo que faz seus olhos brilharem. A paixão pelo trabalho leva ao sucesso, não o contrário."
                </p>
            </div>
        </div>

        <!-- Página 6: O Valor das Soft Skills -->
        <div style="page-break-before: always; padding: 40px 30px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 64px; margin-bottom: 15px;">🤝</div>
                <h2 style="color: #8b5cf6; font-size: 32px; margin: 15px 0;">
                    Além do Código: Soft Skills Que Fazem a Diferença
                </h2>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Aqui está um segredo que poucas pessoas contam: <strong>saber programar não é suficiente</strong>. As empresas contratam pessoas que sabem programar E se comunicar bem, trabalhar em equipe e resolver problemas de forma criativa.
            </p>

            <div style="background: #f0fdf4; padding: 20px; border-left: 5px solid #22c55e; margin: 25px 0; border-radius: 5px;">
                <h3 style="color: #16a34a; margin-top: 0; font-size: 20px;">🌟 Soft Skills Essenciais para Tech:</h3>
                <ul style="margin: 10px 0; padding-left: 25px; line-height: 1.8;">
                    <li style="margin: 10px 0;"><strong>Comunicação Clara:</strong> Explique soluções técnicas para pessoas não-técnicas</li>
                    <li style="margin: 10px 0;"><strong>Trabalho em Equipe:</strong> 99% dos projetos tech envolvem colaboração</li>
                    <li style="margin: 10px 0;"><strong>Resolução de Problemas:</strong> A capacidade de quebrar problemas complexos em partes menores</li>
                    <li style="margin: 10px 0;"><strong>Adaptabilidade:</strong> A tecnologia muda rápido; você precisa gostar de aprender sempre</li>
                    <li style="margin: 10px 0;"><strong>Gestão de Tempo:</strong> Deadlines e prioridades fazem parte do dia a dia</li>
                </ul>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                A boa notícia? Os bootcamps da DIO não ensinam apenas hard skills (código). Eles também desenvolvem suas soft skills através de projetos em grupo, apresentações, code reviews e interação com mentores e recrutadores.
            </p>

            <div style="background: #fef3c7; padding: 20px; border-left: 5px solid #f59e0b; margin: 25px 0; border-radius: 5px;">
                <p style="margin: 0; font-size: 16px; line-height: 1.8; color: #78350f;">
                    <strong>🎯 Estatística Real:</strong> 85% das contratações falham por falta de soft skills, não de conhecimento técnico. Empresas sabem que podem ensinar tecnologia, mas não podem ensinar postura profissional.
                </p>
            </div>
        </div>

        <!-- Página 7: Como Se Destacar nos Bootcamps -->
        <div style="page-break-before: always; padding: 40px 30px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 64px; margin-bottom: 15px;">⭐</div>
                <h2 style="color: #8b5cf6; font-size: 32px; margin: 15px 0;">
                    Como Se Destacar e Maximizar Suas Chances
                </h2>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Milhares de pessoas fazem bootcamps, mas apenas uma fração consegue oportunidades incríveis rapidamente. O que elas fazem diferente? Seguem estratégias simples, mas poderosas.
            </p>

            <div style="background: #ede9fe; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h3 style="color: #6d28d9; margin-top: 0; font-size: 20px;">🚀 7 Estratégias de Quem se Destaca:</h3>
                
                <div style="margin: 20px 0;">
                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">1. Consistência > Intensidade:</strong> Melhor estudar 1h por dia durante 3 meses do que 8h em um fim de semana
                    </p>

                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">2. Documente sua jornada:</strong> Escreva sobre o que aprende no LinkedIn, crie um blog ou faça vídeos
                    </p>

                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">3. Vá além dos exercícios:</strong> Pegue os projetos e adicione funcionalidades extras
                    </p>

                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">4. Contribua na comunidade:</strong> Ajude outros estudantes, responda dúvidas nos fóruns
                    </p>

                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">5. Construa um portfólio público:</strong> GitHub ativo é seu currículo visual
                    </p>

                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">6. Networking autêntico:</strong> Conecte-se com colegas, mentores e profissionais da área
                    </p>

                    <p style="font-size: 15px; margin-bottom: 0; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">7. Finalize o que começa:</strong> Certificados completos valem mais que 10 incompletos
                    </p>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 25px; border-radius: 12px; color: white; margin: 25px 0;">
                <p style="font-size: 17px; margin: 0; text-align: center; font-weight: bold; line-height: 1.6;">
                    "Recrutadores procuram GitHub ativos, presença online autêntica e projetos reais. Seu código fala mais alto que seu currículo."
                </p>
            </div>
        </div>

        <!-- Introdução Técnica -->
        <div style="page-break-after: always;">
            <h2 style="color: #8b5cf6; font-size: 32px; margin-bottom: 20px; border-bottom: 3px solid #8b5cf6; padding-bottom: 10px;">
                📖 Bem-vindo à sua Jornada Tech!
            </h2>
            <p style="font-size: 16px; margin-bottom: 15px;">
                Agora que você entende o poder dos bootcamps e como aproveitá-los ao máximo, é hora de conhecer suas opções!
            </p>
            <p style="font-size: 16px; margin-bottom: 15px;">
                Nas páginas seguintes, você encontrará <strong>6 trilhas completas</strong> com bootcamps gratuitos e de alta qualidade. Cada link já vem com meu código de indicação para facilitar sua matrícula.
            </p>

            <div style="background: #f0fdf4; padding: 20px; border-left: 5px solid #22c55e; margin: 30px 0; border-radius: 5px;">
                <h3 style="color: #16a34a; margin-top: 0;">🎯 O que você vai encontrar:</h3>
                <ul style="margin: 10px 0; padding-left: 25px;">
                    <li style="margin: 8px 0;">✅ <strong>6 trilhas completas</strong> de tecnologia</li>
                    <li style="margin: 8px 0;">✅ <strong>14 bootcamps gratuitos</strong> selecionados</li>
                    <li style="margin: 8px 0;">✅ <strong>Links diretos</strong> com código de indicação</li>
                    <li style="margin: 8px 0;">✅ <strong>Descrições detalhadas</strong> de cada programa</li>
                    <li style="margin: 8px 0;">✅ <strong>Caminho claro</strong> do zero ao profissional</li>
                </ul>
            </div>

            <p style="font-size: 16px; margin-bottom: 15px;">
                <strong>Lembre-se:</strong> Você não precisa fazer todos ao mesmo tempo. Escolha uma trilha, comprometa-se com ela e complete com excelência. Seu futuro na tech começa agora! 🚀
            </p>
        </div>

        ${generateAllTrilhasContent()}

        <!-- Página Extra 1: Aprendizado em Comunidade -->
        <div style="page-break-before: always; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 64px; margin-bottom: 15px;">🌐</div>
                <h2 style="color: #8b5cf6; font-size: 32px; margin: 15px 0;">
                    O Poder da Comunidade no Aprendizado
                </h2>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Ninguém aprende tecnologia sozinho. Mesmo os maiores especialistas do mundo consultam Stack Overflow, participam de fóruns e colaboram com outros desenvolvedores. A comunidade tech é seu maior ativo no aprendizado.
            </p>

            <div style="background: #ede9fe; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h3 style="color: #6d28d9; margin-top: 0; font-size: 20px;">🤝 Como Aproveitar a Comunidade DIO:</h3>
                
                <div style="margin: 20px 0;">
                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">💬 Fóruns de Discussão:</strong> Tire dúvidas e ajude outros estudantes. Ensinar é uma das melhores formas de consolidar conhecimento.
                    </p>

                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">👥 Grupos no Discord:</strong> Conecte-se com pessoas que estão na mesma trilha que você. Formem grupos de estudo!
                    </p>

                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">📱 LinkedIn Ativo:</strong> Compartilhe seu progresso, projetos e conquistas. Recrutadores estão olhando!
                    </p>

                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">🎙️ Lives e Eventos:</strong> Participe de eventos online, webinars e live codings. Networking acontece aqui.
                    </p>

                    <p style="font-size: 15px; margin-bottom: 0; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">🏆 Desafios de Código:</strong> Compete de forma saudável e aprenda com as soluções de outros.
                    </p>
                </div>
            </div>

            <div style="background: #f0fdf4; padding: 20px; border-left: 5px solid #22c55e; margin: 25px 0; border-radius: 5px;">
                <p style="margin: 0; font-size: 16px; line-height: 1.8; color: #065f46;">
                    <strong>💡 Regra de Ouro:</strong> Para cada dúvida que você tira na comunidade, ajude a responder duas dúvidas de outros. O conhecimento se multiplica quando compartilhado.
                </p>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Muitas das oportunidades mais incríveis na tech não vêm de aplicações formais, mas de <strong>indicações e conexões genuínas</strong> feitas na comunidade. Seu networking começa nos fóruns dos bootcamps.
            </p>
        </div>

        <!-- Página Extra 2: Primeiros Passos Práticos -->
        <div style="page-break-before: always; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 64px; margin-bottom: 15px;">👣</div>
                <h2 style="color: #8b5cf6; font-size: 32px; margin: 15px 0;">
                    Seus Primeiros Passos na Prática
                </h2>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Você está animado para começar, mas por onde exatamente? Aqui está um guia prático do seu primeiro mês na jornada tech, passo a passo.
            </p>

            <div style="background: #fff7ed; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h3 style="color: #ea580c; margin-top: 0; font-size: 20px;">📅 Seu Primeiro Mês - Cronograma Sugerido:</h3>
                
                <div style="margin: 20px 0;">
                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #ea580c;">Semana 1 - Configuração e Exploração:</strong>
                    </p>
                    <ul style="margin: 0 0 20px 20px; padding-left: 20px; line-height: 1.7; font-size: 14px;">
                        <li>Crie sua conta na DIO e complete seu perfil</li>
                        <li>Inscreva-se em 1-2 bootcamps da sua trilha escolhida</li>
                        <li>Configure seu ambiente de desenvolvimento (VS Code, Git, etc.)</li>
                        <li>Crie uma conta no GitHub e LinkedIn profissional</li>
                    </ul>

                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #ea580c;">Semana 2 - Primeiros Módulos:</strong>
                    </p>
                    <ul style="margin: 0 0 20px 20px; padding-left: 20px; line-height: 1.7; font-size: 14px;">
                        <li>Complete os primeiros módulos do bootcamp (mínimo 1h/dia)</li>
                        <li>Faça TODOS os exercícios práticos, mesmo os opcionais</li>
                        <li>Documente seu aprendizado em um arquivo README</li>
                        <li>Participe do fórum do bootcamp, tire 1 dúvida</li>
                    </ul>

                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #ea580c;">Semana 3 - Projeto Inicial:</strong>
                    </p>
                    <ul style="margin: 0 0 20px 20px; padding-left: 20px; line-height: 1.7; font-size: 14px;">
                        <li>Inicie seu primeiro projeto guiado do bootcamp</li>
                        <li>Versione o código no GitHub desde o início</li>
                        <li>Escreva um README explicando o que o projeto faz</li>
                        <li>Compartilhe o repositório no LinkedIn</li>
                    </ul>

                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #ea580c;">Semana 4 - Revisão e Consolidação:</strong>
                    </p>
                    <ul style="margin: 0 0 0 20px; padding-left: 20px; line-height: 1.7; font-size: 14px;">
                        <li>Revise conceitos que ficaram confusos</li>
                        <li>Adicione uma funcionalidade extra ao seu projeto</li>
                        <li>Conecte-se com 5 pessoas da sua trilha no LinkedIn</li>
                        <li>Planeje o próximo mês de estudos</li>
                    </ul>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px; border-radius: 12px; color: white; margin: 25px 0;">
                <p style="font-size: 17px; margin: 0; text-align: center; font-weight: bold; line-height: 1.6;">
                    "O segredo não é estudar muito em um dia. É estudar um pouco todos os dias. Consistência > Intensidade."
                </p>
            </div>
        </div>

        <!-- Página Extra 3: Mentalidade de Crescimento -->
        <div style="page-break-before: always; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 64px; margin-bottom: 15px;">🧠</div>
                <h2 style="color: #8b5cf6; font-size: 32px; margin: 15px 0;">
                    Mentalidade de Crescimento na Tech
                </h2>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                A diferença entre quem desiste e quem alcança sucesso na tecnologia não está no QI ou talento natural. Está na <strong>mentalidade</strong>. Sua forma de pensar sobre desafios determina seu sucesso.
            </p>

            <div style="background: #fef3c7; padding: 20px; border-radius: 10px; margin: 25px 0;">
                <h3 style="color: #d97706; margin-top: 0; font-size: 18px;">🚫 Mentalidade Fixa (Evite!):</h3>
                <ul style="margin: 10px 0; padding-left: 25px; line-height: 1.8; font-size: 15px;">
                    <li style="margin: 8px 0;">"Não sou bom em matemática, nunca vou ser programador"</li>
                    <li style="margin: 8px 0;">"Outras pessoas aprendem mais rápido, não é pra mim"</li>
                    <li style="margin: 8px 0;">"Esse erro significa que não tenho talento"</li>
                    <li style="margin: 8px 0;">"Já tentei aprender antes e não consegui"</li>
                </ul>
            </div>

            <div style="background: #f0fdf4; padding: 20px; border-radius: 10px; margin: 25px 0;">
                <h3 style="color: #16a34a; margin-top: 0; font-size: 18px;">✅ Mentalidade de Crescimento (Cultive!):</h3>
                <ul style="margin: 10px 0; padding-left: 25px; line-height: 1.8; font-size: 15px;">
                    <li style="margin: 8px 0;">"Ainda não sei isso, mas posso aprender"</li>
                    <li style="margin: 8px 0;">"Cada pessoa tem seu ritmo, o meu está perfeito"</li>
                    <li style="margin: 8px 0;">"Erros são feedback valioso do que preciso estudar mais"</li>
                    <li style="margin: 8px 0;">"Cada tentativa anterior me preparou para esta"</li>
                </ul>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                <strong>Síndrome do Impostor</strong> é real e afeta até desenvolvedores sênior. Aquela sensação de "não sou bom o suficiente" ou "todos sabem mais que eu" é <strong>normal</strong>. A diferença é que profissionais bem-sucedidos continuam mesmo sentindo isso.
            </p>

            <div style="background: #ede9fe; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h3 style="color: #6d28d9; margin-top: 0; font-size: 20px;">💪 5 Verdades que Vão Te Libertar:</h3>
                
                <div style="margin: 20px 0;">
                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">1.</strong> Ninguém sabe tudo. Desenvolvedores sênior consultam documentação o tempo todo.
                    </p>

                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">2.</strong> Erros são parte do processo. Um código que funciona de primeira é suspeito.
                    </p>

                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">3.</strong> Comparação é o ladrão da alegria. Compare-se apenas com você de ontem.
                    </p>

                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">4.</strong> Pedir ajuda é força, não fraqueza. Os melhores profissionais colaboram.
                    </p>

                    <p style="font-size: 15px; margin-bottom: 0; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">5.</strong> Você não precisa ser gênio. Precisa ser consistente e curioso.
                    </p>
                </div>
            </div>
        </div>

        <!-- Página Extra 4: Histórias Reais de Transformação -->
        <div style="page-break-before: always; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 64px; margin-bottom: 15px;">⭐</div>
                <h2 style="color: #8b5cf6; font-size: 32px; margin: 15px 0;">
                    Histórias Reais de Transformação
                </h2>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Às vezes, acreditar que é possível fica mais fácil quando vemos pessoas reais que conseguiram. Aqui estão padrões comuns de quem transformou vida através dos bootcamps da DIO:
            </p>

            <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin: 25px 0; border-left: 4px solid #8b5cf6;">
                <h4 style="color: #8b5cf6; margin-top: 0; font-size: 17px;">👨‍🍳 De Cozinheiro a Desenvolvedor</h4>
                <p style="font-size: 15px; line-height: 1.7; margin: 10px 0;">
                    <em>"Trabalhava 12h por dia em restaurante. Comecei estudando 1h de madrugada depois do trabalho. Completei 3 bootcamps em 8 meses. Hoje sou dev júnior ganhando 3x mais e trabalhando de casa."</em>
                </p>
                <p style="font-size: 13px; color: #64748b; margin: 5px 0;">— Padrão comum entre profissionais em transição de carreira</p>
            </div>

            <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin: 25px 0; border-left: 4px solid #06b6d4;">
                <h4 style="color: #06b6d4; margin-top: 0; font-size: 17px;">👩‍🎓 Recém-formada Sem Experiência</h4>
                <p style="font-size: 15px; line-height: 1.7; margin: 10px 0;">
                    <em>"Me formei em Administração mas não encontrava emprego. Fiz bootcamp de Front-End, construí 5 projetos no GitHub. Fui contratada pela empresa parceira do bootcamp antes mesmo de terminar."</em>
                </p>
                <p style="font-size: 13px; color: #64748b; margin: 5px 0;">— Padrão comum entre recém-formados que complementam formação</p>
            </div>

            <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin: 25px 0; border-left: 4px solid #22c55e;">
                <h4 style="color: #22c55e; margin-top: 0; font-size: 17px;">👨‍💼 Profissional Buscando Crescimento</h4>
                <p style="font-size: 15px; line-height: 1.7; margin: 10px 0;">
                    <em>"Já era da área de TI mas em suporte. Queria programar mas não sabia por onde começar. Bootcamps me deram estrutura. Em 1 ano virei desenvolvedor back-end com aumento de 80%."</em>
                </p>
                <p style="font-size: 13px; color: #64748b; margin: 5px 0;">— Padrão comum entre profissionais tech buscando evolução</p>
            </div>

            <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 25px; border-radius: 12px; color: white; margin: 25px 0;">
                <p style="font-size: 17px; margin: 0; text-align: center; font-weight: bold; line-height: 1.6;">
                    "O ponto em comum? Todos começaram sem acreditar totalmente que conseguiriam. Mas começaram mesmo assim."
                </p>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Sua história pode ser a próxima. Não porque você é especial ou sortudo, mas porque você está disposto a <strong>fazer o trabalho necessário</strong>.
            </p>
        </div>

        <!-- Página Extra 5: Ferramentas Essenciais -->
        <div style="page-break-before: always; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 64px; margin-bottom: 15px;">🛠️</div>
                <h2 style="color: #8b5cf6; font-size: 32px; margin: 15px 0;">
                    Ferramentas Essenciais do Desenvolvedor
                </h2>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Antes de mergulhar nos bootcamps, você precisa de algumas ferramentas básicas. A boa notícia? <strong>Todas são gratuitas</strong> e fáceis de configurar.
            </p>

            <div style="background: #ede9fe; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h3 style="color: #6d28d9; margin-top: 0; font-size: 20px;">💻 Stack de Ferramentas Inicial:</h3>
                
                <div style="margin: 20px 0;">
                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">📝 VS Code:</strong> O editor de código mais popular do mundo. Leve, poderoso e com milhares de extensões.
                    </p>

                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">🔄 Git + GitHub:</strong> Controle de versão essencial. Todo código profissional usa Git. GitHub é seu portfólio visual.
                    </p>

                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">🌐 Navegadores DevTools:</strong> Chrome DevTools ou Firefox Developer Edition para debugar front-end.
                    </p>

                    <p style="font-size: 15px; margin-bottom: 15px; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">📦 Node.js:</strong> Necessário para desenvolvimento JavaScript moderno, tanto front quanto back-end.
                    </p>

                    <p style="font-size: 15px; margin-bottom: 0; line-height: 1.7;">
                        <strong style="color: #8b5cf6;">💬 Discord/Slack:</strong> Comunicação com comunidade e times de desenvolvimento.
                    </p>
                </div>
            </div>

            <div style="background: #f0fdf4; padding: 20px; border-left: 5px solid #22c55e; margin: 25px 0; border-radius: 5px;">
                <h3 style="color: #16a34a; margin-top: 0; font-size: 18px;">🎯 Extensões VS Code Recomendadas:</h3>
                <ul style="margin: 10px 0; padding-left: 25px; line-height: 1.7; font-size: 14px;">
                    <li style="margin: 8px 0;"><strong>Live Server:</strong> Servidor local para desenvolvimento web</li>
                    <li style="margin: 8px 0;"><strong>GitLens:</strong> Superpoderes para Git no VS Code</li>
                    <li style="margin: 8px 0;"><strong>Prettier:</strong> Formatação automática de código</li>
                    <li style="margin: 8px 0;"><strong>ESLint:</strong> Detecta erros e boas práticas JavaScript</li>
                    <li style="margin: 8px 0;"><strong>Bracket Pair Colorizer:</strong> Facilita leitura do código</li>
                </ul>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Não se preocupe se isso parece muito agora. Os bootcamps te guiam na instalação e uso de cada ferramenta no momento certo. Muitos até oferecem módulos específicos sobre setup de ambiente.
            </p>
        </div>

        <!-- Página Extra 6: Próximo Nível -->
        <div style="page-break-before: always; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 64px; margin-bottom: 15px;">🚀</div>
                <h2 style="color: #8b5cf6; font-size: 32px; margin: 15px 0;">
                    De Aluno a Profissional: O Próximo Nível
                </h2>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Você completou bootcamps, tem projetos no GitHub, certificados conquistados. E agora? Como dar o salto de estudante para profissional contratado?
            </p>

            <div style="background: #fff7ed; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h3 style="color: #ea580c; margin-top: 0; font-size: 20px;">📋 Checklist: Pronto para o Mercado?</h3>
                
                <div style="margin: 20px 0;">
                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        ✅ <strong>Pelo menos 3 projetos completos no GitHub</strong> (não apenas exercícios de curso)
                    </p>

                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        ✅ <strong>README profissional em cada projeto</strong> explicando o que faz e como rodar
                    </p>

                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        ✅ <strong>LinkedIn otimizado</strong> com foto profissional, resumo forte e projetos linkados
                    </p>

                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        ✅ <strong>Portfólio online</strong> (pode ser GitHub Pages gratuito) mostrando seus melhores trabalhos
                    </p>

                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        ✅ <strong>Certificados de bootcamps completos</strong> de plataformas reconhecidas (DIO, etc.)
                    </p>

                    <p style="font-size: 15px; margin-bottom: 12px; line-height: 1.7;">
                        ✅ <strong>Contribuição em open source</strong> ou participação ativa em comunidades
                    </p>

                    <p style="font-size: 15px; margin-bottom: 0; line-height: 1.7;">
                        ✅ <strong>Presença online consistente</strong> compartilhando aprendizados e progresso
                    </p>
                </div>
            </div>

            <div style="background: #f0fdf4; padding: 20px; border-radius: 10px; margin: 25px 0;">
                <h3 style="color: #16a34a; margin-top: 0; font-size: 18px;">💼 Estratégias de Busca de Emprego:</h3>
                <ul style="margin: 10px 0; padding-left: 25px; line-height: 1.7; font-size: 14px;">
                    <li style="margin: 10px 0;"><strong>Vagas das Empresas Parceiras:</strong> Priorize processos seletivos exclusivos dos bootcamps</li>
                    <li style="margin: 10px 0;"><strong>LinkedIn Ativo:</strong> Interaja com posts de recrutadores, comente, seja visível</li>
                    <li style="margin: 10px 0;"><strong>Networking Real:</strong> Conecte-se com alunos que já foram contratados</li>
                    <li style="margin: 10px 0;"><strong>Projetos Diferenciados:</strong> Não faça apenas to-do lists. Crie algo único</li>
                    <li style="margin: 10px 0;"><strong>Contribua com Open Source:</strong> Mostra trabalho em equipe e código real</li>
                </ul>
            </div>

            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px; border-radius: 12px; color: white; margin: 25px 0;">
                <p style="font-size: 17px; margin: 0; text-align: center; font-weight: bold; line-height: 1.6;">
                    "A primeira vaga é a mais difícil. Depois dela, com experiência no currículo, as portas se abrem exponencialmente."
                </p>
            </div>

            <p style="font-size: 16px; margin-bottom: 18px; line-height: 1.8; text-align: justify;">
                Não desanime com rejeições. Elas fazem parte do processo. Cada "não" te aproxima do "sim" certo. Continue aplicando, continue aprendendo, continue construindo. Sua hora vai chegar.
            </p>
        </div>

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
            description: 'Aprenda a desenvolver sistemas robustos e escaláveis. Domine Java, Python, Spring Boot, Testes e APIs REST que fazem tudo funcionar nos bastidores.',
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
                },
                {
                    name: 'Bradesco - Java QA Developer',
                    description: 'Aprenda desenvolvimento Java focado em qualidade e testes automatizados.',
                    url: 'https://www.dio.me/bootcamp/bradesco-java-qa-developer?ref=AFILIADOS66FD57E0D94'
                },
                {
                    name: 'LuizaLabs - Back-End com Python',
                    description: 'Desenvolva aplicações back-end escaláveis com Python e boas práticas.',
                    url: 'https://www.dio.me/bootcamp/luizalabs-back-end-com-python?ref=AFILIADOS66FD57E0D94'
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

