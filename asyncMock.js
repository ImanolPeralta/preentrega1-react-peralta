const products = [
    // Notebooks
    {
        id: '1',
        name: "Acer Nitro 5",
        category: "hardware",
        subcategory: "notebooks",
        price: 1650000,
        stock: 10,
        description: "Notebook gamer potente con gran rendimiento para tareas exigentes.",
        image: "https://i5.walmartimages.com/asr/f918442b-65f9-4da3-9024-3b72e7edcc98.c9cec15748e4d5d4662fc564c1ecc376.png"
    },
    {
        id: '2',
        name: "Asus Zenbook 14 OLED",
        category: "hardware",
        subcategory: "notebooks",
        price: 1200000,
        stock: 5,
        description: "Notebook ultra-ligero y potente con pantalla OLED de alta resolución.",
        image: "https://i0.wp.com/laptopmedia.com/wp-content/uploads/2021/09/2-6-e1630683013268.jpg?fit=2220%2C1506&ssl=1"
    },
    {
        id: '3',
        name: "Lenovo IdeaPad 3",
        category: "hardware",
        subcategory: "notebooks",
        price: 800000,
        stock: 15,
        description: "Notebook de alto rendimiento con procesador potente y pantalla de gran calidad.",
        image: "https://media.ldlc.com/r1600/ld/products/00/05/98/35/LD0005983586.jpg"
    },
    {
        id: '4',
        name: "HP Pavilion x360",
        category: "hardware",
        subcategory: "notebooks",
        price: 1100000,
        stock: 8,
        description: "Convertible 2 en 1 con pantalla táctil y procesador Intel i5.",
        image: "https://holacompras.com/wp-content/uploads/2022/12/6J9R7LAABM-3.jpg"
    },
    {
        id: '5',
        name: "MacBook Pro 13 M1",
        category: "hardware",
        subcategory: "notebooks",
        price: 1900000,
        stock: 12,
        description: "Laptop de alto rendimiento con el chip Apple M1, 8GB de RAM y 256GB de SSD.",
        image: "https://www.cocoandtoffee.com/cdn/shop/products/308-3088785_macbook-air-2019-gold.png?v=1712832092&width=1445"
    },
    {
        id: '6',
        name: "Dell Inspiron 15 5000",
        category: "hardware",
        subcategory: "notebooks",
        price: 750000,
        stock: 6,
        description: "Notebook con procesador Intel i7 y 8GB de RAM, ideal para uso diario.",
        image: "https://www.todonotebook.com.ar/wp-content/uploads/2021/05/dell-blu.png"
    },
    {
        id: '7',
        name: "MSI GF65 Thin",
        category: "hardware",
        subcategory: "notebooks",
        price: 950000,
        stock: 7,
        description: "Laptop gaming ultra-delgada con pantalla de 15.6 pulgadas y GPU dedicada.",
        image: "https://sologamerbolivia.com/cdn/shop/files/msi-thin-laptop-2.jpg?v=1696949690&width=1445"
    },
    {
        id: '8',
        name: "Acer Aspire 5",
        category: "hardware",
        subcategory: "notebooks",
        price: 700000,
        stock: 10,
        description: "Notebook económica con pantalla Full HD de 15.6 pulgadas.",
        image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/10/8088932/1.jpg?3722"
    },
    {
        id: '9',
        name: "Asus ROG Zephyrus G14",
        category: "hardware",
        subcategory: "notebooks",
        price: 1600000,
        stock: 5,
        description: "Notebook gaming con procesador AMD Ryzen 9 y GPU NVIDIA RTX 3060.",
        image: "https://lidernotebooks.com.ar/wp-content/uploads/2022/04/Asus-ROG-Zephyrus-G14-GA401QM-211.ZG14B-Ryzen-9_0003_Capa-3.jpg"
    },
    {
        id: '10',
        name: "HP Omen 15",
        category: "hardware",
        subcategory: "notebooks",
        price: 1500000,
        stock: 4,
        description: "Notebook gamer con procesador Intel i9, 32GB de RAM y GPU NVIDIA RTX 3070.",
        image: "https://www.mundolaptops.com/wp-content/uploads/2023/05/HP-Omen-15-EN0001LA-1.jpg.webp"
    },
    // Computadoras de escritorio
    {
        id: '11',
        name: "Dell XPS 8940",
        category: "hardware",
        subcategory: "pcescritorio",
        price: 1200000,
        stock: 8,
        description: "PC de escritorio potente con procesador Intel i7, ideal para tareas profesionales.",
        image: "https://img.pacifiko.com/PROD/resize/1/500x500/YzFmY2RiNz.jpg"
    },
    {
        id: '12',
        name: "HP Pavilion 590",
        category: "hardware",
        subcategory: "pcescritorio",
        price: 900000,
        stock: 10,
        description: "PC de escritorio con procesador AMD Ryzen 5 y diseño compacto para cualquier espacio.",
        image: "https://thumb.pccomponentes.com/w-530-530/articles/16/166445/81yp7jb1xhl-sl1500.jpg"
    },
    {
        id: '13',
        name: "Lenovo ThinkCentre M920",
        category: "hardware",
        subcategory: "pcescritorio",
        price: 1000000,
        stock: 6,
        description: "PC de escritorio empresarial con Intel i5, robusta y segura para trabajo intensivo.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOmjA0Gvmi_-K3PGsqQFOH3DM-ws3Jzi0tLhsqJqn7uodN2Q4zzpwJgA_SPy6syVPVL-k&usqp=CAU"
    },
    {
        id: '14',
        name: "Acer Aspire TC-895",
        category: "hardware",
        subcategory: "pcescritorio",
        price: 850000,
        stock: 12,
        description: "PC de escritorio de bajo costo con procesador Intel i3 y 8GB de RAM.",
        image: "https://image.coolblue.nl/422x390/products/1875935"
    },
    {
        id: '15',
        name: "MSI Aegis RS",
        category: "hardware",
        subcategory: "pcescritorio",
        price: 1300000,
        stock: 5,
        description: "PC de escritorio para gamers con procesador Intel i9 y tarjeta gráfica RTX 3070.",
        image: "https://i5.walmartimages.com/seo/MSI-Aegis-RS-Aegis-RS-11TF-241US-Gaming-Desktop-Computer-Intel-Core-i9-11th-Gen-i9-11900KF-32GB-RAM-2TB-HDD-1TB-SSD-Tower_3037d4ed-6eae-432d-a0bd-941370492d72.9d1a19a1b7a44e6c0f603efd5a79a3ad.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
    },
    {
        id: '16',
        name: "CyberPowerPC Gamer Xtreme",
        category: "hardware",
        subcategory: "pcescritorio",
        price: 1400000,
        stock: 7,
        description: "PC gamer con procesador Intel i7 y tarjeta gráfica NVIDIA RTX 3060.",
        image: "https://i5.walmartimages.com/asr/61cc61d8-ce4c-40fa-a10c-b5f014b0c1b1.55e6c36da355b13b06713d1cc022d349.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
    },
    {
        id: '17',
        name: "Apple iMac 27-inch",
        category: "hardware",
        subcategory: "pcescritorio",
        price: 2200000,
        stock: 3,
        description: "PC de escritorio todo-en-uno con pantalla Retina 5K y procesador Intel i9.",
        image: "https://images-cdn.ubuy.co.id/6613d3a426fb9158103d6423-apple-imac-all-in-one-desktop-27-inch-5k.jpg"
    },
    {
        id: '18',
        name: "Corsair Vengeance 5180",
        category: "hardware",
        subcategory: "pcescritorio",
        price: 1700000,
        stock: 4,
        description: "PC de escritorio para gaming de alto rendimiento con procesador Intel i9 y 32GB de RAM.",
        image: "https://assets.corsair.com/image/upload/f_auto/q_auto/v1691086221/akamai/responsive/img/downloads/product-thumbs/vengeance_pc_product_thumb_DownloadsPage.webp"
    },
    {
        id: '19',
        name: "HP Envy Desktop TE01",
        category: "hardware",
        subcategory: "pcescritorio",
        price: 1100000,
        stock: 9,
        description: "PC de escritorio con un diseño moderno, ideal para tareas profesionales y entretenimiento.",
        image: "https://www.hp.com/ca-en/shop/Html/Merch/Images/c06441433_500x367.jpg"
    },
    {
        id: '20',
        name: "Alienware Aurora R11",
        category: "hardware",
        subcategory: "pcescritorio",
        price: 1800000,
        stock: 5,
        description: "PC de escritorio para juegos con procesador Intel i9 y tarjeta gráfica RTX 3080.",
        image: "https://www.computer-alliance.pl/wp-content/uploads/2024/02/Dell-alienware-aurora-r11-1.jpg"
    },
    // Monitores
    {
        id: '21',
        name: "Samsung Odyssey G7",
        category: "hardware",
        subcategory: "monitores",
        price: 400000,
        stock: 10,
        description: "Monitor curvo de 27 pulgadas, con resolución QHD y tasa de refresco de 240Hz.",
        image: "https://images.samsung.com/is/image/samsung/p6pim/es/lc27g73tqsrxen/gallery/es-lc27g73tqsux-330514-lc27g73tqsrxen-457251607?$684_547_PNG$"
    },
    {
        id: '22',
        name: "LG 27GN950-B",
        category: "hardware",
        subcategory: "monitores",
        price: 550000,
        stock: 8,
        description: "Monitor 4K UHD de 27 pulgadas, ideal para juegos con tecnología Nano IPS.",
        image: "https://www.lg.com/content/dam/channel/wcms/es/images/monitores/27gn950-b_aeu_eees_es_c/27GN950-01.jpg"
    },
    {
        id: '23',
        name: "Dell UltraSharp U2720Q",
        category: "hardware",
        subcategory: "monitores",
        price: 650000,
        stock: 6,
        description: "Monitor de 27 pulgadas 4K con panel IPS, ideal para trabajo profesional.",
        image: "https://gfx3.senetic.com/akeneo-catalog/3/1/e/4/31e4c6f894e9e8c43ff8d18165faf42e982b4f4f_1627564_DELL_U2720Q_image2.jpg"
    },
    {
        id: '24',
        name: "Acer Predator X34",
        category: "hardware",
        subcategory: "monitores",
        price: 850000,
        stock: 5,
        description: "Monitor curvo de 34 pulgadas con resolución UWQHD y frecuencia de 180Hz.",
        image: "https://www.hd-tecnologia.com/imagenes/articulos/2015/10/Incre%C3%ADble-monitor-ACER-Predator-X34-con-tecnolog%C3%ADa-G-SYNC.jpg"
    },
    {
        id: '25',
        name: "BenQ Zowie XL2411P",
        category: "hardware",
        subcategory: "monitores",
        price: 250000,
        stock: 15,
        description: "Monitor de 24 pulgadas Full HD, ideal para juegos competitivos con tasa de refresco de 144Hz.",
        image: "https://http2.mlstatic.com/D_NQ_NP_986147-MLB78870279718_092024-O.webp"
    },
    {
        id: '26',
        name: "Asus ROG Swift PG259QN",
        category: "hardware",
        subcategory: "monitores",
        price: 950000,
        stock: 4,
        description: "Monitor de 24.5 pulgadas con resolución Full HD y frecuencia de 360Hz para gamers.",
        image: "https://www.xt-pc.com.ar/img/productos/18/MON751_2.jpg"
    },
    {
        id: '27',
        name: "MSI Optix MAG272CQR",
        category: "hardware",
        subcategory: "monitores",
        price: 450000,
        stock: 10,
        description: "Monitor curvo de 27 pulgadas, resolución QHD y frecuencia de 165Hz, ideal para gaming.",
        image: "https://www.adorama.com/images/Large/MSIMAG274CP.jpg"
    },
    {
        id: '28',
        name: "Philips 278E1A",
        category: "hardware",
        subcategory: "monitores",
        price: 350000,
        stock: 7,
        description: "Monitor de 27 pulgadas 4K UHD con tecnología IPS y diseño delgado.",
        image: "https://www.konokono.es/pub/media/catalog/product/cache/9eb8b4271747f2bfd4564b87097dee08/7/4/74262801_2976307173.jpg"
    },
    {
        id: '29',
        name: "ViewSonic Elite XG270QG",
        category: "hardware",
        subcategory: "monitores",
        price: 700000,
        stock: 3,
        description: "Monitor de 27 pulgadas, resolución 1440p, con frecuencia de 165Hz y tecnología G-Sync.",
        image: "https://katech.com.ar/wp-content/uploads/MON373_2-jpg.webp"
    },
    {
        id: '30',
        name: "Gigabyte G32QC",
        category: "hardware",
        subcategory: "monitores",
        price: 450000,
        stock: 6,
        description: "Monitor curvo de 32 pulgadas con resolución 2560x1440 y tasa de refresco de 165Hz.",
        image: "https://www.jib.co.th/img_master/product/original/20210914154258_46448_352_2.jpg"
    },
    // Gabinetes para PC
    {
        id: '31',
        name: "NZXT H510",
        category: "hardware",
        subcategory: "gabinetes",
        price: 150000,
        stock: 12,
        description: "Gabinete ATX compacto con diseño minimalista y gran gestión de cables.",
        image: "https://pyroforcemx.com/wp-content/uploads/2024/12/CP-NZXT-CC-H52FB-01-5b589d.jpg"
    },
    {
        id: '32',
        name: "Corsair iCUE 4000X",
        category: "hardware",
        subcategory: "gabinetes",
        price: 200000,
        stock: 8,
        description: "Gabinete ATX con paneles de vidrio templado y ventiladores RGB incluidos.",
        image: "https://i.ebayimg.com/images/g/8sMAAOSwledjtGOM/s-l1200.jpg"
    },
    {
        id: '33',
        name: "Cooler Master MasterBox Q300L",
        category: "hardware",
        subcategory: "gabinetes",
        price: 100000,
        stock: 15,
        description: "Gabinete micro-ATX con diseño modular y excelente flujo de aire.",
        image: "https://shiftdigital.com.ar/images/coolermaster_q300l.jpg"
    },
    {
        id: '34',
        name: "Phanteks Eclipse P400A",
        category: "hardware",
        subcategory: "gabinetes",
        price: 120000,
        stock: 10,
        description: "Gabinete ATX con panel frontal de malla para un flujo de aire excepcional.",
        image: "https://m.media-amazon.com/images/I/71De9xd44jL._AC_SL1219_.jpg"
    },
    {
        id: '35',
        name: "Fractal Design Meshify C",
        category: "hardware",
        subcategory: "gabinetes",
        price: 130000,
        stock: 9,
        description: "Gabinete ATX con panel frontal de malla para optimizar el flujo de aire y enfriamiento.",
        image: "https://www.fractal-design.com/app/uploads/2019/06/Meshify-C_2-1200x1200.jpg"
    },
    //Mouses
    {
        id: '36',
        name: "Logitech G Pro X Superlight",
        category: "hardware",
        subcategory: "mouses",
        price: 250000,
        stock: 10,
        description: "Mouse inalámbrico ultraligero diseñado para jugadores profesionales, con sensor HERO 25K.",
        image: "https://mexx-img-2019.s3.amazonaws.com/Mouse-Gamer-Logitech-G-Pro-X-Superlight-Negro_40418_1.jpeg"
    },
    {
        id: '37',
        name: "Razer DeathAdder V2",
        category: "hardware",
        subcategory: "mouses",
        price: 150000,
        stock: 15,
        description: "Mouse ergonómico con cable Speedflex, sensor óptico Focus+ de 20K DPI y switches ópticos Razer.",
        image: "https://dcdn-us.mitiendanube.com/stores/003/110/186/products/1058-producto-mouse-razer-deathadder-v2-1-23571-82647f921658de276016842489377523-480-0.jpg"
    },
    {
        id: '38',
        name: "SteelSeries Rival 600",
        category: "hardware",
        subcategory: "mouses",
        price: 200000,
        stock: 8,
        description: "Mouse gaming con sensor dual, hasta 12,000 CPI, y peso ajustable.",
        image: "https://m.media-amazon.com/images/I/51UnFzpQ-RL._AC_SL1200_.jpg"
    },
    {
        id: '39',
        name: "Corsair Dark Core RGB/SE",
        category: "hardware",
        subcategory: "mouses",
        price: 220000,
        stock: 5,
        description: "Mouse ergonómico inalámbrico con sensor de 18,000 DPI, luces RGB personalizables y carga Qi.",
        image: "https://http2.mlstatic.com/D_NQ_NP_898983-MLU78219300979_082024-O.webp"
    },
    {
        id: '40',
        name: "Logitech G203 Lightsync",
        category: "hardware",
        subcategory: "mouses",
        price: 80000,
        stock: 20,
        description: "Mouse para juegos con sensor de 8,000 DPI y retroiluminación RGB personalizable.",
        image: "https://www.xt-pc.com.ar/img/productos/14/MOU454.jpg"
    },
    // Teclados
    {
        id: '41',
        name: "Corsair K95 RGB Platinum XT",
        category: "hardware",
        subcategory: "teclados",
        price: 450000,
        stock: 8,
        description: "Teclado mecánico con retroiluminación RGB, switches Cherry MX, y teclas dedicadas para control multimedia.",
        image: "https://pctronic.com.py/storagee/2022/05/5981120.jpg"
    },
    {
        id: '42',
        name: "Razer BlackWidow V3",
        category: "hardware",
        subcategory: "teclados",
        price: 250000,
        stock: 12,
        description: "Teclado mecánico con switches Razer Green, retroiluminación RGB, y diseño robusto.",
        image: "https://fullh4rd.com.ar/img/productos/8/teclado-gamer-razer-blackwidow-v3-tenkeyless-rz0303491800r3m1-2.jpg"
    },
    {
        id: '43',
        name: "Logitech G Pro X",
        category: "hardware",
        subcategory: "teclados",
        price: 280000,
        stock: 6,
        description: "Teclado mecánico compacto y personalizable, con switches intercambiables y retroiluminación RGB.",
        image: "https://thebest.com.ar/images/product_image/7566/0?dpr=2.625&fit=contain&h=1300&q=80&version=5f0ef&w=1000g"
    },
    {
        id: '44',
        name: "SteelSeries Apex Pro",
        category: "hardware",
        subcategory: "teclados",
        price: 370000,
        stock: 10,
        description: "Teclado mecánico premium con switches ajustables, retroiluminación RGB y cuerpo de aluminio.",
        image: "https://images-na.ssl-images-amazon.com/images/I/71NFUiC1XaL.jpg"
    },
    {
        id: '45',
        name: "HyperX Alloy FPS Pro",
        category: "hardware",
        subcategory: "teclados",
        price: 180000,
        stock: 15,
        description: "Teclado mecánico compacto, ideal para jugadores de FPS, con retroiluminación roja y diseño sólido.",
        image: "https://spacegamer.com.ar/img/Public/1058-producto-1019-producto-teclado-hyperx-alloy-fps-pro-blue-mecanico-2-3342-209.jpg"
    },
    // Auriculares
    {
        id: '46',
        name: "Sony WH-1000XM4",
        category: "hardware",
        subcategory: "auriculares",
        price: 700000,
        stock: 5,
        description: "Auriculares inalámbricos con cancelación de ruido, sonido de alta calidad y batería de hasta 30 horas.",
        image: "https://arsonyb2c.vtexassets.com/arquivos/ids/364250-800-800?v=638632937848200000&width=800&height=800&aspect=true"
    },
    {
        id: '47',
        name: "Bose QuietComfort 35 II",
        category: "hardware",
        subcategory: "auriculares",
        price: 650000,
        stock: 8,
        description: "Auriculares inalámbricos con cancelación de ruido, control de voz, y diseño cómodo para uso prolongado.",
        image: "https://m.media-amazon.com/images/I/611CN975jSL.jpg"
    },
    {
        id: '48',
        name: "SteelSeries Arctis 7",
        category: "hardware",
        subcategory: "auriculares",
        price: 350000,
        stock: 10,
        description: "Auriculares inalámbricos para juegos, con sonido de alta fidelidad y micrófono bidireccional.",
        image: "https://m.media-amazon.com/images/I/71exY5PBroL.jpg"
    },
    {
        id: '49',
        name: "Logitech G Pro X Wireless",
        category: "hardware",
        subcategory: "auriculares",
        price: 500000,
        stock: 7,
        description: "Auriculares inalámbricos con sonido DTS Headphone:X 2.0, micrófono Blue VO!CE, y diseño liviano.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8y5OJN1QV5UGKK5D7pXEjb6qRP0SpRKJWA&sg"
    },
    {
        id: '50',
        name: "Razer Kraken Ultimate",
        category: "hardware",
        subcategory: "auriculares",
        price: 450000,
        stock: 12,
        description: "Auriculares con sonido envolvente 7.1, iluminación RGB, y micrófono retráctil con cancelación de ruido.",
        image: "https://http2.mlstatic.com/D_774493-MLA79438605327_092024-C.jpg"
    },
    {
        id: '51',
        name: "Corsair HS70 Pro Wireless",
        category: "hardware",
        subcategory: "auriculares",
        price: 350000,
        stock: 9,
        description: "Auriculares inalámbricos para juegos con sonido envolvente 7.1, almohadillas de memoria y micrófono con cancelación de ruido.",
        image: "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Gaming-Headsets/CA-9011211-NA/Gallery/HS70_PRO_CARBON_20.webp"
    },
    {
        id: '52',
        name: "JBL Quantum 800",
        category: "hardware",
        subcategory: "auriculares",
        price: 420000,
        stock: 6,
        description: "Auriculares inalámbricos para juegos, con sonido envolvente JBL QuantumSOUND y micrófono con cancelación de ruido.",
        image: "https://www.jbl.com.ar/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw147da48a/JBL_Quantum%20800_Product%20Image_ANGLE_White.png"
    },
    // Escritorios ergonómicos
    {
        id: '53',
        name: "Flexispot EC1",
        category: "accesorios",
        subcategory: "escritorios",
        price: 850000,
        stock: 5,
        description: "Escritorio ergonómico ajustable en altura con mecanismo eléctrico, ideal para alternar entre posiciones de sentado y de pie.",
        image: "https://image.springbeetle.eu/cdn-cgi/image/dpr=1,format=webp,fit=pad/https://cnmegk4mhxmt.compat.objectstorage.eu-frankfurt-1.oraclecloud.com/prod-eu-s3/trantor/attachments/UK/E7-main-pics8.jpg"
    },
    {
        id: '54',
        name: "Autonomous SmartDesk 2",
        category: "accesorios",
        subcategory: "escritorios",
        price: 1200000,
        stock: 7,
        description: "Escritorio eléctrico ajustable en altura, con estructura robusta y motor silencioso para transiciones suaves.",
        image: "https://i.pinimg.com/736x/d7/52/16/d75216f74308151beb48cc6cea73b0e6.jpg"
    },
    {
        id: '55',
        name: "Uplift V2 Standing Desk",
        category: "accesorios",
        subcategory: "escritorios",
        price: 1400000,
        stock: 4,
        description: "Escritorio ergonómico ajustable en altura con sistema de dos motores, diseñado para mejorar la postura y la productividad.",
        image: "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/8786492/8786492_o01/8786492"
    },
    //Sillas ergonómicas
    {
        id: '56',
        name: "Herman Miller Aeron",
        category: "accesorios",
        subcategory: "sillas",
        price: 5500000,
        stock: 3,
        description: "Silla ergonómica de alta gama, con ajuste total de la postura y soporte lumbar, ideal para largas jornadas de trabajo.",
        image: "https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/aeron_chair/202106/it_prd_ovw_aeron_chair_03.gif.rendition.1600.1600.png"
    },
    {
        id: '57',
        name: "Steelcase Gesture",
        category: "accesorios",
        subcategory: "sillas",
        price: 4500000,
        stock: 4,
        description: "Silla ergonómica con soporte para el cuerpo en diversas posiciones, diseñada para adaptarse a cualquier postura y brindar comodidad durante todo el día.",
        image: "https://nl.steelcase.com/cdn/shop/files/steelcase-gesture-onyx-headrest-front_2000x.webp?v=1730907188"
    },
    {
        id: '58',
        name: "Secretlab Titan Evo 2022",
        category: "accesorios",
        subcategory: "sillas",
        price: 3500000,
        stock: 6,
        description: "Silla ergonómica de juego con soporte lumbar ajustable, almohadilla de cuello y reposabrazos 4D.",
        image: "https://m.media-amazon.com/images/I/51ajrSvAdiL.jpg"
    },
    {
        id: '59',
        name: "Autonomous ErgoChair 2",
        category: "accesorios",
        subcategory: "sillas",
        price: 850000,
        stock: 5,
        description: "Silla ergonómica con múltiples opciones de ajuste, diseñada para ofrecer comodidad y reducir la fatiga durante el trabajo prolongado.",
        image: "https://www.swaggermagazine.com/home/wp-content/uploads/2020/09/ErgoChair2.jpg"
    },
    {
        id: '60',
        name: "Haworth Zody",
        category: "accesorios",
        subcategory: "sillas",
        price: 2000000,
        stock: 3,
        description: "Silla ergonómica con soporte lumbar ajustable y asiento flexible para ofrecer una experiencia de confort y postura saludable.",
        image: "https://image.architonic.com/pro2-3/20751648/zodyii-whitesweep-1-231121-pro-b-arcit18.jpg"
    },
    // Luces LEDS
    {
        id: '61',
        name: "Philips Hue White and Color Ambiance",
        category: "decoracion",
        subcategory: "luces",
        price: 400000,
        stock: 10,
        description: "Bombilla LED inteligente con capacidad para cambiar colores, compatible con Alexa y Google Assistant.",
        image: "https://www.openfactory.com.ar/wp-content/uploads/2024/07/D_NQ_NP_2X_752533-MLU71905824091_092023-F-1.jpg"
    },
    {
        id: '62',
        name: "Govee RGBIC LED Strip Lights",
        category: "decoracion",
        subcategory: "luces",
        price: 250000,
        stock: 15,
        description: "Tira de luces LED RGBIC con control a través de app, personalizable con más de 16 millones de colores.",
        image: "https://cdn.shopify.com/s/files/1/0558/4712/5176/products/619A_baa4b1b4-2d39-41d7-8dc1-3b59981e264e.jpg?v=1744022477"
    },
    // Cuadros Temáticos
    {
        id: '63',
        name: "Cuadro de Star Wars - Darth Vader",
        category: "decoracion",
        subcategory: "cuadros",
        price: 80000,
        stock: 12,
        description: "Cuadro de alta calidad con una ilustración de Darth Vader, ideal para los fans de Star Wars.",
        image: "https://http2.mlstatic.com/D_NQ_NP_605608-MLA81215878685_122024-O.webp"
    },
    {
        id: '64',
        name: "Cuadro de Harry Potter - Hogwarts",
        category: "decoracion",
        subcategory: "cuadros",
        price: 95000,
        stock: 8,
        description: "Cuadro decorativo con una representación de Hogwarts, para los amantes de la saga de Harry Potter.",
        image: "https://http2.mlstatic.com/D_NQ_NP_746243-MLA77709566329_072024-O.webp"
    },
    {
        id: '65',
        name: "Cuadro de Marvel - Avengers",
        category: "decoracion",
        subcategory: "cuadros",
        price: 120000,
        stock: 10,
        description: "Cuadro con los superhéroes de los Avengers, ideal para decorar la habitación de cualquier fanático.",
        image: "https://proposter.es/wp-content/uploads/2019/10/21933-Cuadro-Marvel-Avengers-Endgame-1-600x600.jpg"
    },
    {
        id: '66',
        name: "Cuadro de Game of Thrones - Iron Throne",
        category: "decoracion",
        subcategory: "cuadros",
        price: 110000,
        stock: 7,
        description: "Cuadro que muestra el famoso trono de hierro de Game of Thrones, perfecto para los seguidores de la serie.",
        image: "https://decogaleria.mx/cdn/shop/products/798_900x.webp?v=1665712432"
    },
    {
        id: '67',
        name: "Cuadro de Stranger Things - The Upside Down",
        category: "decoracion",
        subcategory: "cuadros",
        price: 95000,
        stock: 9,
        description: "Cuadro de Stranger Things mostrando la dimensión paralela 'The Upside Down'.",
        image: "https://i.etsystatic.com/31559614/r/il/e6cbce/3988351594/il_fullxfull.3988351594_tt3b.jpg"
    },
    {
        id: '68',
        name: "Cuadro de The Mandalorian - Baby Yoda",
        category: "decoracion",
        subcategory: "cuadros",
        price: 85000,
        stock: 6,
        description: "Cuadro de alta calidad de Baby Yoda, uno de los personajes más populares de The Mandalorian.",
        image: "https://http2.mlstatic.com/D_NQ_NP_719382-MLA48762779712_012022-O.webp"
    },
    {
        id: '69',
        name: "Cuadro de DC Comics - Batman",
        category: "decoracion",
        subcategory: "cuadros",
        price: 90000,
        stock: 5,
        description: "Cuadro de Batman con un diseño moderno y minimalista, ideal para los fanáticos de DC Comics.",
        image: "https://arteyregalosperu.com/wp-content/uploads/2022/04/40x50-cuadro-poster-batman-ciudad-gotica-gotham-dc-comics-negro-vertical-1-600x600.jpg.webp"
    },
    {
        id: '70',
        name: "Cuadro de The Office - World's Best Boss",
        category: "decoracion",
        subcategory: "cuadros",
        price: 70000,
        stock: 15,
        description: "Cuadro icónico con la famosa frase de Michael Scott, ideal para los seguidores de The Office.",
        image: "https://i.etsystatic.com/54542275/r/il/012d7d/6422096946/il_fullxfull.6422096946_mvgw.jpg"
    },
    // Accesorios decorativos para setups
    {
        id: '71',
        name: "Lámpara LED RGB de Escritorio",
        category: "decoracion",
        subcategory: "accesorios",
        price: 150000,
        stock: 10,
        description: "Lámpara LED RGB que se adapta al estilo de tu escritorio, con múltiples colores y efectos de iluminación.",
        image: "https://m.media-amazon.com/images/I/611MZW4ePWL.jpg"
    },
    {
        id: '72',
        name: "Alfombrilla de Mouse con Iluminación RGB",
        category: "decoracion",
        subcategory: "accesorios",
        price: 300000,
        stock: 8,
        description: "Alfombrilla de mouse con retroiluminación RGB, ideal para mejorar la estética de tu setup.",
        image: "https://m.media-amazon.com/images/I/61nSvG2CHQL._AC_SL1500_.jpg"
    },
    {
        id: '73',
        name: "Soporte para Auriculares de Metal",
        category: "decoracion",
        subcategory: "accesorios",
        price: 120000,
        stock: 5,
        description: "Soporte de auriculares de metal con un diseño elegante y moderno, ideal para tener tu setup ordenado.",
        image: "https://http2.mlstatic.com/D_NQ_NP_900034-MLA52397307177_112022-O.webp"
    },
    {
        id: '74',
        name: "Mini Planta Artificial de Escritorio",
        category: "decoracion",
        subcategory: "accesorios",
        price: 50000,
        stock: 12,
        description: "Planta artificial que agrega un toque de naturaleza a tu escritorio sin necesidad de mantenimiento.",
        image: "https://p.globalsources.com/IMAGES/PDT/B1189664313/Planta-artificial.png?ver=5272244424"
    },
    {
        id: '75',
        name: "Cargador Inalámbrico con Iluminación LED",
        category: "decoracion",
        subcategory: "accesorios",
        price: 200000,
        stock: 7,
        description: "Cargador inalámbrico elegante con iluminación LED, perfecto para mantener tu setup organizado y moderno.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuiBIWZMwJOETsJ2EyvW_aC0lXUhoLg5Ad8g&s"
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((product) => product.id === productId));
        }, 500);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.category === categoryId));
        }, 500);
    });
};

export const getProductsBySubcategory = (subcategoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.subcategory === subcategoryId));
        }, 500);
    });
};

export const getTopProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        resolve(shuffled.slice(0, 20));
        }, 500);
    });
};
