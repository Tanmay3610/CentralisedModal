export interface ModalParams {
  [key: string]: any;
}

export interface RouteProps {
  component: (props: any) => React.JSX.Element,
  params: ModalParams
}

export interface RouteMap {
  [key: string]: RouteProps
}
