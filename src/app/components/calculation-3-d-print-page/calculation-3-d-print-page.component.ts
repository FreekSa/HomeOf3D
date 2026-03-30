import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/select';
import { LoggerService } from '@jet/services/logger/logger.service';
import { TranslocoModule } from '@jsverse/transloco';
import { PageComponent } from '../page/page.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'jet-calculation-3-d-print',
  imports: [
    TranslocoModule,
    PageComponent,
    FormsModule,
    MatFormField,
    MatInputModule,
    MatLabel,
    ɵInternalFormsSharedModule,
  ],
  templateUrl: './calculation-3-d-print-page.component.html',
  styleUrl: './calculation-3-d-print-page.component.scss',
})
export class Calculation3DPrintPageComponent {
  readonly #loggerService = inject(LoggerService);
  public constructor() {
    this.#loggerService.logComponentInitialization('Calculation3DPrintPageComponent');
  }
  printTime: number = 60;
  costPerKg: number = 20;
  price: number = this.printTime * this.costPerKg;
}
