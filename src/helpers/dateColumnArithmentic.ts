import { SHORT_MONTH_NAMES } from '../constants';

export class DateColumnArithemetic {
    constructor(
        private dates: Date[],
        private viewingDate: Date | null,
        private selectedDate: Date | null,
        private years: boolean,
        private months: boolean
    ) {
        //
    }

    selected(n: Date) {
        if (this.months) {
            return n.getMonth() === this.selectedDate?.getMonth();
        } else if (this.years) {
            return n.getFullYear() === this.viewingDate?.getFullYear();
        }
        return n.getTime() === this.selectedDate?.getTime();
    }

    outOfMonth(i: number, n: Date) {
        return (
            ((i === 0 && n.getDate() > 7) ||
                (i === this.dates.length - 1 && n.getDate() <= 7)) &&
            !(this.months || this.years)
        );
    }

    getButtonText(n: Date) {
        if (this.months) {
            return SHORT_MONTH_NAMES[n.getMonth()];
        } else if (this.years) {
            return n.getFullYear();
        }
        return n.getDate();
    }
}
