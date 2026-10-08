const fs = require('fs');
let html = fs.readFileSync('d:/CUT/index.html', 'utf8');

const s7_8 = `
    <!-- ================= SECTION 7: LOCATION ================= -->
    <section class="sec-location">
        <div class="location-container">
            <div class="location-text">
                <h2>HỌC NGAY<br>TẠI CTECH</h2>
                <p>Thuận tiện cho học viên<br>khu vực Thường Tín, Phú Xuyên<br>và các khu vực lân cận</p>
            </div>
            <div class="location-map">
                <div class="real-map-placeholder">
                    <span class="map-text">Bản đồ Google Maps</span>
                </div>
            </div>
        </div>
        <div class="location-cta">
            <div class="cta-left">
                <h3>BẠN CHƯA BIẾT<br>NÊN HỌC<br>NGOẠI NGỮ NÀO?</h3>
            </div>
            <div class="cta-right">
                <h3>HÃY BẮT ĐẦU<br>VỚI 2 BUỔI<br>HỌC THỬ <span class="text-yellow">MIỄN PHÍ</span></h3>
            </div>
        </div>
    </section>

    <!-- ================= SECTION 8: FOOTER ================= -->
    <footer class="sec-footer">
        <div class="footer-container">
            <div class="footer-logo">
                <img src="images/logo-ctech.png" alt="CTECH">
            </div>
            <div class="footer-info">
                <h3>TRƯỜNG CAO ĐẲNG KỸ THUẬT - CÔNG NGHỆ BÁCH KHOA (CTECH)</h3>
                <p>CTECH ra đời với sứ mệnh đào tạo nguồn nhân lực chất lượng cao và góp phần nâng tầm giá trị con người Việt Nam. Nhà trường cam kết 100% sinh viên được phát triển toàn diện, thực hành doanh nghiệp, tạo cơ hội liên thông lên các bậc học cao hơn và tư vấn, giới thiệu việc làm sau tốt nghiệp</p>
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
                        Hải Phòng Building, 19 Trần Thủ Độ, phường Yên Sở, TP. Hà Nội<br>
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
        </div>
    </footer>
`;

html = html.replace(/<!-- ================= SECTION 7: LOCATION ================= -->[\s\S]*?<\/footer>/, s7_8.trim());

fs.writeFileSync('d:/CUT/index.html', html, 'utf8');
