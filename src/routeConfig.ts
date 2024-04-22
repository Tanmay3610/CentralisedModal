"use client";
// import Login from "@/app/login/page";
import Home from "@/app/home/page";
import Login from "@/app/login/page";;

import { RouteMap } from "@/interface/RouteConfig";

export const routeMap: RouteMap = {
  '/login': {
    component: Login,
    params: {
      isModal: false,
      initialEmail: ""
    }
  },
  '/home': {
    component: Home,
    params: {
      isModal: false,
    }
  }
}
