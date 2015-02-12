var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0.00 Celsius, 273.15 Kelvin', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.00 Celsius, 273.15 Kelvin");
    });
    test('-15.4ºC = 4.28 Fahrenheit, 257.75 Kelvin', function() {
        original.value = "-15.4ºC";
        calculate();
        assert.deepEqual(converted.innerHTML, "4.28 Fahrenheit, 257.75 Kelvin");
    });
    test('45C = 113.00 Fahrenheit, 318.15 Kelvin', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.00 Fahrenheit, 318.15 Kelvin");
    });
    test('0k = -273.15 Celsius, -459.67 Fahrenheit', function() {
        original.value = "0k";
        calculate();
        assert.deepEqual(converted.innerHTML, "-273.15 Celsius, -459.67 Fahrenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
});
