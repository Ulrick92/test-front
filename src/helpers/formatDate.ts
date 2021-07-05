interface Formatdate {
    weekday: "long" | "short" | "narrow";
    month: "numeric" | "2-digit" | "long" | "short" | "narrow";
    day: "numeric" | "2-digit";
};

// Format date function
export const formatDateCard = (date: Date, weekday: any = "short", month: any = "short"): string => {
    const event = new Date(date);
    const options: Formatdate = {
        weekday,
        month,
        day: "2-digit"
    }
    const fullDate = event.toLocaleDateString("fr-FR", options);
    return fullDate;
}

// Format time function
export const formatHour = (date: Date): string => {
    const event = new Date(date);
    const hour = event.getHours();
    const minutes = event.getMinutes();
    return `${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}`;
}