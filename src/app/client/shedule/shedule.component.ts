import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.scss'],
})
export class SheduleComponent implements OnInit, AfterViewInit {
  textURL: any;
  url: any;
  idFrom: any;
  nameFrom: any;
  sanFrom: any;
  sanTo: any;
  nameTo: any;
  idTo: any;
  adult: any;
  child: any;
  return: any;
  dateFrom: any;
  dateRe: any;
  listFlight = [
    {
      id: '1',
      company: 'Bamboo Airways',
      sh: 'QH-183',
      icon: '../../../assets/icon/icon-bambo.svg',
      timeStart: '21:40',
      timeTo: '23:10',
      timeCount: '1h 30m',
      baggage: 20,
      fee: 1326000,
      feeCount: 4000,
      service: [{ ser1: 'Meal', ser2: 'Entertainment' }],
      aircraft: 'Airbus A321',
      seatLayout: '3-3',
      seatPeach: '29 inches (standard)',
    },
    {
      id: '2',
      company: 'Bamboo Airways',
      sh: 'QH-183',
      icon: '../../../assets/icon/icon-bambo.svg',
      timeStart: '21:40',
      timeTo: '23:10',
      timeCount: '1h 30m',
      baggage: 20,
      fee: 1326000,
      feeCount: 4000,
      service: [{ ser1: 'Meal', ser2: 'Entertainment' }],
      aircraft: 'Airbus A321',
      seatLayout: '3-3',
      seatPeach: '29 inches (standard)',
    },
    {
      id: '3',
      company: 'Vietnam Airlines',
      sh: 'AB-183',
      icon: '../../../assets/icon/icon-bambo.svg',
      timeStart: '21:40',
      timeTo: '23:10',
      timeCount: '1h 30m',
      baggage: 20,
      fee: 1326000,
      feeCount: 4000,
      service: [{ ser1: 'Meal', ser2: 'Entertainment' }],
      aircraft: 'Airbus A321',
      seatLayout: '3-3',
      seatPeach: '29 inches (standard)',
    },
  ];
  constructor(private route: ActivatedRoute) {}
  ngAfterViewInit(): void {
    this.collapse();
  }
  listPlace = [
    {
      id: 'DND',
      name: 'Da Nang',
      place: 'Da Nang, Viet Nam',
      sanBay: 'Da Nang Airport',
    },
    {
      id: 'HNT',
      name: 'Ha Noi',
      place: 'Ha Noi, Viet Nam',
      sanBay: 'Noi Bai',
    },
    {
      id: 'SGN',
      name: 'Ho Chi Minh',
      place: 'Ho Chi Minh, Viet Nam',
      sanBay: 'Tansonnhat Intl',
    },
    {
      id: 'BMT',
      name: 'Buon Ma Thuot',
      place: 'Buon Ma Thuot, Viet Nam',
      sanBay: 'San Bay',
    },
    {
      id: 'BTP',
      name: 'Binh Thuan',
      place: 'Binh Thuan, Viet Nam',
      sanBay: 'San Bay',
    },
    {
      id: 'HPC',
      name: 'Hai Phong',
      place: 'Hai Phong, Viet Nam',
      sanBay: 'San Bay',
    },
    {
      id: 'NTC',
      name: 'Nha Trang',
      place: 'Nha Trang, Viet Nam',
      sanBay: 'San Bay',
    },
    {
      id: 'BDP',
      name: 'Binh Duong',
      place: 'Binh Duong, Viet Nam',
      sanBay: 'San Bay',
    },
    {
      id: 'TPP',
      name: 'Thai Binh',
      place: 'Thai Binh, Viet Nam',
      sanBay: 'San Bay',
    },
    {
      id: 'VTD',
      name: 'Vung Tau',
      place: 'Vung Tau, Viet Nam',
      sanBay: 'San Bay',
    },
    {
      id: 'HLV',
      name: 'Vinh Ha Long',
      place: 'Vinh Ha Long, Viet Nam',
      sanBay: 'San Bay',
    },
    {
      id: 'BPC',
      name: 'Binh Phuoc',
      place: 'Binh Phuoc, Viet Nam',
      sanBay: 'San Bay',
    },
    {
      id: 'BDP',
      name: 'Binh Dinh',
      place: 'Binh Dinh, Viet Nam',
      sanBay: 'San Bay',
    },
  ];
  ngOnInit(): void {
    (document.getElementById('navbar') as HTMLElement).classList.add('light');
    this.route.queryParams.subscribe((params) => {
      this.textURL = params;
      console.log(this.textURL);
    });
    this.toggleModal();
    this.getInFoFlight();
  }

  toggleModal(): void {
    const select = document.getElementById('btn-change') as HTMLElement;
    const element = document.getElementById('search-modal') as HTMLElement;
    const fade = document.getElementById('fade') as HTMLElement;
    select.addEventListener('click', () => {
      element.classList.toggle('show');
      element.classList.toggle('hide');
      fade.style.display = 'block';
    });
    fade.addEventListener('click', () => {
      fade.style.display = 'none';
      element.classList.toggle('hide');
    });
  }
  getInFoFlight() {
    this.idFrom = this.textURL.from;
    this.idTo = this.textURL.to;
    this.dateFrom = this.replaceSpace(this.textURL.dateF);
    this.dateRe = this.replaceSpace(this.textURL.dateR);
    for (let place of this.listPlace) {
      if (this.idFrom === place.id) {
        this.nameFrom = place.name;
      }
      if (this.idTo === place.id) {
        this.nameTo = place.name;
      }
    }
    this.adult = this.textURL.adult;
    this.child = this.textURL.child;
    console.log(this.dateFrom);
  }
  replaceSpace(text: string): string {
    let string = '';
    for (let index = 0; index < text.length; index++) {
      const element = text[index];
      if (index === 6) {
        string += ' ';
      } else {
        string += element;
      }
    }
    return string;
  }
  collapse() {
    let num = this.listFlight.length;
    for (let i = 1; i <= num; i++) {
      let temp1 = ('detai' + i).toString();
      let select = document.getElementById(temp1) as HTMLElement;
      let select2 = document.getElementById('fare' + i) as HTMLElement;
      let element = document.getElementById('detaiCL' + i) as HTMLElement;
      let element2 = document.getElementById('fareCL' + i) as HTMLElement;

      select.addEventListener('click', () => {
        element.classList.toggle('showModal');
        element.classList.toggle('hidden');
        element2.classList.add('d-none');
        element.classList.remove('d-none');
      });

      select2.addEventListener('click', () => {
        element2.classList.toggle('showModal');
        element2.classList.toggle('hidden');
        element.classList.add('d-none');
        element2.classList.remove('d-none');
      });
    }
  }
}
