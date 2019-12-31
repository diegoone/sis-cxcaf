import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/Tables.jsx";
import Maps from "views/Map.jsx";
import UserPage from "views/User.jsx";
import Empleados from "views/Empleados.jsx";
import Clientes from "views/Clientes.jsx";
import {ActivoFijo} from "views/ActivoFijo.jsx";
import Creditos from "views/Creditos.jsx";
var routes = [
  {
    path: "/dashboard",
    name: "Inicio",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/empleado",
    name: "Empleados",
    icon: "nc-icon nc-single-02",
    component: Empleados,
    layout: "/admin"
  },
  {
    path: "/cliente",
    name: "Clientes",
    icon: "nc-icon nc-circle-10",
    component: Clientes,
    layout: "/admin"
  },
  {
    path: "/credito",
    name: "Crédito",
    icon: "nc-icon nc-circle-10",
    component: Creditos,
    layout: "/admin"
  },
 
  {
    path: "/activofijo",
    name: "Activo Fijo",
    icon: "nc-icon nc-circle-10",
    component: ActivoFijo,
    layout: "/admin"
  },
 
  {
    path: "/icons",
    name: "Iconos",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Mapas",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notificaciones",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "Perfil de Usuario",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tablas y Listas",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Tipografia",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/admin"
  }
];
export default routes;