/* ==================================================
   منِ مجازی | Mohammad Javad Mahmoudi
   script.js
================================================== */


/* ==================================================
   DATA
================================================== */

/* ------------------------------
   مطالب انبارداری
------------------------------ */

const warehousePosts = [

  {
    number: "۰۱",
    title: "اصول نظم و چیدمان در انبار",
    category: "انبارداری",
    text: `
      <p>
        نظم و چیدمان صحیح یکی از مهم‌ترین عوامل در مدیریت
        یک انبار کارآمد است.
      </p>

      <p>
        محل قرارگیری کالاها باید به شکلی باشد که دسترسی
        به آن‌ها سریع، ایمن و قابل کنترل باشد.
      </p>

      <p>
        مشخص بودن محل هر کالا، استفاده از کدگذاری مناسب
        و رعایت مسیرهای تردد می‌تواند باعث کاهش خطا و
        افزایش سرعت فعالیت‌های انبار شود.
      </p>
    `
  },


  {
    number: "۰۲",
    title: "مدیریت موجودی و کنترل کالا",
    category: "مدیریت موجودی",
    text: `
      <p>
        کنترل موجودی یکی از بخش‌های مهم فعالیت روزانه
        در هر انبار است.
      </p>

      <p>
        موجودی باید به صورت منظم بررسی شود تا اختلاف بین
        موجودی واقعی و اطلاعات ثبت‌شده کاهش پیدا کند.
      </p>

      <p>
        ثبت دقیق ورود و خروج کالا و انجام شمارش‌های دوره‌ای
        نقش مهمی در کنترل موجودی دارد.
      </p>
    `
  },


  {
    number: "۰۳",
    title: "اهمیت FIFO در مدیریت انبار",
    category: "FIFO",
    text: `
      <p>
        روش FIFO به معنی «اولین ورود، اولین خروج» است.
      </p>

      <p>
        استفاده صحیح از این روش کمک می‌کند کالاهایی که
        زودتر وارد انبار شده‌اند، در اولویت مصرف یا خروج
        قرار بگیرند.
      </p>

      <p>
        رعایت FIFO به‌خصوص برای کالاهایی که تاریخ مصرف
        یا شرایط نگهداری خاص دارند اهمیت زیادی دارد.
      </p>
    `
  },


  {
    number: "۰۴",
    title: "۵S و تأثیر آن بر محیط انبار",
    category: "۵S",
    text: `
      <p>
        اجرای اصول ۵S می‌تواند محیط انبار را منظم‌تر،
        ایمن‌تر و قابل کنترل‌تر کند.
      </p>

      <p>
        حذف موارد غیرضروری، نظم‌دهی، پاکیزگی و استانداردسازی
        از جمله مواردی هستند که در این روش مورد توجه قرار می‌گیرند.
      </p>

      <p>
        اجرای مستمر این اصول باعث می‌شود نظم ایجادشده
        در انبار حفظ شود.
      </p>
    `
  },


  {
    number: "۰۵",
    title: "اهمیت ثبت دقیق ورود و خروج کالا",
    category: "کنترل انبار",
    text: `
      <p>
        هر ورود و خروج کالا باید به شکل دقیق و قابل پیگیری
        ثبت شود.
      </p>

      <p>
        ثبت صحیح اطلاعات باعث می‌شود وضعیت موجودی در هر
        لحظه قابل بررسی باشد.
      </p>

      <p>
        کاهش خطا، افزایش قابلیت پیگیری و تصمیم‌گیری بهتر
        از نتایج ثبت دقیق اطلاعات در انبار است.
      </p>
    `
  }

];


/* ------------------------------
   تجربه من در انبار تکمیل
------------------------------ */

const experiencePosts = [

  {
    number: "۰۱",
    title: "شروع فعالیت من در حوزه انبار",
    category: "تجربه شخصی",
    text: `
      <p>
        ورود من به حوزه انبار باعث شد نگاه متفاوتی نسبت به
        نظم، مسئولیت‌پذیری و مدیریت پیدا کنم.
      </p>

      <p>
        فعالیت در محیط واقعی انبار تجربه‌هایی به همراه داشت
        که بسیاری از آن‌ها فقط از طریق کار عملی قابل یادگیری هستند.
      </p>
    `
  },


  {
    number: "۰۲",
    title: "مدیریت انبار تکمیل و بسته‌بندی",
    category: "تجربه کاری",
    text: `
      <p>
        مدیریت انبار تکمیل و بسته‌بندی نیازمند هماهنگی
        بین موجودی، نیروی انسانی و فعالیت‌های روزانه است.
      </p>

      <p>
        برنامه‌ریزی مناسب و مشخص بودن وظایف می‌تواند
        تأثیر زیادی بر روند کار داشته باشد.
      </p>
    `
  },


  {
    number: "۰۳",
    title: "چالش‌های روزانه در انبار",
    category: "چالش‌های کاری",
    text: `
      <p>
        در محیط انبار هر روز می‌تواند با شرایط متفاوتی همراه باشد.
      </p>

      <p>
        کمبود فضا، تغییر اولویت‌ها، حجم کاری و هماهنگی
        بین بخش‌های مختلف از جمله موضوعاتی هستند که
        نیاز به تصمیم‌گیری و مدیریت دارند.
      </p>

      <p>
        تجربه کاری کمک می‌کند برای چنین شرایطی راهکارهای
        مناسب‌تری پیدا شود.
      </p>
    `
  },


  {
    number: "۰۴",
    title: "تجربه من از مدیریت نیروی انسانی",
    category: "مدیریت",
    text: `
      <p>
        نیروی انسانی یکی از مهم‌ترین بخش‌های هر مجموعه کاری است.
      </p>

      <p>
        تقسیم درست وظایف، ارتباط مناسب و توجه به توانایی‌های
        افراد می‌تواند به بهتر شدن روند فعالیت‌ها کمک کند.
      </p>

      <p>
        بخشی از تجربه من در این مسیر، یادگیری همین موضوعات
        در محیط واقعی کار بوده است.
      </p>
    `
  }

];


/* ------------------------------
   دفتر خاطرات
------------------------------ */

const diaryPosts = [

  {
    number: "۰۱",
    title: "یک روز معمولی در مسیر کاری من",
    category: "دفتر خاطرات",
    text: `
      <p>
        بعضی روزها اتفاق خاصی نمی‌افتد، اما همان روزهای
        معمولی هم می‌توانند چیزهای زیادی برای یاد گرفتن داشته باشند.
      </p>

      <p>
        گاهی کافی است کمی به اتفاقات روزمره نگاه کنیم تا
        نکته‌ای جدید پیدا کنیم.
      </p>
    `
  },


  {
    number: "۰۲",
    title: "فکرهایی درباره آینده",
    category: "دفتر خاطرات",
    text: `
      <p>
        آینده همیشه ترکیبی از برنامه‌ریزی، تجربه و اتفاقات
        غیرمنتظره است.
      </p>

      <p>
        چیزی که برای من اهمیت دارد این است که یادگیری را
        متوقف نکنم و قدم‌به‌قدم جلو بروم.
      </p>
    `
  },


  {
    number: "۰۳",
    title: "چالش‌ها و فرصت‌ها",
    category: "دفتر خاطرات",
    text: `
      <p>
        هر چالش می‌تواند فرصتی برای یادگیری و تجربه بیشتر باشد.
      </p>

      <p>
        شاید همیشه نتوانیم شرایط را تغییر دهیم،
        اما می‌توانیم نحوه برخورد خودمان با آن را بهتر کنیم.
      </p>
    `
  },


  {
    number: "۰۴",
    title: "چرا هنوز ادامه می‌دهم؟",
    category: "دفتر خاطرات",
    text: `
      <p>
        ادامه دادن همیشه به معنی ساده بودن مسیر نیست.
      </p>

      <p>
        گاهی علاقه به یادگیری، ساختن و بهتر شدن باعث می‌شود
        حتی در روزهای سخت هم مسیر را ادامه دهیم.
      </p>
    `
  }

];


/* ==================================================
   DOM
================================================== */

const warehouseContainer =
  document.getElementById("warehousePosts");

const experienceContainer =
  document.getElementById("experiencePosts");

const modal =
  document.getElementById("modal");

const modalClose =
  document.getElementById("close");

const modalNumber =
  document.getElementById("mn");

const modalTitle =
  document.getElementById("mt");

const modalBody =
  document.getElementById("mb");



/* ==================================================
   CREATE POST CARD
================================================== */

function createPostCard(post) {

  const article = document.createElement("article");

  article.className = "post-card reveal";


  article.innerHTML = `

    <div class="post-number">
      ${post.number}
    </div>

    <div class="post-content">

      <span class="post-category">
        ${post.category}
      </span>

      <h3>
        ${post.title}
      </h3>

      <p>
        ${getPreview(post.text)}
      </p>

      <button
        class="post-button"
        type="button"
      >
        مطالعه مطلب
        <span>←</span>
      </button>

    </div>

  `;


  const button =
    article.querySelector(".post-button");


  button.addEventListener("click", () => {

    openModal(post);

  });


  return article;
}



/* ==================================================
   TEXT PREVIEW
================================================== */

function getPreview(html) {

  const temporary =
    document.createElement("div");

  temporary.innerHTML = html;

  const text =
    temporary.textContent
      .replace(/\s+/g, " ")
      .trim();

  if (text.length > 120) {

    return text.substring(0, 120) + "...";

  }

  return text;
}



/* ==================================================
   RENDER POSTS
================================================== */

function renderPosts(container, posts) {

  if (!container) return;


  container.innerHTML = "";


  posts.forEach(post => {

    container.appendChild(
      createPostCard(post)
    );

  });

}



/* ==================================================
   RENDER ALL
================================================== */

renderPosts(
  warehouseContainer,
  warehousePosts
);


renderPosts(
  experienceContainer,
  experiencePosts
);



/* ==================================================
   MODAL
================================================== */

function openModal(post) {

  if (!modal) return;


  modalNumber.textContent =
    `${post.number} | ${post.category}`;


  modalTitle.textContent =
    post.title;


  modalBody.innerHTML =
    post.text;


  modal.classList.add("show");


  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "modal-open"
  );

}



function closeModal() {

  if (!modal) return;


  modal.classList.remove("show");


  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.classList.remove(
    "modal-open"
  );

}



/* ==================================================
   CLOSE BUTTON
================================================== */

if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeModal
  );

}



/* ==================================================
   CLICK OUTSIDE MODAL
================================================== */

if (modal) {

  modal.addEventListener(
    "click",
    event => {

      if (
        event.target === modal
      ) {

        closeModal();

      }

    }
  );

}



/* ==================================================
   ESC KEY
================================================== */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeModal();

    }

  }
);



/* ==================================================
   SMOOTH SCROLL
================================================== */

document.querySelectorAll(
  'a[href^="#"]'
).forEach(link => {

  link.addEventListener(
    "click",
    function(event) {

      const targetId =
        this.getAttribute("href");


      if (
        !targetId ||
        targetId === "#"
      ) {

        return;

      }


      const target =
        document.querySelector(targetId);


      if (!target) return;


      event.preventDefault();


      target.scrollIntoView({

        behavior: "smooth",

        block: "start"

      });

    }
  );

});



/* ==================================================
   HEADER ACTIVE LINK
================================================== */

const sections =
  document.querySelectorAll(
    "main section[id]"
  );


const navLinks =
  document.querySelectorAll(
    ".main-nav a"
  );


const sectionObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (
          entry.isIntersecting
        ) {

          const currentId =
            entry.target.getAttribute(
              "id"
            );


          navLinks.forEach(link => {

            link.classList.remove(
              "active"
            );


            const href =
              link.getAttribute(
                "href"
              );


            if (
              href ===
              `#${currentId}`
            ) {

              link.classList.add(
                "active"
              );

            }

          });

        }

      });

    },

    {
      threshold: 0.35
    }

  );


sections.forEach(section => {

  sectionObserver.observe(
    section
  );

});



/* ==================================================
   SCROLL REVEAL
================================================== */

const revealObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "visible"
            );


            revealObserver.unobserve(
              entry.target
            );

          }

        }
      );

    },

    {
      threshold: 0.12
    }

  );


function observeRevealElements() {

  document
    .querySelectorAll(".reveal")
    .forEach(element => {

      revealObserver.observe(
        element
      );

    });

}


observeRevealElements();



/* ==================================================
   CARD STAGGER ANIMATION
================================================== */

function addCardDelay() {

  document
    .querySelectorAll(
      ".cards .post-card"
    )
    .forEach(
      (card, index) => {

        card.style.setProperty(
          "--delay",
          `${index * 0.08}s`
        );

      }
    );

}


addCardDelay();



/* ==================================================
   THEME TOGGLE
================================================== */

const themeButton =
  document.querySelector(
    ".theme-toggle"
  );


const savedTheme =
  localStorage.getItem(
    "site-theme"
  );


if (
  savedTheme === "light"
) {

  document.body.classList.add(
    "light-theme"
  );

}



if (themeButton) {

  themeButton.addEventListener(
    "click",
    () => {

      document.body.classList.toggle(
        "light-theme"
      );


      const isLight =
        document.body.classList.contains(
          "light-theme"
        );


      localStorage.setItem(
        "site-theme",
        isLight
          ? "light"
          : "dark"
      );

    }
  );

}



/* ==================================================
   LANGUAGE BUTTON
================================================== */

const languageButton =
  document.querySelector(
    ".language-switch"
  );


if (languageButton) {

  languageButton.addEventListener(
    "click",
    () => {

      /*
        فعلاً زبان انگلیسی فعال نیست.
        این بخش را بعداً با هم کامل می‌کنیم.
      */

      alert(
        "نسخه انگلیسی سایت در مرحله بعد اضافه می‌شود."
      );

    }
  );

}



/* ==================================================
   PARALLAX HERO
================================================== */

const hero =
  document.querySelector(
    ".hero-section"
  );


const heroBackground =
  document.querySelector(
    ".hero-background"
  );


if (
  hero &&
  heroBackground
) {

  window.addEventListener(
    "scroll",
    () => {

      const scroll =
        window.scrollY;


      if (
        scroll < window.innerHeight
      ) {

        heroBackground.style.transform =
          `translateY(${scroll * 0.18}px)`;

      }

    },
    {
      passive: true
    }
  );

}



/* ==================================================
   HEADER SCROLL EFFECT
================================================== */

const header =
  document.querySelector(
    ".site-header"
  );


function updateHeader() {

  if (!header) return;


  if (
    window.scrollY > 40
  ) {

    header.classList.add(
      "scrolled"
    );

  } else {

    header.classList.remove(
      "scrolled"
    );

  }

}


window.addEventListener(
  "scroll",
  updateHeader,
  {
    passive: true
  }
);


updateHeader();



/* ==================================================
   IMAGE LOADING EFFECT
================================================== */

document
  .querySelectorAll("img")
  .forEach(image => {

    image.addEventListener(
      "load",
      () => {

        image.classList.add(
          "loaded"
        );

      }
    );

  });



/* ==================================================
   DIARY LIST INTERACTION
================================================== */

document
  .querySelectorAll(
    ".diary-list a"
  )
  .forEach(link => {

    link.addEventListener(
      "click",
      event => {

        /*
          فعلاً لینک‌های دفتر خاطرات
          به بخش diary می‌روند.
          بعداً می‌توانیم هر نوشته را
          به یک صفحه یا Modal جدا تبدیل کنیم.
        */

        const href =
          link.getAttribute("href");


        if (
          href === "#diary"
        ) {

          const diary =
            document.querySelector(
              "#diary"
            );


          if (diary) {

            event.preventDefault();

            diary.scrollIntoView({
              behavior: "smooth"
            });

          }

        }

      }
    );

  });



/* ==================================================
   CONSOLE
================================================== */

console.log(
  "منِ مجازی | Mohammad Javad Mahmoudi"
);

console.log(
  "Website initialized successfully."
);
