// ==========================================
// MEBIPHA E-COMMERCE - PRODUCT DATA
// ==========================================

const PRODUCTS = [
    // THUỐC THÚ Y - Thuốc tiêm
    {
        id: 'TV001',
        name: 'TYLOSIN 20% - Kháng sinh điều trị bệnh đường hô hấp',
        brand: 'Mebipha',
        category: 'thuoc-thu-y',
        subcategory: 'thuoc-tiem',
        subtype: 'dung-dich-pha-tiem',
        animalType: 'gia-suc-gia-cam',
        purpose: ['khang-sinh', 'dieu-tri'],
        price: 125000,
        oldPrice: 150000,
        image: 'images/products/tylosin.png',
        images: ['images/products/tylosin.png'],
        rating: 4.5,
        reviews: 128,
        packaging: ['100ml', '500ml', '1L'],
        stock: 45,
        description: 'Tylosin 20% là kháng sinh hàng đầu điều trị bệnh đường hô hấp ở gia súc, gia cầm. Hiệu quả cao với CRD, viêm phổi, viêm họng.',
        ingredients: 'Tylosin tartrate 20%, Dung môi vừa đủ 100ml',
        usage: 'Tiêm bắp: 0.5-1ml/10kg thể trọng, ngày 1 lần, dùng 3-5 ngày liên tục',
        storage: 'Bảo quản nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp',
        origin: 'Việt Nam',
        featured: true
    },
    {
        id: 'TV002',
        name: 'ENRO 10% - Kháng sinh phổ rộng',
        brand: 'Mebipha',
        category: 'thuoc-thu-y',
        subcategory: 'thuoc-tiem',
        subtype: 'dung-dich-pha-tiem',
        animalType: 'gia-suc-gia-cam',
        purpose: ['khang-sinh', 'dieu-tri'],
        price: 95000,
        image: 'images/products/enro.png',
        images: ['images/products/enro.png'],
        rating: 4.7,
        reviews: 256,
        packaging: ['100ml', '500ml'],
        stock: 78,
        description: 'Enrofloxacin 10% - Kháng sinh quinolone thế hệ mới, phổ rộng điều trị nhiễm khuẩn đường tiêu hóa, hô hấp.',
        ingredients: 'Enrofloxacin 10%, Dung môi vừa đủ 100ml',
        usage: 'Tiêm bắp: 0.5ml/10kg thể trọng, ngày 1 lần, 3-5 ngày',
        storage: 'Bảo quản nơi khô mát, tránh ánh sáng',
        origin: 'Việt Nam',
        featured: true
    },
    {
        id: 'TV003',
        name: 'MEBISIN - Thuốc tiêm đặc trị CRD, Tụ huyết trùng',
        brand: 'Mebipha',
        category: 'thuoc-thu-y',
        subcategory: 'thuoc-tiem',
        subtype: 'dung-dich-pha-tiem',
        animalType: 'gia-cam',
        purpose: ['khang-sinh', 'dieu-tri'],
        price: 185000,
        image: 'images/products/mebisin.jpg',
        images: ['images/products/mebisin.jpg'],
        rating: 4.8,
        reviews: 189,
        packaging: ['100ml', '500ml'],
        stock: 32,
        description: 'Công thức kết hợp độc quyền điều trị hiệu quả CRD, tụ huyết trùng, E.coli ở gia cầm.',
        ingredients: 'Tylosin 10%, Doxycycline 5%, Gentamicin 5%',
        usage: 'Tiêm bắp: 0.3-0.5ml/kg thể trọng, ngày 1-2 lần',
        storage: 'Nơi khô mát, nhiệt độ dưới 30°C',
        origin: 'Việt Nam'
    },

    // THUỐC THÚ Y - Thuốc uống
    {
        id: 'TV004',
        name: 'DOXY-S 50% - Kháng sinh hòa tan',
        brand: 'Mebipha',
        category: 'thuoc-thu-y',
        subcategory: 'thuoc-uong',
        subtype: 'khang-sinh-hoa-tan',
        animalType: 'gia-suc-gia-cam',
        purpose: ['khang-sinh', 'dieu-tri'],
        price: 285000,
        image: 'images/products/doxy.png',
        images: ['images/products/doxy.png'],
        rating: 4.6,
        reviews: 342,
        packaging: ['100g', '500g', '1kg'],
        stock: 125,
        description: 'Doxycycline 50% dạng bột tan nhanh, điều trị bệnh CRD, viêm phổi, tiêu chảy do E.coli.',
        ingredients: 'Doxycycline hyclate 50%, Tá dược vừa đủ 100g',
        usage: 'Pha nước uống: 1g/2-4 lít nước, dùng 3-5 ngày liên tục',
        storage: 'Bảo quản nơi khô ráo, tránh ẩm',
        origin: 'Việt Nam',
        featured: true
    },
    {
        id: 'TV005',
        name: 'COLISTIN PLUS - Kháng sinh đặc trị E.coli',
        brand: 'Mebipha',
        category: 'thuoc-thu-y',
        subcategory: 'thuoc-uong',
        subtype: 'khang-sinh-hoa-tan',
        animalType: 'gia-suc-gia-cam',
        purpose: ['khang-sinh', 'dieu-tri'],
        price: 320000,
        image: 'images/products/colistin.jpg',
        images: ['images/products/colistin.jpg'],
        rating: 4.9,
        reviews: 278,
        packaging: ['100g', '500g'],
        stock: 56,
        description: 'Colistin sulfate - Kháng sinh đặc hiệu điều trị tiêu chảy, E.coli kháng thuốc.',
        ingredients: 'Colistin sulfate 100 MIU/g',
        usage: 'Pha nước: 1g/5-10 lít nước, hoặc trộn thức ăn 1g/10kg thức ăn',
        storage: 'Nơi khô mát, tránh ánh sáng',
        origin: 'Việt Nam'
    },

    // THUỐC THÚ Y - Vitamin & Bổ dưỡng
    {
        id: 'TV006',
        name: 'AMINO MULTI - Vitamin tổng hợp + Amino acid',
        brand: 'Mebipha',
        category: 'thuoc-thu-y',
        subcategory: 'thuoc-bo-bot',
        subtype: 'vitamin-khoang',
        animalType: 'gia-suc-gia-cam',
        purpose: ['dinh-duong', 'tang-truong'],
        price: 195000,
        image: 'images/products/amino-multi.png',
        images: ['images/products/amino-multi.png'],
        rating: 4.7,
        reviews: 445,
        packaging: ['500g', '1kg', '5kg'],
        stock: 234,
        description: 'Bổ sung vitamin, amino acid, khoáng chất. Tăng sức đề kháng, kích thích tăng trưởng.',
        ingredients: 'Vitamin A, D3, E, K, B-complex, Amino acid, Khoáng vi lượng',
        usage: '1-2g/lít nước uống hoặc 1kg/tấn thức ăn',
        storage: 'Nơi khô ráo, nhiệt độ phòng',
        origin: 'Việt Nam',
        featured: true
    },

    // THUỐC TÔM - Nuôi tôm
    {
        id: 'TOM001',
        name: 'VK POWDER - Vi sinh đường ruột tôm',
        brand: 'Mebipha',
        category: 'thuoc-tom',
        subcategory: 'nuoi-tom',
        animalType: 'thuy-san-tom',
        purpose: ['men-tieu-hoa', 'dinh-duong'],
        price: 165000,
        image: 'images/products/vk-powder.png',
        images: ['images/products/vk-powder.png'],
        rating: 4.8,
        reviews: 512,
        packaging: ['500g', '1kg', '5kg'],
        stock: 178,
        description: 'Vi sinh có lợi cải thiện hệ tiêu hóa, tăng khả năng hấp thu thức ăn, giảm ô nhiễm ao nuôi.',
        ingredients: 'Bacillus subtilis, Lactobacillus, Enzyme tiêu hóa',
        usage: 'Trộn thức ăn: 2-5g/kg thức ăn, ngày 2 lần',
        storage: 'Nơi khô mát, tránh ánh nắng trực tiếp',
        origin: 'Việt Nam',
        featured: true
    },
    {
        id: 'TOM002',
        name: 'ASTA MAX - Tăng màu sắc tôm',
        brand: 'Mebipha',
        category: 'thuoc-tom',
        subcategory: 'nuoi-tom',
        animalType: 'thuy-san-tom',
        purpose: ['dinh-duong', 'tang-truong'],
        price: 245000,
        image: 'images/products/asta-max.jpg',
        images: ['images/products/asta-max.jpg'],
        rating: 4.6,
        reviews: 289,
        packaging: ['500g', '1kg'],
        stock: 89,
        description: 'Astaxanthin tăng màu sắc tự nhiên, tăng sức đề kháng, chất lượng tôm thương phẩm.',
        ingredients: 'Astaxanthin 5%, Vitamin E, Beta-carotene',
        usage: '2-3g/kg thức ăn, cho ăn liên tục 30 ngày trước thu hoạch',
        storage: 'Bảo quản nơi khô ráo, nhiệt độ < 25°C',
        origin: 'Việt Nam'
    },
    {
        id: 'TOM003',
        name: 'CALPHOS - Bổ sung Canxi & Phospho cho tôm',
        brand: 'Mebipha',
        category: 'thuoc-tom',
        subcategory: 'khoang-dinh-duong',
        animalType: 'thuy-san-tom',
        purpose: ['dinh-duong', 'vitamin-khoang'],
        price: 135000,
        image: 'images/products/calphos.png',
        images: ['images/products/calphos.png'],
        rating: 4.7,
        reviews: 623,
        packaging: ['1kg', '5kg', '25kg'],
        stock: 456,
        description: 'Bổ sung Ca, P hữu cơ giúp tôm lột xác đều, tăng trọng nhanh, vỏ cứng, giảm stress.',
        ingredients: 'Calcium 20%, Phosphorus 12%, Vitamin D3, Khoáng vi lượng',
        usage: 'Trộn thức ăn 3-5g/kg hoặc tạt ao 3-5kg/1000m3 nước',
        storage: 'Nơi khô thoáng',
        origin: 'Việt Nam',
        featured: true
    },

    // THUỐC TÔM - Men tiêu hóa
    {
        id: 'TOM004',
        name: 'LACTOZYME - Men tiêu hóa cao cấp',
        brand: 'Mebipha',
        category: 'thuoc-tom',
        subcategory: 'men-tieu-hoa',
        animalType: 'thuy-san-tom',
        purpose: ['men-tieu-hoa'],
        price: 175000,
        image: 'images/products/lactozyme.png',
        images: ['images/products/lactozyme.png'],
        rating: 4.9,
        reviews: 734,
        packaging: ['500g', '1kg', '5kg'],
        stock: 298,
        description: 'Enzyme + Probiotic cải thiện tiêu hóa, tăng FCR, giảm thức ăn thừa, cải thiện môi trường.',
        ingredients: 'Protease, Amylase, Lipase, Bacillus, Lactobacillus',
        usage: '2-3g/kg thức ăn, cho ăn liên tục',
        storage: 'Nơi khô mát, tránh ẩm',
        origin: 'Việt Nam'
    },
    {
        id: 'TOM005',
        name: 'INTES ONE - Bảo vệ đường ruột tôm',
        brand: 'Mebipha',
        category: 'thuoc-tom',
        subcategory: 'men-tieu-hoa',
        animalType: 'thuy-san-tom',
        purpose: ['men-tieu-hoa', 'dieu-tri'],
        price: 195000,
        image: 'images/products/intes-one.png',
        images: ['images/products/intes-one.png'],
        rating: 4.8,
        reviews: 456,
        packaging: ['500g', '1kg'],
        stock: 167,
        description: 'Bảo vệ niêm mạc ruột, phòng ngừa EMS/AHPND, cải thiện sức khỏe đường ruột.',
        ingredients: 'Chất kết dính ruột, Kháng độc tố, Vi sinh có lợi',
        usage: '3-5g/kg thức ăn khi tôm có dấu hiệu bệnh đường ruột',
        storage: 'Nơi khô ráo, thoáng mát',
        origin: 'Việt Nam'
    },

    // THUỐC TÔM - Xử lý nước
    {
        id: 'TOM006',
        name: 'BKC 80% - Sát trùng ao nuôi',
        brand: 'Mebipha',
        category: 'thuoc-tom',
        subcategory: 'xu-ly-nuoc',
        animalType: 'thuy-san-tom',
        purpose: ['sat-trung'],
        price: 85000,
        image: 'images/products/bkc.png',
        images: ['images/products/bkc.png'],
        rating: 4.5,
        reviews: 892,
        packaging: ['1L', '5L', '20L'],
        stock: 534,
        description: 'Benzalkonium Chloride 80% - Sát trùng ao, dụng cụ, tiêu diệt vi khuẩn, nấm, tảo có hại.',
        ingredients: 'Benzalkonium Chloride 80%',
        usage: 'Pha loãng 1:2000-5000, ngâm dụng cụ hoặc tạt ao',
        storage: 'Nơi khô mát, tránh ánh sáng',
        origin: 'Việt Nam'
    },
    {
        id: 'TOM007',
        name: 'IODINE 10% - Sát trùng nước nuôi tôm',
        brand: 'Mebipha',
        category: 'thuoc-tom',
        subcategory: 'xu-ly-nuoc',
        animalType: 'thuy-san-tom',
        purpose: ['sat-trung'],
        price: 125000,
        image: 'images/products/iodine.png',
        images: ['images/products/iodine.png'],
        rating: 4.6,
        reviews: 456,
        packaging: ['1L', '5L'],
        stock: 234,
        description: 'Povidone Iodine 10% - Sát trùng nước, ao nuôi, phòng bệnh viêm gan tụy cấp.',
        ingredients: 'Povidone Iodine 10%',
        usage: '0.3-0.5 lít/1000m3 nước, 7-10 ngày/lần',
        storage: 'Nơi khô mát, tránh ánh sáng trực tiếp',
        origin: 'Việt Nam'
    },

    // THUỐC CÁ
    {
        id: 'CA001',
        name: 'FISH VITAMIN - Vitamin tổng hợp cho cá',
        brand: 'Mebipha',
        category: 'thuoc-ca',
        subcategory: 'dinh-duong-ca',
        animalType: 'thuy-san-ca',
        purpose: ['dinh-duong', 'vitamin-khoang'],
        price: 155000,
        image: 'images/products/fish-vitamin.png',
        images: ['images/products/fish-vitamin.png'],
        rating: 4.7,
        reviews: 289,
        packaging: ['500g', '1kg', '5kg'],
        stock: 345,
        description: 'Bổ sung vitamin, khoáng cho cá. Tăng sức đề kháng, màu sắc, tăng trọng.',
        ingredients: 'Vitamin A, D3, E, C, B-complex, Khoáng vi lượng',
        usage: '1-2g/kg thức ăn, sử dụng liên tục',
        storage: 'Nơi khô ráo',
        origin: 'Việt Nam'
    },
    {
        id: 'CA002',
        name: 'PRAZI FISH - Tẩy ký sinh trùng cá',
        brand: 'Mebipha',
        category: 'thuoc-ca',
        subcategory: 'tri-benh-ca',
        animalType: 'thuy-san-ca',
        purpose: ['tri-ky-sinh-trung'],
        price: 145000,
        image: 'images/products/prazi-fish.png',
        images: ['images/products/prazi-fish.png'],
        rating: 4.8,
        reviews: 567,
        packaging: ['100g', '500g', '1kg'],
        stock: 178,
        description: 'Praziquantel đặc trị ký sinh trùng ngoài, trong cơ thể cá. Hiệu quả cao, an toàn.',
        ingredients: 'Praziquantel 5%',
        usage: 'Trộn thức ăn: 1g/kg thức ăn, ngày 1 lần, 3-5 ngày',
        storage: 'Nơi khô mát',
        origin: 'Việt Nam'
    },

    // THUỐC THÚ Y - Xịt sát trùng
    {
        id: 'TV007',
        name: 'BIOSEPT - Sát trùng chuồng trại đa năng',
        brand: 'Mebipha',
        category: 'thuoc-thu-y',
        subcategory: 'sat-trung-xit',
        animalType: 'gia-suc-gia-cam',
        purpose: ['sat-trung'],
        price: 95000,
        image: 'images/products/biosept.png',
        images: ['images/products/biosept.png'],
        rating: 4.6,
        reviews: 678,
        packaging: ['1L', '5L', '20L'],
        stock: 456,
        description: 'Dung dịch sát trùng sinh học, tiêu diệt vi khuẩn, virus, nấm. An toàn, không độc hại.',
        ingredients: 'Hợp chất amonium quaternary, Glutaraldehyde',
        usage: 'Pha loãng 1:200-500, phun chuồng trại, dụng cụ',
        storage: 'Nơi khô mát, tránh ánh nắng',
        origin: 'Việt Nam'
    },
    {
        id: 'TV008',
        name: 'FORMASAN - Sát trùng, khử mùi chuồng nuôi',
        brand: 'Mebipha',
        category: 'thuoc-thu-y',
        subcategory: 'sat-trung-xit',
        animalType: 'gia-suc-gia-cam',
        purpose: ['sat-trung', 'khu-mui'],
        price: 75000,
        image: 'images/products/formasan.png',
        images: ['images/products/formasan.png'],
        rating: 4.4,
        reviews: 345,
        packaging: ['1L', '5L'],
        stock: 289,
        description: 'Formaldehyde 37% - Sát trùng mạnh, khử mùi hiệu quả. Dùng xông khói hoặc phun.',
        ingredients: 'Formaldehyde 37%',
        usage: 'Xông: 20ml/m3, Phun: pha loãng 1:100',
        storage: 'Nơi khô mát, kín, xa tầm tay trẻ em',
        origin: 'Việt Nam'
    }
];

// ==========================================
// PRODUCT FILTERS & SEARCH
// ==========================================

function filterProducts(filters = {}) {
    let results = [...PRODUCTS];

    // Filter by category
    if (filters.category) {
        results = results.filter(p => p.category === filters.category);
    }

    // Filter by subcategory
    if (filters.subcategory) {
        results = results.filter(p => p.subcategory === filters.subcategory);
    }

    // Filter by animal type
    if (filters.animalType) {
        results = results.filter(p => p.animalType === filters.animalType);
    }

    // Filter by purpose (can be multiple)
    if (filters.purpose && filters.purpose.length > 0) {
        results = results.filter(p =>
            filters.purpose.some(purpose => p.purpose.includes(purpose))
        );
    }

    // Filter by price range
    if (filters.minPrice !== undefined && filters.minPrice !== null) {
        results = results.filter(p => p.price >= filters.minPrice);
    }
    if (filters.maxPrice !== undefined && filters.maxPrice !== null) {
        results = results.filter(p => p.price <= filters.maxPrice);
    }

    // Search by keyword
    if (filters.keyword) {
        const keyword = filters.keyword.toLowerCase();
        results = results.filter(p =>
            p.name.toLowerCase().includes(keyword) ||
            p.brand.toLowerCase().includes(keyword) ||
            p.description.toLowerCase().includes(keyword)
        );
    }

    // Sort
    if (filters.sortBy) {
        switch (filters.sortBy) {
            case 'price-asc':
                results.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                results.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                results.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'rating':
                results.sort((a, b) => b.rating - a.rating);
                break;
            case 'popular':
                results.sort((a, b) => b.reviews - a.reviews);
                break;
        }
    }

    return results;
}

function getProductById(id) {
    return PRODUCTS.find(p => p.id === id);
}

function getFeaturedProducts(limit = 8) {
    return PRODUCTS.filter(p => p.featured).slice(0, limit);
}

function getRelatedProducts(product, limit = 4) {
    return PRODUCTS
        .filter(p =>
            p.id !== product.id &&
            (p.category === product.category || p.animalType === product.animalType)
        )
        .slice(0, limit);
}
