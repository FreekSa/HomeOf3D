import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LoggerService } from '@jet/services/logger/logger.service';
import { TranslocoModule } from '@jsverse/transloco';
import { PageComponent } from '../page/page.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'jet-calculation-3-d-print',
  imports: [TranslocoModule, PageComponent],
  templateUrl: './calculation-3-d-print-page.component.html',
  styleUrl: './calculation-3-d-print-page.component.scss',
})
export class Calculation3DPrintPageComponent {
  readonly #loggerService = inject(LoggerService);

  public constructor() {
    this.#loggerService.logComponentInitialization('Calculation3DPrintPageComponent');
  }
}
