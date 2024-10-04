
class AlarmClock {
    constructor (alarmCollection = [], intervalId) {
        this.alarmCollection = alarmCollection;
        this.intervalId = intervalId;
    };

    addClock (time, func) {
        if (time == 0 || func == 0) {
            throw new Error ('Отсутствуют обязательные аргументы');
        };
        if (time == true) {
            console.warn('Уже присутствует звонок на это же время');
        };

        this.alarmCollection.push(
            {callback: func, time: time, canCall: true}
        )
    };

    removeClock (time) {
      
      /* alarmCollection.filter(time => time.time == true); */
        
    };

    getCurrentFormattedTime (time) {
        this._time = time;
        time = new Date().toLocaleTimeString().slice(0,-3);
    };

    start () {
        if (intervalId == true) {
            return;
        }
        this.alarmCollection.forEach(());
        return;
    };
    
    stop () {

    };

    resetAllCalls () {

    };

    clearAlarms () {

    }
};

let clock;

console.log(clock = new AlarmClock());
clock.addClock("16:45", callback);
console.log(clock.alarmCollection[0].time);

console.log(clock.getCurrentFormattedTime());

clock.start();
