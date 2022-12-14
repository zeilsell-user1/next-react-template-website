export type CmsNavItem = {
    enabled:boolean,
    order:number,
    title:string,
    url:string,
    subMenuItems?:CmsSubNavItem[],
}
export type CmsSubNavItem = {
    enabled:boolean,
    order:number,
    icon:string,
    title:string,
    url:string,
}

export type CmsImage = {
    attribution:string,
    caption:string,
    reference:string,
}
