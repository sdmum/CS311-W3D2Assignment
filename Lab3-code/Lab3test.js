"use strict";
/* global describe */
/* global it */
/* global assert */
/* global Employee */
/* global nameComparator */

describe("salaryComparator", function() {
    it("Compares Employees by salary", function() {
        assert.equal(employees.sort(salaryComparator), )
    });
});

describe("nameComparator", function() {
    it("Compares Employees by name", function() {
        assert.equal(employees.sort(nameComparator),["Dave", "George", "Richard"])
    });
});