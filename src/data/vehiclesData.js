const vehiclesData = [
  {
    id: "m1a4",
    label: "M1A4",
    name: "XE TĂNG M1A4",
    type: "Phân loại: Xe Tăng Chiến Đấu",
    typeColor: "#ff4d4d", 
    typeIcon: "bi-crosshair",
    description: "Phương tiện chiến đấu bọc thép hạng nặng chủ lực. Được thiết kế để xuyên thủng phòng tuyến và cung cấp hỏa lực áp đảo trên chiến trường.",
    image: "/images/vehicles/tankM1A4.jpg",
    mobileImage: "/images/vehicles/tankM1A4_mobile.jpg", // Ảnh dọc mobile
    thumb: "/images/vehicles/tankM1A4.jpg",
    mobileBgPos: "center 60%", // Tùy chỉnh tọa độ cho Mobile
    features: [
      { title: "Hỏa lực - Tối đa", desc: "Pháo nòng trơn cỡ lớn phá hủy mọi thiết giáp.", icon: "bi-fire" },
      { title: "Phòng thủ - Kiên cố", desc: "Giáp phức hợp kiên cố chống chịu sát thương lớn.", icon: "bi-shield-fill-check" },
      { title: "Cơ động - Thấp", desc: "Tốc độ di chuyển chậm, cần bộ binh yểm trợ.", icon: "bi-speedometer" }
    ]
  },
  {
    id: "fsv",
    label: "FSV",
    name: "XE CHỐNG TĂNG FSV",
    type: "Phân loại: Xe Hỗ Trợ Hỏa Lực",
    typeColor: "#fbbc04", 
    typeIcon: "bi-bullseye",
    description: "Phương tiện tác chiến cơ động với khả năng tiêu diệt thiết giáp đối phương từ khoảng cách an toàn bằng hệ thống pháo chuyên dụng.",
    image: "/images/vehicles/FSV.jpg",
    mobileImage: "/images/vehicles/FSV_mobile.jpg",
    thumb: "/images/vehicles/FSV.jpg",
    mobileBgPos: "center 60%",
    features: [
      { title: "Hỏa lực - Xuyên Giáp", desc: "Khả năng bắn tỉa thiết giáp cực tốt.", icon: "bi-lightning-charge-fill" },
      { title: "Cơ động - Khá", desc: "Dễ dàng thay đổi vị trí chiến thuật sau khi khai hỏa.", icon: "bi-wind" }
    ]
  },
  {
    id: "ah1035d",
    label: "AH-1035D",
    name: "TRỰC THĂNG AH-1035D",
    type: "Phân loại: Trực Thăng Tấn Công",
    typeColor: "#0dcaf0", 
    typeIcon: "bi-airplane-engines-fill",
    description: "Bóng ma bầu trời. Cung cấp hỏa lực yểm trợ không đối đất tầm gần và tiêu diệt các mục tiêu thiết giáp bằng tên lửa dẫn đường.",
    image: "/images/vehicles/AH-1035D.jpg",
    mobileImage: "/images/vehicles/AH-1035D_mobile.jpg",
    thumb: "/images/vehicles/AH-1035D.jpg",
    mobileBgPos: "center 50%",
    features: [
      { title: "Hỏa lực - Không Kích", desc: "Trang bị súng máy và tên lửa đối đất Hellfire.", icon: "bi-rocket-takeoff-fill" },
      { title: "Di chuyển - Vượt địa hình", desc: "Hoàn toàn không bị cản trở bởi địa hình đồi núi.", icon: "bi-clouds-fill" }
    ]
  },
  {
    id: "atv",
    label: "ATV",
    name: "XE ĐỊA HÌNH ĐA DỤNG",
    type: "Phân loại: Xe Đa Dụng",
    typeColor: "#00e676", 
    typeIcon: "bi-bicycle",
    description: "Mô tô địa hình có hiệu năng cao. Dù không có giáp phòng hộ, kích cỡ vừa vặn của chiếc xe giúp bạn vượt qua mọi loại địa hình phức tạp. Người ngồi ghế sau có thể dùng vũ khí riêng.",
    image: "/images/vehicles/ATV.jpg",
    mobileImage: "/images/vehicles/ATV_mobile.jpg",
    thumb: "/images/vehicles/ATV.jpg",
    mobileBgPos: "center 60%",
    features: [
      { title: "Cơ động - Tối đa", desc: "Tốc độ cực nhanh trên mọi địa hình hiểm trở.", icon: "bi-speedometer" },
      { title: "Phòng thủ - Yếu", desc: "Không có giáp bảo vệ người lái khỏi hỏa lực nhỏ.", icon: "bi-exclamation-triangle-fill" }
    ]
  },
  {
    id: "lav-g1",
    label: "LAV-G1",
    name: "XE BỌC THÉP LAV-G1",
    type: "Phân loại: Xe Chiến Đấu Bộ Binh",
    typeColor: "#fbbc04",
    typeIcon: "bi-truck-front-fill",
    description: "Phương tiện vận binh bọc thép, cân bằng hoàn hảo giữa khả năng bảo vệ tổ đội và hỏa lực hỗ trợ từ tháp pháo hạng nhẹ.",
    image: "/images/vehicles/LAV-G1-IFV.jpg",
    mobileImage: "/images/vehicles/LAV-G1-IFV_mobile.jpg",
    thumb: "/images/vehicles/LAV-G1-IFV.jpg",
    mobileBgPos: "center 60%",
    features: [
      { title: "Sức chứa - Tiểu đội", desc: "Vận chuyển an toàn lực lượng bộ binh tiến công.", icon: "bi-people-fill" },
      { title: "Hỏa lực - Áp chế", desc: "Sử dụng súng máy tự động áp chế bộ binh địch.", icon: "bi-crosshair" }
    ]
  },
  {
    id: "lav-aa",
    label: "LAV-AA",
    name: "XE PHÒNG KHÔNG LAV-AA",
    type: "Phân loại: Xe Phòng Không",
    typeColor: "#ff4d4d",
    typeIcon: "bi-radar",
    description: "Hệ thống phòng không tự hành, dọn dẹp bầu trời khỏi trực thăng và UAV của kẻ địch bằng mạng lưới hỏa lực pháo phòng không dày đặc.",
    image: "/images/vehicles/LAV-AA.jpg",
    mobileImage: "/images/vehicles/LAV-AA_mobile.jpg",
    thumb: "/images/vehicles/LAV-AA.jpg",
    mobileBgPos: "center 60%",
    features: [
      { title: "Phòng không - Khóa Mục Tiêu", desc: "Quét radar và tiêu diệt nhanh các mối đe dọa trên không.", icon: "bi-airplane-fill" }
    ]
  },
  {
    id: "assault",
    label: "XUNG KÍCH",
    name: "XE XUNG KÍCH",
    type: "Phân loại: Xe Thiết Giáp Nhẹ",
    typeColor: "#00e676",
    typeIcon: "bi-car-front-fill",
    description: "Phiên bản thiết giáp cơ động, thiết kế để chở quân nhanh đến tiền tuyến với súng máy gắn nóc hỗ trợ dọn dẹp các mục tiêu nhỏ.",
    image: "/images/vehicles/xungkich.jpg",
    mobileImage: "/images/vehicles/xungkich_mobile.jpg",
    thumb: "/images/vehicles/xungkich.jpg",
    mobileBgPos: "center 60%",
    features: [
      { title: "Cơ động - Đô thị", desc: "Di chuyển linh hoạt trong khu vực đô thị chật hẹp.", icon: "bi-buildings-fill" }
    ]
  }
];

export default vehiclesData;