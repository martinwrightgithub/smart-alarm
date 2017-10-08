Vue.component('alarm', {
    props: ['alarm'], 
    methods: {
        incrementHr(alarm) {
            alarm.hr = alarm.hr + 1;
        },
        incrementMin(alarm) {
            alarm.min = alarm.min + 1;
        }
    },
    template: `
        <div>
            <div id="time">{{alarm.hr}}:{{alarm.min}}</div>
            <button v-on:click="incrementHr(alarm)">H</button>
            <button v-on:click="incrementMin(alarm)">M</button>
        </div>
    `
});

const app = new Vue({
    el: "#app",
    data: {
        alarms: [
            {
                hr: 7,
                min: 30,
            },
        ],
    },
    template: `
        <div id="controls">
            <alarm v-for="alarm in alarms" v-bind:alarm="alarm" />
            <h4>Volume</h4>
            <input type="range">
        </div>
    `
})
