//云能效
const PALADIN_EA_MAINURI = process.env["PALADIN_EA_MAIN_URI"];
const PALADIN_EA_USERNAME = process.env["PALADIN_EA_USERNAME"];
const PALADIN_EA_PASSWORD = process.env["PALADIN_EA_PASSWORD"];

export interface Config {
  prodName: string;
  prodAlias: string;
  codeName: string;
  mainUri: string;
  username: string;
  password: string;
  loginButtonClass: string;
  spMgmtClass: string;
  customerClass: string;
  customerTextClass: string;
}

export const loginConfig: Config = {
  prodName: "云能效",
  prodAlias: "EA",
  codeName: "jazz",
  mainUri: PALADIN_EA_MAINURI,
  username: PALADIN_EA_USERNAME,
  password: PALADIN_EA_PASSWORD,
  loginButtonClass: ".login-button",
  spMgmtClass: "header.select-customer-header span.title",
  customerClass: "ul li.select-customer-item",
  customerTextClass: "div.select-customer-item-info-title-font"
};
