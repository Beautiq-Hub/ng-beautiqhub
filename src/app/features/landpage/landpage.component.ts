import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { BetaInputService } from './services/beta-input.service';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-landpage',
  imports: [NgbAccordionModule, HeaderComponent],
  templateUrl: './landpage.component.html',
  styleUrl: './landpage.component.scss',
})
export class LandpageComponent implements AfterViewInit {
  @ViewChild('betaInput', { static: false })
  private _betaInput?: ElementRef<HTMLInputElement>;

  private _betaInputService: BetaInputService = inject(BetaInputService);
  private _destroyRef: DestroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    this._betaInputService.$inputFocus
      .pipe(
        filter((value) => value === true),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe(() => this._betaInput?.nativeElement.focus());
  }
}
