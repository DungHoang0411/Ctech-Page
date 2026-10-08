const fs = require('fs');
let html = fs.readFileSync('d:/CUT/index.html', 'utf8');

const replacement = '<div class="bottom-form-text">\n    <h2><span class="text-3d">ĐĂNG KÍ</span><br><span class="text-3d">HỌC THỬ</span><br><span class="text-giant">0Đ</span></h2>\n</div>';

// Find the bottom-form-text div and replace it entirely
html = html.replace(/<div class="bottom-form-text">[\s\S]*?<\/div>/, replacement);

fs.writeFileSync('d:/CUT/index.html', html, 'utf8');
