import React, { useState, useEffect, useRef } from 'react';
import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";

const Scheduler: React.FC = () => {
    const [config, setConfig] = useState<DayPilot.SchedulerConfig>({
        startDate: "2023-01-01",
        days: 365,
        scale: "Day",
        eventHeight: 50,
        timeHeaders: [
            { groupBy: "Month" },
            { groupBy: "Day", format: "d" }
        ],
        cellWidth: 50,
        resources: [
            { name: "Location A", id: "A" },
            { name: "Location B", id: "B" },
            { name: "Location C", id: "C" },
            { name: "Location D", id: "D" },
            { name: "Location E", id: "E" },
            { name: "Location F", id: "F" },
        ],
        events: [
            {
                id: 1,
                text: "Reservation 1",
                start: "2023-11-03T00:00:00",
                end: "2023-11-09T00:00:00",
                resource: "A",
                barColor: "#3d85c6"
            },
            {
                id: 2,
                text: "Reservation 2",
                start: "2023-11-04T00:00:00",
                end: "2023-11-08T00:00:00",
                resource: "C",
                barColor: "#38761d"
            },
            {
                id: 3,
                text: "Reservation 3",
                start: "2023-11-02T00:00:00",
                end: "2023-11-05T00:00:00",
                resource: "D",
                barColor: "#f1c232"
            },
            {
                id: 4,
                text: "Reservation 4",
                start: "2023-11-03T00:00:00",
                end: "2023-11-06T00:00:00",
                resource: "E",
                barColor: "#cc0000"
            }
        ],
        onEventMoved: async (args: DayPilot.SchedulerEventMovedArgs) => {
            schedulerRef.current!.control.message("Event moved: " + args.e.data.text);
        },
        onEventResized: async (args: DayPilot.SchedulerEventResizedArgs) => {
            schedulerRef.current!.control.message("Event resized: " + args.e.data.text);
        },
        onTimeRangeSelected: async (args: DayPilot.SchedulerTimeRangeSelectedArgs) => {
            const modal = await DayPilot.Modal.prompt("New reservation:", "Reservation");
            schedulerRef.current!.control.clearSelection();
            if (modal.canceled) {
                return;
            }
            schedulerRef.current!.control.events.add({
                id: DayPilot.guid(),
                text: modal.result,
                start: args.start,
                end: args.end,
                resource: args.resource
            });
        },
        onEventClicked: async (args: any) => {
            let e = args.e;
            const modal = await DayPilot.Modal.prompt("Edit reservation:", e.data.text);
            schedulerRef.current!.control.clearSelection();
            if (modal.canceled) {
                return;
            }
            e.data.text = modal.result;
            schedulerRef.current!.control.events.update(e);
        }
    });

    const schedulerRef = useRef<DayPilotScheduler>(null);

    useEffect(() => {
        if (schedulerRef.current) {
            schedulerRef.current.control.scrollTo("2023-11-01");
        }
    }, []);

    return (
        <div>
            <DayPilotScheduler
                {...config}
                ref={schedulerRef}
            />
        </div>
    );
}

export default Scheduler;
