const schools = {
    lehongphong: {
        name: "THPT Chuyên Lê Hồng Phong",
        enName: "Le Hong Phong High School for the Gifted",
        district: "Chợ Quán",
        address: "235 Nguyễn Văn Cừ, phường Chợ Quán, TP.HCM",
        image: "assets/images/schools/lhp.png",
        cardText: "Dữ liệu mẫu gồm ảnh khuôn viên, địa chỉ trung tâm và các điểm tham quan chính để người dùng hình dung nhanh bố cục trường.",
        tourLead: "Tour mẫu tập trung vào khu sân, dãy lớp và mảng xanh, giúp người xem nhận diện không gian học đường qua các điểm chính.",
        stats: [
            { label: "Khu vực", value: "Chợ Quán" },
            { label: "Địa chỉ", value: "235 Nguyễn Văn Cừ" },
            { label: "Trải nghiệm", value: "Sân trường, hành lang, lớp học" }
        ],
        hotspots: [
            { title: "Sân trung tâm", text: "Không gian sinh hoạt chung, nơi diễn ra nhiều hoạt động phong trào và sự kiện học sinh.", top: "55%", left: "42%" },
            { title: "Dãy lớp học", text: "Khu học tập mang kiến trúc đặc trưng, tạo cảm giác gần gũi và giàu dấu ấn lịch sử.", top: "37%", left: "63%" },
            { title: "Khu vườn", text: "Mảng xanh giúp cân bằng nhịp học tập, tạo khoảng nghỉ tự nhiên trong khuôn viên trường.", top: "68%", left: "28%" }
        ]
    },
    trandainghia: {
        name: "THPT Chuyên Trần Đại Nghĩa",
        enName: "Tran Dai Nghia High School for the Gifted",
        district: "An Khánh",
        address: "Lô P2 Khu tái định cư 38.4 ha, P. An Khánh, TP. HCM",
        image: "assets/images/anhchinh.png",
        cardText: "Dữ liệu mẫu ghi nhận toàn cảnh cơ sở chính, khu học tập và khu vận động, phục vụ mục tiêu tra cứu nhanh trên bản đồ.",
        tourLead: "Góc nhìn toàn cảnh giúp học sinh nhận diện quy mô khuôn viên, vị trí khối lớp và các khu chức năng chính.",
        stats: [
            { label: "Khu vực", value: "An Khánh" },
            { label: "Địa chỉ", value: "Lô P2, khu tái định cư 38.4 ha" },
            { label: "Trải nghiệm", value: "Toàn cảnh, sân thể thao, khối lớp" }
        ],
        hotspots: [
            { title: "Khối lớp học", text: "Dãy phòng học chính nằm ở trung tâm khuôn viên, là điểm neo thị giác của toàn bộ trải nghiệm.", top: "42%", left: "52%" },
            { title: "Sân thể thao", text: "Khu vực vận động ngoài trời giúp học sinh quan sát đời sống năng động bên cạnh hoạt động học thuật.", top: "64%", left: "55%" },
            { title: "Mảng xanh", text: "Hệ cây xanh bao quanh tạo cảm giác thoáng, giúp bản đồ số không chỉ có thông tin mà còn có cảm xúc không gian.", top: "70%", left: "30%" }
        ]
    }
};

const mapData = {
    khu_vuc_1: {
        image: "assets/images/maps/map.png",
        alt: "Bản đồ minh họa khu vực trung tâm với các điểm trường được đánh dấu",
        pins: [
            { id: "lehongphong", top: "35%", left: "31%" },
            { id: "trandainghia", top: "55%", left: "66%" }
        ]
    },
    khu_vuc_2: {
        image: "assets/images/maps/test.jpg",
        alt: "Bản đồ minh họa khu vực mở rộng với các điểm trường được đánh dấu",
        pins: [
            { id: "lehongphong", top: "42%", left: "24%" },
            { id: "trandainghia", top: "58%", left: "64%" }
        ]
    }
};

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

function updateMapDetails(schoolId) {
    const detailBox = document.getElementById("mapDetails");
    const school = schools[schoolId];

    if (!detailBox || !school) {
        return;
    }

    detailBox.innerHTML = `
        <span class="badge">${school.district}</span>
        <h3>${school.name}</h3>
        <p class="school-en">${school.enName}</p>
        <p>${school.cardText}</p>
        <p class="school-address">${school.address}</p>
        <a class="btn btn-primary" href="tour360.html?id=${schoolId}">Mở tour 360</a>
    `;
}

function renderMap(mapKey) {
    const data = mapData[mapKey] || mapData.khu_vuc_1;
    const currentMapImage = document.getElementById("currentMapImage");
    const mapPinsArea = document.getElementById("mapPinsArea");

    if (!currentMapImage || !mapPinsArea) {
        return;
    }

    currentMapImage.src = data.image;
    currentMapImage.alt = data.alt;
    mapPinsArea.innerHTML = "";

    data.pins.forEach((pin, index) => {
        const school = schools[pin.id];
        if (!school) {
            return;
        }

        const pinElement = document.createElement("button");
        pinElement.type = "button";
        pinElement.className = "map-pin";
        pinElement.style.top = pin.top;
        pinElement.style.left = pin.left;
        pinElement.dataset.title = school.name;
        pinElement.setAttribute("aria-label", `Xem nhanh ${school.name}`);

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
    const mapSelector = document.getElementById("mapSelector");

    if (!mapSelector) {
        return;
    }

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

    if (title) {
        title.textContent = hotspot.title;
    }

    if (text) {
        text.textContent = hotspot.text;
    }
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
    }

    if (title) {
        title.textContent = school.name;
    }

    if (subtitle) {
        subtitle.textContent = school.tourLead;
    }

    if (image) {
        image.src = school.image;
        image.alt = `Không gian tham quan của ${school.name}`;
    }

    if (infoTitle) {
        infoTitle.textContent = school.hotspots[0].title;
    }

    if (infoText) {
        infoText.textContent = school.hotspots[0].text;
    }

    if (infoList) {
        infoList.innerHTML = school.stats.map((item) => `
            <div>
                <strong>${item.label}</strong>
                <span>${item.value}</span>
            </div>
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
            button.title = hotspot.title;
            button.setAttribute("aria-label", hotspot.title);
            button.addEventListener("click", () => setActiveHotspot(button, hotspot));
            hotspots.appendChild(button);

            if (index === 0) {
                button.classList.add("is-active");
            }
        });
    }
}

function initTourPage() {
    const selector = document.getElementById("tourSchoolSelect");

    if (!selector) {
        return;
    }

    const initialId = getInitialSchoolId();
    renderTour(initialId);
    selector.addEventListener("change", (event) => {
        const nextId = event.target.value;
        renderTour(nextId);
        window.history.replaceState(null, "", `tour360.html?id=${nextId}`);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initReveal();
    initHomePage();
    initTourPage();
});
