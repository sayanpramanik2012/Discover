import { Component, EventEmitter, Output } from '@angular/core';
// import users from '../../assets/json/users.json';
import { NavigationItem } from './navigation-items.enum';
import { users } from '../../assets/json/users';

interface NavItem {
  label: string;
  active: boolean;
}

@Component({
  selector: 'app-brand-bar',
  templateUrl: './brand-bar.component.html',
  styleUrls: ['./brand-bar.component.scss'],
})
export class BrandBarComponent {
  @Output() showData = new EventEmitter<string>();
  navItems = [
    {
      label: 'Monitor my business',
      link: '/Monitor my business',
      active: false,
    },
    { label: 'Choose a template', link: '/Choose a template', active: false },
    { label: 'Build a table', link: '/Build a table', active: true },
    { label: 'Find my stuff', link: '/Find my stuff', active: false },
  ];

  username: string = '';
  ngOnInit() {
    const currentUser = users.find((user) => user.name === 'Sayan') || users[0];
    this.username = currentUser.name;
    this.showData.emit(this.username);
    const visibleItems = currentUser.visibleItems;
    this.navItems = this.navItems.filter((item) =>
      visibleItems.includes(item.label as NavigationItem)
    );
  }

  activateNavItem(index: number) {
    this.navItems.forEach((item) => (item.active = false));
    this.navItems[index].active = true;
  }
}
