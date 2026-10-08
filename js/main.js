document.addEventListener("DOMContentLoaded", () => {
    
    // Xu ly form Hero
    const heroForm = document.getElementById("hero-form");
    if (heroForm) {
        heroForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Cam on ban! Dang ky hoc thu thanh cong.");
            heroForm.reset();
        });
    }

    // Xu ly form Bottom
    const bottomForm = document.getElementById("bottom-form");
    if (bottomForm) {
        bottomForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thong tin cua ban da duoc ghi nhan.");
            bottomForm.reset();
        });
    }
});
