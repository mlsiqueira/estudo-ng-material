import { Component } from '@angular/core';
import { MatBadgePosition, MatBadgeSize } from '@angular/material/badge';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {

  position: MatBadgePosition = 'above after';
  positions = ['above after', 'above before', 'below before', 'below after', 'before', 'after', 'above', 'below'];
  size: MatBadgeSize = 'medium';
  sizes = ['small', 'medium', 'large']
  matBadgeOverlap = false;

}
