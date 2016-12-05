/**
 * Created by Manhhailua on 12/5/16.
 */

import Entity from './Entity';

class Share extends Entity {

  constructor(share) {
    super(share);

    this._placements = share.placements;
  }

}

export default Share;