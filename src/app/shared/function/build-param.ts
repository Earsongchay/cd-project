import {InjectionToken} from "@angular/core";
import {DialogConfig} from "@angular/cdk/dialog";
import {BasePortalOutlet} from "@angular/cdk/portal";

export const buildParam = (param: any): any => {
  if (!param) {
    return {}
  }
  const keys = Object.keys(param).filter(
    (key) => param[key] != null && param[key] != undefined && param[key] != ''
  )
  const result: any = {}
  keys.forEach((key) => {
    result[key] = param[key]
  })

  return result
}
