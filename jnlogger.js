(()=>{
    var idx = 0;

    function title(msg){
      console.log("\n".repeat(30));
      console.log("---------------------------------------------------\n".repeat(5));
      console.log(`|T|${idx} - (${Date.now()}: ${msg})`)
      console.log("---------------------------------------------------\n".repeat(3));
    }

    let lastHeadingTs = 0;
    function heading(msg) {
      const now = Date.now();
      const elapsed = lastHeadingTs > 0? Date.now() - lastHeadingTs: 0;
      lastHeadingTs = now;

      const finalMessage = `---------------------------------------------------\n |H|I:${idx} |TS:${now} -> EL:${elapsed}: MS:${msg}`;
      console.log(finalMessage);
      idx++;
    }

    let lastBodyTs = 0;
    function bodyMessage(msg){
      const now = Date.now();
      const elapsed = lastBodyTs > 0? Date.now() - lastBodyTs: 0;
      lastBodyTs = now;

      const finalMessage = `  |B|I:${idx} |TS:${now} -> EL:${elapsed}: MS:${msg}`;
      console.log(finalMessage);
      idx++;
    }

    exports.Heading = heading;
    exports.BodyMessage = bodyMessage;
    exports.Title = title;

})();
