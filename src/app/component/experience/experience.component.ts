import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../service/translation.service';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css'
})
export class ExperienceComponent {
    constructor(public ts: TranslationService) { }

    get experiences() {
        return [
            {
                role: this.ts.t('experience.exp1.role'),
                company: this.ts.t('experience.exp1.company'),
                date: this.ts.t('experience.exp1.date'),
                description: this.ts.ta('experience.exp1.desc'),
                tags: this.ts.ta('experience.exp1.tags'),
                icon: 'fa-solid fa-rocket',
                isInternship: false
            },
            {
                role: this.ts.t('experience.exp2.role'),
                company: this.ts.t('experience.exp2.company'),
                date: this.ts.t('experience.exp2.date'),
                description: this.ts.ta('experience.exp2.desc'),
                tags: this.ts.ta('experience.exp2.tags'),
                icon: 'fa-solid fa-graduation-cap',
                isInternship: true
            }
        ];
    }
}
