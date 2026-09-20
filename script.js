const warehousePosts = [
["۱","انبارداری چیست و چه اهمیتی دارد؟","مقدمه‌ای بر مفهوم انبارداری، اهمیت آن و نقش انبار در زنجیره تأمین."],
["۲","وظایف یک انباردار چیست؟","آشنایی با مهم‌ترین مسئولیت‌ها و فعالیت‌های روزانه یک انباردار."],
["۳","مهم‌ترین مهارت‌های یک انباردار حرفه‌ای","دقت، نظم، کنترل موجودی، کار با سیستم، ارتباط مؤثر و یادگیری مداوم."],
["۴","5S و FIFO؛ دو اصل مهم در مدیریت و نظم انبار","نگاهی کاربردی به نظم محیط و گردش صحیح کالا در انبار."],
["۵","اشتباهات رایج در انبارداری و راه‌های جلوگیری از آن‌ها","اشتباهات متداول و راهکارهای کاهش خطا در عملیات انبار."]
];

const experiencePosts = [
["۱","معرفی شرکت و جایگاه انبار تکمیل و بسته‌بندی","معرفی شرکت پویا گستر خراسان، پنج انبار مجموعه و جایگاه انبار تکمیل و بسته‌بندی."],
["۲","ساختار نیروی انسانی و شیفت‌های کاری","ساختار سه‌نفره تیم، ساعت کاری ۶ تا ۲۲ و مسئولیت‌های سرپرست و کارکنان."],
["۳","مدیریت زمان و برنامه کاری در انبار تکمیل و بسته‌بندی","تقسیم برنامه روزانه از ساعت ۶ تا ۱۸؛ از آمارگیری و خروجی تا دریافت، ثبت و جانمایی."],
["۴","سیستم شناسایی و مدیریت اقلام با لیبل‌های رنگی","شناخت اقلام سبز، قرمز، آبی و بنفش و نحوه برخورد با هر وضعیت."]
];

const modal = document.getElementById("modal");
const title = document.getElementById("modalTitle");
const body = document.getElementById("modalBody");

function renderPosts(items, targetId){
  const target = document.getElementById(targetId);
  target.innerHTML = items.map((p,i)=>`
    <article class="post-card">
      <span class="num">مطلب ${p[0]}</span>
      <h3>${p[1]}</h3>
      <p>${p[2]}</p>
      <button class="read-btn" data-type="${targetId}" data-index="${i}">مشاهده مطلب ←</button>
    </article>`).join("");
}
renderPosts(warehousePosts,"warehousePosts");
renderPosts(experiencePosts,"experiencePosts");

document.addEventListener("click", e=>{
  if(!e.target.matches(".read-btn")) return;
  const arr = e.target.dataset.type === "warehousePosts" ? warehousePosts : experiencePosts;
  const p = arr[Number(e.target.dataset.index)];
  title.textContent = p[1];
  body.innerHTML = `<p>${p[2]}</p><p>متن کامل این مطلب در نسخه محتوایی نهایی پروژه قرار می‌گیرد. ساختار سایت برای دریافت متن‌های کامل آماده است.</p>`;
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
});
document.getElementById("modalClose").onclick=()=>{modal.classList.remove("open");modal.setAttribute("aria-hidden","true")};
modal.addEventListener("click",e=>{if(e.target===modal) document.getElementById("modalClose").click()});

document.getElementById("langBtn").addEventListener("click",()=>{
  alert("نسخه انگلیسی در مرحله بعدی محتواگذاری می‌شود.");
});
