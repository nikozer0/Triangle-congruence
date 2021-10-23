const demoWorkspace = Blockly.inject('blocklyDiv',
      {
        media: 'https://unpkg.com/blockly/media/',
        toolbox: document.getElementById('toolbox')
      });

    function run() {
      const code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
      console.log(code);
      try {
        eval(code);
      } catch (e) {
        alert(e);
      }
    }