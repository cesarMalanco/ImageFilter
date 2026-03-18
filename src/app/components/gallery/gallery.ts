import { Component } from '@angular/core';
import { PhotoItem } from '../photo-item/photo-item';
import { CommonModule } from '@angular/common';

interface Item {
  id: number;
  imageUrl: string;
  title: string;
  categories: number[];
}

interface Category {
  id: number;
  title: string;
}

@Component({
  selector: 'app-gallery',
  imports: [PhotoItem, CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  items: Item[] = [
    {
      id: 1,
      imageUrl:
        'https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/56740/lamborghini-sc18-port.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
      title: 'Lamborghini SC18',
      categories: [1],
    },
    {
      id: 2,
      imageUrl:
        'https://www.km77.com/images/medium/7/6/3/5/mclaren-750s-le-mans-2025-frontal-lateral.377635.jpg',
      title: 'McLaren 750S',
      categories: [1],
    },
    {
      id: 3,
      imageUrl:
        'https://mediapool.bmwgroup.com/cache/P9/201804/P90299386/P90299386-the-new-bmw-m2-competition-04-2018-600px.jpg',
      title: 'BMW M2',
      categories: [1],
    },
    {
      id: 4,
      imageUrl: 'https://images.pistonheads.com/nimg/47748/mceu_57726184811697203735390.jpg',
      title: 'Chevrolet Corvette E-Ray',
      categories: [1],
    },
    {
      id: 5,
      imageUrl: 'https://i.blogs.es/0c433b/porsche-911_carrera_t-2024-1600-06/450_1000.jpeg',
      title: 'Porsche 911',
      categories: [1],
    },
    {
      id: 6,
      imageUrl:
        'https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/cgkj8jnc8hlmktfsx8uo',
      title: 'Aston Martin Vantage',
      categories: [1],
    },
    {
      id: 7,
      imageUrl:
        'https://www.maseratiofwestport.com/wp-content/uploads/2023/09/New-2024-Maserati-GranTurismo-Trofeo.jpg',
      title: 'Maserati GranTurismo',
      categories: [1],
    },
    {
      id: 8,
      imageUrl:
        'https://www.topgear.com/sites/default/files/2026/02/1-Chevrolet-Corvette-ZR1X-review-2026.jpg',
      title: 'Chevrolet Corvette ZR1 / ZR1X',
      categories: [1],
    },
    {
      id: 9,
      imageUrl: 'https://static.latamautos.com/ghost/seminuevos/2025/04/1366_2000.png',
      title: 'Ford Mustang',
      categories: [1],
    },
    {
      id: 10,
      imageUrl:
        'https://www.carandclassic.com/magazine/app/uploads/2022/07/1959-volkswagen-beetle-62c20ac4905aa.jpg',
      title: 'VW Beetle',
      categories: [2],
    },
    {
      id: 11,
      imageUrl:
        'https://prestigeandperformancecar.com/wp-content/uploads/Series-I-Pic-06-1240x775.jpg',
      title: 'Jaguar E-Type',
      categories: [2],
    },
    {
      id: 12,
      imageUrl:
        'https://www.mustangspecs.com/wp-content/uploads/2020/06/1968-shelby-mustang-GT350-white-1.jpg',
      title: 'Shelby GT350',
      categories: [2],
    },
    {
      id: 13,
      imageUrl:
        'https://www.gallery-aaldering.com/wp-content/uploads/2025/02/bmw-2002-turbo-1975.jpg',
      title: 'BMW 2002',
      categories: [2],
    },
    {
      id: 14,
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/56e8421ac2ea5108b73fe126/1467818083500-TMEE14TQNL0VDNT84K7J/image-asset.jpeg',
      title: 'Volkswagen Type 2',
      categories: [2],
    },
    {
      id: 15,
      imageUrl: 'https://images.pistonheads.com/nimg/45242/01_Everrati_SeriesIIA.jpg',
      title: 'Land Rover Series IIA',
      categories: [2],
    },
    {
      id: 16,
      imageUrl: 'https://robbreport.com/wp-content/uploads/2022/04/chargerdaytona07.jpg?w=1000',
      title: 'Dodge Charger Daytona',
      categories: [2],
    },
    {
      id: 17,
      imageUrl:
        'https://theshopmag.com/wp-content/uploads/2025/08/Velocity-Dentside-Ford-truck-parked-at-angle-on-dirt-road.jpg',
      title: 'Bumpside Ford F-150',
      categories: [2],
    },
    {
      id: 18,
      imageUrl:
        'https://www.nostalgicmotoringltd.com/wp-content/uploads/2024/11/10_20_24_Ford_Model_T-5-scaled.jpg',
      title: 'Ford Model T',
      categories: [2],
    },
    {
      id: 19,
      imageUrl:
        'https://e9iwhqzsmh4.exactdn.com/wp-content/uploads/Lucid-Air-2025-180724-02.jpg?strip=all&lossy=1&ssl=1',
      title: 'Lucid Air',
      categories: [3],
    },
    {
      id: 20,
      imageUrl: 'https://i.blogs.es/019ccf/bmw-i4_concept-2020-1600-0c/1366_2000.jpg',
      title: 'BMW i4',
      categories: [3],
    },
    {
      id: 21,
      imageUrl:
        'https://acnews.blob.core.windows.net/imgnews/large/NAZ_680ca0f19ee2418f872d9864c11c4fc6.webp',
      title: 'Tesla Model 3',
      categories: [3],
    },
    {
      id: 22,
      imageUrl:
        'https://www.thedrive.com/wp-content/uploads/images-by-url-td/content/2022/01/2022-Porsche-Taycan-GTS-Sport-Turismo_KC_1.jpg?quality=85',
      title: 'Porsche Taycan',
      categories: [3],
    },
    {
      id: 23,
      imageUrl:
        'https://hips.hearstapps.com/vidthumb/images/hyundai-ioniq-6-1657193257.jpg?crop=0.951xw:0.951xh;0,0.00290xh',
      title: 'Hyundai Ioniq 6',
      categories: [3],
    },
    {
      id: 24,
      imageUrl:
        'https://www.thedrive.com/wp-content/uploads/2024/06/A242598_large-copy.jpg?quality=85&w=2048',
      title: 'Audi e-tron GT',
      categories: [3],
    },
    {
      id: 25,
      imageUrl: 'https://cdn.motor1.com/images/mgl/NGeYy2/s1/rimac-nevera-r.webp',
      title: 'Rimac Nevera',
      categories: [3],
    },
    {
      id: 26,
      imageUrl: 'https://asset.skoiy.com/tbowjqdgqpxirbte/2ql7d5i0x04v.jpg?w=1560&q=80&',
      title: 'Volkswagen ID.7',
      categories: [3],
    },
    {
      id: 27,
      imageUrl:
        'https://www.mini.com.mx/es_MX/home/mainstage-teaser/all-electric-mini-cooper/jcr:content/main/homestageHelper/stageitem/motion.wide.680w.j_1722288809495.jpg',
      title: 'Mini Cooper Electric',
      categories: [3],
    },
    {
      id: 28,
      imageUrl:
        'https://hips.hearstapps.com/hmg-prod/images/2026-honda-passport-trailsport-126-68a5f85bb2923.jpg?crop=0.787xw:0.590xh;0.124xw,0.200xh&resize=1200:*',
      title: 'Honda Passport',
      categories: [4],
    },
    {
      id: 29,
      imageUrl: 'https://i.blogs.es/d563b2/a-a-ev9gtlkvext05/1200_900.jpeg',
      title: 'Kia EV9',
      categories: [4],
    },
    {
      id: 30,
      imageUrl:
        'https://acnews.blob.core.windows.net/imgnews/medium/NAZ_d8a0b989022c4332af3b417b46d64272.webp',
      title: 'Mazda CX-30',
      categories: [4],
    },
    {
      id: 31,
      imageUrl:
        'https://imgcdn.oto.com/large/gallery/exterior/15/3250/hyundai-palisade-hybrid-front-angle-low-view-445995.jpg',
      title: 'Hyundai Palisade Hybrid',
      categories: [4],
    },
    {
      id: 32,
      imageUrl:
        'https://fuelcarmagazine.com/wp-content/uploads/2024/04/Ford-Bronco-Wildtrak-Colombia.jpg',
      title: 'Ford Bronco',
      categories: [4],
    },
    {
      id: 33,
      imageUrl:
        'https://cdn.prod.website-files.com/5ec85520c4dfff034b036be2/6913d4766fb7a1f5b467b0ad_2027-Kia-Telluride-hero.webp',
      title: 'Kia Telluride',
      categories: [4],
    },
    {
      id: 34,
      imageUrl:
        'https://hips.hearstapps.com/hmg-prod/images/2024-hyundai-santa-fe-hev-calligraphy-awd-257-6786736d5a0de.jpg?crop=0.611xw:0.513xh;0.275xw,0.353xh&resize=1200:*',
      title: 'Hyundai Santa Fe Hybrid',
      categories: [4],
    },
    {
      id: 35,
      imageUrl:
        'https://hips.hearstapps.com/hmg-prod/images/2026-jeep-grand-cherokee-l-pr-101-68ffd417016c5.jpg?crop=0.474xw:0.359xh;0.228xw,0.397xh&resize=1200:*',
      title: 'Jeep Grand Cherokee',
      categories: [4],
    },
    {
      id: 36,
      imageUrl:
        'https://autotrader.com/m/5ad1cda2ec891c7a/original/2025-Toyota-4Runner-TRDPro-front-3qtr-jpg.jpg',
      title: 'Toyota 4Runner',
      categories: [4],
    },
  ];

  categories: Category[] = [
    { id: 1, title: 'Sport' },
    { id: 2, title: 'Classic' },
    { id: 3, title: 'Electric' },
    { id: 4, title: 'SUV' },
  ];

  // Items copy (filtered)
  filteredItems: Item[] = [...this.items];

  // Register button activity
  activeCategoryId: number | null = null;

  filteredItemsByCategory(category: Category) {
    this.activeCategoryId = category.id;

    this.filteredItems = this.items.filter((item: Item) => {
      return item.categories.includes(category.id);
    });
  }

  reset() {
    this.filteredItems = [...this.items];
    this.activeCategoryId = null;
  }
}
