const fs = require('fs');
let html = fs.readFileSync('d:/CUT/index.html', 'utf8');

const newFooterInfo = `
            <div class="footer-info">
                <h3>TRƯỜNG CAO ĐẲNG KỸ THUẬT - CÔNG NGHỆ BÁCH KHOA (CTECH)</h3>
                <p>CTECH ra đời với sứ mệnh đào tạo nguồn nhân lực chất lượng cao và góp phần nâng tầm giá trị con người Việt Nam.<br>Nhà trường cam kết 100% sinh viên được phát triển toàn diện, thực hành doanh nghiệp, tạo cơ hội liên thông lên các bậc học<br>cao hơn và tư vấn, giới thiệu việc làm sau tốt nghiệp</p>
                <div class="footer-columns">
                    <div class="col">
                        <h4>ĐỊA CHỈ</h4>
                        <p>Trụ sở chính: Số 60 QL1A, xã Thường Tín, thành phố Hà Nội<br>
                        Cơ sở đào tạo:<br>
                        Số 57 đường Cách Mạng Tháng Tám, phường Bình Thủy, TP. Cần Thơ<br>
                        143 Nguyễn Lương Bằng, quận Liên Chiểu, TP Đà Nẵng<br>
                        1A6/362 Khu phố Hòa Lân 2, phường Thuận Giao, TP.HCM</p>
                    </div>
                    <div class="col">
                        <h4>HỆ THỐNG VĂN PHÒNG TUYỂN SINH</h4>
                        <p>Số 60 QL1A, xã Thường Tín, thành phố Hà Nội<br>
                        Số 102 Phùng Hưng, phường Đông Ba, TP. Huế<br>
                        Hải Phong Building, 19 Trần Thủ Độ, phường Yên Sở, TP. Hà Nội<br>
                        Số 57 đường Cách Mạng Tháng Tám, phường Bình Thủy, TP. Cần Thơ</p>
                    </div>
                    <div class="col">
                        <h4>ĐIỆN THOẠI</h4>
                        <p>Tổng đài miễn phí: 0986301916<br>
                        Hotline: 0986301916<br>
                        Email: tuyensinh@ctech.edu.vn</p>
                    </div>
                </div>
            </div>
            <div class="footer-btn-container">
                <button class="footer-btn">ĐĂNG KÝ<br>HỌC THỬ</button>
            </div>
`;

html = html.replace(/<div class="footer-info">[\s\S]*?<\/div>\s*<\/div>\s*<\/footer>/, newFooterInfo.trim() + '\n        </div>\n    </footer>');

fs.writeFileSync('d:/CUT/index.html', html, 'utf8');
