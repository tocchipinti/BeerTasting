package com.timocchipinti

import com.timocchipinti.web.model.BeerDto
import com.timocchipinti.web.model.BeerFilterRequest
import io.quarkus.test.junit.QuarkusTest
import io.restassured.RestAssured.given
import io.restassured.http.ContentType
import org.junit.jupiter.api.Test
import org.hamcrest.CoreMatchers.`is`

@QuarkusTest
class BeerControllerTest {

    @Test
    fun testSaveCar() {
        val beer = BeerDto(id = 1, brand = "Heineken", type = "Pilsner", percentage = 5.0, releaseYear = 2006
            ,price = 2000.00)
        given().body(beer).contentType(ContentType.JSON)
            .post("/beers")
            .then()
            .statusCode(201)
    }

    @Test
    fun testFindAll() {
        given().get("/beers")
            .then()
            .statusCode(200)
            .assertThat().body("size()", `is`(2))
    }

    @Test
    fun testGetByFilter() {
        val filter = BeerFilterRequest(2018, "Heineken")
        given().body(filter).contentType(ContentType.JSON)
            .post("/beers/filter")
            .then()
            .statusCode(200)
            .assertThat().body("size()", `is`(1))
    }
}