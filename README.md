# Simple Password Tester

A lightweight simple library for scoring passwords. This gives a score based on the password length, the number of unique characters, and the number of unique character classes (lowercase, uppercase, numbers, and other).

The required score you should use will vary for each application but 50 represents a reasonable compromise between usability and strength.

Short passwords aren't forbidden so long as the other complexity measures are met so you might like to explicitly check a length requirement as well as using this library to check strength.

## Usage

```js
var passwordTester = require('simple-password-tester');
var score = passwordTester('password');
if (score < 50) {
  // show validation error
} else {
  // proceed
}
```
