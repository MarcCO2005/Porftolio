import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../service/translation.service';

@Component({
    selector: 'app-studies',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './studies.component.html',
    styleUrl: './studies.component.css'
})
export class StudiesComponent {
    constructor(public ts: TranslationService) { }

    get studies() {
        return [
            {
                title: this.ts.t('studies.item1.title'),
                school: this.ts.t('studies.item1.school'),
                date: this.ts.t('studies.item1.date'),
                tags: ['React Native', 'Springboot', 'Hibernate', 'Maven'],
                description: this.ts.t('studies.item1.desc'),
                modules: this.ts.ta('studies.item1.modules')
            },
            {
                title: this.ts.t('studies.item2.title'),
                school: this.ts.t('studies.item2.school'),
                date: this.ts.t('studies.item2.date'),
                tags: ['SYMFONY', 'Angular', 'MySQL', 'AWS'],
                description: this.ts.t('studies.item2.desc'),
                modules: this.ts.ta('studies.item2.modules')
            },
            {
                title: this.ts.t('studies.item3.title'),
                school: this.ts.t('studies.item3.school'),
                date: this.ts.t('studies.item3.date'),
                tags: ['Networking', 'Hardware', 'Operating Systems', 'Security'],
                description: this.ts.t('studies.item3.desc'),
                modules: this.ts.ta('studies.item3.modules')
            }
        ];
    }
}
