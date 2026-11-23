const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const languageToggle = document.querySelector(".language-toggle");

const englishText = {
  "Н": "N",
  "нарын": "naryn",
  "Меню": "Menu",
  "Куда поехать": "Places to visit",
  "Маршруты": "Routes",
  "Где остановиться": "Where to stay",
  "Перед поездкой": "Before you go",
  "Выбрать маршрут": "Choose a route",
  "Кыргызстан · Нарынская область": "Kyrgyzstan · Naryn Region",
  "Нарын.": "Naryn.",
  "Ближе к небу.": "Closer to the sky.",
  "Дороги уходят к облакам, юрты становятся домом, а тишина — частью путешествия. Собрали главное, чтобы вы открыли Нарын своим темпом.": "Roads wind into the clouds, yurts become home, and silence becomes part of the journey. Here is what you need to discover Naryn at your own pace.",
  "Открыть путеводитель": "Explore the guide",
  "41°25′ с. ш. 76°00′ в. д.": "41°25′ N 76°00′ E",
  "Нарынская долина · Кыргызстан": "Naryn Valley · Kyrgyzstan",
  "Путешествие начинается здесь": "Your journey starts here",
  "с. ш.": "N",
  "Место встречи гор и дороги": "Where the mountains meet the road",
  "Горы ближе,": "The mountains",
  "чем кажутся.": "are closer than they seem.",
  "Нарын — высокогорный город и отправная точка к самым тихим уголкам Кыргызстана. Сюда едут не за спешкой: за дорогой через перевалы, озером под открытым небом и гостеприимством, которое запоминается.": "Naryn is a high-altitude town and a gateway to some of Kyrgyzstan’s most peaceful places. Come for mountain passes, open skies above the lakes, and hospitality you’ll remember.",
  "Планировать поездку": "Plan your trip",
  "м": "m",
  "высота города над морем": "the town’s elevation above sea level",
  "времени года для приключений": "seasons for adventure",
  "дорога — и вы уже в горах": "road to the mountains",
  "Нарынская область в цифрах": "Naryn Region at a glance",
  "Увидеть своими глазами": "See it for yourself",
  "Места, ради которых": "Places worth",
  "стоит свернуть с дороги": "taking the scenic route",
  "От древних караванных путей до озёр на высоте облаков — выбирайте своё направление.": "From ancient caravan routes to lakes above the clouds, choose where the road takes you.",
  "Таш-Рабат на карте": "Tash Rabat on the map",
  "· Нарынский район": "· Naryn District",
  "Таш-Рабат": "Tash Rabat",
  "Каменный караван-сарай в высокогорной долине. Здесь когда-то останавливались путники Великого шёлкового пути.": "A stone caravanserai in a high mountain valley, where travellers on the Silk Road once stopped to rest.",
  "Открыть Таш-Рабат на карте": "Open Tash Rabat on the map",
  "Озеро Сон-Куль на карте": "Song-Kol Lake on the map",
  "· Сон-Куль": "· Song-Kol",
  "Озеро Сон-Куль": "Song-Kol Lake",
  "Летние пастбища, юрты и простор, которому не видно края.": "Summer pastures, yurts, and wide-open horizons.",
  "Открыть Сон-Куль на карте": "Open Song-Kol on the map",
  "Озеро Кель-Суу на карте": "Kel-Suu Lake on the map",
  "· Ат-Башинский район": "· At-Bashy District",
  "Кель-Суу": "Kel-Suu",
  "Бирюзовое озеро среди отвесных скал. Путь сюда требует подготовки и проверки пропускного режима.": "A turquoise lake surrounded by steep cliffs. Plan ahead and check permit requirements before travelling.",
  "Открыть Кель-Суу на карте": "Open Kel-Suu on the map",
  "Планы меняются с погодой: уточняйте состояние дорог и доступ к приграничным территориям перед выездом.": "Plans can change with the weather. Check road conditions and access to border areas before setting off.",
  "Дорога ведёт к озёрам, горным пастбищам и местам, где хочется задержаться.": "The road leads to lakes, mountain pastures, and places you’ll want to stay a little longer.",
  "В дорогу — без спешки": "Take the road at your own pace",
  "ПУТЕВОДИТЕЛЬ": "A GUIDE TO",
  "ПО ВНУТРЕННЕМУ": "THE INNER",
  "ТЯНЬ-ШАНЮ": "TIAN SHAN",
  "Соберите свой путь": "Find your own way",
  "Три маршрута.": "Three routes.",
  "Тысяча впечатлений.": "A thousand memories.",
  "Расстояния в горах обманчивы: закладывайте запас времени и заранее проверяйте дорогу.": "Mountain distances can be deceiving. Allow extra time and check road conditions before you go.",
  "Нарын — Таш-Рабат": "Naryn — Tash Rabat",
  "История и горные долины": "History and mountain valleys",
  "1 день": "1 day",
  "≈ 110 км": "≈ 110 km",
  "Маршрут Нарын — Таш-Рабат": "Route: Naryn — Tash Rabat",
  "Нарын — Сон-Куль": "Naryn — Song-Kol",
  "Перевалы и кочевое лето": "Mountain passes and nomadic summer",
  "2 дня": "2 days",
  "≈ 130 км": "≈ 130 km",
  "Маршрут Нарын — Сон-Куль": "Route: Naryn — Song-Kol",
  "Нарын — Кель-Суу": "Naryn — Kel-Suu",
  "Дикая природа и приграничье": "Wild landscapes and border country",
  "2–3 дня": "2–3 days",
  "≈ 160 км": "≈ 160 km",
  "Маршрут Нарын — Кель-Суу": "Route: Naryn — Kel-Suu",
  "Километраж приблизительный. Для Сон-Куля и Кель-Суу учитывайте сезон, состояние грунтовых дорог и необходимость подходящего транспорта. Маршрут на карте не заменяет местные рекомендации.": "Distances are approximate. For Song-Kol and Kel-Suu, consider the season, unpaved road conditions, and the vehicle you’ll need. Map directions are no substitute for local advice.",
  "Тёплый приём — часть пути": "A warm welcome is part of the journey",
  "Где переночевать": "Where to stay",
  "и вкусно поесть": "and what to eat",
  "В городе выбирайте гостевые дома и небольшие гостиницы, в горах — юрточные лагеря, которые работают в сезон.": "Choose a guesthouse or small hotel in town, or stay at a seasonal yurt camp in the mountains.",
  "Посмотреть жильё на карте": "Find places to stay",
  "В городе": "In town",
  "Гостевые дома Нарына": "Naryn guesthouses",
  "Уютная база перед выездом в горы. Уточните отопление, завтрак и трансфер при бронировании.": "A comfortable base before heading into the mountains. Ask about heating, breakfast, and transfers when booking.",
  "Найти на карте": "Find on map",
  "Летом": "Summer",
  "Юрточные лагеря": "Yurt camps",
  "На Сон-Куле и у Таш-Рабата ночуют в юртах. Сезон короткий — места и условия лучше уточнить заранее.": "Stay in a yurt by Song-Kol or Tash Rabat. The season is short, so check availability and facilities in advance.",
  "Местная кухня": "Local food",
  "Кафе и чайханы": "Cafés and teahouses",
  "В центре Нарына ищите домашнюю кухню, горячий чай и блюда из теста. Часы работы могут меняться.": "In central Naryn, look for home-style cooking, hot tea, and local dough dishes. Opening hours may vary.",
  "Небольшая памятка": "A few useful tips",
  "Чтобы поездка": "Make your trip",
  "удалась": "a good one",
  "Выбирайте сезон": "Choose the right season",
  "Высокогорные маршруты обычно доступны летом и в начале осени. Погода может резко измениться даже в июле.": "High mountain routes are usually accessible in summer and early autumn. The weather can change quickly, even in July.",
  "Берите тёплые вещи": "Pack warm layers",
  "На высоте прохладно ночью. Запас воды, наличные и тёплый слой одежды пригодятся всегда.": "Nights are cold at altitude. Bring water, cash, and an extra warm layer.",
  "Планируйте заранее": "Plan ahead",
  "Уточните состояние дорог, наличие связи и пропусков в приграничные зоны до выезда.": "Check road conditions, mobile coverage, and permits for border areas before you leave.",
  "Вечерние горы": "Mountains at dusk",
  "Кыргызстан начинается за поворотом": "Kyrgyzstan begins around the next bend",
  "Увидимся": "See you",
  "на большой высоте.": "up in the mountains.",
  "Вернуться наверх": "Back to the top",
  "Фото: горы Нарынской области": "Photo: Naryn Region mountains",
  "Путеводитель по Нарынской области, Кыргызстан.": "A travel guide to Naryn Region, Kyrgyzstan.",
  "© 2026 · Нарын, Кыргызстан": "© 2026 · Naryn, Kyrgyzstan",
  "Авторы фотографий": "Photo credits",
  "Кадрирование выполнено для макета. Фото предоставлены на условиях лицензий Creative Commons:": "Images are cropped for this layout and shared under Creative Commons licences:",
  "Нарынская долина — Lukas": "Naryn Valley — Lukas",
  "Долина Таш-Рабата — Laurent de Walick": "Tash Rabat Valley — Laurent de Walick",
  "Сон-Куль — ElPrismaDeFer": "Song-Kol — ElPrismaDeFer",
  "Кель-Суу — Eventyrlys": "Kel-Suu — Eventyrlys"
};

const attributeTranslations = [
  [".brand", "aria-label", "Нарын — на главную", "Naryn — home"],
  ["#main-nav", "aria-label", "Основная навигация", "Main navigation"],
  [".menu-toggle", "aria-label", "Открыть меню", "Open menu"],
  [".hero-image", "aria-label", "Река и горная долина Нарынской области", "A river and mountain valley in Naryn Region"],
  [".quote-image", "aria-label", "Лошадь у озера Сон-Куль в Нарынской области", "A horse by Song-Kol Lake in Naryn Region"],
  [".closing-photo", "aria-label", "Вечерние горы", "Mountains at dusk"],
  [".intro-stats", "aria-label", "Нарынская область в цифрах", "Naryn Region at a glance"],
  [".image-tash", "aria-label", "Таш-Рабат на карте", "Tash Rabat on the map"],
  [".image-song", "aria-label", "Озеро Сон-Куль на карте", "Song-Kol Lake on the map"],
  [".image-kel", "aria-label", "Озеро Кель-Суу на карте", "Kel-Suu Lake on the map"],
  [".place-card-large .round-link", "aria-label", "Открыть Таш-Рабат на карте", "Open Tash Rabat on the map"],
  [".place-card:nth-child(2) .round-link", "aria-label", "Открыть Сон-Куль на карте", "Open Song-Kol on the map"],
  [".place-card:nth-child(3) .round-link", "aria-label", "Открыть Кель-Суу на карте", "Open Kel-Suu on the map"],
  [".route-row:nth-child(1) .route-arrow", "aria-label", "Маршрут Нарын — Таш-Рабат", "Route: Naryn — Tash Rabat"],
  [".route-row:nth-child(2) .route-arrow", "aria-label", "Маршрут Нарын — Сон-Куль", "Route: Naryn — Song-Kol"],
  [".route-row:nth-child(3) .route-arrow", "aria-label", "Маршрут Нарын — Кель-Суу", "Route: Naryn — Kel-Suu"]
];

const originalTextNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;

while ((textNode = textWalker.nextNode())) {
  if (textNode.textContent.trim()) {
    originalTextNodes.push({ node: textNode, original: textNode.textContent });
  }
}

function setLanguage(language) {
  const isEnglish = language === "en";

  for (const { node, original } of originalTextNodes) {
    const key = original.trim().replace(/\s+/g, " ");
    const translation = englishText[key];
    if (isEnglish && translation) {
      const leadingWhitespace = original.match(/^\s*/)[0];
      const trailingWhitespace = original.match(/\s*$/)[0];
      node.textContent = `${leadingWhitespace}${translation}${trailingWhitespace}`;
    } else {
      node.textContent = original;
    }
  }

  for (const [selector, attribute, russian, english] of attributeTranslations) {
    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute(attribute, isEnglish ? english : russian);
    }
  }

  document.documentElement.lang = language;
  document.title = isEnglish
    ? "Naryn — a guide to the mountains of Kyrgyzstan"
    : "Нарын — путеводитель по горам Кыргызстана";
  document.querySelector('meta[name="description"]').content = isEnglish
    ? "A travel guide to Naryn and the surrounding region: mountain lakes, Tash Rabat, routes, accommodation, and practical tips."
    : "Путеводитель по Нарыну и Кыргызстану: маршруты, горные озёра, Таш-Рабат, жильё и полезные советы для поездки.";

  languageToggle.textContent = isEnglish ? "RU" : "EN";
  languageToggle.setAttribute("aria-label", isEnglish ? "Перевести на русский" : "Translate to English");
  languageToggle.title = isEnglish ? "Switch to Russian" : "Switch to English";
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mainNav.classList.toggle("is-open", !isOpen);
  });

  mainNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("is-open");
    }
  });
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "en" ? "ru" : "en";
    setLanguage(nextLanguage);
  });
}
