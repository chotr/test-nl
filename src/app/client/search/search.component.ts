import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePickerComponent, IDayCalendarConfig } from 'ng2-date-picker';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  // @ViewChild("dateFromDp")
  // public dateFromDp: DatePickerComponent;
  adult = 1;
  child = 1;
  idFrom = 'DND';
  idTo = 'SGN';
  nameFrom = 'Da Nang';
  placeFrom = 'Da Nang, Viet Nam';
  nameTo = 'Ho Chi Minh';
  placeTo = 'Ho Chi Minh, Viet Nam';
  inputFrom: any;
  inputTo: any;
  selectedDateFrom: any;
  selectedDateTo: any;
  listPlace = [
    {
      id: 'DND',
      name: 'Da Nang',
      place: 'Da Nang, Viet Nam',
    },
    {
      id: 'HNT',
      name: 'Ha Noi',
      place: 'Ha Noi, Viet Nam',
    },
    {
      id: 'SGN',
      name: 'Ho Chi Minh',
      place: 'Ho Chi Minh, Viet Nam',
    },
    {
      id: 'BMT',
      name: 'Buon Ma Thuot',
      place: 'Buon Ma Thuot, Viet Nam',
    },
    {
      id: 'BTP',
      name: 'Binh Thuan',
      place: 'Binh Thuan, Viet Nam',
    },
    {
      id: 'HPC',
      name: 'Hai Phong',
      place: 'Hai Phong, Viet Nam',
    },
    {
      id: 'NTC',
      name: 'Nha Trang',
      place: 'Nha Trang, Viet Nam',
    },
    {
      id: 'BDP',
      name: 'Binh Duong',
      place: 'Binh Duong, Viet Nam',
    },
    {
      id: 'TPP',
      name: 'Thai Binh',
      place: 'Thai Binh, Viet Nam',
    },
    {
      id: 'VTD',
      name: 'Vung Tau',
      place: 'Vung Tau, Viet Nam',
    },
    {
      id: 'HLV',
      name: 'Vinh Ha Long',
      place: 'Vinh Ha Long, Viet Nam',
    },
    {
      id: 'BPC',
      name: 'Binh Phuoc',
      place: 'Binh Phuoc, Viet Nam',
    },
    {
      id: 'BDP',
      name: 'Binh Dinh',
      place: 'Binh Dinh, Viet Nam',
    },
  ];
  listPlace1 = [
    {
      id: 'DND',
      name: 'Da Nang',
      place: 'Da Nang, Viet Nam',
    },
    {
      id: 'HNT',
      name: 'Ha Noi',
      place: 'Ha Noi, Viet Nam',
    },
    {
      id: 'SGN',
      name: 'Ho Chi Minh',
      place: 'Ho Chi Minh, Viet Nam',
    },
    {
      id: 'BMT',
      name: 'Buon Ma Thuot',
      place: 'Buon Ma Thuot, Viet Nam',
    },
    {
      id: 'BTP',
      name: 'Binh Thuan',
      place: 'Binh Thuan, Viet Nam',
    },
    {
      id: 'HPC',
      name: 'Hai Phong',
      place: 'Hai Phong, Viet Nam',
    },
    {
      id: 'NTC',
      name: 'Nha Trang',
      place: 'Nha Trang, Viet Nam',
    },
    {
      id: 'BDP',
      name: 'Binh Duong',
      place: 'Binh Duong, Viet Nam',
    },
    {
      id: 'TPP',
      name: 'Thai Binh',
      place: 'Thai Binh, Viet Nam',
    },
    {
      id: 'VTD',
      name: 'Vung Tau',
      place: 'Vung Tau, Viet Nam',
    },
    {
      id: 'HLV',
      name: 'Vinh Ha Long',
      place: 'Vinh Ha Long, Viet Nam',
    },
    {
      id: 'BPC',
      name: 'Binh Phuoc',
      place: 'Binh Phuoc, Viet Nam',
    },
    {
      id: 'BDP',
      name: 'Binh Dinh',
      place: 'Binh Dinh, Viet Nam',
    },
  ];
  config = {};
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.collapseSelection();
  }

  incrementAdult(): void {
    this.adult++;
  }
  decrementAdult(): void {
    if (this.adult > 0) {
      this.adult--;
    }
  }
  incrementChild(): void {
    this.child++;
  }
  decrementChild(): void {
    if (this.child > 0) {
      this.child--;
    }
  }
  collapseSelection(): void {
    const select = document.getElementById('choose-num') as HTMLElement;
    const select2 = document.getElementById('placeFrom') as HTMLElement;
    const select3 = document.getElementById('placeTo') as HTMLElement;
    const element2 = document.getElementById('fromModal') as HTMLElement;
    const element3 = document.getElementById('toModal') as HTMLElement;
    const element = document.getElementById('modalAC') as HTMLElement;

    select.addEventListener('click', () => {
      element.classList.toggle('show');
      element.classList.toggle('hide');
    });
    select2.addEventListener('click', () => {
      element2.classList.toggle('show');
      element2.classList.toggle('hide');
    });
    select3.addEventListener('click', () => {
      element3.classList.toggle('show');
      element3.classList.toggle('hide');
    });
  }
  getPlace(id: string, name: string, place: string) {
    this.nameFrom = name;
    this.placeFrom = place;
    this.idFrom = id;
  }
  getPlaceTo(id: string, name: string, place: string) {
    this.nameTo = name;
    this.placeTo = place;
  }

  saverange(event: any) {
    let list = [];
    if (event !== null) {
      for (let i in this.listPlace1) {
        let lowerPro = this.listPlace1[i].name.toLowerCase();
        let lowerName = event.toLowerCase().trim();

        let find = lowerPro.includes(lowerName, 0);

        if (find) {
          list.push(this.listPlace1[i]);
          console.log(event);
        }
      }
    }
    if (event === null) {
      list = this.listPlace1;
    }
    this.listPlace = list;
  }
  getDateDe(event: any) {
    let array = [];
    let time;

    array = event?.toLocaleString().split(' ');
    time = array[0].split(',')[0];
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (index > 0 && index < 4) {
        time += ',' + element;
      }
    }
    this.inputFrom = time;
  }

  getDateRe(event: any) {
    let array = [];
    let time;

    array = event?.toLocaleString().split(' ');
    time = array[0].split(',')[0];
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (index > 0 && index < 4) {
        if(index === 2){
        }
        time += ',' + element;
      }
    }
    this.inputTo = time;
    console.log(this.inputTo)
  }

  navigaTo() {
    window.location.href =
      'schedule?' +
      'from=' +
      this.idFrom +
      '&to=' +
      this.idTo +
      '&adult=' +
      this.adult +
      '&child=' +
      this.child+
    '&dateF=' + this.inputFrom + '&dateR=' + this.inputTo;
    // this.router.navigate(['schedule/', 'from=' + this.idFrom + '?to=' + this.idTo]);
  }
}
