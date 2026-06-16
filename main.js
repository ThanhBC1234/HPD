// 1. CƠ SỞ DỮ LIỆU CÁC MAP VÀ ĐIỂM PIN
const mapData = {
    "khu_vuc_1": {
        image: "assets/images/maps/map.png", 
        pins: [
            // Tọa độ giả định =)), để đại nha
            { id: "lehongphong", title: "THPT Chuyên Lê Hồng Phong", top: "17%", left: "35%" },
            { id: "trandainghia", title: "THCS & THPT Trần Đại Nghĩa", top: "48%", left: "65%" }
        ]
    },
    "khu_vuc_2": {
        // Tạm thời chưa có map 2 để đại
        image: "assets/images/maps/map.png", 
        pins: [
            { id: "lequydon", title: "THPT Lê Quý Đôn", top: "60%", left: "40%" }
        ]
    }
};

const mapSelector = document.getElementById('mapSelector');
const currentMapImage = document.getElementById('currentMapImage');
const mapPinsArea = document.getElementById('mapPinsArea');

// 2. HÀM RENDER BẢN ĐỒ
function renderMap(mapKey) {
    const data = mapData[mapKey];
    
    currentMapImage.src = data.image;
    mapPinsArea.innerHTML = '';

    data.pins.forEach(pin => {
        const pinElement = document.createElement('div');
        pinElement.className = 'map-pin';
        pinElement.style.top = pin.top;
        pinElement.style.left = pin.left;
        pinElement.setAttribute('data-title', pin.title);

        pinElement.addEventListener('click', () => {
            window.location.href = `tour360.html?id=${pin.id}`;
        });

        mapPinsArea.appendChild(pinElement);
    });
}

// 3. SỰ KIỆN ĐỔI MAP
mapSelector.addEventListener('change', function() {
    renderMap(this.value);
});

// 4. CHẠY KHI TẢI TRANG
window.onload = () => {
    renderMap('khu_vuc_1');
};