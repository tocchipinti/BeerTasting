package com.timocchipinti.db

import com.timocchipinti.domain.Beer
import com.timocchipinti.web.model.BeerFilterRequest
import io.quarkus.hibernate.orm.panache.kotlin.PanacheRepository
import io.quarkus.panache.common.Parameters
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class BeerRepository : PanacheRepository<Beer> {
    fun findByFilter(beerFilterRequest: BeerFilterRequest): List<Beer> {
         return list("(releaseYear = :releaseYear OR :releaseYear = NULL) AND (brand = :brand OR :brand = NULL)",
             Parameters.with("releaseYear", beerFilterRequest.year).and("brand", beerFilterRequest.brand))
    }
}