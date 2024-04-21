import Login from "@/app/login/page";

import { ModalSource } from "@/constants";
import { RouteMap } from "@/interface/RouteConfig";

const routeMap: RouteMap = {
  '/login': {
    component: Login,
    params: {
      source: ModalSource
    }
  }
}

export default routeMap;
