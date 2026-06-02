type CheckInData = {
    stationName: string;
    time: number;
};

type RouteStats = {
    totalTime: number;
    tripCount: number;
};

class UndergroundSystem {
    private checkIns = new Map<number, CheckInData>();
    private routeStats = new Map<string, RouteStats>();

    constructor() {}

    checkIn(
        id: number,
        stationName: string,
        t: number
    ): void {
        this.checkIns.set(id, {
            stationName,
            time: t,
        });
    }

    checkOut(
        id: number,
        stationName: string,
        t: number
    ): void {
        const checkInData = this.checkIns.get(id)!;

        const routeKey =
            `${checkInData.stationName}->${stationName}`;

        const tripTime =
            t - checkInData.time;

        const stats =
            this.routeStats.get(routeKey) ?? {
                totalTime: 0,
                tripCount: 0,
            };

        stats.totalTime += tripTime;
        stats.tripCount += 1;

        this.routeStats.set(routeKey, stats);

        this.checkIns.delete(id);
    }

    getAverageTime(
        startStation: string,
        endStation: string
    ): number {
        const routeKey =
            `${startStation}->${endStation}`;

        const stats =
            this.routeStats.get(routeKey)!;

        return (
            stats.totalTime /
            stats.tripCount
        );
    }
}
