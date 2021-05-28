import { Component } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';
import { Printer } from '../../data/printer.interface';
import Printers from '../../data/printers';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss'],
})
export class PrinterComponent {
  public selectedPrinter?: Printer;

  constructor() {
    console.log('wat', Printers);
  }

  formatter = (printer: Printer) => `${printer.producer} ${printer.model}`;

  search: OperatorFunction<string, readonly Printer[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter((term) => term.length >= 2),
      map((term) =>
        Printers.filter((printer) =>
          new RegExp(term, 'mi').test(`${printer.producer} ${printer.model}`)
        ).slice(0, 10)
      )
    );
}
