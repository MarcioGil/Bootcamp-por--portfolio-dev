// ============================================
// SISTEMA DE CONTADOR DE VAGAS PARA PORTFÓLIO
// ============================================

/**
 * Atualiza o contador de vagas na landing page
 */
function updatePortfolioSlots() {
    const users = getUsers();
    const filledSlots = users.length;
    const maxSlots = 30;
    const percentage = (filledSlots / maxSlots) * 100;

    // Atualizar contador
    const slotsFilledEl = document.getElementById('slotsFilledCount');
    const progressFillEl = document.getElementById('progressFill');

    if (slotsFilledEl) {
        slotsFilledEl.textContent = filledSlots;
    }

    if (progressFillEl) {
        progressFillEl.style.width = `${Math.min(percentage, 100)}%`;
        
        // Mudar cor conforme preenche
        if (percentage >= 90) {
            progressFillEl.style.background = 'linear-gradient(90deg, #ef4444, #dc2626)';
        } else if (percentage >= 70) {
            progressFillEl.style.background = 'linear-gradient(90deg, #f59e0b, #d97706)';
        } else {
            progressFillEl.style.background = 'linear-gradient(90deg, #8b5cf6, #667eea)';
        }
    }
}

/**
 * Verifica vagas disponíveis
 */
function getAvailableSlots() {
    const users = getUsers();
    const maxSlots = 30;
    return maxSlots - users.length;
}

/**
 * Verifica se ainda há vagas
 */
function hasAvailableSlots() {
    return getAvailableSlots() > 0;
}

// Atualizar contador ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    updatePortfolioSlots();
    
    // Atualizar a cada 5 segundos (caso múltiplas pessoas estejam se cadastrando)
    setInterval(updatePortfolioSlots, 5000);
});
