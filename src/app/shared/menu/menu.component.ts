import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleEnum } from '../enum/module.enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})



export class MenuComponent implements OnInit {
  constructor(private router: Router) { }

  public listModule = [];

  public showModules: boolean = false;

  public modulePaths: Object = {};

  ngOnInit(): void {
    // const moduleNames = Object.keys(ModuleEnum);
    // const moduleIds = Object.entries(ModuleEnum);
    // // console.log(moduleIds, moduleNames);

    // (Object.keys(ModuleEnum) as Array<keyof typeof ModuleEnum>).map(
    //   (key, index) => {
    //     // console.log(key, typeof key);
    //     // console.log(index, typeof index);
    //     console.log(ModuleEnum[key] + index)
    //     return ModuleEnum[key] + index;
    //   },
    // );

  }

  navigate(event: any) {
    console.log(event);
    let moduleId = event.target?.id;
    console.log(moduleId);
  }

}
