// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-accounts-saml-multi.js.
import { name as packageName } from "meteor/uplab:meteor-accounts-saml-multi";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-accounts-saml-multi - example', function (test) {
  test.equal(packageName, "meteor-accounts-saml-multi");
});
