// ============================================
// GERADOR DE PDF SIMPLIFICADO - V2
// Versão limpa e funcional
// ============================================

async function downloadEbookPDF() {
    try {
        showPDFLoading();
        
        const user = getCurrentUser();
        const userName = user ? user.name : 'Estudante';
        
        // Criar elemento temporário
        const element = document.createElement('div');
        element.style.cssText = 'font-family: Arial, sans-serif; color: #1e293b; padding: 20px;';
        
        element.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
                <h1 style="font-size: 42px; margin: 20px 0;">🚀 TRILHAS DA TRANSFORMAÇÃO TECH</h1>
                <p style="font-size: 18px;">Seu Guia Completo para uma Carreira de Sucesso na Tecnologia</p>
                <div style="margin: 30px 0; padding: 20px; background: rgba(255,255,255,0.2); border-radius: 10px; display: inline-block;">
                    <p style="margin: 5px 0;"><strong>Criado por: Márcio Gil</strong></p>
                    <p style="margin: 5px 0;">⭐ Embaixador DIO Campus Expert</p>
                </div>
                <div style="margin-top: 30px; padding: 15px; background: rgba(254,243,199,0.3); border-radius: 8px; display: inline-block;">
                    <p style="margin: 5px 0;">E-book personalizado para:</p>
                    <p style="font-size: 20px; font-weight: bold; margin: 5px 0;">${userName}</p>
                </div>
            </div>

            <div style="padding: 40px 20px; page-break-before: always;">
                <h2 style="color: #8b5cf6; text-align: center; font-size: 28px;">🎓 O Que É um Bootcamp?</h2>
                
                <p style="font-size: 14px; line-height: 1.8; margin: 20px 0; text-align: justify;">
                    Um <strong>bootcamp</strong> é um programa intensivo de aprendizado prático, projetado para transformar 
                    iniciantes em profissionais qualificados. Diferente de cursos tradicionais que focam em teoria, 
                    os bootcamps são 100% orientados à prática e aos desafios reais do mercado.
                </p>

                <div style="background: #f0fdf4; padding: 20px; border-left: 4px solid #22c55e; margin: 20px 0;">
                    <h3 style="color: #16a34a; margin: 10px 0;">🎯 O Que Torna um Bootcamp Diferente?</h3>
                    <ul style="font-size: 13px; line-height: 1.8;">
                        <li><strong>Aprendizado Baseado em Projetos:</strong> Você constrói aplicações reais</li>
                        <li><strong>Mentoria de Especialistas:</strong> Profissionais guiam sua jornada</li>
                        <li><strong>Networking Real:</strong> Conecte-se com recrutadores e empresas</li>
                        <li><strong>Certificação Reconhecida:</strong> Certificados valorizados pelo mercado</li>
                    </ul>
                </div>

                <p style="font-size: 14px; line-height: 1.8; margin: 20px 0; text-align: justify;">
                    Na <strong>DIO (Digital Innovation One)</strong>, os bootcamps são oferecidos gratuitamente através 
                    de parcerias com grandes empresas como Santander, iFood, GFT, Microsoft e outras gigantes do mercado.
                </p>
            </div>

            <div style="padding: 40px 20px; page-break-before: always;">
                <h2 style="color: #8b5cf6; text-align: center; font-size: 28px;">💻 Trilha Front-End</h2>
                <p style="font-size: 13px; text-align: center; color: #64748b; margin-bottom: 30px;">Criando Experiências Digitais</p>
                
                <p style="font-size: 14px; line-height: 1.8; margin: 20px 0; text-align: justify;">
                    Domine HTML, CSS, JavaScript, Angular e React criando interfaces modernas e responsivas 
                    que as pessoas usam todos os dias.
                </p>

                <div style="background: #ede9fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #7c3aed; margin: 10px 0; font-size: 16px;">📚 Bootcamps Recomendados:</h3>
                    
                    <div style="margin: 15px 0; padding: 15px; background: white; border-radius: 6px;">
                        <h4 style="color: #7c3aed; margin: 5px 0;">AKAD Full Stack Developer</h4>
                        <p style="font-size: 12px; margin: 8px 0;">Torne-se desenvolvedor full stack com front-end e back-end.</p>
                        <p style="font-size: 11px; color: #64748b; word-break: break-all;">
                            🔗 https://www.dio.me/bootcamp/akad-fullstack-developer?ref=36EB152C51CD43C7BBB324769FD4527D
                        </p>
                    </div>

                    <div style="margin: 15px 0; padding: 15px; background: white; border-radius: 6px;">
                        <h4 style="color: #7c3aed; margin: 5px 0;">Santander 2025 - Front-End com Angular</h4>
                        <p style="font-size: 12px; margin: 8px 0;">Crie interfaces modernas e construa um portfólio poderoso.</p>
                        <p style="font-size: 11px; color: #64748b; word-break: break-all;">
                            🔗 https://www.dio.me/bootcamp/santander-2025-frontend-com-angular?ref=36EB152C51CD43C7BBB324769FD4527D
                        </p>
                    </div>
                </div>
            </div>

            <div style="padding: 40px 20px; page-break-before: always;">
                <h2 style="color: #8b5cf6; text-align: center; font-size: 28px;">⚙️ Trilha Back-End</h2>
                <p style="font-size: 13px; text-align: center; color: #64748b; margin-bottom: 30px;">O Poder por Trás do Código</p>
                
                <p style="font-size: 14px; line-height: 1.8; margin: 20px 0; text-align: justify;">
                    Desenvolva sistemas robustos e escaláveis. Domine Java, Python, Spring Boot e APIs REST 
                    que fazem tudo funcionar nos bastidores.
                </p>

                <div style="background: #ede9fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #7c3aed; margin: 10px 0; font-size: 16px;">📚 Bootcamps Recomendados:</h3>
                    
                    <div style="margin: 15px 0; padding: 15px; background: white; border-radius: 6px;">
                        <h4 style="color: #7c3aed; margin: 5px 0;">GFT Start #7 - Java Developer</h4>
                        <p style="font-size: 12px; margin: 8px 0;">Desenvolva sistemas robustos com Java e Spring Boot.</p>
                        <p style="font-size: 11px; color: #64748b; word-break: break-all;">
                            🔗 https://www.dio.me/bootcamp/gft-start-7-java-developer?ref=36EB152C51CD43C7BBB324769FD4527D
                        </p>
                    </div>

                    <div style="margin: 15px 0; padding: 15px; background: white; border-radius: 6px;">
                        <h4 style="color: #7c3aed; margin: 5px 0;">LuizaLabs - Back-End com Python</h4>
                        <p style="font-size: 12px; margin: 8px 0;">Desenvolva aplicações back-end escaláveis com Python.</p>
                        <p style="font-size: 11px; color: #64748b; word-break: break-all;">
                            🔗 https://www.dio.me/bootcamp/luizalabs-back-end-com-python?ref=36EB152C51CD43C7BBB324769FD4527D
                        </p>
                    </div>
                </div>
            </div>

            <div style="padding: 40px 20px; page-break-before: always;">
                <h2 style="color: #8b5cf6; text-align: center; font-size: 28px;">☁️ Trilha Cloud Computing</h2>
                <p style="font-size: 13px; text-align: center; color: #64748b; margin-bottom: 30px;">O Futuro Está na Nuvem</p>
                
                <p style="font-size: 14px; line-height: 1.8; margin: 20px 0; text-align: justify;">
                    Domine AWS, Azure e GCP. Aprenda a arquitetar, implementar e gerenciar infraestruturas 
                    escaláveis na nuvem.
                </p>

                <div style="background: #ede9fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #7c3aed; margin: 10px 0; font-size: 16px;">📚 Bootcamps Recomendados:</h3>
                    
                    <div style="margin: 15px 0; padding: 15px; background: white; border-radius: 6px;">
                        <h4 style="color: #7c3aed; margin: 5px 0;">Microsoft Azure Advanced 2</h4>
                        <p style="font-size: 12px; margin: 8px 0;">Recursos avançados do Azure e arquitetura cloud enterprise.</p>
                        <p style="font-size: 11px; color: #64748b; word-break: break-all;">
                            🔗 https://www.dio.me/bootcamp/microsoft-azure-advanced-2?ref=36EB152C51CD43C7BBB324769FD4527D
                        </p>
                    </div>

                    <div style="margin: 15px 0; padding: 15px; background: white; border-radius: 6px;">
                        <h4 style="color: #7c3aed; margin: 5px 0;">AWS Cloud Fundamentals</h4>
                        <p style="font-size: 12px; margin: 8px 0;">Fundamentos de AWS: EC2, S3, Lambda e arquitetura serverless.</p>
                        <p style="font-size: 11px; color: #64748b; word-break: break-all;">
                            🔗 https://www.dio.me/bootcamp/aws-cloud-fundamentals?ref=36EB152C51CD43C7BBB324769FD4527D
                        </p>
                    </div>
                </div>
            </div>

            <div style="padding: 40px 20px; page-break-before: always;">
                <h2 style="color: #8b5cf6; text-align: center; font-size: 28px;">🤖 Trilha IA e Ciência de Dados</h2>
                <p style="font-size: 13px; text-align: center; color: #64748b; margin-bottom: 30px;">O Futuro é Inteligente</p>
                
                <p style="font-size: 14px; line-height: 1.8; margin: 20px 0; text-align: justify;">
                    Mergulhe no mundo da Inteligência Artificial, Machine Learning e Análise de Dados. 
                    O futuro está aqui!
                </p>

                <div style="background: #ede9fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #7c3aed; margin: 10px 0; font-size: 16px;">📚 Bootcamps Recomendados:</h3>
                    
                    <div style="margin: 15px 0; padding: 15px; background: white; border-radius: 6px;">
                        <h4 style="color: #7c3aed; margin: 5px 0;">TQI Modernização com GenAI</h4>
                        <p style="font-size: 12px; margin: 8px 0;">Modernize aplicações com IA Generativa e integre LLMs.</p>
                        <p style="font-size: 11px; color: #64748b; word-break: break-all;">
                            🔗 https://www.dio.me/bootcamp/tqi-modernizacao-com-genai?ref=36EB152C51CD43C7BBB324769FD4527D
                        </p>
                    </div>

                    <div style="margin: 15px 0; padding: 15px; background: white; border-radius: 6px;">
                        <h4 style="color: #7c3aed; margin: 5px 0;">Neo4j - Análise de Dados com Grafos</h4>
                        <p style="font-size: 12px; margin: 8px 0;">Bancos de dados em grafo e análise de relacionamentos complexos.</p>
                        <p style="font-size: 11px; color: #64748b; word-break: break-all;">
                            🔗 https://www.dio.me/bootcamp/neo4j-analise-de-dados-com-grafos?ref=36EB152C51CD43C7BBB324769FD4527D
                        </p>
                    </div>
                </div>
            </div>

            <div style="padding: 40px 20px; page-break-before: always; text-align: center;">
                <h2 style="color: #8b5cf6; font-size: 32px; margin-bottom: 30px;">🚀 Próximos Passos</h2>
                
                <div style="background: #f0fdf4; padding: 30px; border-radius: 12px; margin: 30px 0; text-align: left;">
                    <h3 style="color: #16a34a; margin: 15px 0;">✅ Como Começar Agora:</h3>
                    <ol style="font-size: 14px; line-height: 2; margin: 20px 0;">
                        <li><strong>Escolha Sua Trilha:</strong> Identifique a área que mais combina com você</li>
                        <li><strong>Crie sua Conta na DIO:</strong> Acesse www.dio.me e cadastre-se gratuitamente</li>
                        <li><strong>Use os Links com Código de Indicação:</strong> Todos os links deste e-book já incluem meu código</li>
                        <li><strong>Participe da Comunidade:</strong> Conecte-se com outros estudantes e mentores</li>
                        <li><strong>Construa Seu Portfólio:</strong> Publique seus projetos no GitHub</li>
                    </ol>
                </div>

                <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; border-radius: 12px; color: white; margin: 30px 0;">
                    <p style="font-size: 18px; font-weight: bold; margin: 15px 0;">
                        "A jornada de mil milhas começa com um único passo."
                    </p>
                    <p style="font-size: 14px; margin: 10px 0;">
                        Escolha sua trilha e comece hoje mesmo!
                    </p>
                </div>

                <div style="margin-top: 50px; padding-top: 30px; border-top: 2px solid #e2e8f0;">
                    <p style="font-size: 14px; color: #64748b; margin: 10px 0;">
                        Criado com 💜 por <strong>Márcio Gil</strong>
                    </p>
                    <p style="font-size: 12px; color: #94a3b8; margin: 5px 0;">
                        Embaixador DIO Campus Expert
                    </p>
                    <p style="font-size: 12px; color: #94a3b8; margin: 5px 0;">
                        © 2025 - Todos os direitos reservados
                    </p>
                </div>
            </div>
        `;

        // Configuração simplificada
        const opt = {
            margin: 10,
            filename: 'Trilhas-Transformacao-Tech.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // Gerar PDF
        await html2pdf().set(opt).from(element).save();
        
        hidePDFLoading();
        alert('✅ E-book baixado com sucesso!');

    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        hidePDFLoading();
        alert('❌ Erro ao gerar PDF. Tente novamente.');
    }
}

function showPDFLoading() {
    const loading = document.createElement('div');
    loading.id = 'pdf-loading';
    loading.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: rgba(0,0,0,0.8); display: flex; align-items: center; 
        justify-content: center; z-index: 9999; color: white;
    `;
    loading.innerHTML = '<div style="text-align: center;"><div style="font-size: 48px;">📥</div><p style="font-size: 18px; margin-top: 20px;">Gerando seu e-book...</p></div>';
    document.body.appendChild(loading);
}

function hidePDFLoading() {
    const loading = document.getElementById('pdf-loading');
    if (loading) loading.remove();
}
