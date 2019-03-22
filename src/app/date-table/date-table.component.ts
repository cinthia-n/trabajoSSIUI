import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DateTableDataSource } from './date-table-datasource';

@Component({
  selector: 'app-date-table',
  templateUrl: './date-table.component.html',
  styleUrls: ['./date-table.component.css']
})
export class DateTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DateTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'CI', 'Nombres', 'Apellidos', 'Direccion', 'Telefono', 'Grado de Instruccion'];

  ngOnInit() {
    this.dataSource = new DateTableDataSource(this.paginator, this.sort);
  }
}
