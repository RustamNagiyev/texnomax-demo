import heroImage from '@/src/assets/images/hero_baku_luxury_estate_1790686234218.jpg';
import villaSuvalanImage from '@/src/assets/images/hero_luxury_villa_1790685409820.jpg';
import constructionImage from '@/src/assets/images/construction_site_1790685424144.jpg';
import penthouseImage from '@/src/assets/images/interior_penthouse_1790685438427.jpg';
import bilgahVillaImage from '@/src/assets/images/project_bilgah_villa_1790685451274.jpg';
import officeImage from '@/src/assets/images/project_modern_office_1790685465143.jpg';
import boutiqueBuildingImage from '@/src/assets/images/project_boutique_building_1790685509278.jpg';
import luxuryApartmentImage from '@/src/assets/images/project_luxury_apartment_1790685522506.jpg';
import { ProjectItem, ServiceItem } from '../types';

export const IMAGES = {
  hero: heroImage,
  construction: constructionImage,
  penthouse: penthouseImage,
  bilgahVilla: bilgahVillaImage,
  office: officeImage,
  boutiqueBuilding: boutiqueBuildingImage,
  luxuryApartment: luxuryApartmentImage,
};

export const COMPANY_CONTACT = {
  phone: '050 530 03 69',
  phoneFormatted: '+994 50 530 03 69',
  address: 'Bakı şəhəri, Heydər Əliyev prospekti 115',
  email: 'info@texnomax.az',
  instagram: '@texnomax.az',
  instagramUrl: 'https://instagram.com/texnomax.az',
  workingHours: 'Bazar ertəsi – Şənbə: 09:00 – 19:00',
  coordinates: '40.4093° N, 49.8671° E',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'tikinti',
    number: '01',
    title: 'Tikinti',
    shortDesc: 'Fərdi iqamətgahların, premium villaların və kommersiya binalarının monolit dəqiqliklə inşası.',
    fullDesc: 'TEXNOMAX olaraq, hər bir bina və villa üçün beynəlxalq tikinti standartlarına və seysmik tələblərə tam cavab verən konstruktiv mühəndislik təmin edirik. Təməldən dam örtüyünə qədər bütün mərhələlər laboratoriya sınaqlarından keçmiş sertifikatlı materiallarla həyata keçirilir.',
    image: constructionImage,
    highlights: [
      'Monolit-dəmirbeton karkas və dəqiq topoqrafik nivelirləmə',
      'Yüksək dərəcəli termo və hidroizolyasiya sistemləri',
      'Fərdi memarlıq konstruksiyaları və fasad işləri',
    ],
    scope: ['Villalar və bağ evləri', 'Premium qonaq evləri', 'Boutique ofis binaları', 'İctimai kommersiya obyektləri'],
  },
  {
    id: 'temir',
    number: '02',
    title: 'Təmir',
    shortDesc: 'Lüks mənzil və rezidensiyaların müəllif nəzarəti altında açar təhvili yüksək səviyyəli təmiri.',
    fullDesc: 'Detalların harmoniyası və qüsursuz icra bizim əsas fəlsəfəmizdir. Mərmər döşəmələr, gizli qapılar, akustik tavanlar və ağıllı ev inteqrasiyaları ilə yaşayış məkanlarınızı zamansız incəsənət nümunəsinə çeviririk.',
    image: penthouseImage,
    highlights: [
      'İtaliya və İspaniya istehsalı kermoqranit və təbii mərmər montajı',
      'Gizli işıqlandırma, profillər və qüsursuz həndəsi xətlər',
      'Akustik izolyasiya və inteqrasiya olunmuş iqlim idarəetməsi',
    ],
    scope: ['Penthouse təmiri', 'Dupleks və premium mənzillər', 'Eksklüziv iqamətgahlar', 'Ofis və showroom renovasiyası'],
  },
  {
    id: 'dizayn',
    number: '03',
    title: 'Dizayn',
    shortDesc: 'Fərdi üslubu və erqonomikanı əks etdirən müəllif interyer və eksteryer memarlıq dizaynı.',
    fullDesc: 'Məkanın hər bir kvadrat metrini müştərinin həyat tərzinə uyğunlaşdırırıq. Təbii ağac, daş və metal teksturalarının harmoniyasını fotorealistik 3D vizuallaşdırmalar və detallı işçi cizgilərlə real həyata daşıyırıq.',
    image: bilgahVillaImage,
    highlights: [
      'Müəllif konsepti və fotorealistik 3D renderlər',
      'Fərdi mebel layihələndirməsi və material kataloqu',
      'Mühəndislik cizgiləri və işıqlandırma ssenariləri',
    ],
    scope: ['Lüks interyer dizaynı', 'Fasad və landşaft dizaynı', 'Fərdi mebel eskizləri', 'Rəng və işıq konsaltinqi'],
  },
  {
    id: 'layihelendirme',
    number: '04',
    title: 'Layihələndirmə',
    shortDesc: 'Dövlət standartlarına uyğun memarlıq, konstruktiv və mühəndislik sənədlərinin hazırlanması.',
    fullDesc: 'Mürəkkəb layihələrin icazə sənədlərindən işçi iş sxemlərinə qədər bütün mərhələlərini peşəkar mühəndis komandamız tərtib edir. Ən xırda texniki detal belə icraya başlamazdan əvvəl modelləşdirilir.',
    image: boutiqueBuildingImage,
    highlights: [
      'Baş plan, kəsiklər və memarlıq-planlaşdırma həlləri',
      'Konstruktiv hesablamalar və seysmik dayanıqlıq analizi',
      'Elektrik, santexnika və HVAC mühəndislik layihələri',
    ],
    scope: ['Memarlıq layihələri', 'Konstruktiv hesabatlar', 'Mühəndis şəbəkələri', 'Rəsmi təsdiq sənədləri'],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'bilgah-residence',
    title: 'Bilgəh Dəniz İqamətgahı',
    category: 'Villa',
    location: 'Bilgəh, Bakı',
    area: '1,250 m²',
    year: '2024',
    image: bilgahVillaImage,
    description: 'Xəzər dənizi sahilində minimalist travertin və monolit şüşə elementlərindən ibarət fərdi lüks villa kompleksi.',
    highlights: ['Geniş terras və dəniz panoraması', 'Açıq sonsuzluq hovuzu (Infinity pool)', 'Fərdi landşaft və xüsusi akustik təcrid'],
  },
  {
    id: 'port-baku-penthouse',
    title: 'Port Baku Penthouse',
    category: 'Mənzil',
    location: 'Səbail, Bakı',
    area: '480 m²',
    year: '2024',
    image: penthouseImage,
    description: 'Panoramik dəniz və şəhər mənzərəli, tünd palıd ağacı və Calacatta mərmər vurğuları ilə bəzədilmiş eksklüziv penthouse.',
    highlights: ['Müəllif mebel kolleksiyası', 'Tam Ağıllı Ev (KNX) sistemi', 'Gizli işıqlandırma həlləri'],
  },
  {
    id: 'white-city-executive',
    title: 'Ağ Şəhər Biznes Qərargahı',
    category: 'Ofis',
    location: 'Ağ Şəhər, Bakı',
    area: '820 m²',
    year: '2023',
    image: officeImage,
    description: 'Beynəlxalq şirkət üçün nəzərdə tutulmuş müasir korporativ ofis məkanı, akustik panellər və bürünc arakəsmələr.',
    highlights: ['Acoustic comfort sertifikatı', 'Erqonomik iclas otaqları', 'Təbii ağac tavan louvers'],
  },
  {
    id: 'badamdar-boutique',
    title: 'Badamdar Rezidens Binası',
    category: 'Bina',
    location: 'Badamdar, Bakı',
    area: '3,400 m²',
    year: '2023',
    image: boutiqueBuildingImage,
    description: 'Şəxsi həyətyanı əraziyə malik 4 mərtəbəli premium boutique yaşayış kompleksi.',
    highlights: ['Təbii aqlay və qranit fasad', 'Yeraltı parkinq və fərdi liftlər', 'Enerji-effektiv fasad izolyasiyası'],
  },
  {
    id: 'suvalan-minimalist-villa',
    title: 'Şüvəlan Monolit Villa',
    category: 'Villa',
    location: 'Şüvəlan, Bakı',
    area: '720 m²',
    year: '2023',
    image: villaSuvalanImage,
    description: 'Təbiətlə vəhdət təşkil edən, geniş vitraj şüşəli və qızılı vurğulu fərdi villa layihəsi.',
    highlights: ['Yüksək tavanlar (4.2 metr)', 'İstilik izolyasiyalı Reynaers vitrajlar', 'Qapalı spa zonası'],
  },
  {
    id: 'nizami-street-suite',
    title: 'Nizami Rezidens Suite',
    category: 'Mənzil',
    location: 'Mərkəz, Bakı',
    area: '290 m²',
    year: '2024',
    image: luxuryApartmentImage,
    description: 'Tarixi şəhər mərkəzində müasir memarlığın incəliklərini əks etdirən premium mənzil renovasiyası.',
    highlights: ['Mərmər master vanna otağı', 'Qarderob otaqları və zərgərlik işıqlandırması', 'Parket döşəmə və gizli qapılar'],
  },
];

export const STATS_DATA = [
  {
    value: '14+',
    label: 'İl Təcrübə',
    context: 'Bakı və Abşeronda lüks inşaat sahəsində',
  },
  {
    value: '180+',
    label: 'Uğurla Təhvil Verilmiş Layihə',
    context: 'Fərdi villalar, rezidensiyalar və ofislər',
  },
  {
    value: '98%',
    label: 'Müştəri Məmnuniyyəti',
    context: 'Dəqiq vaxtında və büdcəyə uyğun icra',
  },
  {
    value: '45+',
    label: 'Peşəkar Mühəndis və Usta',
    context: 'Beynəlxalq sertifikatlı mütəxəssis heyəti',
  },
];

export const VALUES_DATA = [
  {
    number: '01',
    title: 'Keyfiyyət Standartı',
    desc: 'Yalnız Avropa standartlarına cavab verən birinci dərəcəli inşaat materialları və laboratoriya sınağından keçmiş texnologiyalar.',
  },
  {
    number: '02',
    title: 'Etibarlılıq və Şəffaflıq',
    desc: 'Hər bir detalın rəsmi müqavilə və şəffaf smeta sənədləşməsi ilə təsdiqlənməsi. Gizli xərc və gözlənilməz qiymət artımı yoxdur.',
  },
  {
    number: '03',
    title: 'Vaxtında Təhvil',
    desc: 'Dəqiq qrafik üzrə mərhələli icra və həftəlik foto/video hesabatlar. Təhvil tarixinə 100% zəmanət veririk.',
  },
  {
    number: '04',
    title: 'Peşəkarlıq və Nəzarət',
    desc: 'Ali təhsilli konstruktor mühəndislər və təcrübəli memarlar tərəfindən hər gün aparılan daimi texniki nəzarət.',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Açar Təhvili Həllər',
    desc: 'Təməl qazıntısından mebel və pərdələrin quraşdırılmasına qədər bütün prosesi vahid məsuliyyət altında idarə edirik.',
  },
  {
    title: 'Dəqiq Smeta və Müqavilə',
    desc: 'Layihəyə başlamazdan əvvəl hər bir qəpiyi əks etdirən detallı xərclər cədvəli təqdim olunur və qiymət sabit qalır.',
  },
  {
    title: '5 İllik Rəsmi Zəmanət',
    desc: 'Görülən bütün tikinti, suvaq, izolyasiya və mühəndis-kommunikasiya işlərinə rəsmi hüquqi zəmanət təqdim edirik.',
  },
  {
    title: 'Müəllif Nəzarəti və Hesabat',
    desc: 'Memar və texniki nəzarətçi hər gün sahədə olur. Müştəriyə hər həftə vizual və sənədli tərəqqi hesabatı göndərilir.',
  },
];

export const WORK_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Ölçü və Texniki Tədqiqat',
    desc: 'Obyektə yerində baxış, sahənin geodeziya və topoqrafik ölçülməsi, müştərinin tələblərinin müəyyənləşdirilməsi.',
  },
  {
    step: '02',
    title: 'Layihə və Dəqiq Smeta',
    desc: 'Fərdi memarlıq konsepti, 3D vizuallaşdırma, işçi cizgilər və hər bir xərc bəndinin şəffaf razılaşdırılması.',
  },
  {
    step: '03',
    title: 'İnşaat və Mühəndis İcrası',
    desc: 'Müasir avadanlıqlarla yüksək standartlı tikinti-təmir prosesi, laboratoriya nəzarəti və nizamlı iş qrafiki.',
  },
  {
    step: '04',
    title: 'Təhvil və Rəsmi Zəmanət',
    desc: 'Məkanın peşəkar təmizliyi, son texniki yoxlama aktlarının imzalanması və 5 illik rəsmi zəmanət pasportunun təqdimi.',
  },
];
