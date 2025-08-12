import { Component, inject, TemplateRef } from '@angular/core';
import { LogoComponent } from '../../../../shared/logo/logo.component';
import { BetaInputService } from '../../services/beta-input.service';
import { NgbCollapseModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [LogoComponent, NgbCollapseModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private _offcanvasService: NgbOffcanvas = inject(NgbOffcanvas);
  private _betaInputService: BetaInputService = inject(BetaInputService);

  focusBetaButton() {
    this._betaInputService.focus();
  }

  openMenu(content: TemplateRef<any>) {
    this._offcanvasService.open(content, {
      position: 'end',
      backdrop: 'static',
    });
  }
}
