Blockly.defineBlocksWithJsonArray(
  [{
    "type": "_1",
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
    "type": "triangle_abc",
    "message0": "△ABC",
    "inputsInline": true,
    "output": null,
    "colour": 30,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "triangle_adc",
    "message0": "△ADC",
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
    "message0": "AD",
    "inputsInline": true,
    "output": null,
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "line_3",
    "message0": "BC",
    "inputsInline": true,
    "output": null,
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "line_4",
    "message0": "DC",
    "inputsInline": true,
    "output": null,
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "line_5",
    "message0": "AC",
    "inputsInline": true,
    "output": null,
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "line_6",
    "message0": "CA",
    "inputsInline": true,
    "output": null,
    "colour": 90,
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
    "type": "common",
    "message0": "共通な %1 %2 より %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "common"
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
    "type": "reason_1",
    "message0": "%1 より %2 %3 ので %4 %5",
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
    "type": "reason_2",
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
    "type": "line",
    "message0": "辺",
    "inputsInline": true,
    "output": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "angle",
    "message0": "角",
    "inputsInline": true,
    "output": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "reason_3",
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
  }]
);


Blockly.JavaScript['_1'] = function(block) {
  var value_left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right = Blockly.JavaScript.valueToCode(block, 'right', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_left+"と"+value_right+"について<br>";
  return code;
};

Blockly.JavaScript['triangle_abc'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '△ABC';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['triangle_adc'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '△ADC';
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
  var code = 'AD';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['line_3'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'BC';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['line_4'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'DC';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['line_5'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'AC';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['line_6'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'CA';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['congruence_1'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '３組の辺がそれぞれ等しいので';
  return code;
};

Blockly.JavaScript['congruence_2'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '２組の辺とその間の角がそれぞれ等しいので';
  return code;
};

Blockly.JavaScript['congruence_3'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '１組の辺とその両端の角がそれぞれ等しいので';
  return code;
};

Blockly.JavaScript['given'] = function(block) {
  var statements_line_block = Blockly.JavaScript.statementToCode(block, 'line_block');
  // TODO: Assemble JavaScript into code variable.
  var code = '仮定より'+statements_line_block+'<br>';
  return code;
};

Blockly.JavaScript['common'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'common', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_line_block = Blockly.JavaScript.statementToCode(block, 'line_block');
  // TODO: Assemble JavaScript into code variable.
  var code = '共通な'+value_name+'より'+statements_line_block+'<br>';
  return code;
};

Blockly.JavaScript['reason_1'] = function(block) {
  var value_parallel = Blockly.JavaScript.valueToCode(block, 'parallel', Blockly.JavaScript.ORDER_ATOMIC);
  var value_reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_line_block = Blockly.JavaScript.statementToCode(block, 'line_block');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['reason_2'] = function(block) {
  var value_line_1 = Blockly.JavaScript.valueToCode(block, 'line_1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_line_2 = Blockly.JavaScript.valueToCode(block, 'line_2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_line_1+'='+value_line_2;
  return code;
};

Blockly.JavaScript['line'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '辺';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['angle'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '角';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['reason_3'] = function(block) {
  var value_line_1 = Blockly.JavaScript.valueToCode(block, 'line_1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_line_2 = Blockly.JavaScript.valueToCode(block, 'line_2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};