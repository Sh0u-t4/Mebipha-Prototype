/* ==========================================
   MEBIPHA E-COMMERCE - UTILITY FUNCTIONS
   ========================================== */

// ==========================================
// CURRENCY FORMATTING
// ==========================================

function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
}

function formatPrice(amount) {
    // Format without currency symbol, just add đ at the end
    return amount.toLocaleString('vi-VN') + 'đ';
}

// ==========================================
// DATE FORMATTING
// ==========================================

function formatDate(date) {
    if (typeof date === 'string') {
        date = new Date(date);
    }
    return new Intl.DateTimeFormat('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(date);
}

function formatDateTime(date) {
    if (typeof date === 'string') {
        date = new Date(date);
    }
    return new Intl.DateTimeFormat('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}

function getRelativeTime(date) {
    if (typeof date === 'string') {
        date = new Date(date);
    }
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Vừa xong';
    if (diffMins < 60) return `${diffMins} phút trước`;
    if (diffHours < 24) return `${diffHours} giờ trước`;
    if (diffDays < 7) return `${diffDays} ngày trước`;
    return formatDate(date);
}

// ==========================================
// LOCAL STORAGE HELPERS
// ==========================================

const Storage = {
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return defaultValue;
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Error writing to localStorage:', error);
            return false;
        }
    },

    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error removing from localStorage:', error);
            return false;
        }
    },

    clear() {
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            console.error('Error clearing localStorage:', error);
            return false;
        }
    }
};

// ==========================================
// CART MANAGEMENT
// ==========================================

const Cart = {
    STORAGE_KEY: 'mebipha_cart',

    getItems() {
        return Storage.get(this.STORAGE_KEY, []);
    },

    add(product, quantity = 1, variant = null) {
        const items = this.getItems();
        const existingIndex = items.findIndex(item =>
            item.id === product.id && JSON.stringify(item.variant) === JSON.stringify(variant)
        );

        if (existingIndex !== -1) {
            items[existingIndex].quantity += quantity;
        } else {
            items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                variant: variant,
                quantity: quantity
            });
        }

        Storage.set(this.STORAGE_KEY, items);
        this.updateCartBadge();
        return items;
    },

    update(index, quantity) {
        const items = this.getItems();
        if (items[index]) {
            if (quantity <= 0) {
                items.splice(index, 1);
            } else {
                items[index].quantity = quantity;
            }
            Storage.set(this.STORAGE_KEY, items);
            this.updateCartBadge();
        }
        return items;
    },

    remove(index) {
        const items = this.getItems();
        items.splice(index, 1);
        Storage.set(this.STORAGE_KEY, items);
        this.updateCartBadge();
        return items;
    },

    clear() {
        Storage.remove(this.STORAGE_KEY);
        this.updateCartBadge();
    },

    getTotal() {
        const items = this.getItems();
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    getCount() {
        const items = this.getItems();
        return items.reduce((count, item) => count + item.quantity, 0);
    },

    updateCartBadge() {
        const badge = document.querySelector('.cart-badge');
        if (badge) {
            const count = this.getCount();
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        }
    }
};

// ==========================================
// WISHLIST MANAGEMENT
// ==========================================

const Wishlist = {
    STORAGE_KEY: 'mebipha_wishlist',

    getItems() {
        return Storage.get(this.STORAGE_KEY, []);
    },

    toggle(productId) {
        const items = this.getItems();
        const index = items.indexOf(productId);

        if (index !== -1) {
            items.splice(index, 1);
        } else {
            items.push(productId);
        }

        Storage.set(this.STORAGE_KEY, items);
        return items.includes(productId);
    },

    has(productId) {
        return this.getItems().includes(productId);
    },

    remove(productId) {
        const items = this.getItems();
        const index = items.indexOf(productId);
        if (index !== -1) {
            items.splice(index, 1);
            Storage.set(this.STORAGE_KEY, items);
        }
    }
};

// ==========================================
// USER SESSION
// ==========================================

const User = {
    STORAGE_KEY: 'mebipha_user',

    isLoggedIn() {
        return Storage.get(this.STORAGE_KEY) !== null;
    },

    get() {
        return Storage.get(this.STORAGE_KEY);
    },

    login(userData) {
        Storage.set(this.STORAGE_KEY, userData);
    },

    logout() {
        Storage.remove(this.STORAGE_KEY);
        Cart.clear();
        window.location.href = 'index.html';
    },

    update(userData) {
        const current = this.get();
        Storage.set(this.STORAGE_KEY, { ...current, ...userData });
    }
};

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================

const Toast = {
    container: null,

    init() {
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.className = 'toast-container';
            document.body.appendChild(this.container);
        }
    },

    show(message, type = 'info', duration = 3000) {
        this.init();

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'i'
        };

        toast.innerHTML = `
      <div class="toast-icon">${icons[type] || icons.info}</div>
      <div class="toast-content">
        <div class="toast-message">${message}</div>
      </div>
      <div class="toast-close">✕</div>
    `;

        this.container.appendChild(toast);

        // Close button
        toast.querySelector('.toast-close').addEventListener('click', () => {
            this.remove(toast);
        });

        // Auto remove
        if (duration > 0) {
            setTimeout(() => {
                this.remove(toast);
            }, duration);
        }

        return toast;
    },

    remove(toast) {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            toast.remove();
        }, 300);
    },

    success(message, duration = 3000) {
        return this.show(message, 'success', duration);
    },

    error(message, duration = 3000) {
        return this.show(message, 'error', duration);
    },

    warning(message, duration = 3000) {
        return this.show(message, 'warning', duration);
    },

    info(message, duration = 3000) {
        return this.show(message, 'info', duration);
    }
};

// Add slideOutRight animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ==========================================
// MODAL DIALOGS
// ==========================================

const Modal = {
    show(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    },

    hide(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    },

    confirm(title, message, onConfirm, onCancel) {
        const modalId = 'confirm-modal-' + Date.now();
        const modal = document.createElement('div');
        modal.id = modalId;
        modal.className = 'modal active';
        modal.innerHTML = `
      <div class="modal-backdrop"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">${title}</h3>
        </div>
        <div class="modal-body">
          <p>${message}</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-ghost" data-action="cancel">Hủy</button>
          <button class="btn btn-primary" data-action="confirm">Xác nhận</button>
        </div>
      </div>
    `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        modal.querySelector('[data-action="confirm"]').addEventListener('click', () => {
            if (onConfirm) onConfirm();
            modal.remove();
            document.body.style.overflow = '';
        });

        modal.querySelector('[data-action="cancel"]').addEventListener('click', () => {
            if (onCancel) onCancel();
            modal.remove();
            document.body.style.overflow = '';
        });

        modal.querySelector('.modal-backdrop').addEventListener('click', () => {
            if (onCancel) onCancel();
            modal.remove();
            document.body.style.overflow = '';
        });
    }
};

// ==========================================
// FORM VALIDATION
// ==========================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10,11}$/;
    return re.test(phone.replace(/\s/g, ''));
}

function validatePassword(password) {
    return {
        minLength: password.length >= 8,
        hasUpperCase: /[A-Z]/.test(password),
        hasLowerCase: /[a-z]/.test(password),
        hasNumber: /[0-9]/.test(password),
        hasSpecial: /[!@#$%^&*]/.test(password),
        isValid: password.length >= 8 &&
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /[0-9]/.test(password)
    };
}

function validateForm(formElement) {
    let isValid = true;
    const inputs = formElement.querySelectorAll('[required]');

    inputs.forEach(input => {
        const value = input.value.trim();
        const errorElement = input.parentElement.querySelector('.form-error');

        if (!value) {
            input.classList.add('error');
            if (errorElement) {
                errorElement.textContent = 'Trường này là bắt buộc';
            }
            isValid = false;
        } else {
            input.classList.remove('error');
            if (errorElement) {
                errorElement.textContent = '';
            }

            // Additional validation based on type
            if (input.type === 'email' && !validateEmail(value)) {
                input.classList.add('error');
                if (errorElement) {
                    errorElement.textContent = 'Email không hợp lệ';
                }
                isValid = false;
            }

            if (input.type === 'tel' && !validatePhone(value)) {
                input.classList.add('error');
                if (errorElement) {
                    errorElement.textContent = 'Số điện thoại không hợp lệ';
                }
                isValid = false;
            }
        }
    });

    return isValid;
}

// ==========================================
// DEBOUNCE & THROTTLE
// ==========================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==========================================
// ID GENERATION
// ==========================================

function generateId(prefix = 'id') {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// ==========================================
// INITIALIZE ON PAGE LOAD
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Update cart badge
    Cart.updateCartBadge();

    // Toast initialization
    Toast.init();
});
