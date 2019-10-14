var flattenArrayClass;
var integerArray = [1,2, [3,4, [5, 6, [7, 8, [9, 10, [11, 12]]]]]];
var stringIntegersArray = [1,'2', [3,4, ['5', '6', [7, 8, [9, 10, ['11', '12']]]]]];
var invalidIntegerArray = [1,'Sample', [3,4, ['5', '6', [7, 'errorText', [9, 10, ['11', '12']]]]]];
var expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

beforeEach(function() {
  flattenArrayClass = new FlattenIntegerArray();
});

describe("Flatten Integer with Es6 concepts", () => {
  it('should flatten the array of integers', () => {
    expect(flattenArrayClass.flattenArrayWithEs6(integerArray)).toEqual(expectedOutput);
  });
  it('should flatten the array of integers with string number', () => {
    expect(flattenArrayClass.flattenArrayWithEs6(stringIntegersArray)).toEqual(expectedOutput);
  });
  it('should throw an error if there is any invalid input', () => {
    try {
      flattenArrayClass.flattenArrayWithEs6(invalidIntegerArray);
    }
    catch(err) {
      expect(err.message).toEqual(errorMsg);
    }
  });
});

describe("Flatten Integer with out Es6 concepts", () => {
  it('should flatten the array of integers', () => {
    expect(flattenArrayClass.flatternArrayWithOutEs6(integerArray)).toEqual(expectedOutput);
  });
  it('should flatten the array of integers with string number', () => {
    expect(flattenArrayClass.flatternArrayWithOutEs6(stringIntegersArray)).toEqual(expectedOutput);
  });
  it('should throw an error if there is any invalid input', () => {
    try {
      flattenArrayClass.flatternArrayWithOutEs6(invalidIntegerArray);
    }
    catch(err) {
      expect(err.message).toEqual(errorMsg);
    }
  });
});
