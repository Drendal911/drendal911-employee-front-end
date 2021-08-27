import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {DateRangePicker} from 'react-date-range';

export default function MyDateRangePicker(props) {
    const dateRange = props.dateRange
    const setDateRange = props.setDateRange

    function handleSelect(ranges) {
        setDateRange(prevState => {
            return {
                ...prevState,
                startDate: ranges.selection.startDate,
                endDate: ranges.selection.endDate
            }
        })
        console.log(dateRange);
    }

    const selectionRange = {
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        key: 'selection',
    }

    return (
        <>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
        </>
    )
}

