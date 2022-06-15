import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() public showSearchBox: boolean = true;
  @Output() public onSearch: EventEmitter<string>;

  public cityName: string= "";

  constructor(private router: Router) {
    this.onSearch = new EventEmitter();
  }

  ngOnInit(): void {
  }

  searchCity() {
    this.onSearch.next(this.cityName);
  }

  homeButton() {
    if(this.router.url == "/"){
      this.cityName = "";
      this.searchCity();
      return;
    }
    this.router.navigateByUrl("");
  }
}
