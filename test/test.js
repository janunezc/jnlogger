const assert = require("assert");
const moment = require("moment");
const jnl = require("../jnlogger");

describe("Basic Test for jnlogger",()=>{
  it("Should respond correctly to basic use",()=>{
    jnl.Title("WELCOME TO YOUR JNLOGGER APP\nYour swiss army knife for manipulating CSV files from the command line");

    jnl.Heading("This would be a heading...");

    jnl.BodyMessage("This library can measure elapsed time...");

    jnl.BodyMessage("... between body entries.");
    sleep(3);    
    jnl.BodyMessage("Could be as low as 0!");

    sleep(3);
    jnl.Heading("On Heading too!!! separate from body elements...");

    jnl.BodyMessage("This would be a body message!");
    sleep(20);
    jnl.BodyMessage("This would be another body message!");
    jnl.BodyMessage("This would be even another body message!");

    jnl.Heading("Final heading is nice!");

    jnl.BodyMessage("This would be a body message!");
    sleep(20);
    jnl.BodyMessage("This would be another body message!");
    jnl.BodyMessage("This would be even another body message!");

    function sleep(delay) {
      const start = new Date().getTime();
      while (new Date().getTime() < start + delay);
    }
  });

});
