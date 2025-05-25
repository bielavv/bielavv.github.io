document.addEventListener('DOMContentLoaded', function() {
    // Inicializa AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
    
    // Toggle do tema claro/escuro
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Altera o ícone
        const icon = this.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Verifica o tema salvo
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.querySelector('i').classList.remove('fa-moon');
        themeToggle.querySelector('i').classList.add('fa-sun');
    }
    
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            }
        });
    });
    
    // Dados das trilhas de carreira
    const careerData = {
        'Desenvolvimento de Software': {
            levels: [
                {
                    level: 'Júnior',
                    description: 'Desenvolve funcionalidades simples com supervisão',
                    skills: ['Lógica de programação', 'Git básico', 'HTML/CSS/JS', 'Framework básico'],
                    time: '0-2 anos',
                    projects: '1-3 projetos simples'
                },
                {
                    level: 'Pleno',
                    description: 'Desenvolve funcionalidades complexas com autonomia',
                    skills: ['Frameworks front-end/back-end', 'APIs REST', 'Testes unitários', 'CI/CD básico'],
                    time: '2-5 anos',
                    projects: '3-5 projetos complexos'
                },
                {
                    level: 'Sênior',
                    description: 'Lidera projetos e toma decisões arquiteturais',
                    skills: ['Arquitetura de software', 'Mentoria', 'Cloud computing', 'Otimização'],
                    time: '5+ anos',
                    projects: '5+ projetos como líder técnico'
                },
                {
                    level: 'Liderança',
                    description: 'Gerencia equipes e estratégia técnica',
                    skills: ['Gestão de pessoas', 'Visão de negócios', 'Arquitetura escalável', 'Orçamento'],
                    time: '7+ anos',
                    projects: 'Liderança em múltiplos projetos'
                }
            ],
            evolution: [
                'Completar todos os treinamentos técnicos obrigatórios',
                'Participar de pelo menos 2 projetos complexos como desenvolvedor principal',
                'Obter certificação em tecnologia relevante para o próximo nível',
                'Receber avaliação positiva de colegas e líder em 360°',
                'Demonstrar habilidades de mentoria (para níveis sênior+)'
            ]
        },
        'Processamento de Dados': {
            levels: [
                {
                    level: 'Júnior',
                    description: 'Cria relatórios básicos e análises simples',
                    skills: ['Excel', 'SQL básico', 'Visualização de dados', 'Estatística básica'],
                    time: '0-2 anos',
                    projects: '1-3 dashboards simples'
                },
                {
                    level: 'Pleno',
                    description: 'Desenvolve modelos analíticos e dashboards',
                    skills: ['Python/R', 'SQL avançado', 'ETL', 'Estatística intermediária'],
                    time: '2-5 anos',
                    projects: '3-5 projetos analíticos complexos'
                },
                {
                    level: 'Sênior',
                    description: 'Cria modelos preditivos e estratégias de dados',
                    skills: ['Machine Learning', 'Big Data', 'Arquitetura de dados', 'AB Testing'],
                    time: '5+ anos',
                    projects: '5+ projetos como líder analítico'
                },
                {
                    level: 'Liderança',
                    description: 'Lidera estratégia de dados da organização',
                    skills: ['Gestão de equipes', 'Data governance', 'Visão de negócios', 'Orçamento'],
                    time: '7+ anos',
                    projects: 'Liderança em estratégia de dados'
                }
            ],
            evolution: [
                'Dominar as ferramentas de análise do próximo nível',
                'Participar de projetos que demonstrem habilidades do próximo nível',
                'Obter certificação relevante (ex: Google Analytics, Microsoft Data Analyst)',
                'Receber feedback positivo de stakeholders',
                'Demonstrar impacto mensurável nas decisões de negócio'
            ]
        },
        'Segurança da Informação': {
            levels: [
                {
                    level: 'Júnior',
                    description: 'Executa testes básicos de segurança e monitoramento',
                    skills: ['Conceitos de segurança', 'Ferramentas básicas', 'OWASP Top 10', 'Monitoramento'],
                    time: '0-2 anos',
                    projects: '1-3 avaliações de segurança'
                },
                {
                    level: 'Pleno',
                    description: 'Realiza auditorias e implementa medidas de segurança',
                    skills: ['Pentesting básico', 'SIEM', 'Políticas de segurança', 'Remediação'],
                    time: '2-5 anos',
                    projects: '3-5 projetos de segurança'
                },
                {
                    level: 'Sênior',
                    description: 'Desenvolve estratégias de segurança corporativa',
                    skills: ['Arquitetura segura', 'Gestão de riscos', 'Compliance', 'Resposta a incidentes'],
                    time: '5+ anos',
                    projects: '5+ projetos como líder de segurança'
                },
                {
                    level: 'Liderança',
                    description: 'Lidera estratégia de segurança da organização',
                    skills: ['Gestão de equipes', 'Governança de segurança', 'Visão estratégica', 'Orçamento'],
                    time: '7+ anos',
                    projects: 'Liderança em estratégia de segurança'
                }
            ],
            evolution: [
                'Completar certificações relevantes (ex: CEH, CISSP)',
                'Participar de projetos complexos de segurança',
                'Demonstrar habilidade em identificar vulnerabilidades críticas',
                'Receber avaliação positiva em exercícios de resposta a incidentes',
                'Desenvolver políticas ou processos adotados pela empresa'
            ]
        }
    };
    
    // Dados para promoções
    const promoContent = {
        'Soft Skills': {
            title: 'Desenvolvimento de Soft Skills',
            content: `
                <h3>Competências Comportamentais Essenciais</h3>
                <p>Para progredir na carreira, além das habilidades técnicas, é fundamental desenvolver competências comportamentais:</p>
                
                <div class="skills-grid">
                    <div class="skill-item">
                        <h4>Comunicação Eficaz</h4>
                        <ul>
                            <li>Clareza na expressão de ideias</li>
                            <li>Escuta ativa</li>
                            <li>Adaptação ao público</li>
                            <li>Apresentações eficientes</li>
                        </ul>
                    </div>
                    
                    <div class="skill-item">
                        <h4>Trabalho em Equipe</h4>
                        <ul>
                            <li>Colaboração</li>
                            <li>Resolução de conflitos</li>
                            <li>Empatia</li>
                            <li>Feedback construtivo</li>
                        </ul>
                    </div>
                    
                    <div class="skill-item">
                        <h4>Liderança</h4>
                        <ul>
                            <li>Delegação eficiente</li>
                            <li>Motivação de equipes</li>
                            <li>Visão estratégica</li>
                            <li>Tomada de decisão</li>
                        </ul>
                    </div>
                </div>
                
                <h3>Como Desenvolver</h3>
                <ul>
                    <li>Participar de treinamentos corporativos</li>
                    <li>Buscar feedback regular de colegas e líderes</li>
                    <li>Praticar autoconhecimento e inteligência emocional</li>
                    <li>Engajar-se em projetos multidisciplinares</li>
                    <li>Participar de programas de mentoria</li>
                </ul>
                
                <h3>Métricas de Avaliação</h3>
                <ul>
                    <li>Feedback 360°</li>
                    <li>Participação em projetos colaborativos</li>
                    <li>Habilidade em resolver conflitos</li>
                    <li>Eficácia em apresentações e comunicações</li>
                </ul>
            `
        },
        'Hard Skills': {
            title: 'Desenvolvimento de Hard Skills',
            content: `
                <h3>Competências Técnicas Requeridas</h3>
                <p>Cada nível de carreira exige um conjunto específico de conhecimentos técnicos:</p>
                
                <table class="skills-table">
                    <thead>
                        <tr>
                            <th>Nível</th>
                            <th>Conhecimentos Esperados</th>
                            <th>Certificações Recomendadas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Júnior</td>
                            <td>Conceitos básicos da área, ferramentas essenciais, execução de tarefas com supervisão</td>
                            <td>Certificações introdutórias da área</td>
                        </tr>
                        <tr>
                            <td>Pleno</td>
                            <td>Domínio de frameworks, padrões de projeto, trabalho com autonomia, solução de problemas complexos</td>
                            <td>Certificações intermediárias, especializações</td>
                        </tr>
                        <tr>
                            <td>Sênior</td>
                            <td>Arquitetura, tomada de decisão técnica, mentoria, visão estratégica de soluções</td>
                            <td>Certificações avançadas, arquitetura</td>
                        </tr>
                        <tr>
                            <td>Liderança</td>
                            <td>Gestão técnica, alinhamento com negócios, estratégia tecnológica, orçamento</td>
                            <td>Certificações de gestão, MBA (opcional)</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Como Desenvolver</h3>
                <ul>
                    <li>Completar trilhas de aprendizagem da empresa</li>
                    <li>Participar de comunidades técnicas e eventos</li>
                    <li>Desenvolver projetos práticos e side projects</li>
                    <li>Buscar mentoria especializada</li>
                    <li>Contribuir com open source ou artigos técnicos</li>
                </ul>
                
                <h3>Métricas de Avaliação</h3>
                <ul>
                    <li>Certificações obtidas</li>
                    <li>Complexidade dos projetos entregues</li>
                    <li>Impacto técnico gerado</li>
                    <li>Feedback de pares técnicos</li>
                </ul>
            `
        },
        'Experiência': {
            title: 'Acúmulo de Experiência',
            content: `
                <h3>Critérios de Experiência para Promoção</h3>
                <p>Além das habilidades, a experiência prática é fundamental para progressão:</p>
                
                <div class="skills-grid">
                    <div class="skill-item">
                        <h4>Tempo na Empresa</h4>
                        <ul>
                            <li>Júnior: 0-2 anos</li>
                            <li>Pleno: 2-5 anos</li>
                            <li>Sênior: 5+ anos</li>
                            <li>Liderança: 7+ anos</li>
                        </ul>
                        <p><em>Observação: Tempos são referenciais e podem variar conforme desempenho</em></p>
                    </div>
                    
                    <div class="skill-item">
                        <h4>Projetos Concluídos</h4>
                        <ul>
                            <li>Quantidade e complexidade</li>
                            <li>Diversidade de desafios</li>
                            <li>Papel desempenhado</li>
                            <li>Resultados alcançados</li>
                        </ul>
                    </div>
                    
                    <div class="skill-item">
                        <h4>Impacto Gerado</h4>
                        <ul>
                            <li>Melhorias de processos</li>
                            <li>Inovações implementadas</li>
                            <li>Economias ou ganhos mensuráveis</li>
                            <li>Reconhecimento interno/externo</li>
                        </ul>
                    </div>
                </div>
                
                <h3>Como Desenvolver</h3>
                <ul>
                    <li>Buscar projetos desafiadores que ampliem sua experiência</li>
                    <li>Documentar conquistas e aprendizados</li>
                    <li>Participar de iniciativas além do escopo normal</li>
                    <li>Assumir responsabilidades progressivas</li>
                    <li>Demonstrar iniciativa e proatividade</li>
                </ul>
            `
        }
    };
    
    // Modal para Trilhas de Carreira
    const careerModal = document.getElementById('career-modal');
    const careerModalTitle = careerModal.querySelector('.modal-title');
    const careerModalBody = careerModal.querySelector('.modal-body');
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    
    // Abrir modal com os detalhes da trilha
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.career-card');
            const title = card.querySelector('h3').textContent;
            
            careerModalTitle.textContent = title;
            careerModalBody.innerHTML = generateCareerModalContent(careerData[title]);
            
            careerModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Gerar conteúdo do modal para trilhas
    function generateCareerModalContent(data) {
        let html = `
        <h3>Níveis de Carreira</h3>
        <table class="skills-table">
            <thead>
                <tr>
                    <th>Nível</th>
                    <th>Descrição</th>
                    <th>Habilidades</th>
                    <th>Tempo</th>
                    <th>Projetos</th>
                </tr>
            </thead>
            <tbody>
        `;
        
        data.levels.forEach(level => {
            html += `
            <tr>
                <td><strong>${level.level}</strong></td>
                <td>${level.description}</td>
                <td><ul class="skills-list">${level.skills.map(skill => `<li>${skill}</li>`).join('')}</ul></td>
                <td>${level.time}</td>
                <td>${level.projects}</td>
            </tr>
            `;
        });
        
        html += `
            </tbody>
        </table>
        
        <div class="evolution-example">
            <h3>Exemplo de Evolução: Como Progredir</h3>
            <ol class="evolution-steps">
                ${data.evolution.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
        
        <div class="modal-footer">
           
        </div>
        `;
        
        return html;
    }
    
    // Modal para Promoções
    const promoModal = document.getElementById('promo-modal');
    const promoModalTitle = promoModal.querySelector('.modal-title');
    const promoModalBody = promoModal.querySelector('.modal-body');
    const detailsButtons = document.querySelectorAll('.details-button');
    
    // Abrir modal de promoções
    detailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.promo-card');
            const title = card.querySelector('h3').textContent;
            
            promoModalTitle.textContent = promoContent[title].title;
            promoModalBody.innerHTML = promoContent[title].content;
            
            promoModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Botões de mentoria
 const mentorButtons = document.querySelectorAll('.mentor-button');
mentorButtons.forEach(button => {
    button.addEventListener('click', function() {
        const mentorName = this.closest('.mentor-card').querySelector('h3').textContent;
        const mentorRole = this.closest('.mentor-card').querySelector('.mentor-role').textContent;

        const formHtml = `
            <div class="mentoria-form-container">
                <h3>Solicitar Mentoria com ${mentorName}</h3>
                <p class="mentor-role-highlight">${mentorRole}</p>

                <form id="mentorship-form">
                    <div class="form-group">
                        <label for="mentee-name">Seu Nome</label>
                        <input type="text" id="mentee-name" required>
                    </div>

                    <div class="form-group">
                        <label for="mentee-role">Seu Cargo</label>
                        <input type="text" id="mentee-role" required>
                    </div>

                    <div class="form-group">
                        <label for="mentee-email">Seu Email</label>
                        <input type="email" id="mentee-email" required>
                    </div>

                    <div class="form-group">
                        <label for="mentee-goals">Seus Objetivos com a Mentoria</label>
                        <textarea id="mentee-goals" rows="4" required></textarea>
                    </div>

                    <div class="form-group">
                        <label for="mentee-availability">Sua Disponibilidade</label>
                        <select id="mentee-availability" required>
                            <option value="">Selecione...</option>
                            <option value="manha">Manhã (9h-12h)</option>
                            <option value="tarde">Tarde (14h-18h)</option>
                            <option value="flexivel">Horário Flexível</option>
                        </select>
                    </div>

                    <button type="submit" class="submit-button">Enviar Solicitação</button>
                </form>
            </div>
        `;

        careerModalTitle.textContent = 'Solicitar Mentoria';
        careerModalBody.innerHTML = formHtml;
        careerModal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        document.getElementById('mentorship-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert(`Solicitação de mentoria enviada com sucesso! ${mentorName} entrará em contato em breve.`);
            careerModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
});

    
    // Botões de rotação
    const rotationButtons = document.querySelectorAll('.rotation-button');
rotationButtons.forEach(button => {
    button.addEventListener('click', function () {
        const rotationTitle = this.closest('.rotation-card').querySelector('h3').textContent;

        const formHtml = `
            <div class="rotation-form-container">
                <h3>Expressar Interesse na Rotação</h3>
                <p class="rotation-role-highlight">${rotationTitle}</p>

                <form id="rotation-form">
                    <div class="form-group">
                        <label for="employee-name">Seu Nome</label>
                        <input type="text" id="employee-name" required>
                    </div>

                    <div class="form-group">
                        <label for="employee-current-role">Seu Cargo Atual</label>
                        <input type="text" id="employee-current-role" required>
                    </div>

                    <div class="form-group">
                        <label for="employee-email">Seu Email</label>
                        <input type="email" id="employee-email" required>
                    </div>

                    <div class="form-group">
                        <label for="employee-motivation">Por que você está interessado nesta rotação?</label>
                        <textarea id="employee-motivation" rows="4" required></textarea>
                    </div>

                    <div class="form-group">
                        <label for="employee-skills">Quais habilidades você traz que são relevantes?</label>
                        <textarea id="employee-skills" rows="4" required></textarea>
                    </div>

                    <button type="submit" class="submit-button">Enviar Interesse</button>
                </form>
            </div>
        `;

        careerModalTitle.textContent = 'Rotação de Funções';
        careerModalBody.innerHTML = formHtml;
        careerModal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        document.getElementById('rotation-form').addEventListener('submit', function (e) {
            e.preventDefault();
            alert(`Seu interesse na rotação ${rotationTitle} foi registrado com sucesso! O RH entrará em contato em breve.`);
            careerModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
});

    
    // Fechar modais
    document.querySelectorAll('.close-modal, .modal-close-button').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
    
    // Fechar modal ao clicar fora
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Suavizar rolagem para seções
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Fechar menu mobile se aberto
                if (window.innerWidth <= 992 && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                    mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                }
            }
        });
    });
    
    // Adicionar classe ativa ao menu conforme rolagem
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Ativar primeiro link por padrão
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
});