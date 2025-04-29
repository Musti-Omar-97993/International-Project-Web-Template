// ===========================================
// BLOCK DEFINITIONS
// ===========================================

// Sensor block
Blockly.Blocks['sensor_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("read")
        .appendField(new Blockly.FieldDropdown([
          ['water level','water'], ['light level','light'],
          ['pH level','ph'], ['temperature','temp'],
          ['humidity','humidity'], ['nutrient level','nutrient'],
          ['CO2 level','co2'], ['plant height','height'],
          ['water temperature','water_temp'], ['air flow','air_flow']
        ]), 'SENSOR');
    this.setOutput(true, 'Number');
    this.setColour(160);
    this.setTooltip('Read a sensor value from the garden');
  }
};

// Control blocks
Blockly.Blocks['controls_if'] = {
  init: function() {
    this.appendValueInput('IF0')
        .setCheck('Boolean')
        .appendField('if');
    this.appendStatementInput('DO0')
        .appendField('do');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip('If condition block');
  }
};

Blockly.Blocks['controls_if_else'] = {
  init: function() {
    this.appendValueInput('IF0')
        .setCheck('Boolean')
        .appendField('if');
    this.appendStatementInput('DO0')
        .appendField('do');
    this.appendDummyInput()
        .appendField('else');
    this.appendStatementInput('ELSE')
        .appendField('do');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip('If-else condition block');
  }
};

Blockly.Blocks['controls_switch'] = {
  init: function() {
    this.appendValueInput("SWITCH_VALUE")
        .setCheck(null)
        .appendField("switch");
    this.appendDummyInput()
        .appendField("case")
        .appendField(new Blockly.FieldTextInput("value"), "CASE1");
    this.appendStatementInput("DO1")
        .appendField("do");
    this.appendDummyInput()
        .appendField("case")
        .appendField(new Blockly.FieldTextInput("value"), "CASE2");
    this.appendStatementInput("DO2")
        .appendField("do");
    this.appendDummyInput()
        .appendField("default");
    this.appendStatementInput("DEFAULT")
        .appendField("do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip("Switch-case statement");
  }
};

Blockly.Blocks['controls_repeat'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("repeat")
        .appendField(new Blockly.FieldNumber(10, 1, 1000), "TIMES")
        .appendField("times");
    this.appendStatementInput("DO")
        .appendField("do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip("Repeat block");
  }
};

Blockly.Blocks['controls_whileUntil'] = {
  init: function() {
    this.appendValueInput('BOOL')
        .setCheck('Boolean')
        .appendField('while');
    this.appendStatementInput('DO')
        .appendField('do');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip('While loop');
  }
};

Blockly.Blocks['controls_timed_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("every")
        .appendField(new Blockly.FieldNumber(1, 0.1, 60, 0.1), "SECONDS")
        .appendField("seconds");
    this.appendStatementInput("DO")
        .appendField("do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip("Repeats the enclosed blocks at regular intervals");
  }
};

// Action blocks
Blockly.Blocks['pump_control'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn water pump")
        .appendField(new Blockly.FieldDropdown([
          ['ON','on'], ['OFF','off'],
          ['for 5 seconds','5'], ['for 10 seconds','10']
        ]), 'STATE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('Control the water pump');
  }
};

Blockly.Blocks['light_control'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn grow light")
        .appendField(new Blockly.FieldDropdown([
          ['ON','on'], ['OFF','off'],
          ['morning mode','morning'], ['evening mode','evening']
        ]), 'STATE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip('Control the grow light');
  }
};

Blockly.Blocks['fan_control'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn fan")
        .appendField(new Blockly.FieldDropdown([
          ['ON','on'], ['OFF','off'],
          ['low speed','low'], ['high speed','high']
        ]), 'STATE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip('Control the ventilation fan');
  }
};

Blockly.Blocks['mixer_control'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn nutrient mixer")
        .appendField(new Blockly.FieldDropdown([
          ['ON','on'], ['OFF','off'],
          ['for 5 seconds','5'], ['for 10 seconds','10']
        ]), 'STATE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('Control the nutrient mixer');
  }
};

Blockly.Blocks['adjust_ph'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("adjust pH")
        .appendField(new Blockly.FieldDropdown([
          ['increase','up'], ['decrease','down']
        ]), "DIRECTION");
    this.appendDummyInput()
        .appendField("by")
        .appendField(new Blockly.FieldNumber(0.1, 0.1, 2, 0.1), "AMOUNT");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip("Adjusts the pH level of the nutrient solution");
  }
};

Blockly.Blocks['set_temperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set temperature to")
        .appendField(new Blockly.FieldNumber(20, 10, 35, 0.5), "TEMP")
        .appendField("°C");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip("Sets the target temperature for the environment");
  }
};

Blockly.Blocks['control_ventilation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set ventilation to")
        .appendField(new Blockly.FieldDropdown([
          ['off','0'], ['10%','10'], ['25%','25'], 
          ['50%','50'], ['75%','75'], ['100%','100']
        ]), "LEVEL");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip("Controls the ventilation system percentage");
  }
};

Blockly.Blocks['add_fertilizer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("add fertilizer")
        .appendField(new Blockly.FieldDropdown([
          ['Type A (Nitrogen)','A'], 
          ['Type B (Balanced)','B'], 
          ['Type C (Potassium)','C']
        ]), "TYPE");
    this.appendDummyInput()
        .appendField("amount")
        .appendField(new Blockly.FieldNumber(10, 1, 100, 1), "AMOUNT")
        .appendField("ml");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip("Adds specific fertilizer to the system");
  }
};

Blockly.Blocks['log_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("log data")
        .appendField(new Blockly.FieldDropdown([
          ['all sensors','all'], 
          ['water stats','water'], 
          ['nutrient stats','nutrient'], 
          ['environment','env']
        ]), "TYPE");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip("Logs system data to the event console");
  }
};

Blockly.Blocks['add_nutrients'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("add nutrients")
        .appendField(new Blockly.FieldDropdown([
          ['small amount','10'], ['medium amount','30'],
          ['large amount','50']
        ]), 'AMOUNT');
    this.appendDummyInput()
        .appendField("ml");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
    this.setTooltip('Add nutrients to the system');
  }
};

Blockly.Blocks['say_message'] = {
  init: function() {
    this.appendValueInput('MESSAGE')
        .setCheck('String')
        .appendField("say");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
    this.setTooltip('Display a message in the garden log');
  }
};

Blockly.Blocks['wait_seconds'] = {
  init: function() {
    this.appendValueInput('SECONDS')
        .setCheck('Number')
        .appendField("wait");
    this.appendDummyInput()
        .appendField("seconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('Pause the program for some seconds');
  }
};

Blockly.Blocks['schedule_daily'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("every day at")
        .appendField(new Blockly.FieldTextInput("8:00"), 'TIME')
        .appendField("do");
    this.appendStatementInput('DO');
    this.setColour(230);
    this.setTooltip('Schedule a daily task at specific time');
  }
};

Blockly.Blocks['weather_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when weather is")
        .appendField(new Blockly.FieldDropdown([
          ['sunny','sunny'], ['rainy','rainy'],
          ['cloudy','cloudy'], ['windy','windy']
        ]), 'WEATHER')
        .appendField("do");
    this.appendStatementInput('DO');
    this.setColour(180);
    this.setTooltip('Run these blocks when specific weather occurs');
  }
};

// Math blocks
Blockly.Blocks['math_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NUM");
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('A numeric value');
  }
};

Blockly.Blocks['math_arithmetic'] = {
  init: function() {
    this.appendValueInput('A')
        .setCheck('Number');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['+', 'ADD'],
          ['-', 'MINUS'],
          ['×', 'MULTIPLY'],
          ['÷', 'DIVIDE'],
          ['^', 'POWER']
        ]), 'OP');
    this.appendValueInput('B')
        .setCheck('Number');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Basic arithmetic operations');
  }
};

Blockly.Blocks['math_round'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['round', 'ROUND'],
          ['round up', 'ROUNDUP'],
          ['round down', 'ROUNDDOWN']
        ]), 'OP');
    this.appendValueInput('NUM')
        .setCheck('Number');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Round a number');
  }
};

Blockly.Blocks['math_modulo'] = {
  init: function() {
    this.appendValueInput('DIVIDEND')
        .setCheck('Number')
        .appendField('remainder of');
    this.appendValueInput('DIVISOR')
        .setCheck('Number')
        .appendField('÷');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Modulo operation');
  }
};

Blockly.Blocks['math_constrain'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('Number')
        .appendField('constrain');
    this.appendValueInput('LOW')
        .setCheck('Number')
        .appendField('between');
    this.appendValueInput('HIGH')
        .setCheck('Number')
        .appendField('and');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Constrain a number between limits');
  }
};

Blockly.Blocks['math_random_int'] = {
  init: function() {
    this.appendValueInput('FROM')
        .setCheck('Number')
        .appendField('random integer from');
    this.appendValueInput('TO')
        .setCheck('Number')
        .appendField('to');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Random integer between two values');
  }
};

Blockly.Blocks['math_random_float'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('random decimal');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Random decimal between 0 and 1');
  }
};

Blockly.Blocks['math_single'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['√', 'ROOT'],
          ['abs', 'ABS'],
          ['-', 'NEG'],
          ['ln', 'LN'],
          ['log10', 'LOG10'],
          ['e^', 'EXP'],
          ['10^', 'POW10']
        ]), 'OP');
    this.appendValueInput('NUM')
        .setCheck('Number');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Advanced math operations');
  }
};

Blockly.Blocks['math_trig'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['sin', 'SIN'],
          ['cos', 'COS'],
          ['tan', 'TAN'],
          ['asin', 'ASIN'],
          ['acos', 'ACOS'],
          ['atan', 'ATAN']
        ]), 'OP');
    this.appendValueInput('NUM')
        .setCheck('Number');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Trigonometric functions');
  }
};

Blockly.Blocks['math_constant'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['π', 'PI'],
          ['e', 'E'],
          ['φ', 'GOLDEN_RATIO'],
          ['√2', 'SQRT2'],
          ['√½', 'SQRT1_2'],
          ['∞', 'INFINITY']
        ]), 'CONSTANT');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Mathematical constants');
  }
};

Blockly.Blocks['math_number_property'] = {
  init: function() {
    this.appendValueInput('NUMBER_TO_CHECK')
        .setCheck('Number');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['even', 'EVEN'],
          ['odd', 'ODD'],
          ['prime', 'PRIME'],
          ['whole', 'WHOLE'],
          ['positive', 'POSITIVE'],
          ['negative', 'NEGATIVE'],
          ['divisible by', 'DIVISIBLE_BY']
        ]), 'PROPERTY');
    this.appendValueInput('DIVISOR')
        .setCheck('Number')
        .appendField('divisor');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(230);
    this.setTooltip('Check if a number has a property');
  }
};

// Text blocks
Blockly.Blocks['text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(''), 'TEXT');
    this.setOutput(true, 'String');
    this.setColour(160);
    this.setTooltip('Text string');
  }
};

Blockly.Blocks['text_join'] = {
  init: function() {
    this.appendValueInput('ADD0')
        .setCheck('String');
    this.appendValueInput('ADD1')
        .setCheck('String');
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setColour(160);
    this.setTooltip('Join text strings together');
  }
};

Blockly.Blocks['text_length'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('String')
        .appendField('length of');
    this.setOutput(true, 'Number');
    this.setColour(160);
    this.setTooltip('Get length of a string');
  }
};

Blockly.Blocks['text_isEmpty'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('String')
        .appendField('is empty');
    this.setOutput(true, 'Boolean');
    this.setColour(160);
    this.setTooltip('Check if string is empty');
  }
};

Blockly.Blocks['text_indexOf'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('String')
        .appendField('in text');
    this.appendValueInput('FIND')
        .setCheck('String')
        .appendField('find');
    this.appendDummyInput()
        .appendField('at position')
        .appendField(new Blockly.FieldDropdown([
          ['first occurrence', 'FIRST'],
          ['last occurrence', 'LAST']
        ]), 'END');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(160);
    this.setTooltip('Find text position');
  }
};

Blockly.Blocks['text_charAt'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('String')
        .appendField('in text');
    this.appendDummyInput()
        .appendField('get character')
        .appendField(new Blockly.FieldDropdown([
          ['first', 'FIRST'],
          ['last', 'LAST'],
          ['at position', 'FROM']
        ]), 'WHERE');
    this.appendValueInput('AT')
        .setCheck('Number')
        .appendField('position');
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setColour(160);
    this.setTooltip('Get character from string');
  }
};

Blockly.Blocks['text_getSubstring'] = {
  init: function() {
    this.appendValueInput('STRING')
        .setCheck('String')
        .appendField('in text');
    this.appendDummyInput()
        .appendField('get substring from');
    this.appendValueInput('AT1')
        .setCheck('Number')
        .appendField('position');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['to', 'TO'],
          ['from start to position', 'FROM_START'],
          ['from position to end', 'FROM_END']
        ]), 'WHERE1');
    this.appendValueInput('AT2')
        .setCheck('Number')
        .appendField('position');
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setColour(160);
    this.setTooltip('Get substring');
  }
};

Blockly.Blocks['text_changeCase'] = {
  init: function() {
    this.appendValueInput('TEXT')
        .setCheck('String')
        .appendField('change case of');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['to UPPER CASE', 'UPPERCASE'],
          ['to lower case', 'LOWERCASE'],
          ['to Title Case', 'TITLECASE']
        ]), 'CASE');
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setColour(160);
    this.setTooltip('Change text case');
  }
};

Blockly.Blocks['text_trim'] = {
  init: function() {
    this.appendValueInput('TEXT')
        .setCheck('String')
        .appendField('trim');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['both sides', 'BOTH'],
          ['left side', 'LEFT'],
          ['right side', 'RIGHT']
        ]), 'MODE');
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setColour(160);
    this.setTooltip('Trim whitespace');
  }
};

// Logic blocks
Blockly.Blocks['logic_compare'] = {
  init: function() {
    this.appendValueInput('A');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['=', 'EQ'],
          ['≠', 'NEQ'],
          ['<', 'LT'],
          ['≤', 'LTE'],
          ['>', 'GT'],
          ['≥', 'GTE']
        ]), 'OP');
    this.appendValueInput('B');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(210);
    this.setTooltip('Compare two values');
  }
};

Blockly.Blocks['logic_operation'] = {
  init: function() {
    this.appendValueInput('A')
        .setCheck('Boolean');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['and', 'AND'],
          ['or', 'OR']
        ]), 'OP');
    this.appendValueInput('B')
        .setCheck('Boolean');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(210);
    this.setTooltip('Logical AND/OR operations');
  }
};

Blockly.Blocks['logic_negate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('not');
    this.appendValueInput('BOOL')
        .setCheck('Boolean');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(210);
    this.setTooltip('Logical NOT operation');
  }
};

Blockly.Blocks['logic_boolean'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['true', 'TRUE'],
          ['false', 'FALSE']
        ]), 'BOOL');
    this.setOutput(true, 'Boolean');
    this.setColour(210);
    this.setTooltip('Boolean value');
  }
};

Blockly.Blocks['logic_null'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('null');
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('Null value');
  }
};

Blockly.Blocks['logic_ternary'] = {
  init: function() {
    this.appendValueInput('IF')
        .setCheck('Boolean')
        .appendField('if');
    this.appendValueInput('THEN')
        .appendField('then');
    this.appendValueInput('ELSE')
        .appendField('else');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(210);
    this.setTooltip('If-then-else logic');
  }
};

// Variable blocks
Blockly.Blocks['variables_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('item'), 'VAR');
    this.setOutput(true);
    this.setColour(330);
    this.setTooltip('Get variable value');
  }
};

Blockly.Blocks['variables_set'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .appendField('set')
        .appendField(new Blockly.FieldVariable('item'), 'VAR')
        .appendField('to');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('Set variable value');
  }
};

Blockly.Blocks['variables_change'] = {
  init: function() {
    this.appendValueInput('DELTA')
        .appendField('change')
        .appendField(new Blockly.FieldVariable('item'), 'VAR')
        .appendField('by');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('Change variable by value');
  }
};

// ===========================================
// BLOCK GENERATORS (JavaScript code generation)
// ===========================================

Blockly.JavaScript['sensor_read'] = function(block) {
  var sensor = block.getFieldValue('SENSOR');
  return ['hydroponicSystem.readSensor("' + sensor + '")', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['controls_if'] = function(block) {
  var condition = Blockly.JavaScript.valueToCode(block, 'IF0', 
        Blockly.JavaScript.ORDER_NONE) || 'false';
  var thenCode = Blockly.JavaScript.statementToCode(block, 'DO0');
  return 'if (' + condition + ') {\n' + thenCode + '}\n';
};

Blockly.JavaScript['controls_if_else'] = function(block) {
  var condition = Blockly.JavaScript.valueToCode(block, 'IF0', 
        Blockly.JavaScript.ORDER_NONE) || 'false';
  var thenCode = Blockly.JavaScript.statementToCode(block, 'DO0');
  var elseCode = Blockly.JavaScript.statementToCode(block, 'ELSE');
  return 'if (' + condition + ') {\n' + thenCode + 
          '} else {\n' + elseCode + '}\n';
};

Blockly.JavaScript['controls_switch'] = function(block) {
  var switchValue = Blockly.JavaScript.valueToCode(block, 'SWITCH_VALUE', 
        Blockly.JavaScript.ORDER_NONE) || '""';
  var case1 = block.getFieldValue('CASE1');
  var do1 = Blockly.JavaScript.statementToCode(block, 'DO1');
  var case2 = block.getFieldValue('CASE2');
  var do2 = Blockly.JavaScript.statementToCode(block, 'DO2');
  var defaultDo = Blockly.JavaScript.statementToCode(block, 'DEFAULT');
  
  return 'switch(String(' + switchValue + ')) {\n' +
          '  case "' + case1 + '":\n' + do1 + '    break;\n' +
          '  case "' + case2 + '":\n' + do2 + '    break;\n' +
          '  default:\n' + defaultDo + '}\n';
};

Blockly.JavaScript['controls_repeat'] = function(block) {
  var times = block.getFieldValue('TIMES');
  var doCode = Blockly.JavaScript.statementToCode(block, 'DO');
  return 'for (var i = 0; i < ' + times + '; i++) {\n' + doCode + '}\n';
};

Blockly.JavaScript['controls_whileUntil'] = function(block) {
  var condition = Blockly.JavaScript.valueToCode(block, 'BOOL', 
        Blockly.JavaScript.ORDER_NONE) || 'false';
  var doCode = Blockly.JavaScript.statementToCode(block, 'DO');
  return 'while (' + condition + ') {\n' + doCode + '}\n';
};

Blockly.JavaScript['controls_timed_loop'] = function(block) {
  var seconds = block.getFieldValue('SECONDS');
  var doCode = Blockly.JavaScript.statementToCode(block, 'DO');
  return 'hydroponicSystem.scheduleIntervalTask(' + seconds + ', function() {\n' +
          '  try {\n' + doCode + 
          '  } catch(e) {\n' +
          '    hydroponicSystem.sayMessage("Interval task error: " + e.message, "error");\n' +
          '  }\n' +
          '});\n';
};

Blockly.JavaScript['pump_control'] = function(block) {
  var state = block.getFieldValue('STATE');
  return 'hydroponicSystem.controlPump("' + state + '");\n';
};

Blockly.JavaScript['light_control'] = function(block) {
  var state = block.getFieldValue('STATE');
  return 'hydroponicSystem.controlLight("' + state + '");\n';
};

Blockly.JavaScript['fan_control'] = function(block) {
  var state = block.getFieldValue('STATE');
  return 'hydroponicSystem.controlFan("' + state + '");\n';
};

Blockly.JavaScript['mixer_control'] = function(block) {
  var state = block.getFieldValue('STATE');
  return 'hydroponicSystem.controlMixer("' + state + '");\n';
};

Blockly.JavaScript['adjust_ph'] = function(block) {
  var direction = block.getFieldValue('DIRECTION');
  var amount = block.getFieldValue('AMOUNT');
  return 'hydroponicSystem.adjustPH("' + direction + '", ' + amount + ');\n';
};

Blockly.JavaScript['set_temperature'] = function(block) {
  var temp = block.getFieldValue('TEMP');
  return 'hydroponicSystem.setTemperature(' + temp + ');\n';
};

Blockly.JavaScript['control_ventilation'] = function(block) {
  var level = block.getFieldValue('LEVEL');
  return 'hydroponicSystem.setVentilation(' + level + ');\n';
};

Blockly.JavaScript['add_fertilizer'] = function(block) {
  var type = block.getFieldValue('TYPE');
  var amount = block.getFieldValue('AMOUNT');
  return 'hydroponicSystem.addFertilizer("' + type + '", ' + amount + ');\n';
};

Blockly.JavaScript['log_data'] = function(block) {
  var type = block.getFieldValue('TYPE');
  return 'hydroponicSystem.logData("' + type + '");\n';
};

Blockly.JavaScript['add_nutrients'] = function(block) {
  var amount = block.getFieldValue('AMOUNT');
  return 'hydroponicSystem.addNutrients(' + amount + ');\n';
};

Blockly.JavaScript['say_message'] = function(block) {
  var msg = Blockly.JavaScript.valueToCode(block, 'MESSAGE', 
            Blockly.JavaScript.ORDER_NONE) || '""';
  return 'hydroponicSystem.sayMessage(' + msg + ');\n';
};

Blockly.JavaScript['wait_seconds'] = function(block) {
  var seconds = Blockly.JavaScript.valueToCode(block, 'SECONDS', 
              Blockly.JavaScript.ORDER_ATOMIC) || '1';
  return 'hydroponicSystem.wait(' + seconds + ');\n';
};

Blockly.JavaScript['schedule_daily'] = function(block) {
  var time = block.getFieldValue('TIME');
  var statements = Blockly.JavaScript.statementToCode(block, 'DO');
  return `hydroponicSystem.scheduleDailyTask("${time}", function() {
    ${statements}
  });`;
};

Blockly.JavaScript['weather_event'] = function(block) {
  var weather = block.getFieldValue('WEATHER');
  var statements = Blockly.JavaScript.statementToCode(block, 'DO');
  return `if (hydroponicSystem.environment.weather === "${weather}") {
    ${statements}
  }`;
};

// Math generators
Blockly.JavaScript['math_number'] = function(block) {
  var number = block.getFieldValue('NUM');
  return [number, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['math_arithmetic'] = function(block) {
  var operand = block.getFieldValue('OP');
  var order = (operand == 'ADD' || operand == 'MINUS') ?
      Blockly.JavaScript.ORDER_ADDITIVE :
      Blockly.JavaScript.ORDER_MULTIPLICATIVE;
  var argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || '0';
  
  var operator;
  switch(operand) {
    case 'ADD': operator = '+'; break;
    case 'MINUS': operator = '-'; break;
    case 'MULTIPLY': operator = '*'; break;
    case 'DIVIDE': operator = '/'; break;
    case 'POWER': operator = '**'; break;
  }
  
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.JavaScript['math_round'] = function(block) {
  var op = block.getFieldValue('OP');
  var num = Blockly.JavaScript.valueToCode(block, 'NUM',
      Blockly.JavaScript.ORDER_MULTIPLICATIVE) || '0';
  
  var code;
  switch(op) {
    case 'ROUND': code = 'Math.round(' + num + ')'; break;
    case 'ROUNDUP': code = 'Math.ceil(' + num + ')'; break;
    case 'ROUNDDOWN': code = 'Math.floor(' + num + ')'; break;
  }
  
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['math_modulo'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'DIVIDEND',
      Blockly.JavaScript.ORDER_MODULUS) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'DIVISOR',
      Blockly.JavaScript.ORDER_MODULUS) || '1';
  var code = argument0 + ' % ' + argument1;
  return [code, Blockly.JavaScript.ORDER_MODULUS];
};

Blockly.JavaScript['math_constrain'] = function(block) {
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_COMMA) || '0';
  var low = Blockly.JavaScript.valueToCode(block, 'LOW',
      Blockly.JavaScript.ORDER_COMMA) || '0';
  var high = Blockly.JavaScript.valueToCode(block, 'HIGH',
      Blockly.JavaScript.ORDER_COMMA) || '100';
  return ['Math.min(Math.max(' + value + ', ' + low + '), ' + high + ')', 
          Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['math_random_int'] = function(block) {
  var from = Blockly.JavaScript.valueToCode(block, 'FROM',
      Blockly.JavaScript.ORDER_COMMA) || '0';
  var to = Blockly.JavaScript.valueToCode(block, 'TO',
      Blockly.JavaScript.ORDER_COMMA) || '100';
  return ['Math.floor(Math.random() * (' + to + ' - ' + from + ' + 1) + ' + from + ')', 
          Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['math_random_float'] = function(block) {
  return ['Math.random()', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['math_single'] = function(block) {
  var op = block.getFieldValue('OP');
  var num = Blockly.JavaScript.valueToCode(block, 'NUM',
      Blockly.JavaScript.ORDER_NONE) || '0';
  
  var code;
  switch(op) {
    case 'ROOT': code = 'Math.sqrt(' + num + ')'; break;
    case 'ABS': code = 'Math.abs(' + num + ')'; break;
    case 'NEG': code = '-' + num; break;
    case 'LN': code = 'Math.log(' + num + ')'; break;
    case 'LOG10': code = 'Math.log10(' + num + ')'; break;
    case 'EXP': code = 'Math.exp(' + num + ')'; break;
    case 'POW10': code = 'Math.pow(10, ' + num + ')'; break;
  }
  
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['math_trig'] = function(block) {
  var op = block.getFieldValue('OP');
  var num = Blockly.JavaScript.valueToCode(block, 'NUM',
      Blockly.JavaScript.ORDER_NONE) || '0';
  
  var code;
  switch(op) {
    case 'SIN': code = 'Math.sin(' + num + ')'; break;
    case 'COS': code = 'Math.cos(' + num + ')'; break;
    case 'TAN': code = 'Math.tan(' + num + ')'; break;
    case 'ASIN': code = 'Math.asin(' + num + ')'; break;
    case 'ACOS': code = 'Math.acos(' + num + ')'; break;
    case 'ATAN': code = 'Math.atan(' + num + ')'; break;
  }
  
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['math_constant'] = function(block) {
  var constant = block.getFieldValue('CONSTANT');
  var code;
  switch(constant) {
    case 'PI': code = 'Math.PI'; break;
    case 'E': code = 'Math.E'; break;
    case 'GOLDEN_RATIO': code = '(1 + Math.sqrt(5)) / 2'; break;
    case 'SQRT2': code = 'Math.SQRT2'; break;
    case 'SQRT1_2': code = 'Math.SQRT1_2'; break;
    case 'INFINITY': code = 'Infinity'; break;
  }
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['math_number_property'] = function(block) {
  var number = Blockly.JavaScript.valueToCode(block, 'NUMBER_TO_CHECK',
      Blockly.JavaScript.ORDER_NONE) || '0';
  var property = block.getFieldValue('PROPERTY');
  var divisor = Blockly.JavaScript.valueToCode(block, 'DIVISOR',
      Blockly.JavaScript.ORDER_NONE) || '1';
  
  var code;
  switch(property) {
    case 'EVEN': code = number + ' % 2 == 0'; break;
    case 'ODD': code = number + ' % 2 == 1'; break;
    case 'PRIME': 
      code = 'function(n){if(n<=1)return false;if(n<=3)return true;' +
             'if(n%2==0||n%3==0)return false;' +
             'for(var i=5;i*i<=n;i+=6)if(n%i==0||n%(i+2)==0)return false;' +
             'return true}(' + number + ')'; 
      break;
    case 'WHOLE': code = number + ' >= 0 && ' + number + ' % 1 == 0'; break;
    case 'POSITIVE': code = number + ' > 0'; break;
    case 'NEGATIVE': code = number + ' < 0'; break;
    case 'DIVISIBLE_BY': code = number + ' % ' + divisor + ' == 0'; break;
  }
  
  return [code, Blockly.JavaScript.ORDER_EQUALITY];
};

// Text generators
Blockly.JavaScript['text'] = function(block) {
  var text = block.getFieldValue('TEXT');
  return ['"' + text.replace(/"/g, '\\"') + '"', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['text_join'] = function(block) {
  var itemCount = 0;
  var elements = [];
  
  while (block.getInput('ADD' + itemCount)) {
    var element = Blockly.JavaScript.valueToCode(block, 'ADD' + itemCount,
        Blockly.JavaScript.ORDER_COMMA) || '""';
    elements.push(element);
    itemCount++;
  }
  
  var code = elements.join(' + ');
  return [code, Blockly.JavaScript.ORDER_ADDITIVE];
};

Blockly.JavaScript['text_length'] = function(block) {
  var text = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_NONE) || '""';
  return [text + '.length', Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['text_isEmpty'] = function(block) {
  var text = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_NONE) || '""';
  return [text + '.length == 0', Blockly.JavaScript.ORDER_EQUALITY];
};

Blockly.JavaScript['text_indexOf'] = function(block) {
  var text = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_NONE) || '""';
  var sub = Blockly.JavaScript.valueToCode(block, 'FIND',
      Blockly.JavaScript.ORDER_NONE) || '""';
  var end = block.getFieldValue('END');
  
  var code;
  if (end == 'FIRST') {
    code = text + '.indexOf(' + sub + ')';
  } else {
    code = text + '.lastIndexOf(' + sub + ')';
  }
  
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['text_charAt'] = function(block) {
  var text = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_NONE) || '""';
  var where = block.getFieldValue('WHERE');
  var at = Blockly.JavaScript.valueToCode(block, 'AT',
      Blockly.JavaScript.ORDER_NONE) || '0';
  
  var code;
  if (where == 'FIRST') {
    code = text + '.charAt(0)';
  } else if (where == 'LAST') {
    code = text + '.charAt(' + text + '.length - 1)';
  } else {
    code = text + '.charAt(' + at + ')';
  }
  
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['text_getSubstring'] = function(block) {
  var text = Blockly.JavaScript.valueToCode(block, 'STRING',
      Blockly.JavaScript.ORDER_NONE) || '""';
  var where1 = block.getFieldValue('WHERE1');
  var at1 = Blockly.JavaScript.valueToCode(block, 'AT1',
      Blockly.JavaScript.ORDER_NONE) || '0';
  var at2 = Blockly.JavaScript.valueToCode(block, 'AT2',
      Blockly.JavaScript.ORDER_NONE) || '0';
  
  var code;
  if (where1 == 'FROM_START') {
    code = text + '.substring(0, ' + at1 + ')';
  } else if (where1 == 'FROM_END') {
    code = text + '.substring(' + at1 + ')';
  } else {
    code = text + '.substring(' + at1 + ', ' + at2 + ')';
  }
  
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['text_changeCase'] = function(block) {
  var text = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_NONE) || '""';
  var op = block.getFieldValue('CASE');
  
  var code;
  if (op == 'UPPERCASE') {
    code = text + '.toUpperCase()';
  } else if (op == 'LOWERCASE') {
    code = text + '.toLowerCase()';
  } else {
    code = text + '.replace(/\\w\\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()})';
  }
  
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['text_trim'] = function(block) {
  var text = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_NONE) || '""';
  var mode = block.getFieldValue('MODE');
  
  var code;
  if (mode == 'BOTH') {
    code = text + '.trim()';
  } else if (mode == 'LEFT') {
    code = text + '.replace(/^\\s+/, "")';
  } else {
    code = text + '.replace(/\\s+$/, "")';
  }
  
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// Logic generators
Blockly.JavaScript['logic_compare'] = function(block) {
  var operator = block.getFieldValue('OP');
  var order = Blockly.JavaScript.ORDER_RELATIONAL;
  var argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || '0';
  
  var code;
  switch(operator) {
    case 'EQ': code = argument0 + ' == ' + argument1; break;
    case 'NEQ': code = argument0 + ' != ' + argument1; break;
    case 'LT': code = argument0 + ' < ' + argument1; break;
    case 'LTE': code = argument0 + ' <= ' + argument1; break;
    case 'GT': code = argument0 + ' > ' + argument1; break;
    case 'GTE': code = argument0 + ' >= ' + argument1; break;
  }
  
  return [code, order];
};

Blockly.JavaScript['logic_operation'] = function(block) {
  var operator = block.getFieldValue('OP');
  var order = Blockly.JavaScript.ORDER_LOGICAL_AND;
  var argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || 'false';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || 'false';
  
  var code;
  switch(operator) {
    case 'AND': code = argument0 + ' && ' + argument1; break;
    case 'OR': code = argument0 + ' || ' + argument1; break;
  }
  
  return [code, order];
};

Blockly.JavaScript['logic_negate'] = function(block) {
  var order = Blockly.JavaScript.ORDER_LOGICAL_NOT;
  var argument0 = Blockly.JavaScript.valueToCode(block, 'BOOL', order) || 'false';
  var code = '!' + argument0;
  return [code, order];
};

Blockly.JavaScript['logic_boolean'] = function(block) {
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['logic_null'] = function(block) {
  return ['null', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['logic_ternary'] = function(block) {
  var value_if = Blockly.JavaScript.valueToCode(block, 'IF',
      Blockly.JavaScript.ORDER_NONE) || 'false';
  var value_then = Blockly.JavaScript.valueToCode(block, 'THEN',
      Blockly.JavaScript.ORDER_NONE) || 'null';
  var value_else = Blockly.JavaScript.valueToCode(block, 'ELSE',
      Blockly.JavaScript.ORDER_NONE) || 'null';
  
  var code = value_if + ' ? ' + value_then + ' : ' + value_else;
  return [code, Blockly.JavaScript.ORDER_CONDITIONAL];
};

// Variable generators
Blockly.JavaScript['variables_get'] = function(block) {
  var variable = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return [variable, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['variables_set'] = function(block) {
  var variable = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  return variable + ' = ' + value + ';\n';
};

Blockly.JavaScript['variables_change'] = function(block) {
  var variable = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var value = Blockly.JavaScript.valueToCode(block, 'DELTA',
      Blockly.JavaScript.ORDER_ADDITION) || '0';
  return variable + ' += ' + value + ';\n';
};

// ===========================================
// HYDROPONIC SYSTEM SIMULATION
// ===========================================

const hydroponicSystem = {
  // Sensor values
  sensors: {
    water: 500, light: 700, ph: 6.5, temp: 22,
    humidity: 65, nutrient: 450, co2: 400,
    height: 60, water_temp: 20, air_flow: 50
  },
  
  // Device states
  devices: {
    pump: { on: false, timer: null },
    light: { on: false, mode: 'off' },
    fan: { on: false, speed: 0 },
    mixer: { on: false, timer: null }
  },
  
  // Plant states
  plants: {
    lettuce: { health: 90, height: 60, days: 14, harvest: 0 }
  },
  
  // Environment states
  environment: {
    weather: 'sunny',
    time: { hour: 12, minute: 0, day: 1 },
    scheduledTasks: []
  },
  
  // Program control
  running: false,
  interval: null,
  
  // ===========================================
  // CONTROL METHODS
  // ===========================================
  
  scheduleIntervalTask: function(seconds, callback) {
    const taskId = setInterval(() => {
      try {
        callback();
      } catch(e) {
        this.sayMessage("Interval task error: " + e.message, "error");
      }
    }, seconds * 1000);
    this.scheduledTasks.push({ id: taskId, type: 'interval' });
    this.sayMessage(`Scheduled task to run every ${seconds} seconds`, 'system');
  },
  
  // ===========================================
  // ACTION METHODS
  // ===========================================
  
  adjustPH: function(direction, amount) {
    amount = parseFloat(amount);
    if (direction === 'up') {
      this.sensors.ph = Math.min(8, this.sensors.ph + amount);
      this.sayMessage(`Increased pH by ${amount} to ${this.sensors.ph.toFixed(1)}`, 'device');
    } else {
      this.sensors.ph = Math.max(4, this.sensors.ph - amount);
      this.sayMessage(`Decreased pH by ${amount} to ${this.sensors.ph.toFixed(1)}`, 'device');
    }
  },
  
  setTemperature: function(temp) {
    temp = parseFloat(temp);
    this.sensors.temp = temp;
    this.sayMessage(`Set temperature to ${temp}°C`, 'device');
  },
  
  setVentilation: function(level) {
    level = parseInt(level);
    this.devices.fan.speed = level;
    this.devices.fan.on = level > 0;
    this.sayMessage(`Set ventilation to ${level}%`, 'device');
    this.updateDeviceDisplay('fan');
  },
  
  addFertilizer: function(type, amount) {
    amount = parseInt(amount);
    let nutrientBoost = amount;
    switch(type) {
      case 'A': 
        nutrientBoost *= 1.5; 
        this.sensors.nutrient = Math.min(1000, this.sensors.nutrient + nutrientBoost);
        this.sensors.ph = Math.max(4, this.sensors.ph - 0.1); 
        break;
      case 'B': 
        nutrientBoost *= 1.2; 
        this.sensors.nutrient = Math.min(1000, this.sensors.nutrient + nutrientBoost);
        break;
      case 'C': 
        nutrientBoost *= 0.8; 
        this.sensors.nutrient = Math.min(1000, this.sensors.nutrient + nutrientBoost);
        this.sensors.ph = Math.min(8, this.sensors.ph + 0.1); 
        break;
    }
    this.sayMessage(`Added ${amount}ml of fertilizer Type ${type}`, 'plant');
  },
  
  logData: function(type) {
    switch(type) {
      case 'all':
        this.sayMessage(
          `SYSTEM STATUS\n` +
          `Water: ${this.sensors.water}/1000\n` +
          `Light: ${this.sensors.light}/1000\n` +
          `Temp: ${this.sensors.temp}°C\n` +
          `pH: ${this.sensors.ph.toFixed(1)}\n` +
          `Nutrients: ${this.sensors.nutrient}/1000`, 
          'system'
        );
        break;
      case 'water':
        this.sayMessage(
          `WATER STATUS\n` +
          `Level: ${this.sensors.water}/1000\n` +
          `Temp: ${this.sensors.water_temp}°C\n` +
          `pH: ${this.sensors.ph.toFixed(1)}`, 
          'system'
        );
        break;
      case 'nutrient':
        this.sayMessage(
          `NUTRIENT STATUS\n` +
          `Level: ${this.sensors.nutrient}/1000\n` +
          `pH: ${this.sensors.ph.toFixed(1)}`, 
          'system'
        );
        break;
      case 'env':
        this.sayMessage(
          `ENVIRONMENT\n` +
          `Temp: ${this.sensors.temp}°C\n` +
          `Humidity: ${this.sensors.humidity}%\n` +
          `CO2: ${this.sensors.co2}ppm`, 
          'system'
        );
        break;
    }
  },
  
  readSensor: function(sensor) {
    // Add some small random variation to sensor readings
    let value = this.sensors[sensor];
    if (typeof value === 'number') {
      const variation = value * 0.02 * (Math.random() - 0.5); // ±2% variation
      value += variation;
      
      // Round to appropriate decimal places
      if (sensor === 'ph') {
        value = Math.round(value * 10) / 10;
      } else if (sensor === 'temp' || sensor === 'water_temp') {
        value = Math.round(value * 10) / 10;
      } else {
        value = Math.round(value);
      }
    }
    return value;
  },
  
  updateSensors: function() {
    // Simulate natural changes in sensor values
    if (this.devices.pump.on) {
      this.sensors.water = Math.max(0, this.sensors.water - 5);
    }
    
    if (this.devices.light.on) {
      this.sensors.light = Math.min(1000, this.sensors.light + 20);
      this.sensors.temp = Math.min(35, this.sensors.temp + 0.2);
    } else {
      this.sensors.light = Math.max(0, this.sensors.light - 10);
      this.sensors.temp = Math.max(15, this.sensors.temp - 0.1);
    }
    
    if (this.devices.fan.on) {
      this.sensors.temp = Math.max(15, this.sensors.temp - 0.3);
      this.sensors.humidity = Math.max(20, this.sensors.humidity - 2);
    }
    
    if (this.devices.mixer.on) {
      this.sensors.nutrient = Math.min(1000, this.sensors.nutrient + 3);
    }
    
    // Natural water evaporation
    this.sensors.water = Math.max(0, this.sensors.water - 0.5);
    
    // Plant consumption
    this.sensors.water = Math.max(0, this.sensors.water - 2);
    this.sensors.nutrient = Math.max(0, this.sensors.nutrient - 1);
    
    // Update displays
    this.updateSensorDisplays();
  },
  
  controlPump: function(state) {
    clearTimeout(this.devices.pump.timer);
    
    switch(state) {
      case 'on':
        this.devices.pump.on = true;
        this.sayMessage("Water pump turned ON", 'device');
        break;
      case 'off':
        this.devices.pump.on = false;
        this.sayMessage("Water pump turned OFF", 'device');
        break;
      case '5':
        this.devices.pump.on = true;
        this.devices.pump.timer = setTimeout(() => {
          this.devices.pump.on = false;
          this.sayMessage("Water pump turned OFF after 5 seconds", 'device');
          this.updateDeviceDisplay('pump');
        }, 5000);
        this.sayMessage("Water pump turned ON for 5 seconds", 'device');
        break;
      case '10':
        this.devices.pump.on = true;
        this.devices.pump.timer = setTimeout(() => {
          this.devices.pump.on = false;
          this.sayMessage("Water pump turned OFF after 10 seconds", 'device');
          this.updateDeviceDisplay('pump');
        }, 10000);
        this.sayMessage("Water pump turned ON for 10 seconds", 'device');
        break;
    }
    
    this.updateDeviceDisplay('pump');
  },
  
  controlLight: function(state) {
    switch(state) {
      case 'on':
        this.devices.light.on = true;
        this.devices.light.mode = 'on';
        this.sayMessage("Grow light turned ON", 'device');
        break;
      case 'off':
        this.devices.light.on = false;
        this.devices.light.mode = 'off';
        this.sayMessage("Grow light turned OFF", 'device');
        break;
      case 'morning':
        this.devices.light.on = true;
        this.devices.light.mode = 'morning';
        this.sayMessage("Grow light set to morning mode", 'device');
        break;
      case 'evening':
        this.devices.light.on = true;
        this.devices.light.mode = 'evening';
        this.sayMessage("Grow light set to evening mode", 'device');
        break;
    }
    
    this.updateDeviceDisplay('light');
  },
  
  controlFan: function(state) {
    switch(state) {
      case 'on':
        this.devices.fan.on = true;
        this.devices.fan.speed = 100;
        this.sayMessage("Fan turned ON (high speed)", 'device');
        break;
      case 'off':
        this.devices.fan.on = false;
        this.devices.fan.speed = 0;
        this.sayMessage("Fan turned OFF", 'device');
        break;
      case 'low':
        this.devices.fan.on = true;
        this.devices.fan.speed = 30;
        this.sayMessage("Fan set to low speed", 'device');
        break;
      case 'high':
        this.devices.fan.on = true;
        this.devices.fan.speed = 100;
        this.sayMessage("Fan set to high speed", 'device');
        break;
    }
    
    this.updateDeviceDisplay('fan');
  },
  
  controlMixer: function(state) {
    clearTimeout(this.devices.mixer.timer);
    
    switch(state) {
      case 'on':
        this.devices.mixer.on = true;
        this.sayMessage("Nutrient mixer turned ON", 'device');
        break;
      case 'off':
        this.devices.mixer.on = false;
        this.sayMessage("Nutrient mixer turned OFF", 'device');
        break;
      case '5':
        this.devices.mixer.on = true;
        this.devices.mixer.timer = setTimeout(() => {
          this.devices.mixer.on = false;
          this.sayMessage("Nutrient mixer turned OFF after 5 seconds", 'device');
          this.updateDeviceDisplay('mixer');
        }, 5000);
        this.sayMessage("Nutrient mixer turned ON for 5 seconds", 'device');
        break;
      case '10':
        this.devices.mixer.on = true;
        this.devices.mixer.timer = setTimeout(() => {
          this.devices.mixer.on = false;
          this.sayMessage("Nutrient mixer turned OFF after 10 seconds", 'device');
          this.updateDeviceDisplay('mixer');
        }, 10000);
        this.sayMessage("Nutrient mixer turned ON for 10 seconds", 'device');
        break;
    }
    
    this.updateDeviceDisplay('mixer');
  },
  
  addNutrients: function(amount) {
    amount = parseInt(amount);
    this.sensors.nutrient = Math.min(1000, this.sensors.nutrient + amount);
    this.sayMessage(`Added ${amount}ml of nutrients`, 'plant');
    this.updateSensorDisplays();
  },
  
  scheduleDailyTask: function(time, callback) {
    const [hours, minutes] = time.split(':').map(Number);
    this.scheduledTasks.push({ 
      type: 'daily', 
      time: { hours, minutes }, 
      callback 
    });
    this.sayMessage(`Scheduled daily task at ${time}`, 'system');
  },
  
  checkScheduledTasks: function() {
    const now = this.environment.time;
    
    this.scheduledTasks.forEach(task => {
      if (task.type === 'daily' && 
          now.hour === task.time.hours && 
          now.minute === task.time.minutes) {
        try {
          task.callback();
        } catch(e) {
          this.sayMessage("Scheduled task error: " + e.message, "error");
        }
      }
    });
  },
  
  updatePlants: function() {
    // Calculate plant health based on conditions
    let healthChange = 0;
    
    // Water effect
    if (this.sensors.water < 300) {
      healthChange -= 1;
    } else if (this.sensors.water > 800) {
      healthChange -= 0.5;
    } else {
      healthChange += 0.2;
    }
    
    // Light effect
    if (this.sensors.light < 500) {
      healthChange -= 0.5;
    } else if (this.sensors.light > 900) {
      healthChange -= 0.3;
    } else {
      healthChange += 0.3;
    }
    
    // pH effect
    if (this.sensors.ph < 5.5 || this.sensors.ph > 6.5) {
      healthChange -= 0.7;
    } else {
      healthChange += 0.4;
    }
    
    // Temperature effect
    if (this.sensors.temp < 18 || this.sensors.temp > 25) {
      healthChange -= 0.5;
    } else {
      healthChange += 0.3;
    }
    
    // Nutrient effect
    if (this.sensors.nutrient < 300 || this.sensors.nutrient > 700) {
      healthChange -= 0.4;
    } else {
      healthChange += 0.2;
    }
    
    // Apply health change
    this.plants.lettuce.health = Math.max(0, Math.min(100, 
      this.plants.lettuce.health + healthChange));
    
    // Grow plants if healthy
    if (this.plants.lettuce.health > 60) {
      this.plants.lettuce.height = Math.min(100, 
        this.plants.lettuce.height + 0.2);
    }
    
    // Update plant display
    this.updatePlantDisplay();
  },
  
  harvestPlant: function() {
    if (this.plants.lettuce.height >= 80 && this.plants.lettuce.health >= 70) {
      this.plants.lettuce.harvest++;
      this.plants.lettuce.height = 30;
      this.plants.lettuce.days = 0;
      this.sayMessage(`🌱 Harvested lettuce! Total harvests: ${this.plants.lettuce.harvest}`, 'plant');
    } else {
      this.sayMessage("Plants not ready for harvest yet!", 'plant');
    }
    this.updatePlantDisplay();
  },
  
  updateEnvironment: function() {
    // Update time
    this.environment.time.minute++;
    if (this.environment.time.minute >= 60) {
      this.environment.time.minute = 0;
      this.environment.time.hour++;
      
      if (this.environment.time.hour >= 24) {
        this.environment.time.hour = 0;
        this.environment.time.day++;
        this.plants.lettuce.days++;
      }
    }
    
    // Change weather randomly
    if (Math.random() < 0.02) { // 2% chance to change weather each minute
      const weatherTypes = ['sunny', 'cloudy', 'rainy', 'windy'];
      const currentIndex = weatherTypes.indexOf(this.environment.weather);
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * weatherTypes.length);
      } while (newIndex === currentIndex);
      
      this.environment.weather = weatherTypes[newIndex];
      this.changeWeather(this.environment.weather);
    }
    
    // Update environment effects
    switch(this.environment.weather) {
      case 'sunny':
        this.sensors.light = Math.min(1000, this.sensors.light + 30);
        this.sensors.temp = Math.min(35, this.sensors.temp + 0.3);
        break;
      case 'cloudy':
        this.sensors.light = Math.max(300, this.sensors.light - 20);
        this.sensors.temp = Math.max(15, this.sensors.temp - 0.2);
        break;
      case 'rainy':
        this.sensors.light = Math.max(200, this.sensors.light - 30);
        this.sensors.temp = Math.max(15, this.sensors.temp - 0.3);
        this.sensors.water = Math.min(1000, this.sensors.water + 10);
        this.sensors.humidity = Math.min(100, this.sensors.humidity + 5);
        break;
      case 'windy':
        this.sensors.temp = Math.max(15, this.sensors.temp - 0.4);
        this.sensors.humidity = Math.max(20, this.sensors.humidity - 3);
        break;
    }
    
    // Update displays
    this.updateTimeDisplay();
    this.updateWeatherDisplay();
    this.updateSensorDisplays();
  },
  
  changeWeather: function(weather) {
    this.environment.weather = weather;
    let weatherIcon, weatherText;
    
    switch(weather) {
      case 'sunny':
        weatherIcon = '☀️';
        weatherText = 'Sunny';
        break;
      case 'cloudy':
        weatherIcon = '☁️';
        weatherText = 'Cloudy';
        break;
      case 'rainy':
        weatherIcon = '🌧️';
        weatherText = 'Rainy';
        break;
      case 'windy':
        weatherIcon = '💨';
        weatherText = 'Windy';
        break;
    }
    
    document.getElementById('weather-icon').textContent = weatherIcon;
    document.getElementById('weather-status').textContent = weatherText;
    
    // Update sun and clouds in simulation
    const sun = document.getElementById('sun');
    const cloud1 = document.getElementById('cloud1');
    const cloud2 = document.getElementById('cloud2');
    
    switch(weather) {
      case 'sunny':
        sun.style.opacity = '1';
        cloud1.style.opacity = '0.3';
        cloud2.style.opacity = '0.3';
        break;
      case 'cloudy':
        sun.style.opacity = '0.5';
        cloud1.style.opacity = '0.7';
        cloud2.style.opacity = '0.7';
        break;
      case 'rainy':
        sun.style.opacity = '0.2';
        cloud1.style.opacity = '0.9';
        cloud2.style.opacity = '0.9';
        break;
      case 'windy':
        sun.style.opacity = '0.7';
        cloud1.style.opacity = '0.7';
        cloud2.style.opacity = '0.7';
        // Animate clouds moving
        cloud1.style.transition = 'left 5s linear';
        cloud2.style.transition = 'left 5s linear';
        cloud1.style.left = '100%';
        cloud2.style.left = '100%';
        setTimeout(() => {
          cloud1.style.left = '-60px';
          cloud2.style.left = '-80px';
          setTimeout(() => {
            cloud1.style.transition = 'none';
            cloud2.style.transition = 'none';
            cloud1.style.left = '10%';
            cloud2.style.left = '60%';
          }, 100);
        }, 5000);
        break;
    }
    
    this.sayMessage(`Weather changed to ${weatherText}`, 'weather');
  },
  
  updateDeviceDisplay: function(device) {
    const indicator = document.getElementById(`${device}-indicator`);
    const status = document.getElementById(`${device}-status`);
    
    if (this.devices[device].on) {
      indicator.className = 'status-indicator status-on';
      status.textContent = 'ON';
      
      if (device === 'fan') {
        status.textContent += ` (${this.devices.fan.speed}%)`;
      } else if (device === 'light' && this.devices.light.mode !== 'on') {
        status.textContent += ` (${this.devices.light.mode})`;
      }
    } else {
      indicator.className = 'status-indicator status-off';
      status.textContent = 'OFF';
    }
  },
  
  updateWeatherDisplay: function() {
    const weatherIcon = document.getElementById('weather-icon');
    const weatherStatus = document.getElementById('weather-status');
    
    switch(this.environment.weather) {
      case 'sunny':
        weatherIcon.textContent = '☀️';
        weatherStatus.textContent = 'Sunny';
        break;
      case 'cloudy':
        weatherIcon.textContent = '☁️';
        weatherStatus.textContent = 'Cloudy';
        break;
      case 'rainy':
        weatherIcon.textContent = '🌧️';
        weatherStatus.textContent = 'Rainy';
        break;
      case 'windy':
        weatherIcon.textContent = '💨';
        weatherStatus.textContent = 'Windy';
        break;
    }
  },
  
  updateTimeDisplay: function() {
    const timeDisplay = document.getElementById('time-display');
    const hours = this.environment.time.hour;
    const minutes = this.environment.time.minute;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    
    timeDisplay.textContent = `Day ${this.environment.time.day}, ${displayHours}:${displayMinutes} ${ampm}`;
  },
  
  updatePlantDisplay: function() {
    document.getElementById('lettuce-health').textContent = 
      Math.round(this.plants.lettuce.health);
    
    document.getElementById('lettuce-health-bar').style.width = 
      `${this.plants.lettuce.health}%`;
    
    // Update plant heights in simulation
    document.getElementById('plant1').style.height = 
      `${this.plants.lettuce.height * 0.8}px`;
    document.getElementById('plant2').style.height = 
      `${this.plants.lettuce.height}px`;
    document.getElementById('plant3').style.height = 
      `${this.plants.lettuce.height * 0.7}px`;
    document.getElementById('plant4').style.height = 
      `${this.plants.lettuce.height * 0.9}px`;
  },
  
  updateSensorDisplays: function() {
    // Update sensor value displays
    document.getElementById('water-level').textContent = 
      Math.round(this.sensors.water);
    document.getElementById('light-level').textContent = 
      Math.round(this.sensors.light);
    document.getElementById('ph-level').textContent = 
      this.sensors.ph.toFixed(1);
    document.getElementById('temp-level').textContent = 
      Math.round(this.sensors.temp);
    document.getElementById('humidity-level').textContent = 
      Math.round(this.sensors.humidity);
    document.getElementById('nutrient-level').textContent = 
      Math.round(this.sensors.nutrient);
    
    // Update progress bars
    document.getElementById('water-progress').style.width = 
      `${this.sensors.water / 10}%`;
    document.getElementById('light-progress').style.width = 
      `${this.sensors.light / 10}%`;
    document.getElementById('ph-progress').style.width = 
      `${(this.sensors.ph - 4) * 25}%`; // pH 4-8 scale
    document.getElementById('temp-progress').style.width = 
      `${(this.sensors.temp - 10) * 4}%`; // 10-35°C scale
    document.getElementById('humidity-progress').style.width = 
      `${this.sensors.humidity}%`;
    document.getElementById('nutrient-progress').style.width = 
      `${this.sensors.nutrient / 10}%`;
    
    // Update water level in simulation
    document.getElementById('water').style.height = 
      `${this.sensors.water / 20}%`;
  },
  
  updateDisplay: function() {
    this.updateDeviceDisplay('pump');
    this.updateDeviceDisplay('light');
    this.updateDeviceDisplay('fan');
    this.updateDeviceDisplay('mixer');
    this.updateWeatherDisplay();
    this.updateTimeDisplay();
    this.updatePlantDisplay();
    this.updateSensorDisplays();
  },
  
  runProgram: function(code) {
    this.stop();
    
    try {
      this.running = true;
      this.interval = setInterval(() => {
        this.updateSensors();
        this.updatePlants();
        this.updateEnvironment();
        this.checkScheduledTasks();
      }, 1000);
      
      // Use Function constructor instead of eval for security
      new Function(code)();
      this.sayMessage("Program started successfully!", 'system');
    } catch(e) {
      this.sayMessage("Error running program: " + e.message, 'error');
      console.error(e);
    }
  },
  
  stop: function() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    
    // Clear all scheduled tasks
    this.scheduledTasks.forEach(task => {
      if (task.type === 'interval') {
        clearInterval(task.id);
      }
    });
    this.scheduledTasks = [];
    
    this.running = false;
    this.sayMessage("Program stopped", 'system');
  },
  
  wait: function(seconds) {
    const start = Date.now();
    while (Date.now() - start < seconds * 1000) {
      // Blocking wait - not ideal but works for this simulation
    }
  },
  
  sayMessage: function(message, type = 'info') {
    const eventLog = document.getElementById('event-log');
    const entry = document.createElement('div');
    entry.className = 'event-entry';
    
    // Create badge based on message type
    const badge = document.createElement('span');
    badge.className = 'badge ';
    
    switch(type) {
      case 'error':
        badge.className += 'badge-danger';
        badge.textContent = 'ERROR';
        break;
      case 'warning':
        badge.className += 'badge-warning';
        badge.textContent = 'WARN';
        break;
      case 'system':
        badge.className += 'badge-system';
        badge.textContent = 'SYSTEM';
        break;
      case 'device':
        badge.className += 'badge-info';
        badge.textContent = 'DEVICE';
        break;
      case 'plant':
        badge.className += 'badge-plant';
        badge.textContent = 'PLANT';
        break;
      case 'weather':
        badge.className += 'badge-weather';
        badge.textContent = 'WEATHER';
        break;
      default:
        badge.className += 'badge-info';
        badge.textContent = 'INFO';
    }
    
    entry.appendChild(badge);
    entry.appendChild(document.createTextNode(' ' + message));
    
    eventLog.insertBefore(entry, eventLog.firstChild);
    
    // Limit log to 100 entries
    while (eventLog.children.length > 100) {
      eventLog.removeChild(eventLog.lastChild);
    }
  },
  
  clearMessages: function() {
    document.getElementById('event-log').innerHTML = '';
    this.sayMessage("Event log cleared", 'system');
  },
  
  init: function() {
    // Initialize button event handlers
    document.getElementById('run-btn').addEventListener('click', () => {
      const code = Blockly.JavaScript.workspaceToCode(workspace);
      this.runProgram(code);
    });
    
    document.getElementById('stop-btn').addEventListener('click', () => {
      this.stop();
    });
    
    document.getElementById('demo-btn').addEventListener('click', () => {
      workspace.clear();
      
      const demoXml = `
        <xml xmlns="https://developers.google.com/blockly/xml">
          <block type="controls_forever" deletable="false" x="50" y="50">
            <statement name="DO">
              <block type="controls_if">
                <value name="IF">
                  <block type="logic_compare">
                    <field name="OP">LT</field>
                    <value name="A">
                      <block type="sensor_read">
                        <field name="SENSOR">water</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="math_number">
                        <field name="NUM">300</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO">
                  <block type="pump_control">
                    <field name="STATE">on</field>
                  </block>
                  <block type="say_message">
                    <value name="MESSAGE">
                      <block type="text">
                        <field name="TEXT">Water is low! Pump turned ON</field>
                      </block>
                    </value>
                  </block>
                  <block type="wait_seconds">
                    <value name="SECONDS">
                      <block type="math_number">
                        <field name="NUM">5</field>
                      </block>
                    </value>
                  </block>
                  <block type="pump_control">
                    <field name="STATE">off</field>
                  </block>
                </statement>
              </block>
              <block type="controls_if">
                <value name="IF">
                  <block type="logic_compare">
                    <field name="OP">LT</field>
                    <value name="A">
                      <block type="sensor_read">
                        <field name="SENSOR">light</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="math_number">
                        <field name="NUM">500</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO">
                  <block type="light_control">
                    <field name="STATE">on</field>
                  </block>
                </statement>
                <statement name="ELSE">
                  <block type="light_control">
                    <field name="STATE">off</field>
                  </block>
                </statement>
              </block>
              <block type="controls_if">
                <value name="IF">
                  <block type="logic_compare">
                    <field name="OP">GT</field>
                    <value name="A">
                      <block type="sensor_read">
                        <field name="SENSOR">temp</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="math_number">
                        <field name="NUM">25</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO">
                  <block type="fan_control">
                    <field name="STATE">on</field>
                  </block>
                </statement>
                <statement name="ELSE">
                  <block type="fan_control">
                    <field name="STATE">off</field>
                  </block>
                </statement>
              </block>
              <block type="wait_seconds">
                <value name="SECONDS">
                  <block type="math_number">
                    <field name="NUM">1</field>
                  </block>
                </value>
              </block>
            </statement>
          </block>
        </xml>
      `;
      
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(demoXml), workspace);
      this.sayMessage("📋 Demo program loaded! Click 'Run' to start.", 'system');
    });
    
    document.getElementById('clear-btn').addEventListener('click', () => {
      this.clearMessages();
    });
    
    document.getElementById('harvest-btn').addEventListener('click', () => {
      this.harvestPlant();
    });
    
    // Initialize Blockly workspace with fixed toolbox
    var workspace = Blockly.inject('blocklyDiv', {
      toolbox: `
        <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
          <category name="🌱 Sensors" colour="#5b80a5">
            <block type="sensor_read"></block>
          </category>
          
          <category name="⚙️ Controls" colour="#5ba55b">
            <block type="controls_if"></block>
            <block type="controls_if_else"></block>
            <block type="controls_switch"></block>
            <block type="controls_repeat"></block>
            <block type="controls_whileUntil"></block>
            <block type="controls_timed_loop"></block>
            <block type="wait_seconds"></block>
            <block type="schedule_daily"></block>
            <block type="weather_event"></block>
          </category>
          
          <category name="🎛️ Actions" colour="#a55b80">
            <block type="pump_control"></block>
            <block type="light_control"></block>
            <block type="fan_control"></block>
            <block type="mixer_control"></block>
            <block type="add_nutrients"></block>
            <block type="add_fertilizer"></block>
            <block type="adjust_ph"></block>
            <block type="set_temperature"></block>
            <block type="control_ventilation"></block>
            <block type="say_message"></block>
            <block type="log_data"></block>
          </category>
          
          <category name="🔢 Values" colour="#a5a55b">
            <category name="Math" colour="#a5a55b">
              <block type="math_number"></block>
              <block type="math_arithmetic"></block>
              <block type="math_round"></block>
              <block type="math_modulo"></block>
              <block type="math_constrain"></block>
              <block type="math_random_int"></block>
              <block type="math_random_float"></block>
              <block type="math_single"></block>
              <block type="math_trig"></block>
              <block type="math_constant"></block>
              <block type="math_number_property"></block>
            </category>
            
            <category name="Text" colour="#a5a55b">
              <block type="text"></block>
              <block type="text_join"></block>
              <block type="text_length"></block>
              <block type="text_isEmpty"></block>
              <block type="text_indexOf"></block>
              <block type="text_charAt"></block>
              <block type="text_getSubstring"></block>
              <block type="text_changeCase"></block>
              <block type="text_trim"></block>
            </category>
            
            <category name="Logic" colour="#a5a55b">
              <block type="logic_compare"></block>
              <block type="logic_operation"></block>
              <block type="logic_negate"></block>
              <block type="logic_boolean"></block>
              <block type="logic_null"></block>
              <block type="logic_ternary"></block>
            </category>
            
            <category name="Variables" colour="#a5a55b" custom="VARIABLE"></category>
          </category>
        </xml>
      `,
      trashcan: true,
      media: 'https://unpkg.com/blockly/media/',
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3
      }
    });
    
    // Register variable category callback
    Blockly.Variables.flyoutCategory = function(workspace) {
      return [
        {
          "kind": "block",
          "type": "variables_get",
          "fields": {"VAR": "water_level"}
        },
        {
          "kind": "block", 
          "type": "variables_set",
          "fields": {"VAR": "water_level"}
        }
      ];
    };
    
    // Initialize displays
    this.updateDisplay();
    this.sayMessage("🌿 Hydroponic Programming Lab initialized!", 'system');
  }
};

// Initialize the hydroponic system when the page loads
window.addEventListener('load', function() {
  hydroponicSystem.init();
});
