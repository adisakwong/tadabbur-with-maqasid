const SURAHS = [
  { id:1,  arabic:"الفَاتِحَةُ",       thai:"อัลฟาติหะฮฺ",       ayahs:7 },
  { id:2,  arabic:"البَقَرَةُ",         thai:"อัลบะเกาะเราะฮฺ",   ayahs:286 },
  { id:3,  arabic:"آلِ عِمْرَانَ",      thai:"อาลิอิมรอน",        ayahs:200 },
  { id:4,  arabic:"النِّسَاءُ",          thai:"อันนิซาอ์",         ayahs:176 },
  { id:5,  arabic:"المَائِدَةُ",        thai:"อัลมาอิดะฮฺ",       ayahs:120 },
  { id:6,  arabic:"الأَنْعَامُ",        thai:"อัลอันอาม",         ayahs:165 },
  { id:7,  arabic:"الأَعْرَافُ",        thai:"อัลอัรอฟ",          ayahs:206 },
  { id:8,  arabic:"الأَنْفَالُ",        thai:"อัลอันฟาล",         ayahs:75 },
  { id:9,  arabic:"التَّوْبَةُ",        thai:"อัตเตาบะฮฺ",       ayahs:129 },
  { id:10, arabic:"يُونُسُ",            thai:"ยูนุส",             ayahs:109 },
  { id:11, arabic:"هُودٌ",              thai:"ฮูด",               ayahs:123 },
  { id:12, arabic:"يُوسُفُ",            thai:"ยูซุฟ",             ayahs:111 },
  { id:13, arabic:"الرَّعْدُ",          thai:"อัรเราะอ์ด",        ayahs:43 },
  { id:14, arabic:"إِبْرَاهِيمُ",       thai:"อิบรอฮีม",          ayahs:52 },
  { id:15, arabic:"الحِجْرُ",           thai:"อัลฮิจร์",          ayahs:99 },
  { id:16, arabic:"النَّحْلُ",          thai:"อันนะห์ล",          ayahs:128 },
  { id:17, arabic:"الإِسْرَاءُ",        thai:"อัลอิสรออ์",        ayahs:111 },
  { id:18, arabic:"الكَهْفُ",           thai:"อัลกะฮ์ฟ",          ayahs:110 },
  { id:19, arabic:"مَرْيَمُ",           thai:"มัรยัม",            ayahs:98 },
  { id:20, arabic:"طه",                 thai:"ฏอฮา",             ayahs:135 },
  { id:21, arabic:"الأَنْبِيَاءُ",      thai:"อัลอัมบิยาอ์",      ayahs:112 },
  { id:22, arabic:"الحَجُّ",            thai:"อัลฮัจญ์",          ayahs:78 },
  { id:23, arabic:"المُؤْمِنُونَ",      thai:"อัลมุมินูน",         ayahs:118 },
  { id:24, arabic:"النُّورُ",           thai:"อันนูร",            ayahs:64 },
  { id:25, arabic:"الفُرْقَانُ",        thai:"อัลฟุรกอน",         ayahs:77 },
  { id:26, arabic:"الشُّعَرَاءُ",       thai:"อัชชุอะรออ์",       ayahs:227 },
  { id:27, arabic:"النَّمْلُ",          thai:"อันนัมล์",          ayahs:93 },
  { id:28, arabic:"القَصَصُ",           thai:"อัลเกาะศ็อศ",       ayahs:88 },
  { id:29, arabic:"العَنْكَبُوتُ",      thai:"อัลอังกะบูต",       ayahs:69 },
  { id:30, arabic:"الرُّومُ",           thai:"อัรโรม",            ayahs:60 },
  { id:31, arabic:"لُقْمَانُ",          thai:"ลุกมาน",            ayahs:34 },
  { id:32, arabic:"السَّجْدَةُ",       thai:"อัสสัจญ์ดะฮฺ",      ayahs:30 },
  { id:33, arabic:"الأَحْزَابُ",        thai:"อัลอะห์ซาบ",         ayahs:73 },
  { id:34, arabic:"سَبَأٌ",             thai:"สะบะอ์",            ayahs:54 },
  { id:35, arabic:"فَاطِرٌ",            thai:"ฟาฏิร",             ayahs:45 },
  { id:36, arabic:"يس",                 thai:"ยาซีน",             ayahs:83 },
  { id:37, arabic:"الصَّافَّاتُ",       thai:"อัศศ็อฟฟาต",        ayahs:182 },
  { id:38, arabic:"ص",                  thai:"ศอด",               ayahs:88 },
  { id:39, arabic:"الزُّمَرُ",          thai:"อัซซุมัร",           ayahs:75 },
  { id:40, arabic:"غَافِرٌ",            thai:"ฆอฟิร",             ayahs:85 },
  { id:41, arabic:"فُصِّلَتْ",          thai:"ฟุศศิลัต",           ayahs:54 },
  { id:42, arabic:"الشُّورَى",          thai:"อัชชูรอ",            ayahs:53 },
  { id:43, arabic:"الزُّخْرُفُ",        thai:"อัซซุกรุฟ",          ayahs:89 },
  { id:44, arabic:"الدُّخَانُ",         thai:"อัดดุคอน",           ayahs:59 },
  { id:45, arabic:"الجَاثِيَةُ",        thai:"อัลญาซิยะฮฺ",       ayahs:37 },
  { id:46, arabic:"الأَحْقَافُ",        thai:"อัลอะฮ์ก็อฟ",        ayahs:35 },
  { id:47, arabic:"مُحَمَّدٌ",          thai:"มุฮัมมัด",           ayahs:38 },
  { id:48, arabic:"الفَتْحُ",           thai:"อัลฟัตฮ์",           ayahs:29 },
  { id:49, arabic:"الحُجُرَاتُ",        thai:"อัลหุญุรอต",         ayahs:18 },
  { id:50, arabic:"ق",                  thai:"กอฟ",               ayahs:45 },
  { id:51, arabic:"الذَّارِيَاتُ",      thai:"อัซซาริยาต",         ayahs:60 },
  { id:52, arabic:"الطُّورُ",           thai:"อัฏฏูร",             ayahs:49 },
  { id:53, arabic:"النَّجْمُ",          thai:"อันนัจม์",           ayahs:62 },
  { id:54, arabic:"القَمَرُ",           thai:"อัลกอมัร",           ayahs:55 },
  { id:55, arabic:"الرَّحْمَنُ",        thai:"อัรเราะห์มาน",      ayahs:78 },
  { id:56, arabic:"الوَاقِعَةُ",        thai:"อัลวากิอะฮฺ",       ayahs:96 },
  { id:57, arabic:"الحَدِيدُ",          thai:"อัลฮะดีด",           ayahs:29 },
  { id:58, arabic:"المُجَادِلَةُ",      thai:"อัลมุญาดะละฮฺ",     ayahs:22 },
  { id:59, arabic:"الحَشْرُ",           thai:"อัลหัชร์",           ayahs:24 },
  { id:60, arabic:"المُمْتَحَنَةُ",     thai:"อัลมุมตะห์ะนะฮฺ",   ayahs:13 },
  { id:61, arabic:"الصَّفُّ",           thai:"อัศศ็อฟ",            ayahs:14 },
  { id:62, arabic:"الجُمُعَةُ",         thai:"อัลญุมุอะฮฺ",        ayahs:11 },
  { id:63, arabic:"المُنَافِقُونَ",     thai:"อัลมุนาฟิกูน",       ayahs:11 },
  { id:64, arabic:"التَّغَابُنُ",       thai:"อัตตะฆอบุน",         ayahs:18 },
  { id:65, arabic:"الطَّلَاقُ",         thai:"อัฏฏอลาก",           ayahs:12 },
  { id:66, arabic:"التَّحْرِيمُ",       thai:"อัตตะห์รีม",         ayahs:12 },
  { id:67, arabic:"المُلْكُ",           thai:"อัลมุลก์",            ayahs:30 },
  { id:68, arabic:"القَلَمُ",           thai:"อัลเกาะลัม",         ayahs:52 },
  { id:69, arabic:"الحَاقَّةُ",         thai:"อัลฮากกะฮฺ",        ayahs:52 },
  { id:70, arabic:"المَعَارِجُ",        thai:"อัลมะอาริจญ์",       ayahs:44 },
  { id:71, arabic:"نُوحٌ",              thai:"นูห์",               ayahs:28 },
  { id:72, arabic:"الجِنُّ",            thai:"อัลญิน",            ayahs:28 },
  { id:73, arabic:"المُزَّمِّلُ",       thai:"อัลมุซซัมมิล",       ayahs:20 },
  { id:74, arabic:"المُدَّثِّرُ",       thai:"อัลมุดดัษษิร",       ayahs:56 },
  { id:75, arabic:"القِيَامَةُ",        thai:"อัลกิยามะฮฺ",       ayahs:40 },
  { id:76, arabic:"الإِنْسَانُ",        thai:"อัลอินซาน",          ayahs:31 },
  { id:77, arabic:"المُرْسَلَاتُ",      thai:"อัลมุรซะลาต",        ayahs:50 },
  { id:78, arabic:"النَّبَأُ",          thai:"อันนะบะอ์",          ayahs:40 },
  { id:79, arabic:"النَّازِعَاتُ",      thai:"อันนาซิอาต",         ayahs:46 },
  { id:80, arabic:"عَبَسَ",             thai:"อะบะสะ",            ayahs:42 },
  { id:81, arabic:"التَّكْوِيرُ",       thai:"อัตตักวีร",          ayahs:29 },
  { id:82, arabic:"الانْفِطَارُ",       thai:"อัลอินฟิฏอร",        ayahs:19 },
  { id:83, arabic:"المُطَفِّفِينَ",     thai:"อัลมุฏ็อฟฟิฟีน",     ayahs:36 },
  { id:84, arabic:"الانْشِقَاقُ",       thai:"อัลอินชิก็อก",        ayahs:25 },
  { id:85, arabic:"البُرُوجُ",          thai:"อัลบุรุญ",           ayahs:22 },
  { id:86, arabic:"الطَّارِقُ",         thai:"อัฏฏอริก",           ayahs:17 },
  { id:87, arabic:"الأَعْلَى",          thai:"อัลอะอ์ลา",          ayahs:19 },
  { id:88, arabic:"الغَاشِيَةُ",        thai:"อัลฆอชิยะฮฺ",        ayahs:26 },
  { id:89, arabic:"الفَجْرُ",           thai:"อัลฟัจร์",           ayahs:30 },
  { id:90, arabic:"البَلَدُ",           thai:"อัลบะลัด",           ayahs:20 },
  { id:91, arabic:"الشَّمْسُ",          thai:"อัชชัมส์",            ayahs:15 },
  { id:92, arabic:"اللَّيْلُ",          thai:"อัลลัยล์",            ayahs:21 },
  { id:93, arabic:"الضُّحَى",           thai:"อัฎฎุฮา",            ayahs:11 },
  { id:94, arabic:"الشَّرْحُ",          thai:"อัชชัรห์",            ayahs:8 },
  { id:95, arabic:"التِّينُ",           thai:"อัตตีน",             ayahs:8 },
  { id:96, arabic:"العَلَقُ",           thai:"อัลอะลัก",           ayahs:19 },
  { id:97, arabic:"القَدْرُ",           thai:"อัลก็อดร์",           ayahs:5 },
  { id:98, arabic:"البَيِّنَةُ",        thai:"อัลบัยยินะฮฺ",       ayahs:8 },
  { id:99, arabic:"الزَّلْزَلَةُ",      thai:"อัซซัลซะละฮฺ",       ayahs:8 },
  { id:100,arabic:"العَادِيَاتُ",       thai:"อัลอาดิยาต",         ayahs:11 },
  { id:101,arabic:"القَارِعَةُ",        thai:"อัลกอริอะฮฺ",        ayahs:11 },
  { id:102,arabic:"التَّكَاثُرُ",       thai:"อัตตะกาษุร",         ayahs:8 },
  { id:103,arabic:"العَصْرُ",           thai:"อัลอัศรฺ",            ayahs:3 },
  { id:104,arabic:"الهُمَزَةُ",         thai:"อัลฮุมะซะฮฺ",        ayahs:9 },
  { id:105,arabic:"الفِيلُ",            thai:"อัลฟีล",             ayahs:5 },
  { id:106,arabic:"قُرَيْشٌ",           thai:"กุรอยช์",            ayahs:4 },
  { id:107,arabic:"المَاعُونُ",         thai:"อัลมาอูน",           ayahs:7 },
  { id:108,arabic:"الكَوْثَرُ",         thai:"อัลเกาซัร",          ayahs:3 },
  { id:109,arabic:"الكَافِرُونَ",       thai:"อัลกาฟิรูน",         ayahs:6 },
  { id:110,arabic:"النَّصْرُ",          thai:"อันนัศร์",           ayahs:3 },
  { id:111,arabic:"المَسَدُ",           thai:"อัลมะซัด",           ayahs:5 },
  { id:112,arabic:"الإِخْلَاصُ",        thai:"อัลอิคลาศ",          ayahs:4 },
  { id:113,arabic:"الفَلَقُ",           thai:"อัลฟะลัก",           ayahs:5 },
  { id:114,arabic:"النَّاسُ",           thai:"อันนาส",             ayahs:6 },
];

// ---- Helpers ----
function pad(n) { return String(n).padStart(3, '0'); }

function surahLabel(s) {
  return `${pad(s.id)}. ${s.arabic} — ${s.thai}`;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const LANGUAGE_KEY = 'tadabbur-map-language';
const MAP_LOCALIZATION = {
  th: {
    themesLabel: 'สาระสำคัญของอายะฮ์',
    detailLabel: 'รายละเอียด',
    revealLabel: 'เผยพระวจนะ',
    maxAyahLabel: 'อายะฮ์สูงสุด',
    noMap: 'ไม่มี Maqasid สำหรับสูเราะฮฺนี้',
    noData: 'ไม่มีข้อมูล Maqasid สำหรับสูเราะฮฺนี้',
    headerReadingLabel: 'จุดอ่านล่าสุด:',
    headerSetButton: 'ตั้งค่า',
    modalTitle: 'ตั้งค่าจุดอ่านล่าสุด',
    modalDesc: 'บันทึกตำแหน่งที่คุณอ่านค้างไว้',
    modalSurahLabel: 'สูเราะฮ์:',
    modalAyahLabel: 'อายะฮ์ที่:',
    modalSaveButton: 'บันทึก',
    modalCancelButton: 'ยกเลิก'
  },
  en: {
    themesLabel: 'Verses Theme',
    detailLabel: 'Detail',
    revealLabel: 'Revelation',
    maxAyahLabel: 'Max Ayah',
    noMap: 'No Maqasid for this surah',
    noData: 'No Maqasid data for this surah',
    headerReadingLabel: 'Last reading point:',
    headerSetButton: 'Settings',
    modalTitle: 'Set last reading point',
    modalDesc: 'Save the place where you left off',
    modalSurahLabel: 'Surah:',
    modalAyahLabel: 'Verse:',
    modalSaveButton: 'Save',
    modalCancelButton: 'Cancel'
  },
  ms: {
    themesLabel: 'Tema Ayat',
    detailLabel: 'Perincian',
    revealLabel: 'Wahyu',
    maxAyahLabel: 'Ayat Maks',
    noMap: 'Tiada Maqasid untuk surah ini',
    noData: 'Tiada data Maqasid untuk surah ini',
    headerReadingLabel: 'Titik bacaan terakhir:',
    headerSetButton: 'Tetapan',
    modalTitle: 'Tetapkan titik bacaan terakhir',
    modalDesc: 'Simpan tempat anda berhenti membaca',
    modalSurahLabel: 'Surah:',
    modalAyahLabel: 'Ayat:',
    modalSaveButton: 'Simpan',
    modalCancelButton: 'Batal'
  }
};

function getMapLanguage() {
  const lang = localStorage.getItem(LANGUAGE_KEY);
  return lang === 'en' || lang === 'ms' ? lang : 'th';
}

function setMapLanguage(lang) {
  if (lang !== 'en' && lang !== 'ms' && lang !== 'th') lang = 'th';
  localStorage.setItem(LANGUAGE_KEY, lang);
}

function getLocalizedValue(item, field, lang) {
  if (!item || !field) return '';
  const target = `${field}_${lang}`;
  return item[target] || item[field] || '';
}

function populateSelect(selId, selectedId = 1) {
  const sel = document.getElementById(selId);
  if (!sel) return;

  sel.innerHTML = '';
  SURAHS.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id;
    // For the right-panel map dropdown show "number + English name" only
    if (selId === 'map-surah-select' || selId === 'modal-surah') {
      const mapData = (window.QURAN_MAP_DATA || []);
      const entry = mapData.find(e => String(e.surah_id) === String(s.id));
      let enName = (entry && (entry.name || entry.name_en)) || s.thai || s.arabic;
      // Fix spelling for surah 106 per user request
      if (Number(s.id) === 106) enName = 'Quraysh';
      opt.textContent = `${pad(s.id)}. ${enName}`;
    } else {
      opt.textContent = surahLabel(s);
    }
    sel.appendChild(opt);
  });

  if (selectedId !== undefined) {
    sel.value = selectedId;
  }
}

// ---- Last Reading Point ----
const STORE_KEY = 'tadabbur-reading-point';
let mapDataCache = null;
let mapDataPromise = null;
let mapPanelIsIndependent = false;

function getReadingPoint() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)); } catch { return null; }
}

function getDefaultPoint() {
  return { surahId: 1, ayah: 1 };
}

function getPoint() {
  return getReadingPoint() || getDefaultPoint();
}

function saveReadingPoint(surahId, ayah) {
  const data = { surahId: Number(surahId), ayah: Number(ayah), savedAt: new Date().toISOString() };
  localStorage.setItem(STORE_KEY, JSON.stringify(data));
  void updateAll(data.surahId, data.ayah);
}

function clearReadingPoint() {
  localStorage.removeItem(STORE_KEY);
  void updateAll(1, 1);
}

function normalizeMapData(data) {
  return Array.isArray(data) ? data : [];
}

async function loadMapData() {
  if (mapDataCache) return mapDataCache;
  if (mapDataPromise) return mapDataPromise;

  const globalMapData = window.QURAN_MAP_DATA || [];
  if (Array.isArray(globalMapData) && globalMapData.length) {
    mapDataCache = normalizeMapData(globalMapData);
    return mapDataCache;
  }

  mapDataPromise = fetch('quran_map.json')
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`Failed to load quran_map.json: ${response.status}`);
      }
      const data = await response.json();
      mapDataCache = normalizeMapData(data);
      return mapDataCache;
    })
    .catch((error) => {
      console.error(error);
      mapDataCache = [];
      return mapDataCache;
    });

  return mapDataPromise;
}

// ---- Panels ----
const embedIframe = document.getElementById('embed-iframe');
const headerPoint = document.getElementById('header-reading-point');
const headerTime = document.getElementById('header-reading-time');
const headerReadingLabel = document.querySelector('.header-reading-label');
const headerSetButton = document.getElementById('header-set-btn');

function updateHeaderTime() {
  const stored = getReadingPoint();
  const savedAt = stored && stored.savedAt ? stored.savedAt : null;
  if (headerTime) {
    if (savedAt) {
      headerTime.textContent = formatSavedAt(savedAt);
      headerTime.style.display = '';
    } else {
      headerTime.textContent = '';
      headerTime.style.display = 'none';
    }
  }
}

function updateHeaderReadingDisplay(surahId, ayah) {
  const s = SURAHS.find(item => item.id === surahId);
  if (!s) return;

  const lang = getMapLanguage();
  const t = MAP_LOCALIZATION[lang] || MAP_LOCALIZATION.th;
  const entry = (window.QURAN_MAP_DATA || []).find(item => String(item.surah_id) === String(surahId));

  let surahName = s.thai;
  if (lang === 'en') {
    surahName = entry?.name_en || entry?.name || s.thai;
  } else if (lang === 'ms') {
    surahName = entry?.name_ms || entry?.name || s.thai;
  }

  const ayahLabel = lang === 'en'
    ? `Verse ${ayah}`
    : lang === 'ms'
      ? `Ayat ${ayah}`
      : `อายะฮ์ที่ ${ayah}`;

  if (headerReadingLabel) {
    headerReadingLabel.textContent = t.headerReadingLabel;
  }

  if (headerSetButton) {
    headerSetButton.textContent = t.headerSetButton;
  }

  if (headerPoint) {
    headerPoint.textContent = `${surahName} — ${ayahLabel}`;
  }

  updateHeaderTime();
}

async function updateAll(surahId, ayah) {
  const s = SURAHS.find(item => item.id === surahId);
  if (!s) return;

  updateHeaderReadingDisplay(surahId, ayah);
  embedIframe.src = `https://quran.com/${surahId}?startingVerse=${ayah}`;

  if (!mapPanelIsIndependent) {
    const mapSurahSelect = document.getElementById('map-surah-select');
    if (mapSurahSelect) {
      mapSurahSelect.value = String(surahId);
    }
    await loadMap(surahId);
  }
}

async function loadMap(surahId) {
  const s = SURAHS.find(item => item.id === surahId);
  const area = document.getElementById('map-area');

  if (!s) {
    area.innerHTML = `<div class="placeholder"><div class="placeholder-icon">🗺️</div>ไม่มี Maqasid สำหรับสูเราะฮฺนี้</div>`;
    return;
  }

  const mapData = await loadMapData();
  const entry = mapData.find(item => String(item.surah_id) === String(surahId));

  if (!entry) {
    const lang = getMapLanguage();
    const t = MAP_LOCALIZATION[lang];
    area.innerHTML = `<div class="placeholder"><div class="placeholder-icon">🗺️</div>${escapeHtml(t.noData)}</div>`;
    return;
  }

  const lang = getMapLanguage();
  const t = MAP_LOCALIZATION[lang];
  const displayName = getLocalizedValue(entry, 'name', lang) || s.thai;
  const revealText = getLocalizedValue(entry, 'reveal', lang) || '-';

  const thematicItems = (entry.thematic_ayat || [])
    .filter(item => item && (item.ayat_range || item.theme))
    .map(item => `
      <li>
        <span class="theme-range">${escapeHtml(item.ayat_range || '')}</span>
        <span class="theme-text">${escapeHtml(getLocalizedValue(item, 'theme', lang) || item.theme || '')}</span>
      </li>`)
    .join('');

  const thematicSection = thematicItems
    ? `<div class="map-section"><h4>${escapeHtml(t.themesLabel)}</h4><ul class="map-list">${thematicItems}</ul></div>`
    : '';

  const detailText = (getLocalizedValue(entry, 'content_detail', lang) || '').trim();
  const detailSection = detailText
    ? `<div class="map-section"><h4>${escapeHtml(t.detailLabel)}</h4><p>${escapeHtml(detailText)}</p></div>`
    : `<div class="map-section"><h4>${escapeHtml(t.detailLabel)}</h4><p>${escapeHtml(t.noData)}</p></div>`;

  area.innerHTML = `
    <div class="map-content">
      <div class="map-summary">
        <h3>${escapeHtml(`${pad(s.id)}. ${s.arabic}`)}</h3>
        <div class="map-meta">
          <span class="map-pill">${escapeHtml(displayName)}</span>
          <span class="map-pill">${escapeHtml(`${t.revealLabel}: ${revealText}`)}</span>
          <span class="map-pill">${escapeHtml(`${t.maxAyahLabel}: ${String(entry.max_ayat || s.ayahs || '-')}`)}</span>
        </div>
      </div>
      ${thematicSection}
      ${detailSection}
    </div>`;
}

// ---- Modal Elements (needed before init) ----
const modal = document.getElementById('reading-modal');
const modalSurah = document.getElementById('modal-surah');
const modalAyah = document.getElementById('modal-ayah');
const modalAyahMax = document.getElementById('modal-ayah-max');
const modalTitle = document.querySelector('#reading-modal h3');
const modalDesc = document.querySelector('#reading-modal .modal-desc');
const modalSurahLabel = document.querySelector('#reading-modal label[for="modal-surah"]');
const modalAyahLabel = document.querySelector('#reading-modal label[for="modal-ayah"]');
const modalSaveBtn = document.getElementById('save-btn');
const modalCancelBtn = document.getElementById('cancel-btn');

// ---- Init ----
try {
  populateSelect('modal-surah', getPoint().surahId);
  populateSelect('map-surah-select', getPoint().surahId);
  updateModalLocalization();

  const initPoint = getPoint();
  void updateAll(initPoint.surahId, initPoint.ayah);
} catch (err) {
  console.error('Initialization error:', err);
  const area = document.getElementById('map-area');
  if (area) {
    area.innerHTML = `<div class="placeholder"><div class="placeholder-icon">⚠️</div>เกิดข้อผิดพลาดในการเริ่มต้น: ${escapeHtml(String(err && err.message ? err.message : err))}</div>`;
  }
}

// ---- Map Toggle ----
const mapToggle = document.getElementById('map-toggle');
const splitLayout = document.querySelector('.split-layout');
const mapSurahSelect = document.getElementById('map-surah-select');
const mapLanguageSelect = document.getElementById('map-language-select');

if (mapSurahSelect) {
  mapSurahSelect.addEventListener('change', () => {
    const selectedSurah = Number(mapSurahSelect.value);
    if (!Number.isFinite(selectedSurah)) return;

    mapPanelIsIndependent = true;
    void loadMap(selectedSurah);
  });
}

if (mapLanguageSelect) {
  mapLanguageSelect.value = getMapLanguage();
  mapLanguageSelect.addEventListener('change', () => {
    setMapLanguage(mapLanguageSelect.value);
    const selectedSurah = Number(mapSurahSelect?.value || getPoint().surahId);
    if (Number.isFinite(selectedSurah)) {
      updateHeaderReadingDisplay(selectedSurah, getPoint().ayah);
      updateModalLocalization();
      void loadMap(selectedSurah);
    }
  });
}

function setMapVisible(visible) {
  splitLayout.classList.toggle('map-hidden', !visible);
  mapToggle.classList.toggle('on', visible);
  localStorage.setItem('tadabbur-map-visible', visible);
}

const mapVisible = localStorage.getItem('tadabbur-map-visible');
setMapVisible(mapVisible !== 'false');

mapToggle.addEventListener('click', () => {
  setMapVisible(splitLayout.classList.contains('map-hidden'));
});

// ---- Fullscreen ----
const fsBtn = document.getElementById('fullscreen-btn');

function formatSavedAt(savedAt) {
  try {
    const d = new Date(savedAt);
    if (isNaN(d)) return '';
    return d.toLocaleString();
  } catch (e) {
    return String(savedAt || '');
  }
}
fsBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

document.addEventListener('fullscreenchange', () => {
  fsBtn.textContent = document.fullscreenElement ? '✕' : '⛶';
  fsBtn.title = document.fullscreenElement ? 'ออกจากเต็มจอ' : 'เต็มจอ';
});

// Show saved timestamp if available
const stored = getReadingPoint();
const savedAt = stored && stored.savedAt ? stored.savedAt : null;
if (headerTime) {
  if (savedAt) {
    headerTime.textContent = formatSavedAt(savedAt);
    headerTime.style.display = '';
  } else {
    headerTime.textContent = '';
    headerTime.style.display = 'none';
  }
}

// ---- Events: Reading Point Modal ----

function updateModalAyahMax() {
  const id = Number(modalSurah.value);
  const s = SURAHS.find(item => item.id === id);
  const max = s ? s.ayahs : 1;
  modalAyahMax.textContent = `/ ${max}`;
}

function updateModalLocalization() {
  const lang = getMapLanguage();
  const t = MAP_LOCALIZATION[lang] || MAP_LOCALIZATION.th;

  if (modalTitle) modalTitle.textContent = t.modalTitle;
  if (modalDesc) modalDesc.textContent = t.modalDesc;
  if (modalSurahLabel) modalSurahLabel.textContent = t.modalSurahLabel;
  if (modalAyahLabel) modalAyahLabel.textContent = t.modalAyahLabel;
  if (modalSaveBtn) modalSaveBtn.textContent = t.modalSaveButton;
  if (modalCancelBtn) modalCancelBtn.textContent = t.modalCancelButton;
}

modalSurah.addEventListener('change', updateModalAyahMax);

document.getElementById('header-set-btn').addEventListener('click', () => {
  const point = getPoint();
  modalSurah.value = point.surahId;
  modalAyah.value = point.ayah;
  updateModalLocalization();
  updateModalAyahMax();
  modal.classList.add('open');
});

document.getElementById('cancel-btn').addEventListener('click', () => {
  modal.classList.remove('open');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('open');
});

document.getElementById('save-btn').addEventListener('click', () => {
  saveReadingPoint(modalSurah.value, modalAyah.value);
  modal.classList.remove('open');
});
