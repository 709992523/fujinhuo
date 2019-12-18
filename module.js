module.exports = {
  name: "|-----" + "模块" + "-----加载文件URL: " +　__filename,


  async run() {
    console.log(this.name);

    //业务模型
    await this.init();
    
  },
  async init() {
    //
  }
}


module.exports = async function() {
  console.log("|-----" + "module" + "-----加载文件URL: " +　__filename);

  //业务模型
  await init();

}

async function init() {
  Grammar();
}

async function Grammar() {
  //console.log();
}

async function Example() {
  //
}


//暴露对象
module.exports = {
  example
}
