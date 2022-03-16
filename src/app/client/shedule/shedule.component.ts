import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.scss'],
})
export class SheduleComponent implements OnInit, AfterViewInit {
  textURL: any;
  icon = '../../../assets/icon/icon-bambo.svg';
  company = 'Bamboo Airways';
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
  price: any;
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
      icon: '../../../assets/icon/vn-airline.svg',
      timeStart: '21:50',
      timeTo: '23:40',
      timeCount: '1h 30m',
      baggage: 20,
      fee: 1330000,
      feeCount: 4000,
      service: [{ ser1: 'Meal', ser2: 'Entertainment' }],
      aircraft: 'Airbus A321',
      seatLayout: '3-3',
      seatPeach: '29 inches (standard)',
    },
    {
      id: '4',
      company: 'Bamboo Airways',
      sh: 'QH-183',
      icon: '../../../assets/icon/icon-bambo.svg',
      timeStart: '20:40',
      timeTo: '22:10',
      timeCount: '1h 30m',
      baggage: 20,
      fee: 1320000,
      feeCount: 4000,
      service: [{ ser1: 'Meal', ser2: 'Entertainment' }],
      aircraft: 'Airbus A321',
      seatLayout: '3-3',
      seatPeach: '29 inches (standard)',
    },
    {
      id: '5',
      company: 'Vietnam Airlines',
      sh: 'AB-183',
      icon: '../../../assets/icon/vn-airline.svg',
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
      id: '6',
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
      id: '7',
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
      sanBay: 'Tansonnhat',
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
    (document.getElementById('contact') as HTMLElement).style.height = '70px';
    (document.getElementById('footer') as HTMLElement).style.background =
      '#f4f2f9';
    const select = document.getElementById('list_flight') as HTMLElement;
    this.route.queryParams.subscribe((params) => {
      this.textURL = params;
    });
    if (this.textURL === {}) {
      select.style.display = 'none';
      console.log('null');
    }
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
    console.log('NGfnngd', this.textURL);
    const select = document.getElementById('list_flight') as HTMLElement;
    this.idFrom = this.textURL.from;
    this.idTo = this.textURL.to;
    this.dateFrom = this.replaceSpace(this.textURL.dateF);

    if (this.dateFrom === undefined) {
      select.style.display = 'none';
    }
    this.dateRe = this.replaceSpace(this.textURL.dateR);
    for (let place of this.listPlace) {
      if (this.idFrom === place.id) {
        this.nameFrom = place.name;
        this.sanFrom = place.sanBay;
      }
      if (this.idTo === place.id) {
        this.nameTo = place.name;
        this.sanTo = place.sanBay;
      }
    }
    this.adult = this.textURL.adult;
    this.child = this.textURL.child;
    // console.log(this.dateFrom);
  }
  replaceSpace(text: string): string {
    console.log(text)
    let string = '';
    if (text === 'undefined') {
      return '';
    } else {  
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
        // if (select2.classList.toggle('details') === true) {
        //   select2.classList.remove('details');
        // }
        // if (element.classList.toggle('d-none') === false) {
        //   select.classList.toggle('details');
        // }

        if (element2.classList.toggle('d-none') === false) {
          element2.classList.add('d-none');
        }
        element.classList.remove('d-none');
      });

      select2.addEventListener('click', () => {
        element2.classList.toggle('showModal');
        element2.classList.toggle('hidden');
        // if (select.classList.toggle('details') === true) {
        //   select.classList.remove('details');
        // }
        // select2.classList.toggle('details');
        if (element.classList.toggle('d-none') === false) {
          element.classList.add('d-none');
        }
        element2.classList.remove('d-none');
      });
    }
  }
  getCompany(icon: any, company: any, price: number): void {
    (document.getElementById('total') as HTMLElement).style.display = 'flex';
    this.company = company;
    this.icon = icon;
    this.price = this.formatCur(price);
  }

  formatCur(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
