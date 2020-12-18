import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list-view',
  templateUrl: './grid-list-view.component.html',
  styleUrls: ['./grid-list-view.component.scss']
})
export class GridListViewComponent implements OnInit {

  @Input() items: {
    header: string;
    content: string;
  }[] = [];

  @Input() mode: "card" | "list" = "card";

  constructor() { }

  ngOnInit() { }

}
