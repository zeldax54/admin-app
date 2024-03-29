import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
      this.model = [
        {
          label: 'Home',
          items: [
              {
                  label: 'Home',
                  icon: 'pi pi-fw pi-home',
                  routerLink: ['/home']
              }
          ]
      },
        {
            label: 'Configure',
            items: [
                {
                    label: 'WhatsApp Senders Configure',
                    icon: 'pi pi-fw pi-whatsapp',
                    routerLink: ['/configure/number']
                }
            ]
        },

        {
          label: 'Admin Actions',
          items: [
              {
                  label: 'Admin Actions',
                  icon: 'pi pi-fw pi-lock',
                  routerLink: ['/adminactions']
              }
          ]
      }

    ];
    }
}
