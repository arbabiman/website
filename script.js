// مدیریت منوی همبرگری در نسخه موبایل
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("show"));
});

// سیستم انیمیشن ورود زمان اسکرول با استفاده از IntersectionObserver (تغییر بند ۸)
const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // اضافه کردن کلاس شو برای شروع انیمیشن نرم سی‌اس‌اس
      entry.target.classList.add("show-animate");
      // پس از لود انیمیشن، آبزرور را متوقف می‌کنیم تا پرفورمنس مرورگر حفظ شود
      animationObserver.unobserve(entry.target);
    }
  });
}, {
  // انیمیشن زمانی فعال می‌شود که حداقل ۱۰ درصد سکشن وارد صفحه شده باشد
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
});

// فعال‌سازی روی تمام بخش‌هایی که کلاس انیمیشن دارند
document.querySelectorAll(".hidden-animate").forEach((section) => {
  animationObserver.observe(section);
});

let lastScrollTop = 0;
const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > 150) {
    navbar.style.transform = "translateY(-150%)"; // مخفی شدن در اسکرول به پایین
  } else {
    navbar.style.transform = "translateY(0)"; // ظاهر شدن در اسکرول به بالا
  }
  lastScrollTop = scrollTop;
});
