/* ==========================================
   MEBIPHA E-COMMERCE - MAIN JAVASCRIPT
   ========================================== */

// ==========================================
// HEADER & NAVIGATION
// ==========================================

// Sticky Header
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add shadow when scrolled
    if (scrollTop > 10) {
        header.style.boxShadow = 'var(--shadow-md)';
    } else {
        header.style.boxShadow = 'var(--shadow-sm)';
    }

    lastScrollTop = scrollTop;
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');

    // Toggle body overflow
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

    if (mobileMenu && mobileMenu.classList.contains('active')) {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            toggleMobileMenu();
        }
    }
});

// ==========================================
// SEARCH FUNCTIONALITY
// ==========================================

function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput');
    const keyword = searchInput.value.trim();

    if (keyword) {
        window.location.href = `products.html?search=${encodeURIComponent(keyword)}`;
    }
}

// ==========================================
// CART FUNCTIONALITY
// ==========================================

function addToCart(productId) {
    const product = getProductById(productId);

    if (!product) {
        Toast.error('Không tìm thấy sản phẩm');
        return;
    }

    // Check if product has multiple packaging options
    if (product.packaging && product.packaging.length > 1) {
        showPackagingModal(product);
    } else {
        // Add directly to cart
        Cart.add(product, 1, product.packaging ? product.packaging[0] : null);
        Toast.success(`Đã thêm ${product.name} vào giỏ hàng`);
    }
}

function showPackagingModal(product) {
    const modalId = 'packaging-modal-' + Date.now();
    const modal = document.createElement('div');
    modal.id = modalId;
    modal.className = 'modal active';
    modal.innerHTML = `
    <div class="modal-backdrop" onclick="Modal.hide('${modalId}'); this.parentElement.remove();"></div>
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Chọn quy cách đóng gói</h3>
        <button class="modal-close" onclick="Modal.hide('${modalId}'); this.parentElement.parentElement.parentElement.remove();">✕</button>
      </div>
      <div class="modal-body">
        <p class="mb-4"><strong>${product.name}</strong></p>
        <div class="d-flex flex-column gap-3">
          ${product.packaging.map(pkg => `
            <button class="btn btn-outline" onclick="addToCartWithPackaging('${product.id}', '${pkg}', '${modalId}')">
              ${pkg} - ${formatPrice(product.price)}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function addToCartWithPackaging(productId, packaging, modalId) {
    const product = getProductById(productId);
    Cart.add(product, 1, packaging);
    Toast.success(`Đã thêm ${product.name} (${packaging}) vào giỏ hàng`);

    // Close modal
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// ==========================================
// WISHLIST FUNCTIONALITY
// ==========================================

function toggleWishlist(productId, event) {
    event.stopPropagation();
    event.preventDefault();

    const isInWishlist = Wishlist.toggle(productId);
    const button = event.currentTarget;
    const svg = button.querySelector('svg');

    if (isInWishlist) {
        svg.setAttribute('fill', 'currentColor');
        Toast.success('Đã thêm vào danh sách yêu thích');
    } else {
        svg.setAttribute('fill', 'none');
        Toast.info('Đã xóa khỏi danh sách yêu thích');
    }
}

// ==========================================
// BACK TO TOP
// ==========================================

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ==========================================
// FORM VALIDATION
// ==========================================

// Real-time validation for all forms
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form[data-validate]');

    forms.forEach(form => {
        const inputs = form.querySelectorAll('[required]');

        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                validateInput(input);
            });

            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    validateInput(input);
                }
            });
        });

        form.addEventListener('submit', (e) => {
            if (!validateForm(form)) {
                e.preventDefault();
            }
        });
    });
});

function validateInput(input) {
    const value = input.value.trim();
    const errorElement = input.parentElement.querySelector('.form-error');

    // Clear previous error
    input.classList.remove('error');
    if (errorElement) {
        errorElement.textContent = '';
    }

    // Required validation
    if (input.hasAttribute('required') && !value) {
        input.classList.add('error');
        if (errorElement) {
            errorElement.textContent = 'Trường này là bắt buộc';
        }
        return false;
    }

    // Email validation
    if (input.type === 'email' && value && !validateEmail(value)) {
        input.classList.add('error');
        if (errorElement) {
            errorElement.textContent = 'Email không hợp lệ';
        }
        return false;
    }

    // Phone validation
    if (input.type === 'tel' && value && !validatePhone(value)) {
        input.classList.add('error');
        if (errorElement) {
            errorElement.textContent = 'Số điện thoại không hợp lệ';
        }
        return false;
    }

    // Password validation
    if (input.type === 'password' && input.hasAttribute('data-validate-password')) {
        const validation = validatePassword(value);
        if (!validation.isValid) {
            input.classList.add('error');
            if (errorElement) {
                errorElement.textContent = 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số';
            }
            return false;
        }
    }

    return true;
}

// ==========================================
// ACCORDION
// ==========================================

function initAccordions() {
    const accordions = document.querySelectorAll('.accordion-item');

    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');

        header.addEventListener('click', () => {
            const wasActive = accordion.classList.contains('active');

            // Close all accordions
            accordions.forEach(a => a.classList.remove('active'));

            // Open clicked accordion if it wasn't active
            if (!wasActive) {
                accordion.classList.add('active');
            }
        });
    });
}

// ==========================================
// TABS
// ==========================================

function initTabs() {
    const tabContainers = document.querySelectorAll('.tabs');

    tabContainers.forEach(container => {
        const tabLinks = container.querySelectorAll('.tab-link');
        const tabContents = container.querySelectorAll('.tab-content');

        tabLinks.forEach((link, index) => {
            link.addEventListener('click', () => {
                // Remove active class from all tabs
                tabLinks.forEach(l => l.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                // Add active class to clicked tab
                link.classList.add('active');
                tabContents[index].classList.add('active');
            });
        });
    });
}

// ==========================================
// IMAGE ZOOM (for product details)
// ==========================================

function initImageZoom() {
    const images = document.querySelectorAll('[data-zoom]');

    images.forEach(img => {
        img.addEventListener('mouseenter', function () {
            this.style.cursor = 'zoom-in';
        });

        img.addEventListener('click', function () {
            const modal = document.createElement('div');
            modal.className = 'modal active';
            modal.innerHTML = `
        <div class="modal-backdrop" onclick="this.parentElement.remove(); document.body.style.overflow = '';"></div>
        <div class="modal-content" style="max-width: 90vw; max-height: 90vh;">
          <div class="modal-header">
            <h3 class="modal-title">Xem ảnh</h3>
            <button class="modal-close" onclick="this.parentElement.parentElement.parentElement.remove(); document.body.style.overflow = '';">✕</button>
          </div>
          <div class="modal-body" style="overflow: auto;">
            <img src="${this.src}" alt="${this.alt}" style="width: 100%; height: auto;">
          </div>
        </div>
      `;

            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
        });
    });
}

// ==========================================
// PRICE RANGE SLIDER
// ==========================================

function initPriceRange() {
    const minInput = document.getElementById('minPrice');
    const maxInput = document.getElementById('maxPrice');

    if (!minInput || !maxInput) return;

    // Format on input
    [minInput, maxInput].forEach(input => {
        input.addEventListener('input', function () {
            // Remove non-numeric characters
            this.value = this.value.replace(/[^0-9]/g, '');
        });

        input.addEventListener('blur', function () {
            // Format with thousands separator
            if (this.value) {
                const num = parseInt(this.value);
                this.value = num.toLocaleString('vi-VN');
            }
        });
    });
}

// ==========================================
// QUANTITY CONTROLS
// ==========================================

function initQuantityControls() {
    document.addEventListener('click', (e) => {
        // Increase quantity
        if (e.target.matches('[data-quantity="increase"]')) {
            const input = e.target.closest('.quantity-control').querySelector('input');
            const max = input.getAttribute('max') || 999;
            const current = parseInt(input.value) || 1;
            input.value = Math.min(current + 1, max);
            input.dispatchEvent(new Event('change'));
        }

        // Decrease quantity
        if (e.target.matches('[data-quantity="decrease"]')) {
            const input = e.target.closest('.quantity-control').querySelector('input');
            const min = input.getAttribute('min') || 1;
            const current = parseInt(input.value) || 1;
            input.value = Math.max(current - 1, min);
            input.dispatchEvent(new Event('change'));
        }
    });
}

// ==========================================
// INITIALIZE ON LOAD
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    initAccordions();
    initTabs();
    initImageZoom();
    initPriceRange();
    initQuantityControls();

    // Initialize cart badge
    Cart.updateCartBadge();
});

// ==========================================
// UTILITY FUNCTIONS FOR PAGES
// ==========================================

// Parse URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const result = {};
    for (const [key, value] of params) {
        result[key] = value;
    }
    return result;
}

// Update URL without reload
function updateUrl(params) {
    const url = new URL(window.location);
    Object.keys(params).forEach(key => {
        if (params[key]) {
            url.searchParams.set(key, params[key]);
        } else {
            url.searchParams.delete(key);
        }
    });
    window.history.pushState({}, '', url);
}
