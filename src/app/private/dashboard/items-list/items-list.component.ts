import { Component, computed, signal } from '@angular/core';
import { CharactersService } from '@services/characters.service';
import { CharacterCardComponent } from '../components/character-card/character-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CharacterCardComponent, MatProgressSpinnerModule, MatPaginatorModule, JsonPipe],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss',
  providers: [{ provide: MatPaginatorIntl }],
})
export default class ItemsListComponent {

  constructor(public cs: CharactersService) {
    // this.cs.getAllCharacters();
    this.cs.getByIds(this.totalIds());

  }

  public hidePageSize = signal(true);
  public pageIndex = signal(0);
  public arrayLength = signal(826);
  public pageSize = signal(10);
  // showPageSizeOptions = false;
  public showFirstLastButtons = signal(true);
  public pageEvent: PageEvent | any;
  public totalIds = signal(this.cs.searchByPage(0, 826));

  handlePageEvent(e: PageEvent) {

    this.pageEvent = e;
    // this.arrayLength.update(value =>e.length);
    this.pageSize.update(value => e.pageSize);
    this.pageIndex.update(value => e.pageIndex);

    // this.paginating.
    this.totalIds.update(value => this.cs.searchByPage(this.pageIndex(), this.arrayLength()));
    this.cs.getByIds(this.totalIds());
  }
}
