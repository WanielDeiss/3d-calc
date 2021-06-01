import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';
import { ElectricityProvider } from '../../data/electricity-provider.interface';
import ElectricityProviders from '../../data/electricity-costs/electricity-providers';

@Component({
  selector: 'app-electricity-provider',
  templateUrl: './electricity-provider.component.html',
  styleUrls: ['./electricity-provider.component.scss'],
})
export class ElectricityProviderComponent {
  public selectedProvider?: ElectricityProvider;

  formatter = (provider: ElectricityProvider) => provider.name;

  search: OperatorFunction<string, readonly ElectricityProvider[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter((term) => term.length >= 2),
      map((term) =>
        ElectricityProviders.filter((provider) =>
          new RegExp(term, 'mi').test(provider.name)
        ).slice(0, 10)
      )
    );
}
