import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-testlib',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      testlib works!
    </p>
  `,
  styles: [
  ]
})
export class TestlibComponent {

}
