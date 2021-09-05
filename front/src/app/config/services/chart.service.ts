import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  constractData(title, array, color) {

    return {
      labels: this.getName(array),
      datasets: [
        {
          label: title,
          backgroundColor: color,
          borderColor: color,
          fill: false,
          data: this.getValues(array,null),
        },
      ],
    };
  }
   getName(array: Array<any>): Array<any> {
    
    
    return array.map((item) => {
           
      if (!isNaN(Date.parse(item.name.replace(/ +/g, "")))) {
        const date = new Date(item.name);
        return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
      } else {
        return item.name;
      }
    });
  }
   getValues(array: Array<any>,property): Array<any> {
    return array.map((item) => {
      return item[property];
    });
  }
  getDatasets(array: Array<any>, array2: Array<any>) {
    let names = this.getName(array);
    names = names.concat(this.getName(array2));
    let uniqueNames = names.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    });
    let datasets = [];

    uniqueNames.map((name) => {
      const val1 = this.getSumValue(name, array);
      const val2 = this.getSumValue(name, array2);

      const color = this.randomColor();
      datasets.push({
        label: name,
        backgroundColor: color,
        borderColor: color,
        data: [val1, val2],
      });
    });
    return datasets;
  }
  private getSumValue(name, array: any[]) {
    if (array.length > 0) {
      const item = array.find((item) => {
        return item.name === name;
      });
      return item ? item.sum : 0;
    } else {
      return 0;
    }
  }
  randomColor() {
    const color =
      'rgb(' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ')';

    return color;
  }
}
