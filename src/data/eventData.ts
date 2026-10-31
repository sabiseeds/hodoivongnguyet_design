export interface Artist {
  id: string;
  name: string;
  roleVi: string;
  roleEn: string;
  category: 'piano' | 'dance' | 'science';
  honorVi?: string;
  honorEn?: string;
  photo: string;
  bioVi: string;
  bioEn: string;
  highlightsVi: string[];
  highlightsEn: string[];
  quoteVi?: string;
  quoteEn?: string;
}

export interface Chapter {
  number: string;
  titleVi: string;
  titleEn: string;
  subTitleVi: string;
  subTitleEn: string;
  performersVi: string;
  performersEn: string;
  creditsVi: { role: string; name: string }[];
  creditsEn: { role: string; name: string }[];
  descriptionVi: string[];
  descriptionEn: string[];
  image: string;
  taglineVi: string;
  taglineEn: string;
  highlights: string[];
}

export interface StageView {
  id: string;
  titleVi: string;
  titleEn: string;
  descriptionVi: string;
  descriptionEn: string;
  image: string;
  focusPointVi: string;
  focusPointEn: string;
}

export const EVENT_DETAILS = {
  title: 'Hồ Đôi Vọng Nguyệt',
  date: '2026-11-21T18:30:00',
  dateFormattedVi: '18:30 · Thứ Bảy, 21/11/2026',
  dateFormattedEn: '6:30 PM · Saturday, November 21, 2026',
  venue: 'IKI Gallery',
  address: '675 Đỗ Xuân Hợp, P. Phước Long, TP. Hồ Chí Minh',
  organizers: [
    {
      name: 'An Khai Hung Investment',
      nameVi: 'An Khai Hung Investment',
      roleVi: 'Đơn vị tổ chức',
      roleEn: 'Organizer',
      hotline: '0773 369 369',
      website: 'www.ikivillage.vn',
      logo: '/public/assets/aistudio/AKH_Logo_6574c649.png',
      qrCode: '/public/assets/aistudio/qr-ikivillage.png'
    },
    {
      name: 'GG Corporation',
      nameVi: 'GG Corporation - Premium Wellbeing',
      roleVi: 'Đơn vị đồng hành',
      roleEn: 'Partner',
      hotline: '0968 268 879',
      website: 'www.ggcvietnam.vn',
      logo: '/public/assets/aistudio/logogg_bd8491d8.webp',
      qrCode: '/public/assets/aistudio/qr-ggcvietnam.png'
    }
  ]
};

export const CHAPTERS: Chapter[] = [
  {
    number: '01',
    titleVi: 'Kịch múa The Five – Mùa thịnh vượng',
    titleEn: 'Dance Drama: The Five – Full Prosperity',
    subTitleVi: '',
    subTitleEn: '',
    performersVi: 'Nguyễn Ngọc Anh, Renjie Ma, NSUT Tố Như, Chika Tatsumi, Trần Văn Thịnh',
    performersEn: 'Nguyen Ngoc Anh, Renjie Ma, NSUT To Nhu, Chika Tatsumi, Tran Van Thinh',
    creditsVi: [
      { role: 'Đạo diễn & biên đạo múa', name: 'Ths. Trưởng khoa sáng tác Nguyễn Ngọc Anh' },
      { role: 'Âm Nhạc', name: 'Nhạc sỹ Trí Minh' },
      { role: 'Diễn viên múa', name: 'Nguyễn Ngọc Anh, Renjie Ma, NSUT Tố Như, Chika Tatsumi, Trần Văn Thịnh.' }
    ],
    creditsEn: [
      { role: 'Director & Choreographer', name: 'MFA. Nguyen Ngoc Anh (Head of Choreography)' },
      { role: 'Music Composer', name: 'Composer Tri Minh' },
      { role: 'Dancers', name: 'Nguyen Ngoc Anh, Renjie Ma, Merited Artist To Nhu, Chika Tatsumi, Tran Van Thinh.' }
    ],
    descriptionVi: [
      'Trong muôn ngàn khám phá của nhân loại về thế giới, có hàng triệu cách để sống, để yêu, và để vui đến hết cuộc đời. Nhưng có một cách chăm sóc chính mình mà ta thường bỏ quên: nhảy múa, vẽ tranh, ca hát, đọc sách. Chúng là một trong những liều thuốc bổ dịu dàng, vui vẻ, nhưng cũng mạnh mẽ nhất cho cả thân lẫn tâm. Nhảy múa, sự hòa quyện hoàn hảo cho cơ thể, có lẽ là ví dụ đẹp nhất. Người quen nhảy múa thường giữ được dáng đi vững, khỏe. Nhảy múa còn là một bài tập cho trái tim và bộ não. Khả năng vận động, xử lý nhịp điệu và không gian củng cố cùng lúc nhiều đường dẫn truyền thần kinh của ta. Chính mối liên kết thân – tâm ấy giúp ta uyển chuyển, có chủ đích và kiểm soát tốt cả cuộc đời.',
      'Vở múa The five – Mùa thịnh vượng, như tên gọi của nó được thể hiện bởi 5 tài năng múa xuất sắc trên các sân khấu nghệ thuật biểu diễn quốc tế. Mỗi người trong số 5 người này đều có nhiều thành tích và kinh nghiệm biểu diễn quốc tế trong vai trò solist, duo, mà hiếm khi ta được thưởng thức. Đây là một cơ hội đặc biệt, để thưởng lãm ý nghĩa minh triết, vòng tuần hoàn trong cuộc đời của mỗi người: Sinh – Lão – Bệnh – Tử rồi lại Sinh, của thiên nhiên: Xuân – Hạ - Thu – Đông rồi lại Xuân, và của 5 nguyên tố cơ bản của Ngũ Hành tương sinh: Kim -Mộc – Thủy – Hỏa – Thổ… để rồi ta quay trở về với sự Thịnh Vượng trong tâm hồn, Miền An Trú và Sự cân bằng nội tại (Well-beings) trong cuộc đời mỗi con người.'
    ],
    descriptionEn: [
      'Among humankind’s countless explorations of the world, there are millions of ways to live, to love, and to celebrate life. Yet there is a form of self-care we frequently overlook: dancing, painting, singing, and reading. Dance, the perfect harmony for the body, is perhaps the most exquisite example.',
      'The dance drama The five – Full Prosperity brings together 5 internationally celebrated dance artists in solo and duo roles, exploring the cycles of life, nature, and the Five Elements returning to inner sanctuary and holistic well-being.'
    ],
    image: '/public/assets/aistudio/Renjie Ma.jpeg',
    taglineVi: '',
    taglineEn: '',
    highlights: []
  },
  {
    number: '02',
    titleVi: 'The Radius of Now - Thực tại Vô biên',
    titleEn: 'The Radius of Now - Boundless Present',
    subTitleVi: '',
    subTitleEn: '',
    performersVi: 'Sir Niels Lan Doky',
    performersEn: 'Sir Niels Lan Doky',
    creditsVi: [
      { role: 'Biểu diễn', name: 'Sir Niels Lan Doky' }
    ],
    creditsEn: [
      { role: 'Performance', name: 'Sir Niels Lan Doky' }
    ],
    descriptionVi: [
      'Chơi jazz là chuyện của việc an trú trong khoảnh khắc — bước vào hiện tại và buông mình cho nó.',
      'Tôi đã chọn nhìn khoảnh khắc này như trải rộng vô tận về mọi phía dọc dòng thời gian. Như trong âm nhạc, điều ấy cho tôi ứng tác ở mức đẹp nhất giữa đời. Mọi điều đã qua đều như mới hôm qua với tôi, dù đó là một tuần hay hai mươi năm trước.',
      'Hãy cùng thưởng thức những sáng tác hay nhất của Niels Lan Doky, với chuyên môn của một nghệ sỹ, một tâm hồn Hiệp sỹ được phong tước bởi Nữ hoàng Đan Mạch, nhưng vẫn có tâm hồn lãng mạn, tình cảm của trái tim Việt Nam.'
    ],
    descriptionEn: [
      '“Playing jazz is about dwelling in the moment—stepping into the now and surrendering to it.',
      'I have chosen to see this moment expanding endlessly across time; in music, that allows me to improvise in the most sublime way possible. Everything that has passed feels like yesterday to me, whether a week or twenty years ago.',
      'Experience original compositions presented by Sir Niels Lan Doky—with the virtuosity of a Danish Royal Knight united with the romantic warmth of his Vietnamese heart.”'
    ],
    image: '/public/assets/aistudio/Niels-Lan-Doky-06-09-24-SM-68.png',
    taglineVi: '',
    taglineEn: '',
    highlights: []
  },
  {
    number: '03',
    titleVi: 'Piano Sanstuary - Nơi an trú của tiếng Dương Cầm',
    titleEn: 'Piano Sanctuary - The Refuge of the Piano',
    subTitleVi: '',
    subTitleEn: '',
    performersVi: 'Niels Lan Doky',
    performersEn: 'Sir Niels Lan Doky',
    creditsVi: [
      { role: 'Biểu diễn', name: 'Niels Lan Doky' },
      {
        role: 'Cùng giao lưu với',
        name: 'Bác sỹ  chuyên khoa Não bộ, nhạc sỹ Peter Michael Nielsen, chuyên khoa về cách âm nhạc có thể gieo lên thân, não và tâm. Và Kỹ sư âm thanh Frank Goldberg, người cùng đồng hành trong 47 album cá nhân và cũng như sản xuất hơn 70 album cho các nghệ sĩ khác của Sir Niels Lan Doky.'
      }
    ],
    creditsEn: [
      { role: 'Performance', name: 'Sir Niels Lan Doky' },
      {
        role: 'In dialogue with',
        name: 'Neurologist & Composer Dr. Peter Michael Nielsen, specialist on how music touches body, brain, and mind; and Sound Engineer Frank Goldberg, collaborator on 47 solo albums and co-producer of over 70 albums for other artists with Sir Niels Lan Doky.'
      }
    ],
    descriptionVi: [
      'Piano Sanctuary – Nơi an trú cho tiếng Dương cầm là dự án vừa nghệ thuật vừa thám hiểm, về mối quan hệ giữa âm nhạc, sự thư giãn, sự điều hòa cảm xúc và trải nghiệm làm người.',
      'Hòa quyện những sáng tác nguyên bản và những khúc dương cầm ứng tác bất chợt với âm thanh của thiên nhiên, những lớp texture synth, cùng tiếng sub-bass sâu thẳm ở tần số thấp, chúng tôi dựng nên một không gian âm nhạc để người ta đắm mình trong một không gian tĩnh lặng của tâm, sự suy ngẫm của cảm xúc, và sự buông lỏng của thân.',
      'Dự án là điểm hẹn giữa âm nhạc, thẩm mỹ, khoa học về não bộ và trải nghiệm con người. Khát vọng của chúng tôi là âm nhạc có thể nâng đỡ tâm và thân, mà vẫn một mực giữ chuẩn mực cao nhất của biểu đạt âm nhạc và sự chính trực nghệ thuật.'
    ],
    descriptionEn: [
      'Piano Sanctuary is an exploratory art project investigating the relationship between music, deep relaxation, emotional harmony, and human experience.',
      'Blending original compositions and spontaneous piano improvisations with natural field recordings, layered synth textures, and deep sub-bass frequencies, it creates a sanctuary where listeners immerse themselves in stillness of mind, reflection, and physical release.',
      'A nexus between music, aesthetics, neuroscience, and human restoration, upholding the highest standards of musical expression and artistic integrity.'
    ],
    image: '/assets/aistudio/Niels-Lan-Doky.jpg',
    taglineVi: '',
    taglineEn: '',
    highlights: []
  }
];

export const ARTISTS: Artist[] = [
  {
    id: 'niels-lan-doky',
    name: 'Sir Niels Lan Doky',
    roleVi: 'Nghệ sĩ Dương Cầm · Hiệp sĩ Hoàng Gia Đan Mạch',
    roleEn: 'Concert Pianist · Danish Royal Knight',
    category: 'piano',
    honorVi: '“Nghệ sĩ Piano tài năng nhất của thế hệ” — Swing Journal (Nhật Bản)',
    honorEn: '“The best pianist of his generation” — Swing Journal (Japan)',
    photo: '/public/assets/aistudio/Niels-Lan-Doky-06-09-24-SM-68.png',
    bioVi: `Được Swing Journal (Nhật Bản) tôn vinh là "nghệ sĩ dương cầm xuất sắc nhất thế hệ của ông", được New York Times gọi là "tươi mới và đầy khiêu khích", và được El Diario (Tây Ban Nha) xem là "một trong những nghệ sĩ dương cầm châu Âu quan trọng nhất của 50 năm qua", Sir Niels Lan Doky - người Đan Mạch - đã hiện diện trên những sân khấu danh giá nhất thế giới, từ Royal Albert Hall đến Carnegie Hall, đến Blue Note và xa hơn nữa, làm say lòng khán giả ở khắp mọi nơi.

Sir Doky đã cộng tác cùng những tên tuổi lừng lẫy nhất của jazz, như Pat Metheny, Michael Brecker, David Sanborn, Ray Brown và Darryl Jones, cũng như với các dàn nhạc cổ điển như Dàn nhạc Giao hưởng Montreal và Copenhagen Phil. Những chuyến lưu diễn gần đây và sắp tới của ông trải khắp các thành phố biểu tượng như New York, Paris, London, Berlin, Milan, Vienna, Stockholm, Barcelona và nhiều nơi khác.

Các buổi hòa nhạc của ông được mô tả là "phúc lạc và khó quên", còn bản thân ông là "một người dệt giai điệu, với ngón đàn sâu lắng và khai sáng" (Telerama, Pháp) và "một mẫu mực của sự hùng biện" (La Opinión de Murcia, Tây Ban Nha). Nổi danh với những màn ứng tác đầy mê hoặc cùng tài hoa về giai điệu và hòa âm, Sir Doky là một nghệ sĩ dương cầm phi thường với biên độ rộng, từng gặt hái nhiều giải thưởng khắp châu Âu, Bắc Mỹ và châu Á cho những bản thu xuất sắc.

Chuỗi hòa nhạc mới của ông, "The Radius Of Now" (Thực tại Vô biên), giới thiệu những sáng tác nguyên bản cùng những "Khám phá" (Explorations) ngẫu hứng - những sáng tạo tự phát, trừu tượng mà thi vị, lặn sâu vào khoảnh khắc hiện tại, đưa khán giả vào một hành trình siêu thoát, khiến mỗi đêm diễn thành một trải nghiệm độc nhất, phi thường, không thể lặp lại.

Sự giao hòa giữa chất trữ tình, lãng mạn Bắc Âu với sức mạnh và sự quyết liệt kiểu Mỹ đã làm nên bản sắc âm nhạc của ông. Đã nghiền ngẫm trọn vẹn lịch sử dương cầm jazz, Sir Doky còn khéo léo đan cài những yếu tố từ muôn vàn thể loại âm nhạc đương đại, đồng thời ôm trọn cả âm nhạc cổ điển lẫn những truyền thống giai điệu của dân ca Scandinavia.

Dẫu mang một phong cách rất riêng, Sir Doky vẫn cộng tác thân thiết với những thành viên cũ trong các bộ ba (trio) của Keith Jarrett, Bill Evans và Oscar Peterson - và với Oscar Peterson, ông còn có một mối thâm giao cá nhân lâu bền. Sir Niels Lan Doky hiện thân cho một tầm vóc âm nhạc sánh ngang các bậc khổng lồ dương cầm jazz thuở trước, và đã được Nữ hoàng Margrethe II của Đan Mạch phong tước Hiệp sĩ năm 2010 vì những cống hiến âm nhạc của mình.

Là một Nghệ sĩ Bösendorfer được trọng vọng, những tấm thảm âm thanh vô song của Sir Doky mang vẻ đẹp khôn sánh của cây đàn đến với các sân khấu hòa nhạc khắp thế giới, mời gọi khán giả nếm trải lối kể chuyện lấp lánh trong âm nhạc của ông. Dẫu thấm đẫm kỹ thuật điêu luyện và sự phức tạp, âm nhạc của ông đồng thời vẫn sâu nặng cảm xúc và chạm được tới đông đảo người nghe.`,
    bioEn: `Hailed by Swing Journal (Japan) as "the best pianist of his generation," described by The New York Times as "fresh and provocative," and recognized by El Diario (Spain) as "one of the most important European pianists of the last 50 years," Sir Niels Lan Doky has graced legendary stages worldwide, including Royal Albert Hall, Carnegie Hall, and Blue Note, captivating audiences everywhere.

Sir Doky has collaborated with jazz legends such as Pat Metheny, Michael Brecker, David Sanborn, Ray Brown and Darryl Jones, as well as classical orchestras including the Montreal Symphony Orchestra and Copenhagen Phil. His recent and upcoming tours span iconic cities including New York, Paris, London, Berlin, Milan, Vienna, Stockholm, Barcelona, and more.

His concerts have been described as "blissful and unforgettable," and the man himself as "a weaver of melodies, with deep and enlightening touch" (Telerama, France) and "a model of eloquence" (La Opinión de Murcia, Spain). Renowned for captivating improvisations and melodic and harmonic virtuosity, Sir Doky is an extraordinary pianist of wide range, having earned numerous awards across Europe, North America, and Asia for his outstanding recordings.

His new concert series, "The Radius Of Now," presents original compositions alongside improvised "Explorations" — spontaneous, abstract yet poetic creations that plunge deep into the present moment, taking audiences on a transcendent journey where every night becomes a unique, extraordinary, unrepeatable experience.

The fusion of Nordic lyricism and romance with American strength and intensity defines his musical identity. Having thoroughly absorbed the history of jazz piano, Sir Doky skillfully weaves in elements from countless contemporary music genres, while embracing both classical music and the melodic traditions of Scandinavian folk song.

Though his style is distinctly his own, Sir Doky remains closely connected to former members of the trios of Keith Jarrett, Bill Evans, and Oscar Peterson — and shares an enduring personal friendship with Oscar Peterson. Sir Niels Lan Doky embodies a musical stature on par with the piano jazz giants of the past, and was knighted by Queen Margrethe II of Denmark in 2010 for his musical contributions.

As a respected Bösendorfer Artist, Sir Doky's unparalleled sonic tapestries bring the piano's unmatched beauty to concert stages around the world, inviting audiences to experience the shimmering storytelling in his music. Despite being steeped in masterful technique and complexity, his music remains deeply emotional and reaches a wide audience.`,
    highlightsVi: [
      'Hiệp sĩ do Nữ hoàng Margrethe II của Đan Mạch phong tặng (2010)',
      'Nghệ sĩ Bösendorfer được trọng vọng',
      'Biểu diễn tại Royal Albert Hall, Carnegie Hall, Blue Note',
      'Cộng tác cùng Pat Metheny, Michael Brecker, David Sanborn, Ray Brown, Darryl Jones'
    ],
    highlightsEn: [
      'Knighted by Queen Margrethe II of Denmark (2010)',
      'Respected Bösendorfer Artist',
      'Performances at Royal Albert Hall, Carnegie Hall, Blue Note',
      'Collaborations with Pat Metheny, Michael Brecker, David Sanborn, Ray Brown, Darryl Jones'
    ],
    quoteVi: '"Chơi jazz là chuyện của việc an trú trong khoảnh khắc — bước vào hiện tại và buông mình cho nó."',
    quoteEn: '"Playing jazz is about dwelling in the moment — stepping into the now and surrendering to it."'
  },
  {
    id: 'peter-michael-nielsen',
    name: 'Dr. Peter Michael Nielsen',
    roleVi: 'Bác sĩ Khoa học Não bộ & Nhạc sĩ Đồng sáng lập',
    roleEn: 'Neurologist & Co-Creator, Piano Sanctuary',
    category: 'science',
    honorVi: 'Cố vấn Thần kinh học Bệnh viện Đại học Copenhagen (40 năm kinh nghiệm)',
    honorEn: 'Senior Neurologist Consultant, Copenhagen University Hospital (40 yrs exp)',
    photo: '/public/assets/aistudio/Peter Michael Nielsen.jpg?v=swap1',
    bioVi: `TS. Peter Michael Nielsen là một bác sĩ thần kinh người Đan Mạch, bác sĩ cố vấn cao cấp tại Bệnh viện Đại học Copenhagen (cơ sở Holbæk), với 40 năm kinh nghiệm lâm sàng trong các lĩnh vực thần kinh học, phẫu thuật thần kinh và tâm thần học. Kết hợp khoa học y khoa với niềm đam mê âm nhạc suốt đời, ông mang đến một góc nhìn kép hiếm có cho dự án Piano Sanctuary (Chốn An Trú của Tiếng Dương Cầm): Âm nhạc và Khoa học về Não bộ, nơi ông chấp bút những chương khoa học về cách âm nhạc tác động lên não bộ và hệ thần kinh.

Đồng thời là một nhạc sĩ tài năng, ông là đồng tác giả sáng tác của album Piano Sanctuary, nơi ông trình diễn cùng Niels Lan Doky, như ông vẫn làm trong các buổi hòa nhạc trực tiếp của dự án.

Song song với công trình nghiên cứu khoa học và các công bố của mình, ông còn là nhà sáng chế thiết bị điều trị y tế và nắm giữ 10 bằng sáng chế. Hai trong số đó bao trùm HALF-MIS - một phương pháp điều trị bằng kích thích âm nhạc đầy sáng tạo - cùng cấu trúc âm thanh mà phương pháp này sử dụng. Công nghệ ấy là một phần trong không gian âm thanh (soundscape) của Piano Sanctuary.`,
    bioEn: `Dr. Peter Michael Nielsen is a Danish neurologist, senior consultant at Copenhagen University Hospital (Holbæk), with 40 years of clinical experience in neurology, neurosurgery, and psychiatry. Combining medical science with a lifelong passion for music, he brings a rare dual perspective to Piano Sanctuary: Music and the Science of the Brain, authoring the project's chapters on how music affects the brain and nervous system.

A talented musician himself, he co-composed the Piano Sanctuary album, performing alongside Niels Lan Doky at the project's live concerts.

Alongside his scientific research and publications, he is also a medical device inventor holding 10 patents, two of which cover HALF-MIS — a creative music-stimulation therapy method — and the sound structure it uses. That technology is part of the Piano Sanctuary soundscape.`,
    highlightsVi: [
      '40 năm kinh nghiệm lâm sàng thần kinh học, phẫu thuật thần kinh và tâm thần học',
      'Sở hữu 10 bằng sáng chế y tế, bao gồm phương pháp HALF-MIS',
      'Đồng tác giả sáng tác album Piano Sanctuary cùng Sir Niels Lan Doky'
    ],
    highlightsEn: [
      '40 years of clinical experience in neurology, neurosurgery, and psychiatry',
      '10 medical patents, including the HALF-MIS therapy method',
      'Co-composer of the Piano Sanctuary album with Sir Niels Lan Doky'
    ]
  },
  {
    id: 'frank-goldberg',
    name: 'Frank Goldberg',
    roleVi: 'Kỹ sư Âm thanh Bậc thầy (Sound Engineer)',
    roleEn: 'Master Sound & Acoustic Engineer',
    category: 'science',
    honorVi: 'Kỹ sư âm thanh huyền thoại với hơn 40 năm đồng hành cùng 47 album của Doky',
    honorEn: 'Legendary Sound Engineer with 40+ years mastering 47 Doky albums',
    photo: '/public/assets/aistudio/Frank Goldberg.jpg?v=swap1',
    bioVi: `Frank Goldberg là một kỹ sư âm thanh người Đan Mạch với hơn 40 năm kinh nghiệm trong thu âm, âm thanh biểu diễn trực tiếp và sản xuất phòng thu. Danh sách cộng tác dày dặn của ông bao gồm các đài phát thanh - truyền hình DR, TV2, TVNorge và TV3; những nghệ sĩ như Patti Smith, Laurie Anderson, Harvey Mason, Mike Stern, Darryl Jones, Ernie Watts và nhóm Modern Standards Supergroup; các nhà văn Haruki Murakami, Paul Auster và Michel Houellebecq; cùng Bảo tàng Nghệ thuật Hiện đại Louisiana.

Với Piano Sanctuary, ông chấp bút những chương về kỹ thuật âm thanh của cuốn sách, giải thích cách âm thanh được thu lại, nắn chỉnh và truyền tải để tạo nên tác động lên người nghe. Ông là kỹ sư âm thanh cho album Piano Sanctuary và tại các buổi hòa nhạc trực tiếp của dự án.

Ngày nay, Frank điều hành các dự án phòng thu, biểu diễn trực tiếp và lưu diễn thông qua công ty của mình, Goldberg Sound, đặt gần Copenhagen.`,
    bioEn: `Frank Goldberg is a Danish sound engineer with over 40 years of experience in recording, live performance sound, and studio production. His extensive collaboration list includes broadcasters DR, TV2, TVNorge and TV3; artists such as Patti Smith, Laurie Anderson, Harvey Mason, Mike Stern, Darryl Jones, Ernie Watts, and the Modern Standards Supergroup; authors Haruki Murakami, Paul Auster, and Michel Houellebecq; and the Louisiana Museum of Modern Art.

For Piano Sanctuary, he authored the book's chapters on sound engineering and serves as the sound engineer for both the album and its live concerts. He now runs his own studio, live, and touring company, Goldberg Sound, based near Copenhagen.`,
    highlightsVi: [
      'Hơn 40 năm kinh nghiệm thu âm, âm thanh biểu diễn trực tiếp và sản xuất phòng thu',
      'Cộng tác cùng Patti Smith, Laurie Anderson, Harvey Mason, Mike Stern, Haruki Murakami',
      'Điều hành công ty Goldberg Sound tại Copenhagen'
    ],
    highlightsEn: [
      'Over 40 years in recording, live sound, and studio production',
      'Collaborations with Patti Smith, Laurie Anderson, Harvey Mason, Mike Stern, Haruki Murakami',
      'Runs Goldberg Sound studio and touring company in Copenhagen'
    ]
  },
  {
    id: 'nguyen-ngoc-anh',
    name: 'Ths. Nguyễn Ngọc Anh',
    roleVi: 'Biên đạo múa Quốc tế · Đạo diễn Nghệ thuật',
    roleEn: 'International Choreographer & Artistic Director',
    category: 'dance',
    honorVi: 'Trưởng bộ môn Biên đạo múa - Học viện Nghệ thuật Biểu diễn Hồng Kông (HKAPA)',
    honorEn: 'Head of Choreography, Hong Kong Academy for Performing Arts (HKAPA)',
    photo: '/public/assets/aistudio/Nguyen Ngoc Anh.jpg',
    bioVi: `Nguyễn Ngọc Anh là Trưởng bộ môn Biên đạo, Khoa Múa, Học viện Nghệ thuật Biểu diễn Hồng Kông (HKAPA), nơi ông giảng dạy biên đạo, kỹ thuật múa đương đại, ứng tác và tiết mục. Ông có bằng Thạc sĩ Biên đạo Múa tại Đại học Middlesex (Anh).

Ông từng biểu diễn cùng Wayne McGregor Dance, Phoenix Dance Theatre (Anh), Nhà hát Nhạc Vũ Kịch Việt Nam và Les Ballets Persans (Thụy Điển). Ông đoạt giải Ba toàn quốc Múa (2002), giải Bonnie Bird (2005), giải Spotlight của Hội Phê bình Anh (2008) và giải Biên đạo Xuất sắc tại Hong Kong Dance Awards (2015) với tác phẩm SENSE.

Ông đã dàn dựng cho Hong Kong Ballet, City Contemporary Dance Company, Nhà hát Regensburg (Đức), Nhà hát Nhạc Vũ Kịch Việt Nam cùng nhiều đơn vị tại Anh và Singapore. Cùng Arabesque Dance Company, ông biên đạo và đồng sản xuất bốn vở diễn dài, trong đó có Đông Hồ (2017) và Sen-Zen (2023).

Ông từng là trợ lý múa cho phim Harry Potter và chiếc cốc lửa, lễ khai mạc Giải Bơi lội Thế giới FINA 2009 tại Rome; Giám đốc Nghệ thuật Hong Kong Dance Awards 2019 và Giám đốc Dự án NEXT MOVE (2026) giữa Hong Kong Ballet và Nhà hát Opera Quảng Châu. Ông cũng giảng dạy, mở lớp chuyên sâu khắp châu Á, châu Âu, châu Mỹ và làm giám khảo nhiều cuộc thi múa.`,
    bioEn: `Nguyen Ngoc Anh is the Head of Choreography at the Hong Kong Academy for Performing Arts (HKAPA), where he teaches choreography, contemporary dance technique, improvisation, and repertoire. He holds a Master's degree in Choreography from Middlesex University (UK).

He has performed with Wayne McGregor Dance, Phoenix Dance Theatre (UK), Vietnam Opera Ballet Theatre, and Les Ballets Persans (Sweden). His accolades include third place at the National Dance Competition (2002), the Bonnie Bird Award (2005), the UK Critics' Circle Spotlight Award (2008), and Outstanding Choreographer at the Hong Kong Dance Awards (2015) for SENSE.

He has created work for Hong Kong Ballet, City Contemporary Dance Company, Theater Regensburg (Germany), Vietnam Opera Ballet Theatre, and companies in the UK and Singapore. With Arabesque Dance Company, he has choreographed and co-produced four full-length works, including Dong Ho (2017) and Sen-Zen (2023).

He served as dance assistant for Harry Potter and the Goblet of Fire and the FINA World Championships 2009 opening ceremony in Rome; Artistic Director of the Hong Kong Dance Awards 2019; and Director of the NEXT MOVE Project (2026) between Hong Kong Ballet and Guangzhou Opera House. He also teaches, runs intensive workshops across Asia, Europe, and the Americas, and judges numerous dance competitions.`,
    highlightsVi: [
      'Trưởng bộ môn Biên đạo Múa tại HKAPA',
      'Giải Bonnie Bird (2005), giải Spotlight Hội Phê bình Anh (2008), Biên đạo Xuất sắc Hong Kong Dance Awards (2015)',
      'Trợ lý múa cho phim Harry Potter và chiếc cốc lửa & lễ khai mạc FINA 2009 tại Rome'
    ],
    highlightsEn: [
      'Head of Choreography at HKAPA',
      'Bonnie Bird Award (2005), UK Critics\' Circle Spotlight Award (2008), Outstanding Choreographer at Hong Kong Dance Awards (2015)',
      'Dance assistant for Harry Potter and the Goblet of Fire & the FINA 2009 opening ceremony in Rome'
    ]
  },
  {
    id: 'tri-minh',
    name: 'Nhạc sĩ Trí Minh',
    roleVi: 'Nhạc sĩ Âm nhạc Điện tử & Nhà sản xuất Âm thanh',
    roleEn: 'Electronic Music Composer & Sound Artist',
    category: 'piano',
    honorVi: 'Người tiên phong định hình dòng nhạc điện tử đương đại Việt Nam',
    honorEn: 'Pioneer of contemporary electronic & modular music in Vietnam',
    photo: '/public/assets/aistudio/Tri Minh.png',
    bioVi: `Trí Minh là một trong những gương mặt định hình nhạc điện tử Việt Nam - người soạn nhạc trên máy móc như cách người khác chơi nhạc cụ. Đầu thập niên 1990, anh đồng sáng lập ban jazz đầu tiên của Hà Nội, rồi bước vào nhạc điện tử qua các hợp tác với Mouse on Mars, Robert Henke, D-Fuse và Scanner.

Suốt ba mươi năm, công việc của anh dịch dần về trình diễn trực tiếp: những set techno chơi bằng máy, ngẫu hứng trên hệ modular và các hệ thống do chính anh dựng nên. Anh chơi trực tiếp chứ không phát lại - Eurorack, trống máy và sequencer được đưa qua Ableton Live, nắn trong thời gian thực, cho âm nhạc độ nhám và sức sống của một nhạc cụ thật. Lấy âm nhạc truyền thống Việt làm nền nhưng không phô diễn nhạc cụ dân tộc, anh làm việc từ bên trong chất liệu - thang âm, quãng và màu âm.

Song song với sàn club, anh viết cho hòa nhạc, múa đương đại, phim tài liệu và sắp đặt âm thanh; sáng lập và điều hành Hanoi Sound Stuff International Music Festival (2008-2014). Anh từng trình diễn tại Boiler Room, Haus der Kulturen der Welt (Berlin) và khắp châu Á, châu Âu, Hoa Kỳ.`,
    bioEn: `Tri Minh is one of the figures shaping Vietnamese electronic music — composing on machines the way others play instruments. In the early 1990s, he co-founded Hanoi's first jazz band before moving into electronic music through collaborations with Mouse on Mars, Robert Henke, D-Fuse and Scanner.

Over three decades, his work has shifted toward live performance: techno sets played by hand, improvisation on modular systems, and setups he builds himself. He plays live rather than pre-recorded — Eurorack, drum machines, and sequencers routed through Ableton Live, shaped in real time for the texture and life of a real instrument. Grounded in traditional Vietnamese music without showcasing folk instruments directly, he works from within the material itself — scales, intervals, and timbre.

Alongside club performance, he composes for concerts, contemporary dance, documentaries, and sound installations; he founded and ran the Hanoi Sound Stuff International Music Festival (2008-2014). He has performed at Boiler Room, Haus der Kulturen der Welt (Berlin), and across Asia, Europe, and the US.`,
    highlightsVi: [
      'Đồng sáng lập ban nhạc jazz đầu tiên tại Hà Nội',
      'Sáng lập và điều hành Hanoi Sound Stuff International Music Festival (2008-2014)',
      'Trình diễn tại Boiler Room & Haus der Kulturen der Welt (Berlin)'
    ],
    highlightsEn: [
      'Co-founder of Hanoi\'s first jazz band',
      'Founder & Director of Hanoi Sound Stuff International Music Festival (2008-2014)',
      'Performances at Boiler Room & Haus der Kulturen der Welt (Berlin)'
    ]
  },
  {
    id: 'renjie-ma',
    name: 'Renjie Ma',
    roleVi: 'Nghệ sĩ Múa Cổ điển & Đương đại Quốc tế',
    roleEn: 'International Principal Dancer',
    category: 'dance',
    honorVi: 'Nguyên Diễn viên chính (Principal Dancer) - Ballet de l’Opéra National du Rhin (Pháp)',
    honorEn: 'Former Principal Dancer, Ballet de l’Opéra National du Rhin (France)',
    photo: '/public/assets/aistudio/Renjie Ma.jpeg',
    bioVi: `Renjie Ma có hơn 15 năm biểu diễn chuyên nghiệp trên các sân khấu châu Âu và châu Á. Anh bắt đầu sự nghiệp tại Đoàn Ba lê Quảng Châu, nơi anh rèn luyện nền tảng kỹ thuật cổ điển vững chắc. Từ năm 2007 đến 2018, anh là Nghệ sĩ múa chính (Principal Dancer) của Ballet de l'Opéra National du Rhin (Pháp). Tại đây, anh đảm nhận vai chính trong các chuyến lưu diễn ở những nhà hát opera lớn của châu Âu và cộng tác với nhiều biên đạo bậc thầy thế giới.

Năm 2012, tạp chí Dance Europe xếp anh thứ 25 trong danh sách "100 vũ công có ảnh hưởng nhất châu Âu". Từ năm 2019, anh là Nghệ sĩ độc diễn cao cấp (Senior Soloist) của Hong Kong Ballet. Anh được biết đến với kỹ thuật hoàn hảo, khả năng biểu cảm sâu sắc và sự linh hoạt giữa múa cổ điển và đương đại. Những vai diễn tiêu biểu của anh gồm Hồ Thiên Nga, Giselle, Don Quixote và Walking Mad.`,
    bioEn: `Renjie Ma has more than 15 years of professional performing experience across European and Asian stages. He began his career at the Guangzhou Ballet, building a strong classical foundation. From 2007 to 2018, he served as Principal Dancer at the Ballet de l'Opéra National du Rhin (France), taking leading roles on tour at major European opera houses and collaborating with world-renowned choreographers.

In 2012, Dance Europe magazine ranked him 25th among the "100 Most Influential Dancers in Europe." Since 2019, he has been Senior Soloist with the Hong Kong Ballet, known for flawless technique, deep expressiveness, and versatility across classical and contemporary dance. His signature roles include Swan Lake, Giselle, Don Quixote, and Walking Mad.`,
    highlightsVi: [
      'Hạng 25 trong Top 100 vũ công có ảnh hưởng nhất châu Âu (Dance Europe, 2012)',
      '11 năm Nghệ sĩ múa chính tại Ballet de l\'Opéra National du Rhin (Pháp)',
      'Senior Soloist của Hong Kong Ballet từ 2019'
    ],
    highlightsEn: [
      'Ranked #25 in Dance Europe\'s Top 100 Most Influential Dancers in Europe (2012)',
      '11 years as Principal Dancer with Ballet de l\'Opéra National du Rhin',
      'Senior Soloist at Hong Kong Ballet since 2019'
    ]
  },
  {
    id: 'ngo-thuy-to-nhu',
    name: 'NSƯT Ngô Thụy Tố Như',
    roleVi: 'Nghệ sĩ Ưu tú · Vũ nữ Ba-lê Hàn lâm',
    roleEn: 'Merited Artist · Classical Ballet Virtuoso',
    category: 'dance',
    honorVi: 'Được Nhà nước phong tặng danh hiệu Nghệ sĩ Ưu tú (2012) · Đào tạo 8 năm tại Kyiv Ballet (Liên Xô)',
    honorEn: 'Merited Artist of Vietnam (2012) · 8-year Vaganova training in Kyiv',
    photo: '/public/assets/aistudio/Ngo Thuy To Nhu.jpeg',
    bioVi: `Ngô Thụy Tố Như - Nghệ sĩ Ưu tú, nghệ sĩ múa ballet và giảng viên với hơn 30 năm kinh nghiệm trong biểu diễn, đào tạo và huấn luyện nghệ sĩ múa chuyên nghiệp. Chị được đào tạo bài bản trong tám năm tại Trường Ballet Quốc gia Kyiv (Ukraine, Liên Xô cũ), nơi xây dựng nền tảng vững chắc về kỹ thuật ballet hàn lâm theo truyền thống Vaganova.

Từ năm 2004, chị giảng dạy ballet cổ điển tại Trường Trung cấp Múa TP.HCM, tập trung đào tạo các khóa sáu năm và chuẩn bị học viên cho nghề nghiệp chuyên nghiệp. Từ năm 2009, chị đồng hành cùng Arabesque Dance Company, đảm nhiệm vai trò huấn luyện kỹ thuật, phát triển năng lực biểu diễn cá nhân và tham gia xây dựng chương trình nghệ thuật.

Từng là diễn viên chính tại Đoàn Ballet Tháng Mười và Nhà hát Giao hưởng - Nhạc Vũ Kịch TP.HCM, chị đã thể hiện nhiều vai kinh điển như Hồ Thiên Nga (Swan Lake), Giselle, Kẹp Hạt Dẻ (The Nutcracker), Don Quixote và Le Corsaire. Chị cũng có nhiều chuyến lưu diễn quốc tế tại Mỹ, Pháp, Ý, Nhật Bản, Hàn Quốc, Úc và Thái Lan. Những tác phẩm tiêu biểu gần đây có The Mist, The Ballerina và Sen-Zen.

Năm 2012, chị được Chủ tịch nước phong tặng danh hiệu Nghệ sĩ Ưu tú. Bên cạnh hoạt động biểu diễn và giảng dạy, chị nhận nhiều giải thưởng từ Hội Nghệ sĩ Múa Việt Nam, ghi nhận đóng góp và chất lượng đào tạo.`,
    bioEn: `Merited Artist Ngo Thuy To Nhu is a ballet dancer and teacher with over 30 years of experience performing, training, and coaching professional dance artists. She completed eight years of rigorous training at the National Ballet School of Kyiv (Ukraine, former USSR), building a strong foundation in classical ballet under the Vaganova tradition.

Since 2004, she has taught classical ballet at Ho Chi Minh City Secondary School of Dance, training six-year cohorts and preparing students for professional careers. Since 2009, she has worked with Arabesque Dance Company as a technical trainer, developing individual performers and contributing to artistic programming.

A former lead dancer with the October Ballet Troupe and the HCMC Ballet Symphony Orchestra Theatre (HBSO), she has performed classic roles including Swan Lake, Giselle, The Nutcracker, Don Quixote, and Le Corsaire, touring internationally in the US, France, Italy, Japan, South Korea, Australia, and Thailand. Recent featured works include The Mist, The Ballerina, and Sen-Zen.

In 2012, she was awarded the title of Merited Artist by the President of Vietnam. Alongside performing and teaching, she has received multiple awards from the Vietnam Dance Artists Association recognizing her contributions and training quality.`,
    highlightsVi: [
      'Danh hiệu Nghệ sĩ Ưu tú do Chủ tịch nước phong tặng năm 2012',
      'Đào tạo 8 năm theo hệ thống Vaganova tại Trường Ballet Quốc gia Kyiv',
      'Vai diễn tiêu biểu: Hồ Thiên Nga, Giselle, The Mist, The Ballerina, Sen-Zen'
    ],
    highlightsEn: [
      'Merited Artist title awarded by the President of Vietnam in 2012',
      '8 years of Vaganova-method training at the National Ballet School of Kyiv',
      'Signature roles: Swan Lake, Giselle, The Mist, The Ballerina, Sen-Zen'
    ]
  },
  {
    id: 'chika-tatsumi',
    name: 'Chika Tatsumi',
    roleVi: 'Nghệ sĩ Múa Đương đại Nhật Bản',
    roleEn: 'Japanese Contemporary Ballet Artist',
    category: 'dance',
    honorVi: 'Cử nhân Múa Codarts Rotterdam (Hà Lan) · Vũ công chính Arabesque',
    honorEn: 'Codarts Rotterdam Alumna · Principal Dancer, Arabesque',
    photo: '/public/assets/aistudio/Chika Tatsumi.jpeg',
    bioVi: `Sinh ra tại Nhật Bản, Chika Tatsumi bắt đầu học ballet cổ điển từ 3 tuổi và sau đó theo học jazz kịch, tap và nhạc kịch. Năm 2005 cô vào Học viện Múa Thẩm Dương Trung Quốc và hoàn tất đào tạo ballet chuyên nghiệp năm 2009. Cùng năm, cô theo học tại Codarts Rotterdam và nhận bằng cử nhân vào năm 2013.

Sau khi tốt nghiệp, cô làm vũ công tự do tại châu Âu và có ba năm giữ vai trò chính trong Lonneke Van Leth Production (Den Haag). Năm 2015 cô gia nhập Arabesque Dance Company (Việt Nam) và là vũ công chính của đoàn đến cuối năm 2024, tham gia các vở diễn lớn ở Việt Nam, Nhật Bản, Ý và Hàn Quốc.

Năm 2023 cô tham gia biểu diễn Sen&Zen cùng tay trống taiko Kensaku Sato tại Nhà hát Thành phố (Saigon Opera House). Hiện tại cô là vũ công tự do, vũ công chính kiêm huấn luyện viên tại Ho Chi Minh City Symphony Ballet & Orchestra và là giảng viên tại SASA Ballet School. Tháng 8 năm 2026 cô vào vai Black Swan trong vở Hồ Thiên Nga của Johanne Jakhelln Constant.`,
    bioEn: `Born in Japan, Chika Tatsumi began classical ballet at age three before training in musical theatre jazz and tap. In 2005 she entered the Shenyang Dance Academy in China, completing professional ballet training in 2009. The same year, she began studies at Codarts Rotterdam, earning her Bachelor's degree in 2013.

After graduating, she worked as a freelance dancer across Europe and spent three years as a lead performer with Lonneke Van Leth Production (Den Haag). In 2015 she joined Arabesque Dance Company (Vietnam) and was the company's principal dancer through the end of 2024, performing in major productions in Vietnam, Japan, Italy, and South Korea.

In 2023 she performed in Sen&Zen alongside taiko drummer Kensaku Sato at the Saigon Opera House. She is currently a freelance dancer, principal dancer and coach at Ho Chi Minh City Symphony Ballet & Orchestra, and a teacher at SASA Ballet School. In August 2026, she performed the role of Black Swan in Johanne Jakhelln Constant's production of Swan Lake.`,
    highlightsVi: [
      'Đào tạo ballet chuyên nghiệp tại Học viện Múa Thẩm Dương & Codarts Rotterdam',
      'Vũ công chính của Arabesque Dance Company (2015-2024)',
      'Vai Black Swan trong Hồ Thiên Nga của Johanne Jakhelln Constant (8/2026)'
    ],
    highlightsEn: [
      'Professional ballet training at Shenyang Dance Academy & Codarts Rotterdam',
      'Principal dancer with Arabesque Dance Company (2015-2024)',
      'Black Swan in Johanne Jakhelln Constant\'s Swan Lake (Aug 2026)'
    ]
  },
  {
    id: 'tran-van-thinh',
    name: 'Trần Văn Thịnh',
    roleVi: 'Nghệ sĩ Múa & Trợ lý Biên đạo',
    roleEn: 'Soloist Dancer & Assistant Choreographer',
    category: 'dance',
    honorVi: 'Cựu nghệ sĩ chính Fukuoka Ballet International (Nhật Bản)',
    honorEn: 'Former Soloist, Fukuoka Ballet International (Japan)',
    photo: '/public/assets/aistudio/Tran_van_Thinh_6fe5a2ce.png',
    bioVi: `Nghệ sĩ múa Trần Văn Thịnh bắt đầu đào tạo chuyên nghiệp tại Học viện Múa Việt Nam vào năm 1999. Sau khi tốt nghiệp với bằng xuất sắc, anh gia nhập Fukuoka Ballet International tại Nhật Bản với tư cách nghệ sĩ toàn thời gian của đoàn. Từ 2006 đến 2011, anh đảm nhận các vai chính trong những vở ballet cổ điển như Le Corsaire, The Sleeping Beauty, Giselle, Chopiniana và Paquita.

Năm 2012, anh trở về Việt Nam và từ đó làm việc với vai trò vũ công kiêm trợ lý biên đạo tại Arabesque Dance Company. Anh đã góp phần vào nhiều vở diễn được đánh giá cao như Những chiếc giày, Mộc, Tích Tắc, The Ballerina, The Mist, Sen Zen, Meelting và Femalesilk. Thịnh đã biểu diễn rộng rãi khắp Việt Nam và tại các liên hoan quốc tế ở Ý, Hoa Kỳ, Hàn Quốc, Nhật Bản và Malaysia.`,
    bioEn: `Dancer Tran Van Thinh began professional training at the Vietnam Dance Academy in 1999. After graduating with highest honors, he joined Fukuoka Ballet International in Japan as a full-time company dancer. From 2006 to 2011, he took leading roles in classical ballets including Le Corsaire, The Sleeping Beauty, Giselle, Chopiniana, and Paquita.

In 2012, he returned to Vietnam, working as a dancer and assistant choreographer with Arabesque Dance Company. He has contributed to acclaimed productions including Những chiếc giày, Mộc, Tích Tắc, The Ballerina, The Mist, Sen Zen, Meelting, and Femalesilk. Thinh has performed extensively across Vietnam and at international festivals in Italy, the USA, South Korea, Japan, and Malaysia.`,
    highlightsVi: [
      'Nghệ sĩ toàn thời gian tại Fukuoka Ballet International (Nhật Bản), 2006-2011',
      'Vũ công kiêm trợ lý biên đạo tại Arabesque Dance Company từ 2012',
      'Lưu diễn quốc tế tại Ý, Hoa Kỳ, Hàn Quốc, Nhật Bản và Malaysia'
    ],
    highlightsEn: [
      'Full-time dancer at Fukuoka Ballet International (Japan), 2006-2011',
      'Dancer & Assistant Choreographer at Arabesque Dance Company since 2012',
      'International tours across Italy, USA, South Korea, Japan, and Malaysia'
    ]
  }
];

export const STAGE_VIEWS: StageView[] = [
  {
    id: 'view-hero',
    titleVi: 'Sân Khấu Living Heritage tại IKI Gallery',
    titleEn: 'Living Heritage Stage at IKI Gallery',
    descriptionVi: 'Một sân khấu tròn giữa lòng thành phố, nơi ánh sáng vàng kim uốn lượn như vệt trăng tan trên mặt hồ.',
    descriptionEn: 'A circular stage in the heart of the city, where golden light curves like a trail of moonlight dissolving on the water.',
    image: '/public/assets/aistudio/01_393d3ab4.jpg',
    focusPointVi: 'Sân khấu tròn · Ánh sáng vàng kim',
    focusPointEn: 'Circular stage · Golden light'
  },
  {
    id: 'view-hall',
    titleVi: 'Không Gian Khán Phòng IKI Gallery',
    titleEn: 'IKI Gallery Auditorium',
    descriptionVi: 'Không gian khán phòng tại IKI Gallery hướng ra khung cảnh thành phố về đêm.',
    descriptionEn: 'The IKI Gallery auditorium space overlooking the city skyline at night.',
    image: '/public/assets/aistudio/02_8b8aede5.png',
    focusPointVi: 'Khán phòng · Tầm nhìn thành phố',
    focusPointEn: 'Auditorium · City view'
  },
  {
    id: 'view-seating',
    titleVi: 'Khán Phòng Living Heritage',
    titleEn: 'Living Heritage Auditorium',
    descriptionVi: 'Bố cục ghế ngồi khán phòng của đêm diễn Living Heritage.',
    descriptionEn: 'The auditorium seating layout for the Living Heritage concert.',
    image: '/public/assets/aistudio/03_86832d53.png',
    focusPointVi: 'Bố cục ghế ngồi',
    focusPointEn: 'Seating layout'
  },
  {
    id: 'view-aerial',
    titleVi: 'Sân Khấu Living Heritage',
    titleEn: 'Living Heritage Stage',
    descriptionVi: 'Góc nhìn khác của sân khấu Living Heritage tại IKI Gallery.',
    descriptionEn: 'Another view of the Living Heritage stage at IKI Gallery.',
    image: '/public/assets/aistudio/04_65d112ca.png',
    focusPointVi: 'Sân khấu',
    focusPointEn: 'Stage'
  }
];

export const GALLERY_ITEMS: string[] = [
  '/public/assets/aistudio/WhatsApp_Image_2026-10-26_at_07.28.24_37d19cb2.jpeg',
  '/public/assets/aistudio/WhatsApp_Image_2026-10-26_at_07.28.24__1__272fdc81.jpeg',
  '/public/assets/aistudio/WhatsApp_Image_2026-10-26_at_07.28.25_02ff00cd.jpeg',
  '/public/assets/aistudio/WhatsApp_Image_2026-10-26_at_07.28.25__1__7e148166.jpeg',
  '/public/assets/aistudio/WhatsApp_Image_2026-10-26_at_07.29.17_2aa3627c.jpeg',
  '/public/assets/aistudio/WhatsApp_Image_2026-10-26_at_07.29.17__1__e1e51907.jpeg',
  '/public/assets/aistudio/WhatsApp_Image_2026-10-26_at_07.29.17__2__05878398.jpeg',
  '/public/assets/aistudio/WhatsApp_Image_2026-10-26_at_07.29.18_3c9d284e.jpeg',
  '/public/assets/aistudio/WhatsApp_Image_2026-10-26_at_07.29.18__1__6bd60655.jpeg',
  '/public/assets/aistudio/WhatsApp_Image_2026-10-26_at_07.29.18__2__2a3c6c50.jpeg'
];
