var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0.00 Celsius, 273.15 Kelvin', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.00 Celsius, 273.15 Kelvin");
    });
    test('45C = 113.00 Fahrenheit, 318.15 Kelvin', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.00 Fahrenheit, 318.15 Kelvin");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
});
