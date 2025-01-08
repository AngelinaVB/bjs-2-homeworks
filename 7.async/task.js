
class AlarmClock {
    constructor (alarmCollection = [], intervalId = null) {
        this.alarmCollection = alarmCollection;
        this.intervalId = intervalId;
    };

    addClock (time, f) {
        if (!time || !f) {
            throw new Error ('Отсутствуют обязательные аргументы');
        };
        if (this.alarmCollection.some(f)) {
            console.warn('Уже присутствует звонок на это же время');
        };

        this.alarmCollection.push(
            {callback: f, time: time, canCall: true});
    };
   
    removeClock () {
        alarmCollection.filter((timeNew) => timeNew == time);
        return timeNew;  
    };

    getCurrentFormattedTime () {
        let date = new Date().toLocaleTimeString("ru", {timeStyle: "short"});
        return date;
    };

    start () { 
       if (intervalId == null) {
       this.alarmCollection.forEach((time) => time == date);
       let intervalId = setInterval(f(),);
       }
       else {}
    };
    
    stop () {
        clearInterval(interval);
        this.intervalId = null;
    };

    resetAllCalls () {

    };

    clearAlarms () {
     stop();
     this.alarmCollection = [];
    }
};

const clock = new AlarmClock();
const callback = f => f;
clock.addClock("16:45", callback); 
clock.addClock("16:45", callback);
clock.addClock("16:46", callback); 
clock.addClock("21:54", callback);