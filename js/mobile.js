(() => {
  const formSuccessMessage = "Cảm ơn bạn! Thông tin đăng ký học thử đã được ghi nhận.";
  const formErrorMessage = "Vui lòng kiểm tra và điền đầy đủ thông tin hợp lệ.";

  document.querySelectorAll("[data-signup-form]").forEach((form) => {
    const status = form.querySelector("[data-form-status]");

    form.addEventListener("invalid", () => {
      if (!status) return;
      status.textContent = formErrorMessage;
      status.dataset.state = "error";
      status.hidden = false;
    }, true);

    form.addEventListener("input", () => {
      if (!status || status.dataset.state !== "error") return;
      status.hidden = true;
      status.textContent = "";
      delete status.dataset.state;
    });

    form.addEventListener("change", () => {
      if (!status || status.dataset.state !== "error") return;
      status.hidden = true;
      status.textContent = "";
      delete status.dataset.state;
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      if (status) {
        status.textContent = formSuccessMessage;
        status.dataset.state = "success";
        status.hidden = false;
      }
      form.reset();
    });
  });

  const classroomSlides = [
    { src: "IMG/Class1.png", alt: "Sinh viên CTECH học ngoại ngữ trong lớp", caption: "Ảnh lớp học 1" },
    { src: "IMG/Class2.png", alt: "Sinh viên CTECH tham gia hoạt động ngoại ngữ", caption: "Ảnh lớp học 2" },
    { src: "IMG/Class3.png", alt: "Sinh viên CTECH chăm chú học tập trong lớp", caption: "Ảnh lớp học 3" },
    { src: "IMG/Class4.png", alt: "Sinh viên CTECH thuyết trình trước lớp", caption: "Ảnh lớp học 4" },
  ];

  const teacherSlides = [
    {
      name: "GV HOÀNG LINH CHI",
      degree: "Cử nhân ngôn ngữ Nhật",
      bio: "Kinh nghiệm giảng dạy: 4 năm<br>Cử nhân loại Giỏi ngành<br>Sư phạm tiếng Nhật — ĐH Ngoại Ngữ",
      src: "IMG/GV IMG/Hong_Linh_Chi.png",
      alt: "Giảng viên Hoàng Linh Chi",
    },
    {
      name: "GV NGUYỄN THỊ THU TRANG",
      degree: "Cử nhân tiếng Hàn",
      bio: "Kinh nghiệm giảng dạy: 5 năm<br>Cử nhân Giỏi ĐH Nguyễn Trãi · TOPIK 6",
      src: "IMG/GV IMG/Nguyn_Th_Thu_Trang.png",
      alt: "Giảng viên Nguyễn Thị Thu Trang",
    },
    {
      name: "GV DƯƠNG ĐẠI RẠNG ĐÔNG",
      degree: "Cử nhân tiếng Trung Quốc",
      bio: "Kinh nghiệm giảng dạy: 4 năm<br>Cử nhân chuyên ngành ngôn ngữ Trung Quốc",
      src: "IMG/GV IMG/Dng_i_Rng_ng.png",
      alt: "Giảng viên Dương Đại Rạng Đông",
    },
    {
      name: "GV TÔ THỊ THÙY DƯƠNG",
      degree: "Cử nhân tiếng Trung Quốc",
      bio: "Kinh nghiệm giảng dạy: 5 năm<br>Cử nhân chuyên ngành ngôn ngữ Trung Quốc",
      src: "IMG/GV IMG/T_Th_Thy_Dng.png",
      alt: "Giảng viên Tô Thị Thùy Dương",
    },
    {
      name: "GV NGUYỄN THỊ VÂN ANH",
      degree: "Cử nhân tiếng Trung Quốc",
      bio: "Kinh nghiệm giảng dạy: 2 năm<br>04 năm làm phiên dịch doanh nghiệp",
      src: "IMG/GV IMG/Nguyn_Th_Vn_Anh.png",
      alt: "Giảng viên Nguyễn Thị Vân Anh",
    },
  ];

  function setupCarousel({ root, slides, initialIndex = 0, previousButton, nextButton, render }) {
    if (!root || slides.length < 2) return;

    let currentIndex = (initialIndex + slides.length) % slides.length;
    let transitionId = 0;

    const showSlide = (nextIndex) => {
      currentIndex = (nextIndex + slides.length) % slides.length;
      const activeTransition = ++transitionId;
      root.classList.add("is-transitioning");

      window.requestAnimationFrame(() => {
        render(slides[currentIndex], currentIndex, slides.length);
        window.requestAnimationFrame(() => {
          if (activeTransition === transitionId) root.classList.remove("is-transitioning");
        });
      });
    };

    previousButton?.addEventListener("click", () => showSlide(currentIndex - 1));
    nextButton?.addEventListener("click", () => showSlide(currentIndex + 1));

    root.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showSlide(currentIndex - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showSlide(currentIndex + 1);
      }
    });

    let pointerStartX = null;
    root.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse") return;
      pointerStartX = event.clientX;
    });
    root.addEventListener("pointerup", (event) => {
      if (pointerStartX === null) return;
      const distance = event.clientX - pointerStartX;
      pointerStartX = null;
      if (Math.abs(distance) < 45) return;
      showSlide(currentIndex + (distance < 0 ? 1 : -1));
    });
    root.addEventListener("pointercancel", () => {
      pointerStartX = null;
    });
  }

  const classroomRoot = document.querySelector('[data-carousel="classroom"]');
  setupCarousel({
    root: classroomRoot,
    slides: classroomSlides,
    initialIndex: 2,
    previousButton: classroomRoot?.querySelector("[data-carousel-prev]"),
    nextButton: classroomRoot?.querySelector("[data-carousel-next]"),
    render: (slide, index, total) => {
      const image = classroomRoot.querySelector("[data-carousel-image]");
      const caption = classroomRoot.querySelector("[data-carousel-caption]");
      image.src = slide.src;
      image.alt = slide.alt;
      caption.textContent = `${slide.caption} — ${index + 1}/${total}`;
      classroomRoot.setAttribute("aria-label", `Ảnh lớp học, ảnh ${index + 1} trên ${total}`);
    },
  });

  const teacherRoot = document.querySelector('[data-carousel="teachers"]');
  setupCarousel({
    root: teacherRoot,
    slides: teacherSlides,
    initialIndex: 0,
    previousButton: teacherRoot?.querySelector("[data-teacher-prev]"),
    nextButton: teacherRoot?.querySelector("[data-teacher-next]"),
    render: (slide, index, total) => {
      teacherRoot.querySelector("[data-teacher-image]").src = slide.src;
      teacherRoot.querySelector("[data-teacher-image]").alt = `${slide.alt}, ${index + 1} trên ${total}`;
      teacherRoot.querySelector("[data-teacher-name]").textContent = slide.name;
      teacherRoot.querySelector("[data-teacher-degree]").textContent = slide.degree;
      teacherRoot.querySelector("[data-teacher-bio]").innerHTML = slide.bio;
      teacherRoot.setAttribute("aria-label", `Đội ngũ giảng viên, giảng viên ${index + 1} trên ${total}`);
    },
  });
})();
