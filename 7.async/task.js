
class AlarmClock {
    constructor (alarmCollection = [], intervalId = null) {
        this.alarmCollection = alarmCollection;
        this.intervalId = intervalId;
    };

    addClock (timeValue, f) {
        if (!timeValue || !f) {
            throw new Error ('Отсутствуют обязательные аргументы');
        };
        if (this.alarmCollection.some(f)) {
            console.warn('Уже присутствует звонок на это же время');
        };
        this.alarmCollection.push(
            {callback: f, time: timeValue, canCall: true});  
        return;
    }
   
    removeClock () {
    
        alarmCollection = alarmCollection.filter(timeValue => timeValue.id !== time); 
    };

    getCurrentFormattedTime () {
        let date = new Date().toLocaleTimeString("ru", {timeStyle: "short"});
        return date;
    };

    start () { 
       if (intervalId !== null) {
        AlarmClock.hasOwnProperty(intervalId);
       }
       else {alarmCollection.forEach((time) => time == date);
       setInterval(f(),1000);}
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
clock.addClock("16:45", callback); // предупреждения не должно выводиться
clock.addClock("16:45", callback); // при вызове должно вывестись предупреждение
clock.addClock("16:45", callback); // при вызове должно вывестись предупреждение
clock.addClock("16:46", callback); // предупреждения не должно выводиться
clock.addClock("16:47", callback); // предупреждения не должно выводиться

