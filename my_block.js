Blockly.defineBlocksWithJsonArray(
  [{
    "type": "start",
    "message0": "%1 と %2 %3 について",
    "args0": [
      {
        "type": "input_value",
        "name": "left"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "right"
      }
    ],
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "triangle_1",
    "message0": "△ABD",
    "inputsInline": true,
    "output": null,
    "colour": 30,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "triangle_2",
    "message0": "△ACD",
    "inputsInline": true,
    "output": null,
    "colour": 30,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "line_1",
    "message0": "AB",
    "inputsInline": true,
    "output": null,
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "line_2",
    "message0": "BD",
    "inputsInline": true,
    "output": null,
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "line_3",
    "message0": "AC",
    "inputsInline": true,
    "output": null,
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "line_4",
    "message0": "CD",
    "inputsInline": true,
    "output": null,
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "line_5",
    "message0": "AD",
    "inputsInline": true,
    "output": null,
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "line_6",
    "message0": "DA",
    "inputsInline": true,
    "output": null,
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "angle_1",
    "message0": "∠BAD",
    "inputsInline": true,
    "output": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "angle_2",
    "message0": "∠CAD",
    "inputsInline": true,
    "output": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "congruence_1",
    "message0": "３組の辺がそれぞれ等しいので",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 150,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "congruence_2",
    "message0": "２組の辺とその間の角それぞれ等しいので",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 150,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "congruence_3",
    "message0": "１組の辺とその両端の角それぞれ等しいので",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 150,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "congruence_4",
    "message0": "合同な図形では対応する辺の長さは等しくなるので",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "congruence_5",
    "message0": "合同な図形では対応する角の大きさは等しくなるので",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "given",
    "message0": "仮定より %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "line_block"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "common_1",
    "message0": "共通な辺より  %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "line_block"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "common_2",
    "message0": "共通な角より  %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "line_block"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "vertical angles",
    "message0": "対頂角は等しいので  %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "line_block"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "parallel_1",
    "message0": "%1 // %2 %3 より平行線の錯角は等しくなるので %4 %5",
    "args0": [
      {
        "type": "input_value",
        "name": "parallel"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "reason"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "line_block"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "parallel_2",
    "message0": "%1 // %2 %3 より平行線の同位角は等しくなるので %4 %5",
    "args0": [
      {
        "type": "input_value",
        "name": "parallel"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "reason"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "line_block"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "equal",
    "message0": "%1 = %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "line_1"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "line_2"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "congruence",
    "message0": "%1 ≡ %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "line_1"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "line_2"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  }],
 
);


Blockly.JavaScript['start'] = function(block) {
  var value_left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right = Blockly.JavaScript.valueToCode(block, 'right', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_left+"と"+value_right+"について<br>";
  return code;
};

Blockly.JavaScript['triangle_1'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '△ABD';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['triangle_2'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '△ACD';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['line_1'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'AB';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['line_2'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'AC';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['line_3'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'BD';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['line_4'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'CD';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['line_5'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'AD';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['line_6'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'DA';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['angle_1'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '∠BAD';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['angle_2'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '∠CAD';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['congruence_1'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '３組の辺がそれぞれ等しいので<br>';
  return code;
};

Blockly.JavaScript['congruence_2'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '２組の辺とその間の角がそれぞれ等しいので<br>';
  return code;
};

Blockly.JavaScript['congruence_3'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '１組の辺とその両端の角がそれぞれ等しいので<br>';
  return code;
};

Blockly.JavaScript['congruence_4'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '合同な図形では対応する辺の長さは等しくなるので<br>';
  return code;
};

Blockly.JavaScript['congruence_5'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '合同な図形では対応する角の大きさは等しくなるので<br>';
  return code;
};

Blockly.JavaScript['given'] = function(block) {
  var statements_line_block = Blockly.JavaScript.statementToCode(block, 'line_block');
  // TODO: Assemble JavaScript into code variable.
  var code = '仮定より<br>'+statements_line_block+'<br>';
  return code;
};

Blockly.JavaScript['common_1'] = function(block) {
  var statements_line_block = Blockly.JavaScript.statementToCode(block, 'line_block');
  // TODO: Assemble JavaScript into code variable.
  var code = '共通な辺より<br>'+statements_line_block+'<br>';
  return code;
};

Blockly.JavaScript['common_2'] = function(block) {
  var statements_line_block = Blockly.JavaScript.statementToCode(block, 'line_block');
  // TODO: Assemble JavaScript into code variable.
  var code = '共通な角より<br>'+statements_line_block+'<br>';
  return code;
};

Blockly.JavaScript['vertical angles'] = function(block) {
  var statements_line_block = Blockly.JavaScript.statementToCode(block, 'line_block');
  // TODO: Assemble JavaScript into code variable.
  var code = '対頂角は等しいので<br>'+statements_line_block+'<br>';
  return code;
};

Blockly.JavaScript['parallel_1'] = function(block) {
  var value_parallel = Blockly.JavaScript.valueToCode(block, 'parallel', Blockly.JavaScript.ORDER_ATOMIC);
  var value_reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_line_block = Blockly.JavaScript.statementToCode(block, 'line_block');
  // TODO: Assemble JavaScript into code variable.
  var code =  value_parallel+'//'+value_reason+'より平行線の錯角は等しくなるので<br>'+statements_line_block+'<br>';
  return code;
};

Blockly.JavaScript['parallel_2'] = function(block) {
  var value_parallel = Blockly.JavaScript.valueToCode(block, 'parallel', Blockly.JavaScript.ORDER_ATOMIC);
  var value_reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_line_block = Blockly.JavaScript.statementToCode(block, 'line_block');
  // TODO: Assemble JavaScript into code variable.
  var code =  value_parallel+'//'+value_reason+'より平行線の同位角は等しくなるので<br>'+statements_line_block+'<br>';
  return code;
};

Blockly.JavaScript['equal'] = function(block) {
  var value_line_1 = Blockly.JavaScript.valueToCode(block, 'line_1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_line_2 = Blockly.JavaScript.valueToCode(block, 'line_2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_line_1+'='+value_line_2+'<br>';
  return code;
};

Blockly.JavaScript['congruence'] = function(block) {
  var value_line_1 = Blockly.JavaScript.valueToCode(block, 'line_1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_line_2 = Blockly.JavaScript.valueToCode(block, 'line_2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_line_1+'≡'+value_line_2+'<br>';
  return code;
};
