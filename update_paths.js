const fs = require('fs');

let html = fs.readFileSync('d:/CUT/index.html', 'utf8');

// Remove extra css links
html = html.replace(/<link rel="stylesheet" href="header\/header\.css">\s*/g, '');
html = html.replace(/<link rel="stylesheet" href="Banner hero\/banner\.css">\s*/g, '');
html = html.replace(/<link rel="stylesheet" href="Section2\/section2\.css">\s*/g, '');

// Update image paths
html = html.replace(/src="https:\/\/ctech\.edu\.vn\/storage\/logo\/logo\.webp"/g, 'src="IMG/logo.webp"'); // Wait, logo.webp was an external link. The user probably wants me to leave it or update it. I'll leave external links.

html = html.replace(/src="images\/logo-ctech\.png"/g, 'src="IMG/logo-ctech.png"');
html = html.replace(/src="logoFooter\.png"/g, 'src="IMG/logoFooter.png"');
html = html.replace(/src="Banner2\.png"/g, 'src="IMG/Banner2.png"');

html = html.replace(/src="Banner hero\/student\.png"/g, 'src="IMG/student.png"');
html = html.replace(/src="Section2\/Section2 IMG\/([^"]+)"/g, 'src="IMG/$1"');
html = html.replace(/src="GV IMG\/([^"]+)"/g, 'src="IMG/GV IMG/$1"');
html = html.replace(/src="images\/section\/([^"]+)"/g, 'src="IMG/$1"');

// Wait, the banner hero background image is in CSS!
// I need to update style.css too!

fs.writeFileSync('d:/CUT/index.html', html, 'utf8');

// Update style.css
let css = fs.readFileSync('d:/CUT/css/style.css', 'utf8');
css = css.replace(/url\('\.\.\/Banner hero\/banner hero\.jpg'\)/g, "url('../IMG/banner hero.jpg')");
css = css.replace(/url\('\.\.\/Section2\/Section2 IMG\/section2\.jpg'\)/g, "url('../IMG/section2.jpg')");
fs.writeFileSync('d:/CUT/css/style.css', css, 'utf8');
