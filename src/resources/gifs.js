const catagoriesGIFs = new Map();
const musicGIFs = [
  "https://robotunion.eu/wp-content/uploads/2019/06/giphy-2.gif",
  "https://i.pinimg.com/originals/3e/87/b5/3e87b5e21e8b25f967c545fedcdf9230.gif",
  "https://c.tenor.com/lVlj3Z219BMAAAAj/sound-classical-music.gif",
  "https://media.tenor.com/images/d215ecf4447232813f51cb9ce3246b72/tenor.gif",
  "https://i.pinimg.com/originals/e7/ab/1e/e7ab1ede1eea99b1de9a8f6eaf0582a9.gif",
  "https://media3.giphy.com/media/ZFo9Jf12rYxWwr1mFd/source.gif",
  "https://media.giphy.com/media/1fkD7WKKpubBTnqAm8/giphy.gif",
  "https://media.giphy.com/media/TgUKvhqlB0kfUMf6nE/giphy.gif",
];

const loveGIFs = [
  "https://media.giphy.com/media/fvN5KrNcKKUyX7hNIA/giphy.gif",
  "https://media.giphy.com/media/hpLIqd7UISc4CwPYBw/giphy.gif",
  "https://media.giphy.com/media/Um4FGUemFMYajOCkwV/giphy.gif",
  "https://media.giphy.com/media/gh6M02UhMgVrl0sIpe/giphy.gif",
  "https://media.giphy.com/media/keqxx8c8baHtPAYlwx/giphy.gif",
  "https://media.giphy.com/media/WsjvlTHDdpiqRCIUxx/giphy.gif",
  "https://media.giphy.com/media/LRyCoWlcFZOpB8s4yR/giphy.gif",
  "https://media.giphy.com/media/oO0PN0sdJhSkBOde4Z/giphy.gif",
];

const birthdayGIFs = [
  "https://i.pinimg.com/originals/59/a5/f0/59a5f025e75fe29104bd9597f5f7b0f1.gif",
  "https://media.giphy.com/media/dJ936uvjIVO9ybI2ci/giphy.gif",
  "https://media.giphy.com/media/YMN4zJqstdugmoIQtW/giphy.gif",
  "https://media.giphy.com/media/XFk198NPWCyXWwPz6f/giphy.gif",
  "https://media.giphy.com/media/Vg6ZBJORk4YoJGsciz/giphy.gif",
  "https://media.giphy.com/media/TGjRR2Rnr1I2CgjEEj/giphy.gif",
  "https://media.giphy.com/media/YdAAat8nyFDls2Wpkx/giphy.gif",
  "https://media.giphy.com/media/Tj3jlWNklxd4iUEl7q/giphy.gif",
];
const holidaysGIFs = [
  "https://media.giphy.com/media/Pjxl3kROOkD3JEQgNq/giphy.gif",
  "https://media.giphy.com/media/4QER0Ay4B57qH0vhys/giphy.gif",
  "https://media.giphy.com/media/bSVNQbj8ucBK5Pvumg/giphy.gif",
  "https://media.giphy.com/media/OankKHmyVmoazjioCh/giphy.gif",
  "https://media.giphy.com/media/3ksOEZckWJ3TY0hJFy/giphy.gif",
  "https://media.giphy.com/media/gChjjjkffyJMI/giphy.gif",
  "https://media.giphy.com/media/WoKue3dJMtniElpKPF/giphy.gif",
  "https://media.giphy.com/media/3s0OjlJRyggV7zikIy/giphy.gif",
];
const happyGIFs = [
  "https://media.giphy.com/media/YT1lSSmvHna73aIEkb/giphy.gif",
  "https://media.giphy.com/media/5fBH6zrcIiOs65zXCtG/giphy.gif",
  "https://media.giphy.com/media/fLVT160Ojw5yXdRzXE/giphy.gif",
  "https://media.giphy.com/media/LoNhsW67omuZBnsVRV/giphy.gif",
  "https://media.giphy.com/media/fu85TRhWNtxz5MsiR0/giphy.gif",
  "https://media.giphy.com/media/IUu7swWWXfeyk/giphy.gif",
  "https://media.giphy.com/media/LuVMhu0a2B1Go/giphy.gif",
  "https://media.giphy.com/media/VxFrlqO1mVzmE/giphy.gif",
];

const otherGIFs = [
  "https://media.giphy.com/media/PhUMedi9jcdlutzcUT/giphy.gif",
  "https://media.giphy.com/media/6bdgtpjyNoPsvb6mpH/giphy.gif",
  "https://media.giphy.com/media/l4FGxGHwO38nUrUwo/giphy.gif",
  "https://media.giphy.com/media/jPBeUiexbtmTXYBvBf/giphy.gif",
  "https://media.giphy.com/media/JmhSSxvbpikH11JrsW/giphy.gif",
  "https://media.giphy.com/media/YnHd3mELw7KMShu4Kh/giphy.gif",
  "https://media.giphy.com/media/FaTrieSsFHcaI/giphy.gif",
  "https://media.giphy.com/media/xT0BKiHWVteDT3rGWk/giphy.gif",
];


catagoriesGIFs.set('music', musicGIFs);
catagoriesGIFs.set('love', loveGIFs);
catagoriesGIFs.set('birthday', birthdayGIFs);
catagoriesGIFs.set('holidays', holidaysGIFs);
catagoriesGIFs.set('happy', happyGIFs);
catagoriesGIFs.set('other', otherGIFs);


// TODO: Take those catagories from catagoriesGIFs
export const CATAGORIES = [...catagoriesGIFs.keys()];
export default catagoriesGIFs;
