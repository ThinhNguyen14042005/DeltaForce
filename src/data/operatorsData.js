const operatorsData = [
  {
    id: "dwolf",
    label: "D-WOLF",
    name: "D-WOLF",
    realName: "Tên: Kai Silva",
    role: "Xung Kích",
    roleColor: "#ff4d4d", // Đỏ
    roleIcon: "bi-chevron-double-up",
    roleDesc: "Đặc vụ hệ Xung Kích thường có tốc độ di chuyển khi ngắm bắn nhanh hơn các hệ khác. Họ cũng có thể dùng Súng Phóng Lựu Chống Bộ Binh và Súng Phóng Lựu EMP trong Chiến Trường.",
    image: "/images/operators/operator_list_01.jpg", 
    thumb: "/images/operators/operator_list_01.jpg", 
    skills: [
      {
        title: "Trang Bị Tác chiến – Khung Xương Trợ Lực",
        desc: "Kích hoạt bộ đeo tay để nạp siêu năng lượng cho khung xương trợ lực, gia tăng tốc độ chạy. Hạ gục kẻ địch giúp hồi HP và tăng thời gian duy trì.",
        icon: "bi bi-gear-fill"
      },
      {
        title: "Thiết Bị – Pháo Tam Kích",
        desc: "Thiết bị được trang bị ba quả lựu đạn và bắn bằng cách dùng ngón trỏ kéo chốt. Lựu đạn sẽ bám lên phương tiện bị bắn trúng.",
        icon: "bi-rocket-takeoff-fill"
      },
      {
        title: "Thiết Bị – Lựu Đạn Khói",
        desc: "Lựu đạn khói ít chất nổ, dùng để tấn công, tạo khói nhanh tan khi nổ.",
        icon: "bi-cloud-haze2-fill"
      },
      {
        title: "Nội Tại – Trượt Tác Chiến",
        desc: "Sử dụng khung xương trợ lực để trượt nhanh.",
        icon: "bi-fast-forward-fill"
      }
    ],
  },
  {
    id: "sepherd",
    label: "SEPHERD",
    name: "SEPHERD",
    realName: "Tên: Terry Musa",
    role: "Kỹ Sư",
    roleColor: "#fbbc04", // Vàng
    roleIcon: "bi-shield-shaded",
    roleDesc: "Đặc vụ hệ Kỹ Sư có thể sử dụng súng hàn để cắt rào, sửa phương tiện hoặc kiến trúc phòng thủ. Họ cũng có thể dùng Súng AT4 hoặc Stinger trong chế độ Chiến Trường.",
    image: "/images/operators/operator_list_02.jpg", // Ảnh nền to
    thumb: "/images/operators/operator_list_02.jpg", // Ảnh thẻ nhỏ
    skills: [
      {
        title: "Trang Bị Tác Chiến – Sóng Âm Tê Liệt",
        desc: "Triển Khai Drone Sóng Âm sẽ khống chế và làm giảm tốc độ bắn của kẻ địch trong bán kính 30m. Thiết bị sẽ phá huỷ những thiết bị sóng âm khác của kẻ địch và nhiều các thiết bị trinh sát.",
        icon: "bi-radar"
      },
      {
        title: "Thiết Bị – Bẫy Sóng Âm",
        desc: "Đặt Bẫy Sóng Âm bám trên bề mặt cứng. Được kích hoạt khi xuất hiện địch trong vòng 4 mét, gây sát thương và giảm tốc độ di chuyển của địch trên diện rộng.",
        icon: "bi-speaker"
      },
      {
        title: "Thiết Bị – Lựu Đạn Phân Mảnh",
        desc: "Lựu đạn ghép mảnh được dùng cho mục đích phòng thủ, rất hiệu quả đối với giáp chống đạn và những phần không được bảo vệ.",
        icon: "bi-vinyl-fill"
      },
      {
        title: "Nội Tại – Sóng Phòng Hộ",
        desc: "Sử dụng thiết bị gắn tay để bắn sóng âm ngược pha, giảm thiểu sát thương từ súng nổ.",
        icon: "bi-activity"
      }
    ],
  },
  {
    id: "luna",
    label: "LUNA",
    name: "LUNA",
    realName: "Tên: Luna Kim",
    role: "Trinh Sát",
    roleColor: "#0dcaf0", // Xanh biển nhạt (Cyan)
    roleIcon: "bi-crosshair",
    roleDesc: "Đặc vụ hệ Trinh Sát có thể truy cập vào Radio trên bản đồ để phát hiện kẻ địch. Họ cũng có thể đặt Điểm Hồi Sinh ở bản đồ Chiến Trường.",
    image: "/images/operators/operator_list_03.jpg", 
    thumb: "/images/operators/operator_list_03.jpg",
    skills: [
      {
        title: "Trang Bị Tác Chiến – Tên Dò Thám",
        desc: "Phóng tên dò thám để theo dõi kẻ địch và vô hiệu hóa thiết bị thăm dò của chúng.",
        icon: "bi-cursor-fill"
      },
      {
        title: "Thiết Bị – Tên Điện Kích",
        desc: "Bắn từ 1 cung đặc thù, Tên Điện Kích có thể áp chế quân địch trên diện rộng ở phạm vi vừa và xa.",
        icon: "bi-lightning-fill"
      },
      {
        title: "Thiết Bị – Lựu Đạn Phân Mảnh",
        desc: "Lựu đạn ghép mảnh được dùng cho mục đích phòng thủ, rất hiệu quả đối với giáp chống đạn và những phần không được bảo vệ.",
        icon: "bi-vinyl-fill"
      },
      {
        title: "Nội Tại – Phân Tích Đối Thủ",
        desc: "Kẻ địch bị Luna bắn trúng tạm thời bị đánh dấu.",
        icon: "bi-bullseye"
      }
    ],
  },
  {
    id: "stinger",
    label: "STINGER",
    name: "STINGER",
    realName: "Tên: Roy Smee",
    role: "Hỗ Trợ",
    roleColor: "#00e676", // Xanh lá (Neon Green)
    roleIcon: "bi-plus-lg",
    roleDesc: "Đặc vụ hệ Hỗ Trợ có thể Cứu đồng đội nhanh hơn các hệ khác. Trong Chiến Trường, họ có thể đặt các thùng tiếp tế đạn cho đồng đội.",
    image: "/images/operators/operator_list_04.jpg", 
    thumb: "/images/operators/operator_list_04.jpg",
    skills: [
      {
        title: "Trang Bị Tác Chiến – Súng Trị Liệu",
        desc: "Trang bị súng trị liệu bắn đạn tự dẫn nhiều đối tượng, giảm đau và hồi HP cho đồng minh. Khi ngắm vào ống ngắm, súng chỉ khoá vào 1 mục tiêu.",
        icon: "bi-bandaid-fill"
      },
      {
        title: "Thiết Bị – Chiến Thuật Hỏa Mù",
        desc: "UAV điều khiển cảm ứng sẽ nhả ra vệt khói trắng khi đang bay. Ấn và giữ nút bắn để điều hướng UAV.",
        icon: "bi-airplane-engines-fill"
      },
      {
        title: "Thiết Bị – Lựu Đạn Khói",
        desc: "Ném Lựu Đạn Khói Trị Liệu và dùng Súng Trị Liệu bắn vào khói để kích hoạt tính năng trị liệu.",
        icon: "bi-cloud-haze2-fill"
      },
      {
        title: "Nội Tại – Chuyên Gia Cứu Hộ",
        desc: "Sử dụng Súng Trị Liệu để giải cứu đồng đội thuận lợi hơn và hồi nhiều HP hơn sau khi giải cứu thành công. Loại bỏ hiệu ứng bất lợi làm giảm HP tối đa trong Chiến Dịch.",
        icon: "bi-heart-pulse-fill"
      }
    ],
  },
  {
    id: "vyron",
    label: "VYRON",
    name: "VYRON",
    realName: "Tên: Wang YuHao",
    role: "Xung Kích",
    roleColor: "#ff4d4d", // Đỏ
    roleIcon: "bi-chevron-double-up",
    roleDesc: "Đặc vụ hệ Xung Kích thường có tốc độ di chuyển khi ngắm bắn nhanh hơn các hệ khác. Họ cũng có thể dùng Súng Phóng Lựu Chống Bộ Binh và Súng Phóng Lựu EMP trong Chiến Trường.",
    image: "/images/operators/operator_list_05.jpg", 
    thumb: "/images/operators/operator_list_05.jpg",
    skills: [
      {
        title: "Trang Bị Tác Chiến – QLL32 Ngọa Hổ",
        desc: "Bắn một viên đạn khí nén, đẩy ngã kẻ thù đứng trong bán kính nổ.",
        icon: "bi-record-circle-fill"
      },
      {
        title: "Thiết Bị – Động Cơ Phản Lực",
        desc: "Kích hoạt động cơ để nhanh chóng dịch chuyển đến vị trí cần thiết. Hạ gục kẻ địch giúp giảm thời gian hồi chiêu.",
        icon: "bi-wind"
      },
      {
        title: "Thiết Bị – Bom Từ Tính",
        desc: "Loại bom uy lực lớn có thể dính vào bề mặt cứng và nổ sau khi đếm ngược.",
        icon: "bi-magnet-fill"
      },
      {
        title: "Nội Tại – Trợ Lực Phản Chấn",
        desc: "Hệ thống trợ lực sẽ kích hoạt ngay khi sử dụng kỹ năng hoặc rơi từ trên cao, giúp làm giảm sát thương khi rơi và gia tăng tốc độ di chuyển.",
        icon: "bi-capslock-fill"
      }
    ],
  },
  {
    id: "hackclaw",
    label: "HACKCLAW",
    name: "HACKCLAW",
    realName: "Tên: Mai XiaoWen",
    role: "Trinh Sát",
    roleColor: "#0dcaf0",
    roleIcon: "bi-gear-wide-connected",
    roleDesc: "Đặc vụ hệ Trinh Sát có thể truy cập vào Radio trên bản đồ Chiến Dịch. Họ cũng có thể đặt Điểm Hồi Sinh ở bản đồ Chiến Trường.",
    image: "/images/operators/operator_list_06.jpg", 
    thumb: "/images/operators/operator_list_06.jpg",
    skills: [
      {
        title: "Trang Bị Tác Chiến – Giải Mã Tín Hiệu",
        desc: "Kích hoạt bộ giải mã để quét định kỳ tối đa 6 tín hiệu từ quân địch trong phạm vi 60m và hiển thị chuyển động của địch qua kính áp tròng. Tín hiệu gần nhất sẽ được đánh dấu đỏ, Hackclaw càng lại gần, độ cảnh giác của kẻ địch càng tăng.",
        icon: "bi-upc-scan"
      },
      {
        title: "Thiết Bị – Dao Hacker",
        desc: "Ném Dao Hacker để hack các thiết bị điện tử trong phạm vi 10m và tạm thời vô hiệu hoá chúng. Gây sát thương lớn nếu ném trúng kẻ địch.",
        icon: "bi-lightning-charge-fill"
      },
      {
        title: "Thiết Bị – Drone Tia Chớp",
        desc: "Kích hoạt drone bay về phía trước, tạo chùm sáng gây choáng cho kẻ địch trong phạm vi. Khi ngắm điểm ruồi vào đường theo dõi của bộ giải mã, đường sẽ chuyển thành màu vàng giúp drone dễ dàng bay theo.",
        icon: "bi bi-airplane-engines-fill"
      },
      {
        title: "Thiết Bị – Bàn Chân Lặng Lẽ",
        desc: "Tăng tốc độ di chuyển trong khi đang bước đi nhẹ hay đang ngồi và giảm tiếng ồn.",
        icon: "bi-person-walking"
      }
    ],
  },
  {
    id: "comingsoon",
    label: "SẮP RA MẮT",
    name: "SẮP RA MẮT",
    skills: [],
    locked: true
  }
];

export default operatorsData;