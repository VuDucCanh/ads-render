/**
 * Created by Manhhailua on 11/23/16.
 */

/* eslint-disable import/prefer-default-export */

import { Response } from './models';
import {
  Banner,
  Placement,
  Zone,
} from './components';

/* eslint-disable */
const response = new Response({
  "data": {
    "zones": [
      {
        "id": "77d24611-827d-4ac6-85e7-89332626b575",
        "width": 900,
        "height": 300,
        "shares": [
          {
            "id": "share-1",
            "width": 900,
            "height": 300,
            "weight": 100,
            "placements": [
              {
                "id": "ff8a2da9-628e-479a-a631-d080e103f2a3",
                "width": 900,
                "height": 300,
                "weight": 100,
                "banners": [
                  {
                    "id": "49cdbffb-5c96-4605-9dd9-555fd4347a8a",
                    "width": 900,
                    "height": 300,
                    "html": "<script src=\"https://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=rsb&c=28&pli=18292301&PluID=0&w=980&h=250&ord=[timestamp]&ucm=true&ncu=$$%%TTD_CLK_ESC%%$$\"></script> <noscript> <a href=\"%%TTD_CLK_ESC%%https%3A//bs.serving-sys.com/BurstingPipe/adServer.bs%3Fcn%3Dbrd%26FlightID%3D18292301%26Page%3D%26PluID%3D0%26Pos%3D1596347057\" target=\"_blank\"><img src=\"https://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=bsr&FlightID=18292301&Page=&PluID=0&Pos=1596347057\" border=0 width=980 height=250></a></noscript>",
                    "weight": 100,
                    "type": "html"
                  }
                ]
              }
            ]
          },
          {
            "id": "share-2",
            "width": 900,
            "height": 300,
            "weight": 0,
            "placements": [
              {
                "id": "2FB675E9-242F-4BD7-AD6A-206210B008C2",
                "width": 900,
                "height": 300,
                "weight": 30,
                "banners": [
                  {
                    "id": "50431e1c-2c59-4139-9ee0-c20f7dec643c",
                    "html": "B[0] of P[0] of S[1]",
                    "weight": 100,
                    "type": "cpd"
                  }
                ]
              },
              {
                "id": "ff8a2da9-628e-479a-a631-d080e103f2a3",
                "width": 900,
                "height": 300,
                "weight": 70,
                "banners": [
                  {
                    "id": "50431e1c-45c2-6231-9ee0-c20f7gwf643c",
                    "html": "B[0] of P[1] of S[1]",
                    "width": 900,
                    "height": 300,
                    "weight": 50,
                    "type": "cpd"
                  },
                  {
                    "id": "49cdbffb-5c96-4605-9dd9-555fd4347a8a",
                    "width": 900,
                    "height": 300,
                    "html": "B[1] of P[1] of S[1]",
                    "type": "cpd",
                    "weight": 50
                  }
                ]
              }
            ]
          },
          {
            "id": "share-3",
            "width": 900,
            "height": 300,
            "weight": 0,
            "type": "multiple",
            "css": ".arf-placement{display:inline-block;}",
            "placements": [
              {
                "id": "2FB675E9-242F-4BD7-AD6A-206210B008C2",
                "width": 400,
                "height": 300,
                "weight": 30,
                "banners": [
                  {
                    "id": "50431e1c-2c59-4139-9ee0-c20f7dec643c",
                    "width": 400,
                    "height": 300,
                    "html": "B[0] of P[0] of S[2]",
                    "weight": 50,
                    "type": "cpd"
                  },
                  {
                    "id": "50431e1c-2c59-4139-9ee0-c20f7dec643c",
                    "width": 400,
                    "height": 300,
                    "html": "B[1] of P[0] of S[2]",
                    "weight": 50,
                    "type": "cpd"
                  }
                ]
              },
              {
                "id": "ff8a2da9-628e-479a-a631-d080e103f2a3",
                "width": 400,
                "height": 300,
                "weight": 70,
                "banners": [
                  {
                    "id": "50431e1c-45c2-6231-9ee0-c20f7gwf643c",
                    "width": 400,
                    "height": 300,
                    "html": "B[0] of P[1] of S[2]",
                    "weight": 50,
                    "type": "cpd"
                  },
                  {
                    "id": "49cdbffb-5c96-4605-9dd9-555fd4347a8a",
                    "width": 400,
                    "height": 300,
                    "html": "B[1] of P[1] of S[2]",
                    "type": "cpd",
                    "weight": 50
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
/* eslint-enable */

const zoneId = '77d24611-827d-4ac6-85e7-89332626b575';
const zone = new Zone({ // eslint-disable-line no-unused-vars
  el: document.getElementById(zoneId),
  propsData: {
    model: response.getZoneObjectById(zoneId),
  },
});

export {
  Response,
  Banner,
  Placement,
  Zone,
};
