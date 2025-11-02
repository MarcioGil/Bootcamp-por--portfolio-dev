// ============================================
// SISTEMA DE AUTENTICAÇÃO
// ============================================

// Chave para armazenar usuários no localStorage
const USERS_KEY = 'ebook_users';
const CURRENT_USER_KEY = 'current_user';
const MAX_PORTFOLIO_SLOTS = 30; // Limite de 30 portfólios gratuitos

// ============================================
// FUNÇÕES DE AUTENTICAÇÃO
// ============================================

/**
 * Registra um novo usuário
 */
async function register(name, email, password) {
    try {
        // Validar campos
        if (!name || !email || !password) {
            return {
                success: false,
                message: 'Todos os campos são obrigatórios!'
            };
        }

        // Validar email
        if (!isValidEmail(email)) {
            return {
                success: false,
                message: 'E-mail inválido!'
            };
        }

        // Validar senha
        if (password.length < 6) {
            return {
                success: false,
                message: 'A senha deve ter no mínimo 6 caracteres!'
            };
        }

        // Buscar usuários existentes
        const users = getUsers();

        // Verificar se email já existe
        if (users.find(u => u.email === email)) {
            return {
                success: false,
                message: 'Este e-mail já está cadastrado!'
            };
        }

        // Verificar vagas disponíveis para portfólio
        const portfolioSlot = users.length + 1;
        const isEligibleForPortfolio = portfolioSlot <= MAX_PORTFOLIO_SLOTS;

        // Criar novo usuário
        const newUser = {
            id: Date.now().toString(),
            name: name,
            email: email,
            password: hashPassword(password), // Simples hash para segurança básica
            createdAt: new Date().toISOString(),
            registrationOrder: portfolioSlot, // Ordem de matrícula
            eligibleForPortfolio: isEligibleForPortfolio // Elegível para portfólio gratuito
        };

        // Adicionar usuário
        users.push(newUser);
        saveUsers(users);

        // Fazer login automático
        setCurrentUser(newUser);

        return {
            success: true,
            message: isEligibleForPortfolio 
                ? `🎉 Parabéns! Você garantiu a vaga #${portfolioSlot} para o portfólio profissional gratuito!`
                : 'Conta criada com sucesso! As 30 vagas para portfólio gratuito já foram preenchidas, mas você pode consultar pelo WhatsApp.',
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                registrationOrder: newUser.registrationOrder,
                eligibleForPortfolio: newUser.eligibleForPortfolio
            }
        };

    } catch (error) {
        console.error('Erro ao registrar:', error);
        return {
            success: false,
            message: 'Erro ao criar conta. Tente novamente.'
        };
    }
}

/**
 * Faz login de um usuário
 */
async function login(email, password) {
    try {
        // Validar campos
        if (!email || !password) {
            return {
                success: false,
                message: 'E-mail e senha são obrigatórios!'
            };
        }

        // Buscar usuários
        const users = getUsers();

        // Encontrar usuário
        const user = users.find(u => u.email === email);

        if (!user) {
            return {
                success: false,
                message: 'E-mail não cadastrado!'
            };
        }

        // Verificar senha
        if (user.password !== hashPassword(password)) {
            return {
                success: false,
                message: 'Senha incorreta!'
            };
        }

        // Salvar usuário logado
        setCurrentUser(user);

        return {
            success: true,
            message: 'Login realizado com sucesso!',
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        };

    } catch (error) {
        console.error('Erro ao fazer login:', error);
        return {
            success: false,
            message: 'Erro ao fazer login. Tente novamente.'
        };
    }
}

/**
 * Faz logout do usuário
 */
function logout() {
    localStorage.removeItem(CURRENT_USER_KEY);
    window.location.href = 'login.html';
}

/**
 * Verifica se há um usuário logado
 */
function isLoggedIn() {
    const user = getCurrentUser();
    return user !== null;
}

/**
 * Obtém o usuário atual
 */
function getCurrentUser() {
    const userJson = localStorage.getItem(CURRENT_USER_KEY);
    if (!userJson) return null;
    
    try {
        return JSON.parse(userJson);
    } catch (error) {
        console.error('Erro ao obter usuário atual:', error);
        return null;
    }
}

/**
 * Define o usuário atual
 */
function setCurrentUser(user) {
    const userToSave = {
        id: user.id,
        name: user.name,
        email: user.email
    };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userToSave));
}

/**
 * Requer autenticação (usar no início de páginas protegidas)
 */
function requireAuth() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

/**
 * Obtém todos os usuários
 */
function getUsers() {
    const usersJson = localStorage.getItem(USERS_KEY);
    if (!usersJson) return [];
    
    try {
        return JSON.parse(usersJson);
    } catch (error) {
        console.error('Erro ao obter usuários:', error);
        return [];
    }
}

/**
 * Salva usuários no localStorage
 */
function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

/**
 * Hash simples de senha (apenas para demonstração)
 * Em produção, use bcrypt ou similar no backend
 */
function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash.toString(36);
}

/**
 * Valida formato de email
 */
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ============================================
// EXPORTAR PARA USO GLOBAL
// ============================================

// As funções já estão disponíveis globalmente
// pois não estamos usando modules
