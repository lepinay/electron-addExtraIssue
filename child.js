console.log("Forked !")

process.on('message', message => {
    if (message.cmd === 'CrashReporter.SetExtra' ) {
        process.log(`Setting extra in node process: ${JSON.stringify(message.extra)}`);
        // this.setExtra(message.extra);
        process.crashReporter.addExtraParameter("test","test");
        //process.crashReporter.addExtraParameterObj({"key":"test","value":"test"});
    }
    else console.log(message);
});