// Словарь переводов
const translations = {
    ru: {
        promoTitle: "СОЗДАТЬ СВОЙ САЙТ НА WORDPRESS",
        mainTitle: "ЭТО ПРОСТО!",
        subTitle: "КУДА СЛОЖНЕЕ СДЕЛАТЬ ЭТО ПРАВИЛЬНО!",
        description: "Ежедневно в России появляется более 5 000 новых сайтов.<br>И только единицы из них становятся популярными и приносят ощутимую прибыль. В чём секрет? В чём формула успеха? Узнайте на предстоящем двухдневном <span>БЕСПЛАТНОМ</span> интенсиве!",
        btnSignUp: "ЗАПИСАТЬСЯ НА ИНТЕНСИВ!",
        moreText: "УЗНАТЬ БОЛЬШЕ ОБ ИНТЕНСИВЕ",
        featuresTitle: "ЧТО ВАС ЖДЁТ В НАШЕМ ИНТЕНСИВЕ?",
        featuresSubtitle: "2 бесплатных полноценных обучающих вебинара, где:",
        feature1: "Всего за два бесплатныx вебинара мы научим вас, как создать свой сайт на WordPress.",
        feature2: "Покажем, как правильно оптимизировать сайт и сделать его привлекательным для поисковых систем. Только свежая, профессиональная и актуальная информация!",
        feature3: "Вы узнаете, что такое «хорошая индексация», «высокая посещаемость», «стабильный прирост посетителей», «ТОП по запросам» и, что намного важнее, как добиться всех этих показателей!",
        optTitle: "ЧТО ТАКОЕ ОПТИМИЗАЦИЯ И ЗАЧЕМ ОНА НУЖНА?",
        optP1: "На просторах интернета несметное количество действующих и даже заброшенных сайтов. Большинство из них совпадает не только по категориям, но и по содержанию.",
        optP2: "Представьте себе тысячи сайтов, на которых тем или иным образом предоставляется одна и та же информация или продается одна и та же услуга. И попасть на эти сайты можно лишь по тематическим запросам в поисковых системах.",
        optP3: "Но как вам быть, если ваш сайт похож на сотню или тысячу таких же, а на одной странице гугла или яндекса всего 10 позиций? Как привести посетителей страницы своего ресурса? Именно для этого и нужна оптимизация — для вывода вашего сайта на первую страницу поиска!",
        optHighlight: "Мы научим вас, как сделать ваш сайт привлекательным для поисковых систем и посоветуем, как вывести его на первые страницы, обходя всех конкурентов.",
        finishTitle: "ПО ОКОНЧАНИИ ОБУЧЕНИЯ ВЫ СМОЖЕТЕ!",
        finish1: "Создать свой сайт или блог",
        finish2: "Правильно его оптимизировать",
        finish3: "Обеспечить ему медленный, но верный рост в ТОП",
        finish4: "Достигнуть стабильного прироста посетителей",
        finish5: "Получать ощутимую прибыль",
        giftText: "Для всех участников интенсива предусмотрены бонусы и подарки. Нажимайте на кнопку ниже, принимайте участие в вебинарах и забирайте свой приз по окончании обучения!",
        webinarTitle: "ПЕРВЫЙ ВЕБИНАР СОСТОИТСЯ:",
        webinarDate: "10 СЕНТЯБРЯ В 20:00 ПО МОСКВЕ",
        webinarSub: "Успейте записаться, количество мест ограничено!",
        support: "Служба поддержки",
        privacy: "Политика конфиденциальности",
        callUs: "Позвоните нам"
    },
    kk: {
        promoTitle: "WORDPRESS-ТЕ ӨЗ САЙТЫҢЫЗДЫ ЖАСАУ",
        mainTitle: "БҰЛ ОҢАЙ!",
        subTitle: "БҰНЫ ДҰРЫС ЖАСАУ АЛДЕҚАЙДА КҮРДЕЛІРЕК!",
        description: "Күн сайын мыңдаған жаңа сайттар пайда болады.<br>Олардың тек санаулысы ғана танымал болып, пайда әкеледі. Құпиясы неде? Табыс формуласы қандай? Алдағы екі күндік <span>ТЕГІН</span> интенсивте біліңіз!",
        btnSignUp: "ИНТЕНСИВКЕ ЖАЗЫЛУ!",
        moreText: "ИНТЕНСИВ ТУРАЛЫ ТОЛЫҒЫРАҚ БІЛУ",
        featuresTitle: "БІЗДІҢ ИНТЕНСИВТЕ СІЗДІ НЕ КҮТЕДІ?",
        featuresSubtitle: "2 тегін толыққанды оқыту вебинары:",
        feature1: "Екі тегін вебинарда біз сізге WordPress-те өз сайтыңызды қалай жасау керектігін үйретеміз.",
        feature2: "Сайтты қалай дұрыс оңтайландыруды және оны іздеу жүйелері үшін тартымды етуді көрсетеміз. Тек өзекті ақпарат!",
        feature3: "Сіз жақсы индекстеу, жоғары қатысушылық және ТОП-қа шығу көрсеткіштеріне қалай жетуге болатынын білесіз!",
        optTitle: "ОҢТАЙЛАНДЫРУ ДЕГЕН НЕ ЖӘНЕ ОЛ НЕ ҮШІН ҚАЖЕТ?",
        optP1: "Интернетте мыңдаған жұмыс істейтін және тіпті қараусыз қалған сайттар бар.",
        optP2: "Елестетіп көрсеңіз, бірдей ақпарат беретін мыңдаған сайттар бар. Оларға тек іздеу жүйелері арқылы кіруге болады.",
        optP3: "Іздеу жүйесінің бір бетінде тек 10 орын бар. Сайтқа келушілерді қалай тартуға болады? Оңтайландыру дәл осы үшін керек!",
        optHighlight: "Біз сізге сайтыңызды іздеу жүйелеріне тартымды етуді және оны бірінші беттерге шығаруды үйретеміз.",
        finishTitle: "ОҚУДЫ АЯҚТАҒАН СӨҢ СІЗ ДАҒДЫЛАНАСЫЗ:",
        finish1: "Өз сайтыңызды немесе блогыңызды құру",
        finish2: "Оны дұрыс оңтайландыру",
        finish3: "Тұрақты түрде ТОП-қа көтеру",
        finish4: "Келушілердің тұрақты өсуіне жету",
        finish5: "Нақты пайда табу",
        giftText: "Барлық қатысушыларға бонустар мен сыйлықтар қарастырылған. Төмендегі батырманы басып, вебинарға қатысыңыз!",
        webinarTitle: "БІРІНШІ ВЕБИНАР ӨТЕДІ:",
        webinarDate: "10 ҚЫРКҮЙЕК САҒАТ 20:00-ДЕ (МСК)",
        webinarSub: "Жазылып үлгеріңіз, орындар шектеулі!",
        support: "Қолдау қызметі",
        privacy: "Құпиялылық саясаты",
        callUs: "Бізге телефон соғыңыз"
    },
    en: {
        promoTitle: "CREATE YOUR WEBSITE ON WORDPRESS",
        mainTitle: "IT IS SIMPLE!",
        subTitle: "DOING IT RIGHT IS MUCH HARDER!",
        description: "Thousands of new websites appear online every day.<br>Only a few become popular and generate real profit. What's the secret? Learn at our upcoming 2-day <span>FREE</span> intensive!",
        btnSignUp: "REGISTER FOR INTENSIVE!",
        moreText: "LEARN MORE ABOUT INTENSIVE",
        featuresTitle: "WHAT AWAITS YOU IN OUR INTENSIVE?",
        featuresSubtitle: "2 free full-fledged training webinars where:",
        feature1: "In just two free webinars, we will teach you how to create your website on WordPress.",
        feature2: "We will show you how to correctly optimize your website for search engines. Fresh, professional information only!",
        feature3: "You will learn what good indexing, high traffic, and TOP rankings are, and how to achieve them!",
        optTitle: "WHAT IS OPTIMIZATION AND WHY DO YOU NEED IT?",
        optP1: "There are countless active and abandoned websites on the Internet.",
        optP2: "Imagine thousands of sites offering the same information or service.",
        optP3: "Google has only 10 positions on the first page. How to bring visitors to your resource? That's exactly why optimization is needed!",
        optHighlight: "We will teach you how to make your website attractive to search engines and reach the top rankings.",
        finishTitle: "UPON COMPLETION YOU WILL BE ABLE TO:",
        finish1: "Create your own website or blog",
        finish2: "Optimize it properly",
        finish3: "Ensure steady growth to the TOP",
        finish4: "Achieve stable traffic growth",
        finish5: "Earn real profit",
        giftText: "Bonuses and gifts are provided for all participants. Click the button below, participate and claim your prize!",
        webinarTitle: "FIRST WEBINAR WILL TAKE PLACE:",
        webinarDate: "SEPTEMBER 10 AT 20:00 (MSK)",
        webinarSub: "Hurry up to register, seats are limited!",
        support: "Support Service",
        privacy: "Privacy Policy",
        callUs: "Call us"
    }
};

// Функция переключения языка
function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
}

// Навешиваем событие клика на кнопки переключателя
document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const selectedLang = btn.getAttribute("data-lang");
        setLanguage(selectedLang);
    });
});

// Логика работы кнопки "Наверх"
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});