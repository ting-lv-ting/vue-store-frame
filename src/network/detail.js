import { request } from "./request"

export function getDetailById(option) {
  return request({
    url: "/detail/info",
    method: "get",
    params: {
      id: option.id
    }
  })
}

export function getRecommendsById(option) {
  return request({
    url: "/detail/recommends",
    method: "get",
    params: {
      id: option.id
    }
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}