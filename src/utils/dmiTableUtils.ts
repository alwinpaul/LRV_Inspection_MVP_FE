import { isAfter, isBefore, setHours, setMinutes, setSeconds, startOfDay, subDays } from "date-fns";
import { IDmiListing } from "../types/inspectionTypes";

const now = new Date();
const sixPMTonight = setSeconds(setMinutes(setHours(startOfDay(now), 18), 0), 0);

const sixPMYesterdayEvening = setSeconds(setMinutes(setHours(startOfDay(subDays(now, 1)), 18), 0), 0);
const sixPMDayBeforeEvening = setSeconds(setMinutes(setHours(startOfDay(subDays(now, 2)), 18), 0), 0);
const sixPMTonightBoundary = sixPMTonight;


interface IColumnType {
    dateTime: string;
    vehicle_id: string;
    technician_id_1: string;
    technician_id_2: string;
    work_order_number: string;
    pdf: string;
    ref: IDmiListing;
    _id: string
}

interface CategorizedData {
    today: IColumnType[];
    yesterday: IColumnType[];
    olderData: IColumnType[];
}

export const getAccordianLabels = () => {
    if (isBefore(now, sixPMTonight)) {
        return {
            todayLabel: `(after 6PM ${subDays(now, 1).toLocaleDateString()})`,
            yesterdayLabel: `(6 PM ${subDays(now, 2).toLocaleDateString()} - 6 PM ${subDays(now, 1).toLocaleDateString()})`,
            olderLabel: `(Before 6 PM ${subDays(now, 2).toLocaleDateString()})`
        }

    } else {
        return {
            todayLabel: `(after 6PM - ${now.toLocaleDateString()})`,
            yesterdayLabel: `(6 PM ${subDays(now, 1).toLocaleDateString()} - 6 PM ${now.toLocaleDateString()})`,
            olderLabel: `(Before 6 PM ${subDays(now, 1).toLocaleDateString()})`,
        }

    }
}


export const categorizeListing = (items: IDmiListing[] | null): CategorizedData => {

    const categorizedData: CategorizedData = {
        today: [],
        yesterday: [],
        olderData: []
    };

    if (!items) {
        return categorizedData
    }

    items.forEach(item => {
        const date = new Date(item.dateTime);

        const data = {
            dateTime: item.dateTime,
            vehicle_id: item.vehicleInfo.vehicle_id || 'NA',
            technician_id_1: item.vehicleInfo.technician_id_1 || 'NA',
            technician_id_2: item.vehicleInfo.technician_id_2 || 'NA',
            work_order_number: item.vehicleInfo.work_order_number || 'NA',
            pdf: item.pdf || '',
            ref: item,
            _id: item._id
        }
        if (isBefore(now, sixPMTonight) && isAfter(date, sixPMYesterdayEvening)) {
            // Time is before 6PM and the dmi time is after 6pm yesterday
            categorizedData.today.push(data);
        } else if (isAfter(date, sixPMTonight)) {
            // Time is after 6PM and dmi Time is between 6PM and 9AM tomorrow morning
            categorizedData.today.push(data);
        } else if (isBefore(now, sixPMTonight) && isAfter(date, sixPMDayBeforeEvening) && isBefore(date, sixPMTonightBoundary)) {
            categorizedData.yesterday.push(data);
        } else if (isAfter(date, sixPMYesterdayEvening) && isBefore(date, sixPMTonightBoundary)) {
            categorizedData.yesterday.push(data);
        } else {
            categorizedData.olderData.push(data);
        }
    });

    return categorizedData
}