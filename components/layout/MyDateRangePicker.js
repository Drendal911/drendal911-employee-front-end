import {DateRangePicker} from 'react-date-range';

export default function MyDateRangePicker() {

    function handleSelect(ranges) {
        console.log(ranges);
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
    }

    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
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

