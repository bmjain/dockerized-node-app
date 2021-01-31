import { HttpParams } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AutocompleteComponent implements OnInit {
  autoCompleteControl = new FormControl();
  filteredOptions: Observable<any[]>;


  constructor(private backendServ: BackendService) { }

  
  ngOnInit(): void {
    this.filteredOptions = this.autoCompleteControl.valueChanges.pipe(
      startWith(null),
      debounceTime(400),
      switchMap(value => this.doFilter(value))
    );
  }

  private doFilter(value: string) {
    if (value !== null && value.length > 0) {
      const params = new HttpParams().set('q', value);
      return this.backendServ.getRecords(params).pipe(
        map(response => response.records)
      )
    }
    else {
      return of([]);
    }

  }

}
