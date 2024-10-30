function apply(compiler) {
  function afterEmit(cb) {
    cb();
    setTimeout(() => {
      ProcessingInstruction.exit(0);
    }, 1000);
  }
  compiler.plugin("after-emit", afterEmit);
}
module.export(apply);
