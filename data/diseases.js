// ==========================================
// MEBIPHA E-COMMERCE - DISEASE DATABASE
// ==========================================

const DISEASES = [
    // GIA CẦM
    {
        id: 'disease001',
        name: 'Bệnh Newcastle (Gà rù)',
        slug: 'benh-newcastle-ga-ru',
        category: 'gia-cam',
        animalType: 'Gà',
        image: 'images/diseases/newcastle.jpg',
        overview: {
            description: 'Bệnh Newcastle là bệnh truyền nhiễm cấp tính do virus gây ra, lây lan nhanh, tỷ lệ chết cao.',
            symptoms: [
                'Sốt cao, uể oải',
                'Khó thở, há mỏ',
                'Tiêu chảy phân màu xanh',
                'Rối loạn thần kinh: vặn cổ, liệt cánh',
                'Giảm đẻ, vỏ trứng bất thường'
            ],
            causes: [
                'Virus Newcastle (Paramyxovirus)',
                'Lây qua đường tiêu hóa, hô hấp',
                'Nguồn lây: phân, nước bọt, tiết dịch'
            ],
            riskFactors: [
                'Gà chưa tiêm phòng',
                'Nuôi tập trung mật độ cao',
                'Vệ sinh kém, không sát trùng'
            ]
        },
        diagnosis: [
            'Triệu chứng lâm sàng đặc trưng',
            'Phát hiện virus bằng PCR',
            'Xét nghiệm huyết thanh học',
            'Khám nghiệm tử thi'
        ],
        prevention: [
            'Tiêm phòng vaccine định kỳ (Lasota, Hitchner B1)',
            'Vệ sinh, sát trùng chuồng trại thường xuyên',
            'Kiểm soát người/xe ra vào trang trại',
            'Cách ly gà mới mua về 7-10 ngày',
            'Tiêu hủy gà chết đúng quy định'
        ],
        treatment: [
            'Không có thuốc điều trị đặc hiệu',
            'Điều trị triệu chứng, phòng nhiễm khuẩn kế phát',
            'Kháng sinh: Enrofloxacin, Doxycycline',
            'Vitamin C, E tăng sức đề kháng',
            'Cách ly gà bệnh, sát trùng chuồng'
        ],
        relatedProducts: ['TV001', 'TV002', 'TV006', 'TV007']
    },
    {
        id: 'disease002',
        name: 'Bệnh CRD (Viêm đường hô hấp mạn tính)',
        slug: 'benh-crd-viem-duong-ho-hap-man-tinh',
        category: 'gia-cam',
        animalType: 'Gà',
        image: 'images/diseases/crd.jpg',
        overview: {
            description: 'Bệnh CRD do vi khuẩn Mycoplasma gallisepticum gây ra, lây lan chậm, kéo dài.',
            symptoms: [
                'Khó thở, thở khò khè',
                'Sổ mũi, chảy nước mắt',
                'Sưng mặt, sưng xoang mắt',
                'Giảm ăn, sút cân',
                'Giảm năng suất trứng 10-30%'
            ],
            causes: [
                'Vi khuẩn Mycoplasma gallisepticum',
                'Lây qua đường hô hấp, tiếp xúc',
                'Trứng nhiễm bệnh lây sang gà con'
            ],
            riskFactors: [
                'Chuồng kín, thiếu thông gió',
                'Mật độ nuôi cao',
                'Stress, thay đổi thời tiết đột ngột',
                'Thiếu vitamin A'
            ]
        },
        diagnosis: [
            'Triệu chứng lâm sàng',
            'Test nhanh Mycoplasma',
            'Phân lập vi khuẩn',
            'Xét nghiệm huyết thanh (SPA test)'
        ],
        prevention: [
            'Chọn giống gà sạch bệnh',
            'Đảm bảo thông gió tốt',
            'Kiểm soát mật độ nuôi',
            'Bổ sung Vitamin A, E',
            'Sát trùng định kỳ'
        ],
        treatment: [
            'Kháng sinh nhóm Tylosin, Doxycycline',
            'Tylosin 20% tiêm bắp: 0.5ml/kg, 3-5 ngày',
            'Doxycycline 50% pha nước: 1g/2-4L, 5-7 ngày',
            'Kết hợp Vitamin A, E tăng sức đề kháng',
            'Cải thiện điều kiện chuồng nuôi'
        ],
        relatedProducts: ['TV001', 'TV003', 'TV004', 'TV006']
    },
    {
        id: 'disease003',
        name: 'Bệnh Coccidiosis (Cầu trùng)',
        slug: 'benh-coccidiosis-cau-trung',
        category: 'gia-cam',
        animalType: 'Gà',
        image: 'images/diseases/cocci.jpg',
        overview: {
            description: 'Bệnh Coccidiosis do ký sinh trùng đơn bào Eimeria gây ra, rất phổ biến ở gà con.',
            symptoms: [
                'Tiêu chảy phân lẫn máu',
                'Gà uể oải, xù lông',
                'Giảm ăn, sút cân nhanh',
                'Phân màu trắng, đỏ hoặc nâu sẫm',
                'Tỷ lệ chết 10-50% nếu không điều trị'
            ],
            causes: [
                'Ký sinh trùng Eimeria (nhiều loài)',
                'Lây qua phân, thức ăn, nước uống',
                'Noãn nang Eimeria trong môi trường'
            ],
            riskFactors: [
                'Gà con 2-8 tuần tuổi',
                'Chuồng ẩm ướt, ô nhiễm',
                'Mật độ nuôi cao',
                'Thức ăn kém chất lượng'
            ]
        },
        diagnosis: [
            'Triệu chứng lâm sàng: tiêu chảy có máu',
            'Soi phân tìm noãn nang Eimeria',
            'Khám nghiệm tử thi: ruột sưng, xuất huyết'
        ],
        prevention: [
            'Giữ chuồng khô ráo, sạch sẽ',
            'Sát trùng chuồng nuôi định kỳ',
            'Dùng thuốc phòng cầu trùng',
            'Vaccine phòng Coccidiosis (nếu có)'
        ],
        treatment: [
            'Thuốc kháng Coccidiosis chuyên dụng',
            'Sulfadimidine, Toltrazuril',
            'Vitamin A, K bổ sung',
            'Điều chỉnh chế độ dinh dưỡng',
            'Vệ sinh chuồng nuôi'
        ],
        relatedProducts: ['TV005', 'TV006', 'TV007']
    },

    // GIA SÚC - HEO
    {
        id: 'disease004',
        name: 'Dịch tả lợn châu Phi (ASF)',
        slug: 'dich-ta-lon-chau-phi-asf',
        category: 'gia-suc',
        animalType: 'Lợn',
        image: 'images/diseases/asf.jpg',
        overview: {
            description: 'Dịch tả lợn châu Phi (ASF) do virus DNA gây ra, tỷ lệ chết 100%, chưa có vaccine.',
            symptoms: [
                'Sốt cao đột ngột 40-42°C',
                'Xuất huyết da, tai, bụng màu tím',
                'Tiêu chảy, nôn mửa',
                'Chảy máu mũi',
                'Chết nhanh trong 7-10 ngày'
            ],
            causes: [
                'Virus ASF (DNA virus)',
                'Lây trực tiếp qua tiếp xúc, phân, dịch tiết',
                'Lây gián tiếp: thức ăn thừa, dụng cụ, côn trùng'
            ],
            riskFactors: [
                'Trang trại không đảm bảo an toàn sinh học',
                'Cho ăn thức ăn thừa chưa xử lý',
                'Tiếp xúc với lợn bệnh/chết do ASF',
                'Côn trùng, chuột, chim trời'
            ]
        },
        diagnosis: [
            'Triệu chứng lâm sàng điển hình',
            'Xét nghiệm PCR phát hiện virus',
            'Khám nghiệm tử thi: xuất huyết nội tạng'
        ],
        prevention: [
            'Kiểm soát nghiêm ngặt người/xe ra vào',
            'Sát trùng chuồng, dụng cụ thường xuyên',
            'KHÔNG cho ăn thức ăn thừa, rác thải',
            'Kiểm soát côn trùng, chuột',
            'Cách ly lợn mới, theo dõi 30 ngày',
            'Tiêu hủy lợn chết ngay lập tức'
        ],
        treatment: [
            'KHÔNG CÓ thuốc điều trị',
            'KHÔNG CÓ vaccine phòng bệnh',
            'Phát hiện → Báo cáo → Tiêu hủy toàn đàn',
            'Sát trùng toàn bộ trang trại',
            'Để trống tối thiểu 40-60 ngày'
        ],
        relatedProducts: ['TV007', 'TV008']
    },
    {
        id: 'disease005',
        name: 'Tiêu chảy E.coli ở lợn con',
        slug: 'tieu-chay-ecoli-o-lon-con',
        category: 'gia-suc',
        animalType: 'Lợn',
        image: 'images/diseases/ecoli-pig.jpg',
        overview: {
            description: 'Tiêu chảy do E.coli là bệnh phổ biến ở lợn con, gây tỷ lệ chết cao nếu không điều trị kịp thời.',
            symptoms: [
                'Tiêu chảy phân vàng, trắng hoặc xám',
                'Mất nước nhanh, gầy sút',
                'Uể oải, nằm một chỗ',
                'Chết trong 2-3 ngày nếu không điều trị'
            ],
            causes: [
                'Vi khuẩn E.coli (nhiều chủng)',
                'Lây qua đường tiêu hóa',
                'Môi trường ô nhiễm, vệ sinh kém'
            ],
            riskFactors: [
                'Lợn con 1-3 tuần tuổi',
                'Lợn mẹ thiếu sữa, thiếu kháng thể',
                'Chuồng ẩm ướt, lạnh',
                'Stress do cai sữa sớm'
            ]
        },
        diagnosis: [
            'Triệu chứng: tiêu chảy cấp',
            'Nuôi cấy phân tìm E.coli',
            'Test kháng sinh đồ'
        ],
        prevention: [
            'Vệ sinh chuồng nuôi sạch sẽ',
            'Đảm bảo lợn con bú sữa non đầy đủ',
            'Giữ ấm cho lợn con',
            'Tiêm phòng vaccine cho lợn mẹ',
            'Bổ sung men vi sinh cho lợn mẹ'
        ],
        treatment: [
            'Kháng sinh: Colistin, Enrofloxacin',
            'Bù nước, điện giải',
            'Men vi sinh phục hồi đường ruột',
            'Cách ly lợn bệnh',
            'Sát trùng chuồng nuôi'
        ],
        relatedProducts: ['TV002', 'TV005', 'TV006']
    },

    // TÔM
    {
        id: 'disease006',
        name: 'Hội chứng hoại tử gan tụy cáp (EMS/AHPND)',
        slug: 'hoi-chung-hoai-tu-gan-tuy-cap-ems-ahpnd',
        category: 'tom',
        animalType: 'Tôm',
        image: 'images/diseases/ems-shrimp.jpg',
        overview: {
            description: 'EMS/AHPND là bệnh nguy hiểm ở tôm nuôi, gây tỷ lệ chết cao 40-100% trong giai đoạn đầu.',
            symptoms: [
                'Tôm bơi chậm, yếu',
                'Gan tụy teo nhỏ, màu trắng',
                'Ruột rỗng, không thức ăn',
                'Tôm chết hàng loạt sau 30-35 ngày nuôi',
                'Vỏ tôm mềm, đục'
            ],
            causes: [
                'Vi khuẩn Vibrio parahaemolyticus',
                'Độc tố đặc hiệu phá hủy tế bào gan tụy',
                'Lây qua nước, thức ăn'
            ],
            riskFactors: [
                'Mật độ nuôi quá cao',
                'Chất lượng nước kém',
                'Post-larvae nhiễm bệnh',
                'Thức ăn kém chất lượng',
                'Stress môi trường'
            ]
        },
        diagnosis: [
            'Triệu chứng lâm sàng',
            'Quan sát gan tụy teo, trắng',
            'PCR phát hiện độc tố Vibrio',
            'Mô bệnh học gan tụy'
        ],
        prevention: [
            'Chọn giống PL sạch bệnh, có PCR âm tính',
            'Kiểm soát mật độ nuôi hợp lý',
            'Quản lý chất lượng nước tốt',
            'Bổ sung men vi sinh định kỳ',
            'Sát trùng ao, dụng cụ',
            'Cho ăn đúng lượng, tránh dư thừa'
        ],
        treatment: [
            'Sử dụng kháng sinh theo chỉ định (Doxycycline, Florfenicol)',
            'Bổ sung men tiêu hóa, probiotic',
            'Vitamin C, E tăng sức đề kháng',
            'Cải thiện chất lượng nước',
            'Giảm lượng thức ăn',
            'Xử lý nước bằng BKC, Iodine'
        ],
        relatedProducts: ['TOM004', 'TOM005', 'TOM006', 'TOM007']
    },
    {
        id: 'disease007',
        name: 'Hội chứng đốm trắng (WSSV)',
        slug: 'hoi-chung-dom-trang-wssv',
        category: 'tom',
        animalType: 'Tôm',
        image: 'images/diseases/wssv.jpg',
        overview: {
            description: 'WSSV là bệnh virus nguy hiểm nhất ở tôm, lây lan cực nhanh, tỷ lệ chết lên đến 100%.',
            symptoms: [
                'Đốm trắng trên vỏ đầu ngực',
                'Tôm bơi yếu, ngượcsáng',
                'Ngừng ăn',
                'Chết hàng loạt sau 3-5 ngày',
                'Vỏ mềm, dễ bóc'
            ],
            causes: [
                'Virus WSSV (DNA virus)',
                'Lây cực nhanh qua nước',
                'Nguồn lây: tôm bệnh, tôm hoang, nước nhiễm'
            ],
            riskFactors: [
                'Post-larvae nhiễm virus',
                'Nước nguồn nhiễm bệnh',
                'Stress do thay đổi môi trường',
                'Mật độ nuôi quá cao'
            ]
        },
        diagnosis: [
            'Triệu chứng: đốm trắng trên vỏ',
            'PCR phát hiện virus WSSV',
            'Test nhanh WSSV'
        ],
        prevention: [
            'PCR kiểm tra PL trước thả',
            'Lọc nước nguồn kỹ',
            'Không nuôi chung nhiều lứa',
            'Kiểm soát động vật hoang',
            'Không thả mật độ cao',
            'Bổ sung vitamin, khoáng tăng sức đề kháng'
        ],
        treatment: [
            'KHÔNG CÓ thuốc điều trị đặc hiệu',
            'Phát hiện → Thu hoạch ngay',
            'Vitamin C liều cao (1-2g/kg thức ăn)',
            'Cải thiện môi trường nước',
            'Sau thu hoạch: Sát trùng ao, để khô'
        ],
        relatedProducts: ['TOM003', 'TOM006', 'TOM007']
    },

    // CÁ
    {
        id: 'disease008',
        name: 'Bệnh xuất huyết ở cá',
        slug: 'benh-xuat-huyet-o-ca',
        category: 'ca',
        animalType: 'Cá',
        image: 'images/diseases/fish-hemorrhage.jpg',
        overview: {
            description: 'Bệnh xuất huyết do vi khuẩn Aeromonas hydrophila gây ra, phổ biến ở cá nước ngọt.',
            symptoms: [
                'Xuất huyết đuôi, vây, thân',
                'Lở loét da, vảy',
                'Mắt lồi, bụng phình',
                'Bơi lờ đờ, nổi mặt nước',
                'Chết từ từ, kéo dài'
            ],
            causes: [
                'Vi khuẩn Aeromonas hydrophila',
                'Lây qua nước, tiếp xúc',
                'Môi trường ô nhiễm'
            ],
            riskFactors: [
                'Nước ô nhiễm, giàu chất hữu cơ',
                'Mật độ dày',
                'Cá bị thương do thao tác',
                'Thiếu oxy',
                'Stress nhiệt độ'
            ]
        },
        diagnosis: [
            'Triệu chứng xuất huyết, lở loét',
            'Nuôi cấy vi khuẩn từ thận, gan',
            'Kiểm tra chất lượng nước'
        ],
        prevention: [
            'Quản lý chất lượng nước tốt',
            'Không thả mật độ quá cao',
            'Cho ăn đủ dinh dưỡng',
            'Bổ sung vitamin C, E',
            'Xử lý nước định kỳ',
            'Sát trùng ao trước thả cá'
        ],
        treatment: [
            'Kháng sinh: Enrofloxacin, Florfenicol',
            'Trộn thức ăn: 50-100mg/kg cá, 5-7 ngày',
            'Tắm thuốc: KMnO4, BKC',
            'Thay nước, tăng oxy',
            'Bổ sung vitamin'
        ],
        relatedProducts: ['CA001', 'CA002']
    },
    {
        id: 'disease009',
        name: 'Bệnh ký sinh trùng Anchor worm (con neo)',
        slug: 'benh-ky-sinh-trung-anchor-worm',
        category: 'ca',
        animalType: 'Cá',
        image: 'images/diseases/anchor-worm.jpg',
        Overview: {
            description: 'Anchor worm (Lernaea) là ký sinh trùng móc vào da, cơ cá, gây viêm nhiễm, stress.',
            symptoms: [
                'Thấy ký sinh trùng hình chữ Y trên thân cá',
                'Vết thương, viêm đỏ tại chỗ bám',
                'Cá cọ xát vào thành ao',
                'Bơi khó khăn, giảm ăn',
                'Nhiễm khuẩn kế phát'
            ],
            causes: [
                'Ký sinh trùng giáp xác Lernaea',
                'Lây qua ao nhiễm ký sinh trùng',
                'Cá mới mua nhiễm bệnh'
            ],
            riskFactors: [
                'Ao nuôi cũ, không xử lý đúng cách',
                'Nước ô nhiễm',
                'Cá stress, sức đề kháng kém'
            ]
        },
        diagnosis: [
            'Quan sát trực tiếp ký sinh trùng trên cá',
            'Vết thương viêm nhiễm tại điểm bám'
        ],
        prevention: [
            'Xử lý ao kỹ trước thả cá',
            'Kiểm tra cá mới trước thả',
            'Bổ sung vitamin tăng sức đề kháng',
            'Quản lý chất lượng nước tốt'
        ],
        treatment: [
            'Praziquantel 5%: 1g/kg thức ăn, 5 ngày',
            'Tắm KMnO4: 2-5ppm, 30-60 phút',
            'Nhổ thủ công ký sinh trùng (ao nhỏ)',
            'Bôi Betadine vào vết thương',
            'Kháng sinh phòng nhiễm khuẩn kế phát'
        ],
        relatedProducts: ['CA002', 'CA001']
    }
];

// ==========================================
// DISEASE FILTERS & SEARCH
// ==========================================

function filterDiseases(filters = {}) {
    let results = [...DISEASES];

    // Filter by category (gia-cam, gia-suc, tom, ca)
    if (filters.category) {
        results = results.filter(d => d.category === filters.category);
    }

    // Filter by animal type
    if (filters.animalType) {
        results = results.filter(d =>
            d.animalType.toLowerCase().includes(filters.animalType.toLowerCase())
        );
    }

    // Search by keyword
    if (filters.keyword) {
        const keyword = filters.keyword.toLowerCase();
        results = results.filter(d =>
            d.name.toLowerCase().includes(keyword) ||
            d.overview.description.toLowerCase().includes(keyword)
        );
    }

    return results;
}

function getDiseaseById(id) {
    return DISEASES.find(d => d.id === id);
}

function getDiseaseBySlug(slug) {
    return DISEASES.find(d => d.slug === slug);
}

function getDiseasesByCategory(category) {
    return DISEASES.filter(d => d.category === category);
}
