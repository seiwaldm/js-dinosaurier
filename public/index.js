import moment from "moment";

console.log("Hello from JS!");

console.log(moment("19830625", "YYYYMMDD").fromNow());

console.log(moment().startOf("day").fromNow());
