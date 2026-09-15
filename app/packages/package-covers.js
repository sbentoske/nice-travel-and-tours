export const packageCovers = {
  'great-britain': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Big%20Ben%2C%20London%2C%20United%20Kingdom%20%28Unsplash%20aLoN4KX1xSA%29.jpg?width=1400',
    credit: 'Jamie Street / Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Big_Ben,_London,_United_Kingdom_(Unsplash_aLoN4KX1xSA).jpg'
  },
  'chongqing-chengdu': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Skyline%20of%20Chongqing%2C%20Aug%202016.jpg?width=1400',
    credit: 'A Chinese user / Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Skyline_of_Chongqing,_Aug_2016.jpg'
  },
  'bangkok': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Wat%20Arun%20Bangkok%20%2CThailand.jpg?width=1400',
    credit: 'SupawatR / Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Wat_Arun_Bangkok_,Thailand.jpg'
  },
  'dubai': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dubai%20Skyline%20reflection.jpg?width=1400',
    credit: 'Tvisha2 / Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Dubai_Skyline_reflection.jpg'
  },
  'hanoi-sapa': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/SapaMountains.jpg?width=1200',
    credit: 'Jean-Marie Hullot / Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:SapaMountains.jpg'
  },
  'indochina-tricity': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Angkor%20Wat.JPG?width=1400',
    credit: 'Erik Hooymans / Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Angkor_Wat.JPG'
  },
  'bali': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Ulun%20Danu%20Bratan%20Bali.jpg?width=1400',
    credit: 'Jorge Franganillo / Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Ulun_Danu_Bratan_Bali.jpg'
  },
  'boracay': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Boat%20on%20boracay%20beach.jpg?width=1400',
    credit: 'Wikimedia Commons contributor',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Boat_on_boracay_beach.jpg'
  },
  'singapore-malaysia': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Marina%20Bay%20Skyline.png?width=1400',
    credit: 'Eentelijent / Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Marina_Bay_Skyline.png'
  },
  'bangkok-city-escape': {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/ThaiBangkokWatArun.jpg?width=1400',
    credit: 'Ziegler175 / Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:ThaiBangkokWatArun.jpg'
  }
};

export function getPackageCover(slug) {
  return packageCovers[slug];
}
