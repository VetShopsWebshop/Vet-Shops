// Products array with all products from the updated list
const products = [
    { id: 1, name: { en: "Vetsolmin - 5L", nl: "Vetsolmin - 5L", fr: "Vetsolmin - 5L" }, price: 58.937, image: "images/vetsolmin-5l.jpg" },
    { id: 2, name: { en: "Sangrovit WS 1kg", nl: "Sangrovit WS 1kg", fr: "Sangrovit WS 1kg" }, price: 144.612, image: "images/sangrovit-ws-1kg.jpg" },
    { id: 3, name: { en: "CID CLEAN 25L reg 3109B", nl: "CID CLEAN 25L reg 3109B", fr: "CID CLEAN 25L reg 3109B" }, price: 192.213, image: "images/cid-clean-25l-reg-3109b.jpg" },
    { id: 4, name: { en: "KENOCOX - 10L Reg 1014B", nl: "KENOCOX - 10L Reg 1014B", fr: "KENOCOX - 10L Reg 1014B" }, price: 214.750, image: "images/kenocox-10l-reg-1014b.jpg" },
    { id: 5, name: { en: "VIROCID 20L Reg 4605B", nl: "VIROCID 20L Reg 4605B", fr: "VIROCID 20L Reg 4605B" }, price: 249.080, image: "images/virocid-20l-reg-4605b.jpg" },
    { id: 6, name: { en: "D50 - 22KG REG 3507B", nl: "D50 - 22KG REG 3507B", fr: "D50 - 22KG REG 3507B" }, price: 207.480, image: "images/d50-22kg-reg-3507b.jpg" },
    { id: 7, name: { en: "Virocid RTU 1L BE-REG-00224", nl: "Virocid RTU 1L BE-REG-00224", fr: "Virocid RTU 1L BE-REG-00224" }, price: 9.850, image: "images/virocid-rtu-1l-be-reg-00224.jpg" },
    { id: 8, name: { en: "Keno X A 18L REG NOTIF951", nl: "Keno X A 18L REG NOTIF951", fr: "Keno X A 18L REG NOTIF951" }, price: 100.880, image: "images/keno-x-a-18l-reg-notif951.jpg" },
    { id: 9, name: { en: "Kenochlor 100 - 25L REG 7114B", nl: "Kenochlor 100 - 25L REG 7114B", fr: "Kenochlor 100 - 25L REG 7114B" }, price: 57.200, image: "images/kenochlor-100-25l-reg-7114b.jpg" },
    { id: 10, name: { en: "Keno X B 2L REG NOTIF951", nl: "Keno X B 2L REG NOTIF951", fr: "Keno X B 2L REG NOTIF951" }, price: 0.001, image: "images/keno-x-b-2l-reg-notif951.jpg" },
    { id: 11, name: { en: "Fumagri HA 0,02kg BE-REG-01389", nl: "Fumagri HA 0,02kg BE-REG-01389", fr: "Fumagri HA 0,02kg BE-REG-01389" }, price: 10.161, image: "images/fumagri-ha-0-02kg-be-reg-01389.jpg" },
    { id: 12, name: { en: "Fumagri HA 1kg BE-REG-01389", nl: "Fumagri HA 1kg BE-REG-01389", fr: "Fumagri HA 1kg BE-REG-01389" }, price: 75.535, image: "images/fumagri-ha-1kg-be-reg-01389.jpg" },
    { id: 13, name: { en: "Kenostart 60L", nl: "Kenostart 60L", fr: "Kenostart 60L" }, price: 382.190, image: "images/kenostart-60l.jpg" },
    { id: 14, name: { en: "Magnesium Acetaat 25 kg", nl: "Magnesium Acetaat 25 kg", fr: "Magnesium Acetaat 25 kg" }, price: 70.574, image: "images/magnesium-acetaat-25kg.jpg" },
    { id: 15, name: { en: "Virkon S -10 kg BE-REG-00078", nl: "Virkon S -10 kg BE-REG-00078", fr: "Virkon S -10 kg BE-REG-00078" }, price: 203.861, image: "images/virkon-s-10kg-be-reg-00078.jpg" },
    { id: 16, name: { en: "PoultryStar Sol EU 300g", nl: "PoultryStar Sol EU 300g", fr: "PoultryStar Sol EU 300g" }, price: 52.572, image: "images/poultrystar-sol-eu-300g.jpg" },
    { id: 17, name: { en: "PoultryStar Sol EU 600g", nl: "PoultryStar Sol EU 600g", fr: "PoultryStar Sol EU 600g" }, price: 73.944, image: "images/poultrystar-sol-eu-600g.jpg" },
    { id: 18, name: { en: "Dextrose 25 kg", nl: "Dextrose 25 kg", fr: "Dextrose 25 kg" }, price: 104.322, image: "images/dextrose-25kg.jpg" },
    { id: 19, name: { en: "Prophorce exclusive 25 kg", nl: "Prophorce exclusive 25 kg", fr: "Prophorce exclusive 25 kg" }, price: 145.600, image: "images/prophorce-exclusive-25kg.jpg" },
    { id: 20, name: { en: "Fertilgol bolus 8 x 95g", nl: "Fertilgol bolus 8 x 95g", fr: "Fertilgol bolus 8 x 95g" }, price: 65.884, image: "images/fertilgol-bolus-8x95g.jpg" },
    { id: 21, name: { en: "Ket-o-Vital bolus 4 x 135g", nl: "Ket-o-Vital bolus 4 x 135g", fr: "Ket-o-Vital bolus 4 x 135g" }, price: 28.288, image: "images/ket-o-vital-bolus-4x135g.jpg" },
    { id: 22, name: { en: "Phosphogol bolus 4 x 185g", nl: "Phosphogol bolus 4 x 185g", fr: "Phosphogol bolus 4 x 185g" }, price: 31.616, image: "images/phosphogol-bolus-4x185g.jpg" },
    { id: 23, name: { en: "Calz-o-Phos Liquid 4 x 500ml", nl: "Calz-o-Phos Liquid 4 x 500ml", fr: "Calz-o-Phos Liquid 4 x 500ml" }, price: 24.128, image: "images/calz-o-phos-liquid-4x500ml.jpg" },
    { id: 24, name: { en: "Grippozon 5L", nl: "Grippozon 5L", fr: "Grippozon 5L" }, price: 148.512, image: "images/grippozon-5l.jpg" },
    { id: 25, name: { en: "Calzogol bolus 4 x 175g", nl: "Calzogol bolus 4 x 175g", fr: "Calzogol bolus 4 x 175g" }, price: 23.504, image: "images/calzogol-bolus-4x175g.jpg" },
    { id: 26, name: { en: "Selko Fysal MP 25 kg", nl: "Selko Fysal MP 25 kg", fr: "Selko Fysal MP 25 kg" }, price: 84.188, image: "images/selko-fysal-mp-25kg.jpg" },
    { id: 27, name: { en: "Aqua-clean 10 liter REG 2814B", nl: "Aqua-clean 10 liter REG 2814B", fr: "Aqua-clean 10 liter REG 2814B" }, price: 72.332, image: "images/aqua-clean-10l-reg-2814b.jpg" },
    { id: 28, name: { en: "Fortifloq Liquid 5L", nl: "Fortifloq Liquid 5L", fr: "Fortifloq Liquid 5L" }, price: 96.200, image: "images/fortifloq-liquid-5l.jpg" },
    { id: 29, name: { en: "OmniGen-AF 25 kg", nl: "OmniGen-AF 25 kg", fr: "OmniGen-AF 25 kg" }, price: 114.390, image: "images/omnigen-af-25kg.jpg" },
    { id: 30, name: { en: "Staldren Spreading Wagon", nl: "Staldren Spreading Wagon", fr: "Staldren Spreading Wagon" }, price: 2350.000, image: "images/staldren-spreading-wagon.jpg" },
    { id: 31, name: { en: "Staldren Vink Spreader", nl: "Staldren Vink Spreader", fr: "Staldren Vink Spreader" }, price: 145.000, image: "images/staldren-vink-spreader.jpg" },
    { id: 32, name: { en: "Staldren Ladle", nl: "Staldren Ladle", fr: "Staldren Ladle" }, price: 12.000, image: "images/staldren-ladle.jpg" },
    { id: 33, name: { en: "C-Prove 80 20kg", nl: "C-Prove 80 20kg", fr: "C-Prove 80 20kg" }, price: 133.120, image: "images/c-prove-80-20kg.jpg" },
    { id: 34, name: { en: "C-Prove 80 1000L (IBC)", nl: "C-Prove 80 1000L (IBC)", fr: "C-Prove 80 1000L (IBC)" }, price: 5546.320, image: "images/c-prove-80-1000l-ibc.jpg" },
    { id: 35, name: { en: "Bovisel Plus 25 kg", nl: "Bovisel Plus 25 kg", fr: "Bovisel Plus 25 kg" }, price: 96.294, image: "images/bovisel-plus-25kg.jpg" },
    { id: 36, name: { en: "Bovisel Dry 25 kg", nl: "Bovisel Dry 25 kg", fr: "Bovisel Dry 25 kg" }, price: 124.540, image: "images/bovisel-dry-25kg.jpg" },
    { id: 37, name: { en: "Bovisel Bloc", nl: "Bovisel Bloc", fr: "Bovisel Bloc" }, price: 75.660, image: "images/bovisel-bloc.jpg" },
    { id: 38, name: { en: "Bovisel Plus extra vit A", nl: "Bovisel Plus extra vit A", fr: "Bovisel Plus extra vit A" }, price: 95.150, image: "images/bovisel-plus-extra-vit-a.jpg" },
    { id: 39, name: { en: "Bovisel Dry AX 25 kg", nl: "Bovisel Dry AX 25 kg", fr: "Bovisel Dry AX 25 kg" }, price: 86.934, image: "images/bovisel-dry-ax-25kg.jpg" },
    { id: 40, name: { en: "Lovit LC Energy 5L", nl: "Lovit LC Energy 5L", fr: "Lovit LC Energy 5L" }, price: 75.681, image: "images/lovit-lc-energy-5l.jpg" },
    { id: 41, name: { en: "Lovit Amino Plus Liquid 5L", nl: "Lovit Amino Plus Liquid 5L", fr: "Lovit Amino Plus Liquid 5L" }, price: 55.047, image: "images/lovit-amino-plus-liquid-5l.jpg" },
    { id: 42, name: { en: "Biosolve Plus 20 liter (22kg)", nl: "Biosolve Plus 20 liter (22kg)", fr: "Biosolve Plus 20 liter (22kg)" }, price: 104.302, image: "images/biosolve-plus-20l-22kg.jpg" },
    { id: 43, name: { en: "Staldren DRY 25 kg", nl: "Staldren DRY 25 kg", fr: "Staldren DRY 25 kg" }, price: 27.966, image: "images/staldren-dry-25kg.jpg" },
    { id: 44, name: { en: "Staldren Green (bio) 25 kg", nl: "Staldren Green (bio) 25 kg", fr: "Staldren Green (bio) 25 kg" }, price: 27.966, image: "images/staldren-green-bio-25kg.jpg" },
    { id: 45, name: { en: "Obitriol Flash 10 bolussen", nl: "Obitriol Flash 10 bolussen", fr: "Obitriol Flash 10 bolussen" }, price: 91.260, image: "images/obitriol-flash-10-bolussen.jpg" },
    { id: 46, name: { en: "Obi360 (10 bolussen)", nl: "Obi360 (10 bolussen)", fr: "Obi360 (10 bolussen)" }, price: 192.920, image: "images/obi360-10-bolussen.jpg" },
    { id: 47, name: { en: "Obi360 (50 bolussen)", nl: "Obi360 (50 bolussen)", fr: "Obi360 (50 bolussen)" }, price: 671.320, image: "images/obi360-50-bolussen.jpg" },
    { id: 48, name: { en: "Lovit AD3EC Liquid 5L", nl: "Lovit AD3EC Liquid 5L", fr: "Lovit AD3EC Liquid 5L" }, price: 95.326, image: "images/lovit-ad3ec-liquid-5l.jpg" },
    { id: 49, name: { en: "Lovit Blue C 375 g", nl: "Lovit Blue C 375 g", fr: "Lovit Blue C 375 g" }, price: 37.492, image: "images/lovit-blue-c-375g.jpg" },
    { id: 50, name: { en: "Lovit Hepavent Liquid 5L", nl: "Lovit Hepavent Liquid 5L", fr: "Lovit Hepavent Liquid 5L" }, price: 82.326, image: "images/lovit-hepavent-liquid-5l.jpg" },
    { id: 51, name: { en: "Lovit BX Forte Liquid 5L", nl: "Lovit BX Forte Liquid 5L", fr: "Lovit BX Forte Liquid 5L" }, price: 116.407, image: "images/lovit-bx-forte-liquid-5l.jpg" },
    { id: 52, name: { en: "Lovit Granule Anilyte + C 5kg", nl: "Lovit Granule Anilyte + C 5kg", fr: "Lovit Granule Anilyte + C 5kg" }, price: 128.149, image: "images/lovit-granule-anilyte-c-5kg.jpg" },
    { id: 53, name: { en: "Lovit E + SE Liquid 5L", nl: "Lovit E + SE Liquid 5L", fr: "Lovit E + SE Liquid 5L" }, price: 168.522, image: "images/lovit-e-se-liquid-5l.jpg" },
    { id: 54, name: { en: "Lovit Granule Skin Plus 5kg", nl: "Lovit Granule Skin Plus 5kg", fr: "Lovit Granule Skin Plus 5kg" }, price: 111.769, image: "images/lovit-granule-skin-plus-5kg.jpg" },
    { id: 55, name: { en: "Lovit Balance Liquid 5L", nl: "Lovit Balance Liquid 5L", fr: "Lovit Balance Liquid 5L" }, price: 40.487, image: "images/lovit-balance-liquid-5l.jpg" },
    { id: 56, name: { en: "Lovit Multivit Liquid 2x5L", nl: "Lovit Multivit Liquid 2x5L", fr: "Lovit Multivit Liquid 2x5L" }, price: 157.342, image: "images/lovit-multivit-liquid-2x5l.jpg" },
    { id: 57, name: { en: "Lovit C90 Powder 10 kg", nl: "Lovit C90 Powder 10 kg", fr: "Lovit C90 Powder 10 kg" }, price: 109.200, image: "images/lovit-c90-powder-10kg.jpg" },
    { id: 58, name: { en: "Horka 200 Kuikenpapier", nl: "Horka 200 Kuikenpapier", fr: "Horka 200 Kuikenpapier" }, price: 28.912, image: "images/horka-200-kuikenpapier.jpg" },
    { id: 59, name: { en: "Ultimate Acid 250 kg vat", nl: "Ultimate Acid 250 kg vat", fr: "Ultimate Acid 250 kg vat" }, price: 954.200, image: "images/ultimate-acid-250kg-vat.jpg" },
    { id: 60, name: { en: "Premium Acid 250 kg vat", nl: "Premium Acid 250 kg vat", fr: "Premium Acid 250 kg vat" }, price: 605.800, image: "images/premium-acid-250kg-vat.jpg" },
    { id: 61, name: { en: "Kanters pH Support 250 kg", nl: "Kanters pH Support 250 kg", fr: "Kanters pH Support 250 kg" }, price: 507.000, image: "images/kanters-ph-support-250kg.jpg" },
    { id: 62, name: { en: "Ultimate Acid 1100 kg IBC", nl: "Ultimate Acid 1100 kg IBC", fr: "Ultimate Acid 1100 kg IBC" }, price: 2516.800, image: "images/ultimate-acid-1100kg-ibc.jpg" },
    { id: 63, name: { en: "Ultimate Acid 20 kg bidon", nl: "Ultimate Acid 20 kg bidon", fr: "Ultimate Acid 20 kg bidon" }, price: 99.216, image: "images/ultimate-acid-20kg-bidon.jpg" },
    { id: 64, name: { en: "Premium Acid 20 kg bidon", nl: "Premium Acid 20 kg bidon", fr: "Premium Acid 20 kg bidon" }, price: 69.264, image: "images/premium-acid-20kg-bidon.jpg" },
    { id: 65, name: { en: "Kanters pH Support BE (20 kg)", nl: "Kanters pH Support BE (20 kg)", fr: "Kanters pH Support BE (20 kg)" }, price: 79.019, image: "images/kanters-ph-support-be-20kg.jpg" },
    { id: 66, name: { en: "Premium Acid 1100 kg IBC", nl: "Premium Acid 1100 kg IBC", fr: "Premium Acid 1100 kg IBC" }, price: 2173.600, image: "images/premium-acid-1100kg-ibc.jpg" },
    { id: 67, name: { en: "Flybuster professional Trap emmer", nl: "Flybuster professional Trap emmer", fr: "Flybuster professional Trap emmer" }, price: 22.308, image: "images/flybuster-professional-trap-emmer.jpg" },
    { id: 68, name: { en: "Flybuster professional navulling 240 gram", nl: "Flybuster professional navulling 240 gram", fr: "Flybuster professional navulling 240 gram" }, price: 23.161, price: 23.161, image: "images/flybuster-professional-navulling-240g.jpg" },
    { id: 69, name: { en: "Aqua-Clean 200L drum", nl: "Aqua-Clean 200L drum", fr: "Aqua-Clean 200L drum" }, price: 1423.760, image: "images/aqua-clean-200l-drum.jpg" },
    { id: 70, name: { en: "Colostrobione 10 zakjes 100g", nl: "Colostrobione 10 zakjes 100g", fr: "Colostrobione 10 zakjes 100g" }, price: 192.057, image: "images/colostrobione-10-zakjes-100g.jpg" },
    { id: 71, name: { en: "PRIZIS Lys-Met 5L", nl: "PRIZIS Lys-Met 5L", fr: "PRIZIS Lys-Met 5L" }, price: 49.920, image: "images/prizis-lys-met-5l.jpg" },
    { id: 72, name: { en: "Clostat HC SP Green Dry 5 kg", nl: "Clostat HC SP Green Dry 5 kg", fr: "Clostat HC SP Green Dry 5 kg" }, price: 400.556, image: "images/clostat-hc-sp-green-dry-5kg.jpg" },
    { id: 73, name: { en: "BIO Zink SL 5kg", nl: "BIO Zink SL 5kg", fr: "BIO Zink SL 5kg" }, price: 59.640, image: "images/bio-zink-sl-5kg.jpg" },
    { id: 74, name: { en: "Ecobiol Fizz 25 tab", nl: "Ecobiol Fizz 25 tab", fr: "Ecobiol Fizz 25 tab" }, price: 104.750, image: "images/ecobiol-fizz-25-tab.jpg" },
    { id: 75, name: { en: "Activo Liquid 5L", nl: "Activo Liquid 5L", fr: "Activo Liquid 5L" }, price: 111.956, image: "images/activo-liquid-5l.jpg" },
    { id: 76, name: { en: "Actidrench Hydra 500g", nl: "Actidrench Hydra 500g", fr: "Actidrench Hydra 500g" }, price: 11.648, image: "images/actidrench-hydra-500g.jpg" },
    { id: 77, name: { en: "Actidrench Partus 650g", nl: "Actidrench Partus 650g", fr: "Actidrench Partus 650g" }, price: 12.792, image: "images/actidrench-partus-650g.jpg" },
    { id: 78, name: { en: "Actidrench Transit 650g", nl: "Actidrench Transit 650g", fr: "Actidrench Transit 650g" }, price: 13.884, image: "images/actidrench-transit-650g.jpg" },
    { id: 79, name: { en: "Animate 25 kg", nl: "Animate 25 kg", fr: "Animate 25 kg" }, price: 63.700, image: "images/animate-25kg.jpg" },
    { id: 80, name: { en: "Anistart 25 kg", nl: "Anistart 25 kg", fr: "Anistart 25 kg" }, price: 161.751, image: "images/anistart-25kg.jpg" },
    { id: 81, name: { en: "Ascarom 5L", nl: "Ascarom 5L", fr: "Ascarom 5L" }, price: 106.132, image: "images/asc arom-5l.jpg" },
    { id: 82, name: { en: "Weegschaal Avium", nl: "Weegschaal Avium", fr: "Weegschaal Avium" }, price: 1350.000, image: "images/weegschaal-avium.jpg" },
    { id: 83, name: { en: "AX Eco 25 kg", nl: "AX Eco 25 kg", fr: "AX Eco 25 kg" }, price: 53.747, image: "images/ax-eco-25kg.jpg" },
    { id: 84, name: { en: "Bovisel® Transit 20kg", nl: "Bovisel® Transit 20kg", fr: "Bovisel® Transit 20kg" }, price: 324.740, image: "images/bovisel-transit-20kg.jpg" },
    { id: 85, name: { en: "Bovisel® Lacto Tri-Sel™ 25kg", nl: "Bovisel® Lacto Tri-Sel™ 25kg", fr: "Bovisel® Lacto Tri-Sel™ 25kg" }, price: 49.005, image: "images/bovisel-lacto-tri-sel-25kg.jpg" },
    { id: 86, name: { en: "Bovisel® Lacto Tri-Sel™ Extra 25kg", nl: "Bovisel® Lacto Tri-Sel™ Extra 25kg", fr: "Bovisel® Lacto Tri-Sel™ Extra 25kg" }, price: 81.931, image: "images/bovisel-lacto-tri-sel-extra-25kg.jpg" },
    { id: 87, name: { en: "Bovisel® Myo Tri-Sel™ 25kg", nl: "Bovisel® Myo Tri-Sel™ 25kg", fr: "Bovisel® Myo Tri-Sel™ 25kg" }, price: 79.841, image: "images/bovisel-myo-tri-sel-25kg.jpg" },
    { id: 88, name: { en: "Polyboot elastic overboot (50st)", nl: "Polyboot elastic overboot (50st)", fr: "Polyboot elastic overboot (50st)" }, price: 10.194, image: "images/polyboot-elastic-overboot-50st.jpg" },
    { id: 89, name: { en: "Colostro Balls - 1 set - 6 balletjes", nl: "Colostro Balls - 1 set - 6 balletjes", fr: "Colostro Balls - 1 set - 6 balletjes" }, price: 36.400, image: "images/colostro-balls-1set-6balletjes.jpg" },
    { id: 90, name: { en: "DH13 poeder 20 kg", nl: "DH13 poeder 20 kg", fr: "DH13 poeder 20 kg" }, price: 353.600, image: "images/dh13-poeder-20kg.jpg" },
    { id: 91, name: { en: "DH 13 5L", nl: "DH 13 5L", fr: "DH 13 5L" }, price: 121.264, image: "images/dh-13-5l.jpg" },
    { id: 92, name: { en: "Dominate Crumb 15 kg", nl: "Dominate Crumb 15 kg", fr: "Dominate Crumb 15 kg" }, price: 106.215, image: "images/dominate-crumb-15kg.jpg" },
    { id: 93, name: { en: "Enteria 5L", nl: "Enteria 5L", fr: "Enteria 5L" }, price: 83.720, image: "images/enteria-5l.jpg" },
    { id: 94, name: { en: "Freeze-KO 15kg", nl: "Freeze-KO 15kg", fr: "Freeze-KO 15kg" }, price: 136.240, image: "images/freeze-ko-15kg.jpg" },
    { id: 95, name: { en: "Hepadyn 5L", nl: "Hepadyn 5L", fr: "Hepadyn 5L" }, price: 80.236, image: "images/hepadyn-5l.jpg" },
    { id: 96, name: { en: "HY-D Liquid Complex 5L", nl: "HY-D Liquid Complex 5L", fr: "HY-D Liquid Complex 5L" }, price: 95.628, image: "images/hy-d-liquid-complex-5l.jpg" },
    { id: 97, name: { en: "HY-D Tabs 10 tabletten", nl: "HY-D Tabs 10 tabletten", fr: "HY-D Tabs 10 tabletten" }, price: 225.680, image: "images/hy-d-tabs-10tabletten.jpg" },
    { id: 98, name: { en: "Lianol Solution 1L", nl: "Lianol Solution 1L", fr: "Lianol Solution 1L" }, price: 68.952, image: "images/lianol-solution-1l.jpg" },
    { id: 99, name: { en: "Milk Easy (4st)", nl: "Milk Easy (4st)", fr: "Milk Easy (4st)" }, price: 54.309, image: "images/milk-easy-4st.jpg" },
    { id: 100, name: { en: "Mefisto Shock 10 ltr", nl: "Mefisto Shock 10 ltr", fr: "Mefisto Shock 10 ltr" }, price: 327.600, image: "images/mefisto-shock-10ltr.jpg" },
    { id: 101, name: { en: "Mestzeef", nl: "Mestzeef", fr: "Mestzeef" }, price: 175.760, image: "images/mestzeef.jpg" },
    { id: 102, name: { en: "Mitarom 5L", nl: "Mitarom 5L", fr: "Mitarom 5L" }, price: 83.720, image: "images/mitarom-5l.jpg" },
    { id: 103, name: { en: "Monopropyleenglycol 1.2 21KG", nl: "Monopropyleenglycol 1.2 21KG", fr: "Monopropyleenglycol 1.2 21KG" }, price: 63.887, image: "images/monopropyleenglycol-1-2-21kg.jpg" },
    { id: 104, name: { en: "Nutro Meat 1L", nl: "Nutro Meat 1L", fr: "Nutro Meat 1L" }, price: 780.000, image: "images/nutro-meat-1l.jpg" },
    { id: 105, name: { en: "Overall + kap blauw large Size 3 combivet (25st)", nl: "Overall + kap blauw large Size 3 combivet (25st)", fr: "Overall + kap blauw large Size 3 combivet (25st)" }, price: 123.500, image: "images/overall-kap-blauw-large-size3-25st.jpg" },
    { id: 106, name: { en: "CD FOR NEW - 5L", nl: "CD FOR NEW - 5L", fr: "CD FOR NEW - 5L" }, price: 80.340, image: "images/cd-for-new-5l.jpg" },
    { id: 107, name: { en: "Prophytal - 5L", nl: "Prophytal - 5L", fr: "Prophytal - 5L" }, price: 102.856, image: "images/prophytal-5l.jpg" },
    { id: 108, name: { en: "Elector® PSP 1L REG BE2013-0016", nl: "Elector® PSP 1L REG BE2013-0016", fr: "Elector® PSP 1L REG BE2013-0016" }, price: 436.800, image: "images/elector-psp-1l-reg-be2013-0016.jpg" },
    { id: 109, name: { en: "Pickstein", nl: "Pickstein", fr: "Pickstein" }, price: 16.172, image: "images/pickstein.jpg" },
    { id: 110, name: { en: "Detruitrat rattenval", nl: "Detruitrat rattenval", fr: "Detruitrat rattenval" }, price: 761.588, image: "images/detruitrat-rattenval.jpg" },
    { id: 111, name: { en: "Rescue Kit Pro SI 1 kg", nl: "Rescue Kit Pro SI 1 kg", fr: "Rescue Kit Pro SI 1 kg" }, price: 30.004, image: "images/rescue-kit-pro-si-1kg.jpg" },
    { id: 112, name: { en: "Mida Foam 150 AF 1000KG", nl: "Mida Foam 150 AF 1000KG", fr: "Mida Foam 150 AF 1000KG" }, price: 3430.960, image: "images/mida-foam-150-af-1000kg.jpg" },
    { id: 113, name: { en: "Mida Chriox 5 - 22 kg", nl: "Mida Chriox 5 - 22 kg", fr: "Mida Chriox 5 - 22 kg" }, price: 93.236, image: "images/mida-chriox-5-22kg.jpg" },
    { id: 114, name: { en: "Mida Foam 170 Bio 20 kg", nl: "Mida Foam 170 Bio 20 kg", fr: "Mida Foam 170 Bio 20 kg" }, price: 145.590, image: "images/mida-foam-170-bio-20kg.jpg" },
    { id: 115, name: { en: "Mida Flow 210 FL 23kg", nl: "Mida Flow 210 FL 23kg", fr: "Mida Flow 210 FL 23kg" }, price: 116.990, image: "images/mida-flow-210-fl-23kg.jpg" },
    { id: 116, name: { en: "Mida Foam 150 AF 21 kg", nl: "Mida Foam 150 AF 21 kg", fr: "Mida Foam 150 AF 21 kg" }, price: 83.034, image: "images/mida-foam-150-af-21kg.jpg" },
    { id: 117, name: { en: "Mida Foam 150 AF 200KG", nl: "Mida Foam 150 AF 200KG", fr: "Mida Foam 150 AF 200KG" }, price: 736.320, image: "images/mida-foam-150-af-200kg.jpg" },
    { id: 118, name: { en: "Mida Foam 255 KV 21 kg", nl: "Mida Foam 255 KV 21 kg", fr: "Mida Foam 255 KV 21 kg" }, price: 88.348, image: "images/mida-foam-255-kv-21kg.jpg" },
    { id: 119, name: { en: "Mida San 327 BF 21 kg", nl: "Mida San 327 BF 21 kg", fr: "Mida San 327 BF 21 kg" }, price: 97.843, image: "images/mida-san-327-bf-21kg.jpg" },
    { id: 120, name: { en: "Mida San 333 HN 20 Kg", nl: "Mida San 333 HN 20 Kg", fr: "Mida San 333 HN 20 Kg" }, price: 248.560, image: "images/mida-san-333-hn-20kg.jpg" },
    { id: 121, name: { en: "Mida Enzy 1002 20 kg", nl: "Mida Enzy 1002 20 kg", fr: "Mida Enzy 1002 20 kg" }, price: 177.195, image: "images/mida-enzy-1002-20kg.jpg" },
    { id: 122, name: { en: "Mida San 333 HN 210kg", nl: "Mida San 333 HN 210kg", fr: "Mida San 333 HN 210kg" }, price: 2303.496, image: "images/mida-san-333-hn-210kg.jpg" },
    { id: 123, name: { en: "Mida Agrifum 500gram", nl: "Mida Agrifum 500gram", fr: "Mida Agrifum 500gram" }, price: 72.738, image: "images/mida-agrifum-500gram.jpg" },
    { id: 124, name: { en: "Mida San 333 HN 1000L IBC", nl: "Mida San 333 HN 1000L IBC", fr: "Mida San 333 HN 1000L IBC" }, price: 7784.400, image: "images/mida-san-333-hn-1000l-ibc.jpg" },
    { id: 125, name: { en: "Mida Foam 189 DE 20L", nl: "Mida Foam 189 DE 20L", fr: "Mida Foam 189 DE 20L" }, price: 67.475, image: "images/mida-foam-189-de-20l.jpg" },
    { id: 126, name: { en: "Bekina Boots Steplite 04 Easygrip", nl: "Bekina Boots Steplite 04 Easygrip", fr: "Bekina Boots Steplite 04 Easygrip" }, price: 64.605, image: "images/bekina-boots-steplite-04-easygrip.jpg" },
    { id: 127, name: { en: "Freight", nl: "Freight", fr: "Freight" }, price: 62.400, image: "images/freight.jpg" },
    { id: 128, name: { en: "Freight parcel", nl: "Freight parcel", fr: "Freight parcel" }, price: 10.400, image: "images/freight-parcel.jpg" },
    { id: 129, name: { en: "Dominate Mist 20L", nl: "Dominate Mist 20L", fr: "Dominate Mist 20L" }, price: 216.216, image: "images/dominate-mist-20l.jpg" },
    { id: 130, name: { en: "Dominate Hydro 20L", nl: "Dominate Hydro 20L", fr: "Dominate Hydro 20L" }, price: 240.500, image: "images/dominate-hydro-20l.jpg" },
    { id: 131, name: { en: "Vitamine C 99 25 kg", nl: "Vitamine C 99 25 kg", fr: "Vitamine C 99 25 kg" }, price: 196.560, image: "images/vitamine-c-99-25kg.jpg" },
    { id: 132, name: { en: "Zenicalm 5L", nl: "Zenicalm 5L", fr: "Zenicalm 5L" }, price: 80.236, image: "images/zenicalm-5l.jpg" }
];

let cart = [];
let currentLanguage = 'nl'; // Default language

// Language texts, including email template
const translations = {
    en: { 
        title: "VET SHOPS", 
        cart: "Shopping Cart", 
        total: "Total", 
        checkout: "Send Mail", 
        add: "Add to Cart", 
        remove: "Remove", 
        search: "Search", 
        placeholder: "Search products...",
        emailHeader: "Order Confirmation - VET SHOPS",
        emailItemHeader: "Item | Price | Quantity | Subtotal",
        emailFooter: "Thank you for shopping with VET SHOPS!"
    },
    nl: { 
        title: "VET SHOPS", 
        cart: "Winkelwagen", 
        total: "Totaal", 
        checkout: "Mail Versturen", 
        add: "Toevoegen aan winkelwagen", 
        remove: "Verwijderen", 
        search: "Zoeken", 
        placeholder: "Zoek producten...",
        emailHeader: "Orderbevestiging - VET SHOPS",
        emailItemHeader: "Artikel | Prijs | Aantal | Subtotaal",
        emailFooter: "Bedankt voor het winkelen bij VET SHOPS!"
    },
    fr: { 
        title: "VET SHOPS", 
        cart: "Panier", 
        total: "Total", 
        checkout: "Envoyer un Mail", 
        add: "Ajouter au panier", 
        remove: "Supprimer", 
        search: "Rechercher", 
        placeholder: "Rechercher des produits...",
        emailHeader: "Confirmation de commande - VET SHOPS",
        emailItemHeader: "Article | Prix | Quantité | Sous-total",
        emailFooter: "Merci d'avoir fait vos achats chez VET SHOPS!"
    }
};

// Set language and refresh content
function setLanguage(lang) {
    currentLanguage = lang;
    displayProducts();
    updateCart();
    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("cart-title").textContent = translations[lang].cart;
    document.getElementById("total-text").innerHTML = `${translations[lang].total}: €<span id="total">${document.getElementById("total").textContent}</span>`;
    document.getElementById("checkout-btn").textContent = translations[lang].checkout;
    document.getElementById("search-btn").textContent = translations[lang].search;
    document.getElementById("search-input").placeholder = translations[lang].placeholder;
}

// Display products
function displayProducts(filteredProducts = products) {
    const productList = document.getElementById("products");
    productList.innerHTML = "";
    filteredProducts.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src="${product.image}" class="product-image" alt="${product.name[currentLanguage]}">
            <h3>${product.name[currentLanguage]}</h3>
            <p>€${product.price.toFixed(2)}</p>
            <input type="number" id="quantity-${product.id}" class="quantity-input" min="1" value="1">
            <button onclick="addToCart(${product.id})">${translations[currentLanguage].add}</button>
        `;
        productList.appendChild(div);
    });
}

// Search products
function searchProducts() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name[currentLanguage].toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const quantity = parseInt(document.getElementById(`quantity-${productId}`).value) || 1;
    if (quantity > 0) {
        const cartItem = { ...product, quantity };
        cart.push(cartItem);
        updateCart();
    } else {
        alert("Please enter a valid quantity (1 or more).");
    }
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Update cart display
function updateCart() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "cart-item";
        li.innerHTML = `
            <span>${item.name[currentLanguage]} - €${item.price.toFixed(2)} x ${item.quantity} = €${(item.price * item.quantity).toFixed(2)}</span>
            <button class="remove-btn" onclick="removeFromCart(${index})">${translations[currentLanguage].remove}</button>
        `;
        cartList.appendChild(li);
    });
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById("total").textContent = total.toFixed(2);
}

// Send mail with email template
function sendMail() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const subject = encodeURIComponent(translations[currentLanguage].emailHeader);
    let body = `${translations[currentLanguage].emailHeader}\n\n`;
    body += `${translations[currentLanguage].emailItemHeader}\n`;
    body += "---------------------------------------\n";
    cart.forEach(item => {
        body += `${item.name[currentLanguage]} | €${item.price.toFixed(2)} | ${item.quantity} | €${(item.price * item.quantity).toFixed(2)}\n`;
    });
    body += "---------------------------------------\n";
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    body += `${translations[currentLanguage].total}: €${total.toFixed(2)}\n\n`;
    body += `${translations[currentLanguage].emailFooter}`;
    body = encodeURIComponent(body);

    const mailtoLink = `mailto:kvanhoye@skynet.be?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
}

// Initialize with default language
setLanguage('nl');
