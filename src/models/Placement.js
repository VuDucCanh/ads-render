/**
 * Created by Manhhailua on 11/30/16.
 */

import Entity from './Entity';
import Banner from './Banner';

class Placement extends Entity {

  constructor(placement) {
    super(placement);

    this._banners = placement.banners;
  }

  get banners() {
    return this._banners;
  }

  getBannerByIndex(index = 0) {
    return new Placement(this.banners[index]);
  }

  activeBanner() {
    const randomNumber = Math.random() * 100;

    const tmpBanner = this.banners.reduce((range, banner) => {
      const nextRange = range + banner.weight;

      if (typeof range === 'object') {
        return range;
      }

      if (randomNumber >= range && randomNumber < nextRange) {
        return Object.assign({}, banner);
      }

      return nextRange;
    }, 0);

    return new Banner(tmpBanner);
  }

}

export default Placement;
