import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  
  menus = [
    {
      title: 'Menu',
      type: 'header'
    },
    {
      title: 'Introducción',
      icon: 'fa fa-home',
      active: false,
      type: 'simple',
      route: '/ejemplo/introduccion'
    },
    {
      title: 'Formularios',
      icon: 'fa fa-wpforms',
      active: false,
      type: 'simple',
      route: '/ejemplo/formulario'
    },
    {
      title: 'Paginado',
      icon: 'fa fa-table',
      active: false,
      type: 'simple',
      route: '/ejemplo/paginado'
    },
    {
      title: 'Módulos',
      icon: 'fa fa-laptop-code',
      active: false,
      type: 'simple',
      route: '/ejemplo/modulos'
    },
    {
      title: 'Ejemplo Dropdown',
      type: 'header'
    },
    {
      title: 'Dashboard',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      badge: {
        text: 'New ',
        class: 'bg-warning'
      },
      submenus: [
        {
          title: 'Dashboard 1',
          badge: {
            text: 'Pro ',
            class: 'bg-success'
          }
        },
        {
          title: 'Dashboard 2'
        },
        {
          title: 'Dashboard 3'
        }
      ]
    },
    {
      title: 'E-commerce',
      icon: 'fa fa-shopping-cart',
      active: false,
      type: 'dropdown',
      badge: {
        text: '3',
        class: 'bg-danger'
      },
      submenus: [
        {
          title: 'Products',
        },
        {
          title: 'Orders'
        },
        {
          title: 'Credit cart'
        }
      ]
    },
    {
      title: 'Components',
      icon: 'far fa-gem',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'General',
        },
        {
          title: 'Panels'
        },
        {
          title: 'Tables'
        },
        {
          title: 'Icons'
        },
        {
          title: 'Forms'
        }
      ]
    },
    {
      title: 'Charts',
      icon: 'fa fa-chart-line',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Pie chart',
        },
        {
          title: 'Line chart'
        },
        {
          title: 'Bar chart'
        },
        {
          title: 'Histogram'
        }
      ]
    },
    {
      title: 'Maps',
      icon: 'fa fa-globe',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Google maps',
        },
        {
          title: 'Open street map'
        }
      ]
    },
    {
      title: 'Extra',
      type: 'header'
    },
    {
      title: 'Documentation',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      badge: {
        text: 'Beta',
        class: 'bg-primary'
      },
    },
    {
      title: 'Calendar',
      icon: 'fa fa-calendar',
      active: false,
      type: 'simple'
    },
    {
      title: 'Examples',
      icon: 'fa fa-folder',
      active: false,
      type: 'simple'
    }
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }
  setMenuList(newMenu: any[]) {
    this.menus = newMenu;

  }

}