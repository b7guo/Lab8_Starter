// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('is 818-818-8188 a valid phone number', () => {
    // TODO
    expect(functions.isPhoneNumber('818-818-8188')).toBe(true);
});

test('is (1)123-456-7890 a valid phone number', () => {
    // TODO
    expect(functions.isPhoneNumber('(1)123-456-7890')).toBe(true);
});

test('is aaa-bbb-cccc not a valid phone number', () => {
    // TODO
    expect(functions.isPhoneNumber('aaa-bbb-cccc')).toBe(false);
});

test('is 1234567890 not a valid phone number', () => {
    // TODO
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('is 123@abc.com a valid email', () => {
    // TODO
    expect(functions.isEmail('123@abc.com')).toBe(true);
});

test('is harrypotter@hogwarts.edu a valid email', () => {
    // TODO
    expect(functions.isEmail('harrypotter@hogwarts.edu')).toBe(true);
});

test('is abc@123.com not a valid email', () => {
    // TODO
    expect(functions.isEmail('abc@123.com')).toBe(false);
});

test('is 123@123. not a valid email', () => {
    // TODO
    expect(functions.isEmail('123@abc.')).toBe(false);
});

test('is abcd_ a strong password', () => {
    // TODO
    expect(functions.isStrongPassword('abcd_')).toBe(true);
});

test('is a123bcd456 a strong password', () => {
    // TODO
    expect(functions.isStrongPassword('a123bcd456')).toBe(true);
});

test('is a2 not a strong password', () => {
    // TODO
    expect(functions.isStrongPassword('a2')).toBe(false);
});

test('is a!123456 not a strong password', () => {
    // TODO
    expect(functions.isStrongPassword('a!123456')).toBe(false);
});

test('is 1 / 1 /2021 a valid date', () => {
    // TODO
    expect(functions.isDate('1/1/2021')).toBe(true);
});

test('is 12 / 25 /2021 a valid date', () => {
    // TODO
    expect(functions.isDate('12/25/2021')).toBe(true);
});

test('is 123 / 51 /2021 a valid date', () => {
    // TODO
    expect(functions.isDate('123/51/2021')).toBe(false);
});

test('is 13 / 25 /202 a valid date', () => {
    // TODO
    expect(functions.isDate('13/25/202')).toBe(false);
});

test('is #fff a valid hex color', () => {
    // TODO
    expect(functions.isHexColor('#fff')).toBe(true);
});

test('is fff000 a valid hex color', () => {
    // TODO
    expect(functions.isHexColor('fff000')).toBe(true);
});

test('is #fff0 a valid hex color', () => {
    // TODO
    expect(functions.isHexColor('#fff0')).toBe(false);
});

test('is 00fff a valid hex color', () => {
    // TODO
    expect(functions.isHexColor('00fff')).toBe(false);
});
