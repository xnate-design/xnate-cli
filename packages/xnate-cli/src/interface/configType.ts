


export interface INavPCText {
  [m: string]: string;
}

export interface INavPcItem {
  text?: INavPCText,
  path?: string,
  index?: boolean
}

export interface IConfigRouter {
  path?: string,
  redirect?: string
}