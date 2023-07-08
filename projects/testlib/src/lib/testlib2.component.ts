import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestlibComponent } from 'projects/testlib/src/lib/testlib.component';

@Component({
  selector: 'lib-testlib2',
  standalone: true,
  imports: [CommonModule, TestlibComponent],
  template: `
    <p>
      testlib 2 works!
    </p>
    <lib-testlib></lib-testlib>
  `,
  styles: [
  ]
})
export class Testlib2Component {

}
