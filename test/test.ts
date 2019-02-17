import { expect, assert } from "chai";
import * as chai from "chai";
import fetch from "node-fetch";
import { suite, test } from "mocha-typescript";
import * as chaiDeepMatch from "chai-deep-match"; // equal to => var chaiDeepMatch = require('chai-deep-match');

chai.use(chaiDeepMatch);

@suite class UsersTests {

    @test async "Get user by id should return its data"() {

        const response = await fetch("https://reqres.in/api/users/2");

        expect(response.ok).to.be.equals(true, "response must be ok!");

        const body = await response.json();

        chai.expect(body).to.deep.match({ data: { id: 2, first_name: "Janet", last_name: "Weaver", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg" } });
    }

}
