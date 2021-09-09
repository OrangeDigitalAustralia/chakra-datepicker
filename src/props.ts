export interface DatePickerProps {
    triggerButton?: React.ReactNode;
    triggerButtonText?: string;
    time?: boolean;
    initialValue?: Date;
    onDateChange?: (date: Date | null) => void;
}
