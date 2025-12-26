// ==========================================
// MEBIPHA E-COMMERCE - NEWS & ARTICLES
// ==========================================

const NEWS = [
    {
        id: 'news001',
        title: 'Hướng dẫn phòng trị bệnh CRD hiệu quả cho đàn gà',
        slug: 'huong-dan-phong-tri-benh-crd-hieu-qua',
        category: 'phong-benh-dieu-tri',
        excerpt: 'Bệnh CRD (viêm đường hô hấp mạn tính) là một trong những bệnh phổ biến nhất ở gà. Tìm hiểu cách phòng và trị hiệu quả.',
        content: `
      <p>Bệnh CRD (Chronic Respiratory Disease) là bệnh đường hô hấp mạn tính do Mycoplasma gallisepticum gây ra, rất phổ biến ở gà. Bệnh gây thiệt hại kinh tế lớn do ảnh hưởng đến tốc độ tăng trưởng và năng suất trứng.</p>
      
      <h3>Triệu chứng</h3>
      <ul>
        <li>Khó thở, thở khò khè</li>
        <li>Sổ mũi, chảy nước mắt</li>
        <li>Sưng mặt, sưng xoang</li>
        <li>Giảm ăn, sút cân</li>
        <li>Tỷ lệ chết có thể lên đến 5-30%</li>
      </ul>
      
      <h3>Biện pháp phòng ngừa</h3>
      <ul>
        <li>Giữ chuồng trại sạch sẽ, thông thoáng</li>
        <li>Kiểm soát mật độ nuôi hợp lý</li>
        <li>Tiêm phòng vaccine định kỳ</li>
        <li>Bổ sung vitamin tăng sức đề kháng</li>
      </ul>
      
      <h3>Phương pháp điều trị</h3>
      <p>Sử dụng kháng sinh nhóm Tylosin, Doxycycline kết hợp. Liều lượng: Tylosin 20% tiêm bắp 0.5ml/kg, ngày 1 lần, 3-5 ngày.</p>
    `,
        image: 'images/news/crd-treatment.jpg',
        author: 'Bác sĩ Nguyễn Văn A',
        publishedAt: '2024-12-20T08:00:00',
        updatedAt: '2024-12-20T08:00:00',
        views: 2543,
        likes: 145,
        featured: true,
        tags: ['gà', 'CRD', 'bệnh hô hấp', 'điều trị']
    },
    {
        id: 'news002',
        title: 'Khuyến mãi cuối năm - Giảm giá đến 30% các sản phẩm thuốc thú y',
        slug: 'khuyen-mai-cuoi-nam-giam-gia-30-phan-tram',
        category: 'khuyen-mai',
        excerpt: 'Chương trình khuyến mãi lớn nhất trong năm! Giảm giá đến 30% cho tất cả sản phẩm thuốc thú y, thủy sản.',
        content: `
      <p>Nhân dịp cuối năm, Mebipha tri ân khách hàng với chương trình khuyến mãi siêu hấp dẫn!</p>
      
      <h3>Thời gian khuyến mãi</h3>
      <p>Từ ngày 20/12/2024 đến 31/12/2024</p>
      
      <h3>Sản phẩm khuyến mãi</h3>
      <ul>
        <li>Thuốc tiêm: Giảm 25%</li>
        <li>Thuốc uống, bột: Giảm 20%</li>
        <li>Vitamin, bổ dưỡng: Giảm 30%</li>
        <li>Thuốc thủy sản: Giảm 25%</li>
      </ul>
      
      <h3>Ưu đãi thêm</h3>
      <p>Mua từ 5 triệu: Tặng 1 chai Vitamin trị giá 200.000đ<br>
      Mua từ 10 triệu: Tặng 1 bộ quà trị giá 500.000đ + Freeship toàn quốc</p>
      
      <p><strong>Hotline đặt hàng: 1900 xxxx</strong></p>
    `,
        image: 'images/news/promotion.jpg',
        author: 'Mebipha Marketing',
        publishedAt: '2024-12-18T10:00:00',
        updatedAt: '2024-12-18T10:00:00',
        views: 5678,
        likes: 456,
        featured: true,
        tags: ['khuyến mãi', 'giảm giá', 'cuối năm']
    },
    {
        id: 'news003',
        title: 'Kỹ thuật nuôi tôm thẻ chân trắng đạt năng suất cao',
        slug: 'ky-thuat-nuoi-tom-the-chan-trang-dat-nang-suat-cao',
        category: 'kien-thuc-chan-nuoi',
        excerpt: 'Hướng dẫn chi tiết quy trình nuôi tôm thẻ chân trắng từ A-Z giúp người nuôi đạt năng suất và hiệu quả kinh tế cao.',
        content: `
      <p>Tôm thẻ chân trắng (Litopenaeus vannamei) là đối tượng nuôi phổ biến với chu kỳ nuôi ngắn, năng suất cao.</p>
      
      <h3>Chuẩn bị ao nuôi</h3>
      <ul>
        <li>Phơi đáy ao 7-10 ngày</li>
        <li>Vôi bột: 500-1000kg/ha</li>
        <li>Bón phân, thả giống sau 7-10 ngày</li>
      </ul>
      
      <h3>Thả giống</h3>
      <ul>
        <li>Mật độ: 80-120 con/m²</li>
        <li>Kích thước PL12-15</li>
        <li>Kiểm tra sức khỏe, PCR virus trước thả</li>
      </ul>
      
      <h3>Quản lý trong nuôi</h3>
      <ul>
        <li>Cho ăn 4-6 lần/ngày</li>
        <li>Bổ sung men vi sinh, khoáng</li>
        <li>Theo dõi chất lượng nước hàng ngày</li>
        <li>Xử lý nước định kỳ</li>
      </ul>
      
      <h3>Thu hoạch</h3>
      <p>Sau 90-100 ngày nuôi, tôm đạt kích thước 80-100 con/kg có thể thu hoạch.</p>
    `,
        image: 'images/news/shrimp-farming.jpg',
        author: 'Kỹ sư Thủy sản Trần Văn B',
        publishedAt: '2024-12-15T14:30:00',
        updatedAt: '2024-12-15T14:30:00',
        views: 3210,
        likes: 234,
        featured: true,
        tags: ['nuôi tôm', 'thủy sản', 'kỹ thuật']
    },
    {
        id: 'news004',
        title: 'Bổ sung Vitamin C cho tôm - Lợi ích và liều lượng',
        slug: 'bo-sung-vitamin-c-cho-tom-loi-ich-va-lieu-luong',
        category: 'dinh-duong',
        excerpt: 'Vitamin C đóng vai trò quan trọng trong nuôi tôm. Tìm hiểu lợi ích và cách bổ sung hiệu quả.',
        content: `
      <p>Vitamin C là vitamin cần thiết giúp tôm tăng sức đề kháng, chống stress, hỗ trợ lột xác.</p>
      
      <h3>Lợi ích</h3>
      <ul>
        <li>Tăng miễn dịch, chống bệnh</li>
        <li>Giảm stress do thay đổi môi trường</li>
        <li>Hỗ trợ quá trình lột xác</li>
        <li>Tăng tỷ lệ sống</li>
      </ul>
      
      <h3>Liều lượng khuyến nghị</h3>
      <p>500-1000mg Vitamin C/kg thức ăn, sử dụng liên tục hoặc giai đoạn quan trọng (thả giống, lột xác, thay đổi thời tiết).</p>
    `,
        image: 'images/news/vitamin-c.jpg',
        author: 'TS. Lê Thị C',
        publishedAt: '2024-12-10T09:00:00',
        updatedAt: '2024-12-10T09:00:00',
        views: 1890,
        likes: 98,
        featured: false,
        tags: ['vitamin', 'dinh dưỡng', 'tôm']
    },
    {
        id: 'news005',
        title: 'Phòng bệnh dịch tả lợn châu Phi - Những điều cần biết',
        slug: 'phong-benh-dich-ta-lon-chau-phi-nhung-dieu-can-biet',
        category: 'phong-benh-dieu-tri',
        excerpt: 'Dịch tả lợn châu Phi (ASF) là bệnh nguy hiểm. Người chăn nuôi cần nắm vững biện pháp phòng ngừa.',
        content: `
      <p>Dịch tả lợn châu Phi (ASF) do virus gây ra, lây lan nhanh, tỷ lệ chết cao tới 100%.</p>
      
      <h3>Triệu chứng</h3>
      <ul>
        <li>Sốt cao trên 40°C</li>
        <li>Xuất huyết da, tai, bụng</li>
        <li>Tiêu chảy, nôn mửa</li>
        <li>Chảy máu mũi</li>
        <li>Chết nhanh trong 7-10 ngày</li>
      </ul>
      
      <h3>Biện pháp phòng ngừa</h3>
      <ul>
        <li>Kiểm soát người/xe ra vào trang trại</li>
        <li>Sát trùng chuồng trại, dụng cụ thường xuyên</li>
        <li>Không cho ăn thức ăn thừa, rác thải</li>
        <li>Kiểm soát côn trùng, chuột</li>
        <li>Cách ly vật nuôi mới</li>
      </ul>
      
      <p><strong>Lưu ý:</strong> Hiện chưa có vaccine phòng bệnh, phòng ngừa là cách tốt nhất.</p>
    `,
        image: 'images/news/asf.jpg',
        author: 'Bác sĩ Phạm Văn D',
        publishedAt: '2024-12-05T11:00:00',
        updatedAt: '2024-12-05T11:00:00',
        views: 4567,
        likes: 312,
        featured: false,
        tags: ['lợn', 'ASF', 'dịch bệnh', 'phòng ngừa']
    },
    {
        id: 'news006',
        title: 'Thời tiết rét đậm - Chăm sóc vật nuôi mùa đông',
        slug: 'thoi-tiet-ret-dam-cham-soc-vat-nuoi-mua-dong',
        category: 'thoi-tiet-mua-vu',
        excerpt: 'Mùa đông rét đậm ảnh hưởng sức khỏe vật nuôi. Hướng dẫn chăm sóc đúng cách.',
        content: `
      <p>Thời tiết rét đậm, nhiệt độ xuống thấp ảnh hưởng lớn đến sức khỏe gia súc, gia cầm.</p>
      
      <h3>Đối với gia cầm</h3>
      <ul>
        <li>Che chắn chuồng, tránh gió lùa</li>
        <li>Tăng mật độ nuôi hợp lý để giữ ấm</li>
        <li>Bổ sung năng lượng (Vitamin E, dầu mỡ)</li>
        <li>Sát trùng phòng bệnh đường hô hấp</li>
      </ul>
      
      <h3>Đối với lợn</h3>
      <ul>
        <li>Lợn con: Dùng đèn sưởi, thảm rơm</li>
        <li>Tăng năng lượng thức ăn 10-15%</li>
        <li>Đảm bảo chuồng khô ráo</li>
        <li>Bổ sung vitamin A, D3, E</li>
      </ul>
    `,
        image: 'images/news/winter-care.jpg',
        author: 'Kỹ sư Chăn nuôi Hoàng Văn E',
        publishedAt: '2024-12-01T07:00:00',
        updatedAt: '2024-12-01T07:00:00',
        views: 2789,
        likes: 167,
        featured: false,
        tags: ['mùa đông', 'chăm sóc', 'thời tiết']
    }
];

// ==========================================
// NEWS FILTERS & SEARCH
// ==========================================

function filterNews(filters = {}) {
    let results = [...NEWS];

    // Filter by category
    if (filters.category) {
        results = results.filter(n => n.category === filters.category);
    }

    // Search by keyword
    if (filters.keyword) {
        const keyword = filters.keyword.toLowerCase();
        results = results.filter(n =>
            n.title.toLowerCase().includes(keyword) ||
            n.excerpt.toLowerCase().includes(keyword) ||
            n.tags.some(tag => tag.includes(keyword))
        );
    }

    // Filter by tags
    if (filters.tags && filters.tags.length > 0) {
        results = results.filter(n =>
            filters.tags.some(tag => n.tags.includes(tag))
        );
    }

    // Sort
    if (filters.sortBy) {
        switch (filters.sortBy) {
            case 'newest':
                results.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
                break;
            case 'oldest':
                results.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
                break;
            case 'popular':
                results.sort((a, b) => b.views - a.views);
                break;
            case 'likes':
                results.sort((a, b) => b.likes - a.likes);
                break;
        }
    } else {
        // Default sort by newest
        results.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    }

    return results;
}

function getNewsById(id) {
    return NEWS.find(n => n.id === id);
}

function getNewsBySlug(slug) {
    return NEWS.find(n => n.slug === slug);
}

function getFeaturedNews(limit = 3) {
    return NEWS.filter(n => n.featured).slice(0, limit);
}

function getRelatedNews(news, limit = 3) {
    return NEWS
        .filter(n =>
            n.id !== news.id &&
            (n.category === news.category || n.tags.some(tag => news.tags.includes(tag)))
        )
        .slice(0, limit);
}
