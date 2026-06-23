let currentLang = "vi";

const I18N = {
    vi: {
        "nav.aria": "Điều hướng chính",
        "nav.about": "Giới thiệu",
        "nav.map": "Bản đồ",
        "nav.data": "Dữ liệu",
        "nav.schools": "Trường học",
        "hero.eyebrow": "Hoa Phượng Đỏ 2026",
        "hero.subtitle": "Bản đồ số và tour ảo giúp học sinh tra cứu không gian, địa chỉ và thông tin cơ bản của các trường THPT tại TP.HCM.",
        "hero.caption": "Cổng tra cứu trực quan dành cho các trường THPT tại TP.HCM.",
        "hero.dataFirst": "Ưu tiên dữ liệu",
        "hero.addresses": "địa chỉ",
        "hero.tours": "tour mẫu đang mở",
        "hero.figcaption": "Không gian trường học được trình bày như một cổng tra cứu trực quan.",
        "cta.openMap": "Mở bản đồ",
        "cta.tryTour": "Thử tour 360",
        "cta.openTour": "Mở tour 360",
        "cta.visitTour": "Tham quan 360",
        "tag.map": "Bản đồ tương tác",
        "tag.tour": "Tour 360",
        "tag.data": "Dữ liệu THPT",
        "marquee.aria": "Chủ đề SchoolCarto",
        "marquee.map": "Bản đồ số",
        "marquee.tour": "Tour 360",
        "marquee.data": "Dữ liệu THPT",
        "about.kicker": "Định hướng dự án",
        "about.title": "Một bản đồ trường học ngắn gọn, khách quan và dễ tra cứu",
        "about.campaignLabel": "Chiến dịch",
        "about.campaignText": "Dự án hỗ trợ học sinh tiếp cận thông tin trường học bằng bản đồ số, hình ảnh trực quan và nội dung ngắn gọn.",
        "about.teamLabel": "Đội hình",
        "about.teamText": "Ưu tiên dữ liệu rõ ràng, bố cục dễ quét và thao tác thuận tiện trên điện thoại.",
        "process.selectTitle": "Chọn khu vực",
        "process.selectText": "Xem các điểm trường đang có trên bản đồ minh họa.",
        "process.readTitle": "Đọc dữ liệu",
        "process.readText": "Tra cứu địa chỉ, khu vực và mô tả ngắn của từng trường.",
        "process.tourTitle": "Mở tour 360",
        "process.tourText": "Quan sát các khu chức năng chính qua ảnh tương tác.",
        "map.kicker": "Khám phá theo khu vực",
        "map.title": "Bản đồ tương tác",
        "map.region": "Khu vực",
        "map.region1": "Khu vực 1 - Trung tâm",
        "map.region2": "Khu vực 2 - Mở rộng",
        "map.legendSchool": "Điểm trường",
        "map.legendActive": "Đang chọn",
        "map.active": "Đang chọn",
        "map.viewQuick": "Xem nhanh",
        "data.kicker": "School atlas",
        "data.title": "Dữ liệu địa chỉ trường học",
        "data.note": "Danh sách được trình bày ngắn gọn, khách quan và ưu tiên thông tin cần thiết.",
        "data.addresses": "địa chỉ",
        "data.updating": "Đang bổ sung tour",
        "data.compact": "Dữ liệu gọn",
        "schools.kicker": "Danh sách trường",
        "schools.title": "Tour mẫu đang hoạt động",
        "schools.quickInfo": "Thông tin nhanh",
        "schools.realPhoto": "Ảnh thật",
        "tour.back": "Trở về danh sách",
        "tour.selectSchool": "Trường tham quan",
        "tour.eyebrow": "Khuôn viên trực tuyến",
        "tour.pano": "Ảnh toàn cảnh",
        "tour.hotspot": "Điểm tương tác",
        "tour.quickInfo": "Thông tin nhanh",
        "footer.mainCampus": "Cơ sở chính: Lô P2 Khu tái định cư 38.4 ha, P. An Khánh, TP.HCM",
        "footer.saigonCampus": "Cơ sở phường Sài Gòn: 20 Lý Tự Trọng, P. Sài Gòn, TP.HCM",
        "footer.schoolFacebook": "Facebook Trường",
        "footer.unionFacebook": "Facebook Đoàn Trường",
        "lang.label": "Chuyển chế độ ngôn ngữ",
        "page.homeTitle": "SchoolCarto Virtual Tour | Bản đồ số trường THPT TP.HCM",
        "page.homeDescription": "SchoolCarto Virtual Tour - bản đồ số hóa và dữ liệu tham quan trường THPT tại TP.HCM.",
        "page.tourTitle": "Tour 360 | SchoolCarto Virtual Tour",
        "page.tourDescription": "Trải nghiệm tour 360 trong dự án SchoolCarto Virtual Tour."
    },
    en: {
        "nav.aria": "Main navigation",
        "nav.about": "About",
        "nav.map": "Map",
        "nav.data": "Data",
        "nav.schools": "Schools",
        "hero.eyebrow": "Red Flamboyant Campaign 2026",
        "hero.subtitle": "A digital map and virtual tours for looking up locations, addresses, and essential information about high schools in Ho Chi Minh City.",
        "hero.caption": "A visual reference portal for high schools in Ho Chi Minh City.",
        "hero.dataFirst": "Data first",
        "hero.addresses": "addresses",
        "hero.tours": "sample tours available",
        "hero.figcaption": "School spaces are presented through a visual reference portal.",
        "cta.openMap": "Open map",
        "cta.tryTour": "Try a 360 tour",
        "cta.openTour": "Open 360 tour",
        "cta.visitTour": "View 360 tour",
        "tag.map": "Interactive map",
        "tag.tour": "360 tour",
        "tag.data": "High-school data",
        "marquee.aria": "SchoolCarto topics",
        "marquee.map": "Digital map",
        "marquee.tour": "360 tour",
        "marquee.data": "High-school data",
        "about.kicker": "Project direction",
        "about.title": "A concise, objective school map designed for quick lookup",
        "about.campaignLabel": "Campaign",
        "about.campaignText": "The project gives students access to school information through digital maps, visual references, and concise descriptions.",
        "about.teamLabel": "Team",
        "about.teamText": "Clear data, scannable layouts, and convenient mobile interactions are the main priorities.",
        "process.selectTitle": "Choose an area",
        "process.selectText": "View available school markers on the illustrated map.",
        "process.readTitle": "Read the data",
        "process.readText": "Look up each school's address, area, and short description.",
        "process.tourTitle": "Open a 360 tour",
        "process.tourText": "View key functional areas through interactive images.",
        "map.kicker": "Explore by area",
        "map.title": "Interactive map",
        "map.region": "Area",
        "map.region1": "Area 1 - Central",
        "map.region2": "Area 2 - Expanded",
        "map.legendSchool": "School marker",
        "map.legendActive": "Selected",
        "map.active": "Selected",
        "map.viewQuick": "Quick view",
        "data.kicker": "School atlas",
        "data.title": "School address data",
        "data.note": "The list uses concise, objective wording and prioritizes essential information.",
        "data.addresses": "addresses",
        "data.updating": "Tours being added",
        "data.compact": "Compact data",
        "schools.kicker": "School directory",
        "schools.title": "Available sample tours",
        "schools.quickInfo": "Quick information",
        "schools.realPhoto": "Real photo",
        "tour.back": "Back to the list",
        "tour.selectSchool": "School to visit",
        "tour.eyebrow": "Virtual campus",
        "tour.pano": "Panoramic image",
        "tour.hotspot": "Interactive hotspots",
        "tour.quickInfo": "Quick information",
        "footer.mainCampus": "Main campus: Lot P2, 38.4-hectare resettlement area, An Khanh Ward, Ho Chi Minh City",
        "footer.saigonCampus": "Sai Gon campus: 20 Ly Tu Trong Street, Sai Gon Ward, Ho Chi Minh City",
        "footer.schoolFacebook": "School Facebook",
        "footer.unionFacebook": "Youth Union Facebook",
        "lang.label": "Switch language mode",
        "page.homeTitle": "SchoolCarto Virtual Tour | HCMC High School Digital Map",
        "page.homeDescription": "SchoolCarto Virtual Tour - digital maps, school data, and virtual tours for high schools in Ho Chi Minh City.",
        "page.tourTitle": "360 Tour | SchoolCarto Virtual Tour",
        "page.tourDescription": "Explore a sample 360 school tour in SchoolCarto Virtual Tour."
    }
};

const schoolDirectory = [
    { id: "trandainghia_chinh", name: { vi: "Trường THPT chuyên Trần Đại Nghĩa", en: "Tran Dai Nghia High School for the Gifted" }, badge: { vi: "Cơ sở chính", en: "Main campus" }, address: "Lô P2 Khu tái định cư 38.4 ha, P. An Khánh, TP.HCM" },
    { id: "trandainghia_saigon", name: { vi: "Trường THCS-THPT Trần Đại Nghĩa", en: "Tran Dai Nghia Secondary and High School" }, badge: { vi: "Cơ sở Sài Gòn", en: "Sai Gon campus" }, address: "20 Lý Tự Trọng, P. Sài Gòn, TP.HCM" },
    { id: "lehongphong", name: { vi: "Trường THPT chuyên Lê Hồng Phong", en: "Le Hong Phong High School for the Gifted" }, badge: { vi: "Trung tâm", en: "Central" }, address: "235 Nguyễn Văn Cừ, P. Chợ Quán, TP.HCM" },
    { id: "ptnk_andong", name: { vi: "Trường Phổ thông Năng khiếu - ĐHQG TP. Hồ Chí Minh (cơ sở An Đông)", en: "VNU-HCM High School for the Gifted (An Dong Campus)" }, badge: { vi: "Cơ sở An Đông", en: "An Dong campus" }, address: "153 Nguyễn Chí Thanh, P. An Đông, TP.HCM" },
    { id: "ptnk_donghoa", name: { vi: "Trường Phổ thông Năng khiếu - ĐHQG TP. Hồ Chí Minh (Cơ sở Đông Hòa)", en: "VNU-HCM High School for the Gifted (Dong Hoa Campus)" }, badge: { vi: "Cơ sở Đông Hòa", en: "Dong Hoa campus" }, address: "KĐT ĐHQG-HCM, đường William Shakespeare, P. Đông Hòa, TP.HCM" },
    { id: "lequydon_chuyen", name: { vi: "Trường THPT chuyên Lê Quý Đôn", en: "Le Quy Don High School for the Gifted" }, badge: { vi: "Mở rộng", en: "Expanded area" }, address: "Ba Tháng Hai, Phước Thắng, TP.HCM" },
    { id: "hungvuong_chuyen", name: { vi: "Trường THPT chuyên Hùng Vương", en: "Hung Vuong High School for the Gifted" }, badge: { vi: "Mở rộng", en: "Expanded area" }, address: "593 Đại lộ Bình Dương, Thủ Dầu Một, TP.HCM" },
    { id: "lequydon_thpt", name: { vi: "Trường THPT Lê Quý Đôn", en: "Le Quy Don High School" }, badge: { vi: "Trung tâm", en: "Central" }, address: "110 Nguyễn Thị Minh Khai, P. Xuân Hòa, TP.HCM" },
    { id: "nguyenthiminhkhai", name: { vi: "Trường THPT Nguyễn Thị Minh Khai", en: "Nguyen Thi Minh Khai High School" }, badge: { vi: "Trung tâm", en: "Central" }, address: "275 Điện Biên Phủ, P. Xuân Hòa, TP.HCM" }
];

const schools = {
    lehongphong: {
        name: "Trường THPT chuyên Lê Hồng Phong",
        enName: "Le Hong Phong High School for the Gifted",
        district: { vi: "Chợ Quán", en: "Cho Quan" },
        address: "235 Nguyễn Văn Cừ, P. Chợ Quán, TP.HCM",
        shortAddress: "235 Nguyễn Văn Cừ",
        image: "assets/images/schools/lhp.png",
        imageAlt: { vi: "Khuôn viên Trường THPT chuyên Lê Hồng Phong", en: "Campus of Le Hong Phong High School for the Gifted" },
        cardText: {
            vi: "Dữ liệu mẫu gồm ảnh khuôn viên, địa chỉ và các điểm tham quan chính.",
            en: "The sample includes a campus image, address, and key points of interest."
        },
        tourLead: {
            vi: "Tour giới thiệu khu sân, dãy lớp và mảng xanh qua các điểm tương tác.",
            en: "The tour presents the courtyard, classroom blocks, and green spaces through interactive hotspots."
        },
        stats: [
            { label: { vi: "Khu vực", en: "Area" }, value: { vi: "Chợ Quán", en: "Cho Quan" } },
            { label: { vi: "Địa chỉ", en: "Address" }, value: "235 Nguyễn Văn Cừ" },
            { label: { vi: "Nội dung", en: "Coverage" }, value: { vi: "Sân trường, hành lang, lớp học", en: "Courtyard, corridors, classrooms" } }
        ],
        hotspots: [
            { title: { vi: "Sân trung tâm", en: "Central courtyard" }, text: { vi: "Không gian sinh hoạt chung và tổ chức hoạt động học sinh.", en: "A shared space for student activities and school events." }, top: "55%", left: "42%" },
            { title: { vi: "Dãy lớp học", en: "Classroom block" }, text: { vi: "Khu học tập có kiến trúc đặc trưng của cơ sở.", en: "The learning area reflects the campus's characteristic architecture." }, top: "37%", left: "63%" },
            { title: { vi: "Khu vườn", en: "Garden" }, text: { vi: "Mảng xanh và khoảng nghỉ trong khuôn viên trường.", en: "Green space and a resting area within the campus." }, top: "68%", left: "28%" }
        ]
    },
    trandainghia: {
        name: "Trường THPT chuyên Trần Đại Nghĩa",
        enName: "Tran Dai Nghia High School for the Gifted",
        district: { vi: "An Khánh", en: "An Khanh" },
        address: "Lô P2 Khu tái định cư 38.4 ha, P. An Khánh, TP.HCM",
        shortAddress: "Lô P2 An Khánh",
        image: "assets/images/anhchinh.png",
        imageAlt: { vi: "Toàn cảnh Trường THPT chuyên Trần Đại Nghĩa", en: "Aerial view of Tran Dai Nghia High School for the Gifted" },
        cardText: {
            vi: "Dữ liệu mẫu ghi nhận toàn cảnh cơ sở chính, khu học tập và khu vận động.",
            en: "The sample documents the main campus, learning area, and sports facilities."
        },
        tourLead: {
            vi: "Góc nhìn toàn cảnh cho biết vị trí khối lớp và các khu chức năng chính.",
            en: "The panoramic view shows the classroom blocks and main functional areas."
        },
        stats: [
            { label: { vi: "Khu vực", en: "Area" }, value: { vi: "An Khánh", en: "An Khanh" } },
            { label: { vi: "Địa chỉ", en: "Address" }, value: "Lô P2, khu tái định cư 38.4 ha" },
            { label: { vi: "Nội dung", en: "Coverage" }, value: { vi: "Toàn cảnh, sân thể thao, khối lớp", en: "Aerial view, sports court, classroom block" } }
        ],
        hotspots: [
            { title: { vi: "Khối lớp học", en: "Classroom block" }, text: { vi: "Dãy phòng học chính nằm ở trung tâm khuôn viên.", en: "The main classroom block is located at the center of the campus." }, top: "42%", left: "52%" },
            { title: { vi: "Sân thể thao", en: "Sports court" }, text: { vi: "Khu vận động ngoài trời nằm phía trước khối lớp.", en: "The outdoor sports area is located in front of the classroom block." }, top: "64%", left: "55%" },
            { title: { vi: "Mảng xanh", en: "Green space" }, text: { vi: "Cây xanh phân bố quanh khu học tập và sân trường.", en: "Trees are distributed around the learning area and schoolyard." }, top: "70%", left: "30%" }
        ]
    }
};

const mapData = {
    khu_vuc_1: {
        image: "assets/images/maps/map.png",
        alt: { vi: "Bản đồ minh họa khu vực trung tâm với các điểm trường", en: "Illustrated central-area map with school markers" },
        pins: [
            { id: "lehongphong", top: "35%", left: "31%" },
            { id: "trandainghia", top: "55%", left: "66%" }
        ]
    },
    khu_vuc_2: {
        image: "assets/images/maps/test.png",
        alt: { vi: "Bản đồ minh họa khu vực mở rộng với các điểm trường", en: "Illustrated expanded-area map with school markers" },
        pins: [
            { id: "lehongphong", top: "42%", left: "24%" },
            { id: "trandainghia", top: "58%", left: "64%" }
        ]
    }
};

function localized(value) {
    if (!value || typeof value !== "object") return value;
    if (currentLang === "bi") {
        return value.vi === value.en ? value.vi : `${value.vi} / ${value.en}`;
    }
    return value[currentLang] || value.vi;
}

function schoolName(school) {
    if (currentLang === "en") return school.enName;
    if (currentLang === "bi") return `${school.name} / ${school.enName}`;
    return school.name;
}

function textFor(key, lang = currentLang) {
    if (lang === "bi") return `${I18N.vi[key]} / ${I18N.en[key]}`;
    return I18N[lang]?.[key] ?? I18N.vi[key] ?? key;
}

function setBilingualContent(element, viText, enText) {
    if (viText === enText || element.tagName === "OPTION") {
        element.textContent = viText === enText ? viText : `${viText} / ${enText}`;
        return;
    }

    const vi = document.createElement("span");
    const en = document.createElement("span");
    vi.className = "i18n-vi";
    en.className = "i18n-en";
    vi.textContent = viText;
    en.textContent = enText;
    element.replaceChildren(vi, en);
}

function applyLang(lang, rerender = true) {
    currentLang = ["vi", "en", "bi"].includes(lang) ? lang : "vi";
    document.documentElement.lang = currentLang === "en" ? "en" : "vi";
    document.documentElement.dataset.langMode = currentLang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        const viText = I18N.vi[key];
        const enText = I18N.en[key];
        if (viText == null || enText == null) return;

        const attribute = element.dataset.i18nAttr;
        if (attribute) {
            element.setAttribute(attribute, currentLang === "bi" ? `${viText} / ${enText}` : I18N[currentLang][key]);
        } else if (currentLang === "bi") {
            setBilingualContent(element, viText, enText);
        } else {
            element.textContent = I18N[currentLang][key];
        }
    });

    const page = document.body.dataset.page;
    const titleKey = page === "tour" ? "page.tourTitle" : "page.homeTitle";
    const descriptionKey = page === "tour" ? "page.tourDescription" : "page.homeDescription";
    document.title = textFor(titleKey);
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = textFor(descriptionKey);

    updateLanguageButton();
    try { localStorage.setItem("schoolcarto-language", currentLang); } catch (error) { /* Storage can be unavailable on file URLs. */ }

    if (!rerender) return;
    const mapSelector = document.getElementById("mapSelector");
    const tourSelector = document.getElementById("tourSchoolSelect");
    if (mapSelector) renderMap(mapSelector.value);
    if (tourSelector) renderTour(tourSelector.value || getInitialSchoolId());
    renderAddressDirectory();
    renderSchoolCards();
    initTilt();
    initSpotlight();
}

function updateLanguageButton() {
    const toggle = document.querySelector("[data-lang-toggle]");
    if (!toggle) return;
    const order = ["vi", "en", "bi"];
    const nextLang = order[(order.indexOf(currentLang) + 1) % order.length];
    const current = toggle.querySelector("[data-lang-current]");
    const next = toggle.querySelector("[data-lang-next]");
    if (current) current.textContent = currentLang.toUpperCase();
    if (next) next.textContent = nextLang.toUpperCase();
    toggle.classList.toggle("is-en", currentLang === "en");
    toggle.classList.toggle("is-bi", currentLang === "bi");
    toggle.setAttribute("aria-pressed", String(currentLang !== "vi"));
    toggle.setAttribute("aria-label", textFor("lang.label"));
}

function initLanguageToggle() {
    const toggle = document.querySelector("[data-lang-toggle]");
    let saved = "vi";
    try { saved = localStorage.getItem("schoolcarto-language") || "vi"; } catch (error) { /* Use Vietnamese by default. */ }
    applyLang(saved, false);
    if (!toggle) return;

    toggle.addEventListener("click", () => {
        const order = ["vi", "en", "bi"];
        applyLang(order[(order.indexOf(currentLang) + 1) % order.length]);
    });
}

function initReveal() {
    const revealItems = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
        revealItems.forEach((item) => item.classList.add("in"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    revealItems.forEach((item) => observer.observe(item));
}

function renderAddressDirectory() {
    const grid = document.getElementById("addressGrid");
    if (!grid) return;
    grid.innerHTML = schoolDirectory.map((school) => `
        <article class="address-card">
            <span class="badge">${localized(school.badge)}</span>
            <h3>${localized(school.name)}</h3>
            <p>${school.address}</p>
        </article>
    `).join("");
}

function renderSchoolCards() {
    const grid = document.getElementById("schoolCards");
    if (!grid) return;
    grid.innerHTML = Object.entries(schools).map(([id, school], index) => `
        <article class="school-card tilt spotlight">
            ${index === 1 ? '<span class="badge-pulse">NEW</span>' : ""}
            <img src="${school.image}" alt="${localized(school.imageAlt)}">
            <div class="card-content">
                <span class="badge">${localized(school.district)}</span>
                <h3>${schoolName(school)}</h3>
                <p>${localized(school.cardText)}</p>
                <div class="card-meta" aria-label="${textFor("schools.quickInfo")}">
                    <span>Tour 360</span>
                    <span>${school.shortAddress}</span>
                    <span>${textFor("schools.realPhoto")}</span>
                </div>
                <a href="tour360.html?id=${id}" class="btn btn-primary">${textFor("cta.visitTour")}</a>
            </div>
        </article>
    `).join("");
}

function updateMapDetails(schoolId) {
    const detailBox = document.getElementById("mapDetails");
    const school = schools[schoolId];
    if (!detailBox || !school) return;

    detailBox.innerHTML = `
        <span class="badge">${textFor("map.active")}</span>
        <h3>${currentLang === "en" ? school.enName : school.name}</h3>
        ${currentLang === "vi" ? `<p class="school-en">${school.enName}</p>` : ""}
        ${currentLang === "bi" ? `<p class="school-en">${school.enName}</p>` : ""}
        <p>${localized(school.cardText)}</p>
        <p class="school-address">${school.address}</p>
        <a class="btn btn-primary" href="tour360.html?id=${schoolId}">${textFor("cta.openTour")}</a>
    `;
}

function renderMap(mapKey) {
    const data = mapData[mapKey] || mapData.khu_vuc_1;
    const currentMapImage = document.getElementById("currentMapImage");
    const mapPinsArea = document.getElementById("mapPinsArea");
    if (!currentMapImage || !mapPinsArea) return;

    currentMapImage.src = data.image;
    currentMapImage.alt = localized(data.alt);
    mapPinsArea.innerHTML = "";

    data.pins.forEach((pin, index) => {
        const school = schools[pin.id];
        if (!school) return;
        const pinElement = document.createElement("button");
        pinElement.type = "button";
        pinElement.className = "map-pin";
        pinElement.style.top = pin.top;
        pinElement.style.left = pin.left;
        pinElement.dataset.title = schoolName(school);
        pinElement.setAttribute("aria-label", `${textFor("map.viewQuick")} ${schoolName(school)}`);
        pinElement.addEventListener("click", () => {
            document.querySelectorAll(".map-pin").forEach((item) => item.classList.remove("is-active"));
            pinElement.classList.add("is-active");
            updateMapDetails(pin.id);
        });
        mapPinsArea.appendChild(pinElement);
        if (index === 0) {
            pinElement.classList.add("is-active");
            updateMapDetails(pin.id);
        }
    });
}

function initHomePage() {
    renderAddressDirectory();
    renderSchoolCards();
    const mapSelector = document.getElementById("mapSelector");
    if (!mapSelector) return;
    renderMap(mapSelector.value);
    mapSelector.addEventListener("change", (event) => renderMap(event.target.value));
}

function getInitialSchoolId() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    return schools[id] ? id : "trandainghia";
}

function setActiveHotspot(button, hotspot) {
    document.querySelectorAll(".hotspot").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const title = document.getElementById("tourInfoTitle");
    const text = document.getElementById("tourInfoText");
    if (title) title.textContent = localized(hotspot.title);
    if (text) text.textContent = localized(hotspot.text);
}

function renderTour(schoolId) {
    const school = schools[schoolId] || schools.trandainghia;
    const selector = document.getElementById("tourSchoolSelect");
    const title = document.getElementById("tourTitle");
    const subtitle = document.getElementById("tourSubtitle");
    const image = document.getElementById("tourImage");
    const hotspots = document.getElementById("tourHotspots");
    const infoTitle = document.getElementById("tourInfoTitle");
    const infoText = document.getElementById("tourInfoText");
    const infoList = document.getElementById("tourInfoList");

    if (selector) {
        selector.value = schoolId;
        Array.from(selector.options).forEach((option) => {
            const optionSchool = schools[option.value];
            if (optionSchool) option.textContent = schoolName(optionSchool);
        });
    }
    if (title) title.textContent = schoolName(school);
    if (subtitle) subtitle.textContent = localized(school.tourLead);
    if (image) {
        image.src = school.image;
        image.alt = localized(school.imageAlt);
    }
    if (infoTitle) infoTitle.textContent = localized(school.hotspots[0].title);
    if (infoText) infoText.textContent = localized(school.hotspots[0].text);
    if (infoList) {
        infoList.innerHTML = school.stats.map((item) => `
            <div><strong>${localized(item.label)}</strong><span>${localized(item.value)}</span></div>
        `).join("");
    }
    if (hotspots) {
        hotspots.innerHTML = "";
        school.hotspots.forEach((hotspot, index) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "hotspot";
            button.style.top = hotspot.top;
            button.style.left = hotspot.left;
            button.title = localized(hotspot.title);
            button.setAttribute("aria-label", localized(hotspot.title));
            button.addEventListener("click", () => setActiveHotspot(button, hotspot));
            hotspots.appendChild(button);
            if (index === 0) button.classList.add("is-active");
        });
    }
}

function initTourPage() {
    const selector = document.getElementById("tourSchoolSelect");
    if (!selector) return;
    const initialId = getInitialSchoolId();
    renderTour(initialId);
    selector.addEventListener("change", (event) => {
        const nextId = event.target.value;
        renderTour(nextId);
        window.history.replaceState(null, "", `tour360.html?id=${nextId}`);
    });
}

function initScrollProgress() {
    const bar = document.getElementById("scrollBar");
    if (!bar) return;
    const update = () => {
        const root = document.documentElement;
        const max = root.scrollHeight - root.clientHeight;
        bar.style.width = `${max > 0 ? (root.scrollTop / max) * 100 : 0}%`;
    };
    document.addEventListener("scroll", update, { passive: true });
    update();
}

function initCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const run = (element) => {
        const end = Number(element.dataset.count);
        if (reduceMotion) {
            element.textContent = end;
            return;
        }
        const duration = 900;
        const start = performance.now();
        const tick = (time) => {
            const progress = Math.min((time - start) / duration, 1);
            element.textContent = Math.round(end * (1 - Math.pow(1 - progress, 3)));
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    };
    if (!("IntersectionObserver" in window)) {
        counters.forEach(run);
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                run(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });
    counters.forEach((counter) => observer.observe(counter));
}

function initTilt() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.querySelectorAll(".tilt:not([data-tilt-ready])").forEach((card) => {
        card.dataset.tiltReady = "true";
        card.addEventListener("pointermove", (event) => {
            const rect = card.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            card.style.setProperty("--rx", `${(x * 6).toFixed(2)}deg`);
            card.style.setProperty("--ry", `${(-y * 6).toFixed(2)}deg`);
        });
        card.addEventListener("pointerleave", () => {
            card.style.setProperty("--rx", "0deg");
            card.style.setProperty("--ry", "0deg");
        });
    });
}

function initSpotlight() {
    document.querySelectorAll(".spotlight:not([data-spotlight-ready])").forEach((element) => {
        element.dataset.spotlightReady = "true";
        element.addEventListener("pointermove", (event) => {
            const rect = element.getBoundingClientRect();
            element.style.setProperty("--mx", `${event.clientX - rect.left}px`);
            element.style.setProperty("--my", `${event.clientY - rect.top}px`);
        });
    });
}

function initAmbientMotion() {
    const motionItems = document.querySelectorAll("[data-ambient-motion]");
    if (!motionItems.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) {
        motionItems.forEach((item) => item.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
    }, { threshold: 0.05 });

    motionItems.forEach((item) => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", () => {
    initLanguageToggle();
    initHomePage();
    initTourPage();
    initReveal();
    initScrollProgress();
    initCounters();
    initTilt();
    initSpotlight();
    initAmbientMotion();
});
