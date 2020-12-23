package com.timocchipinti.service

import com.timocchipinti.db.BeerRepository
import com.timocchipinti.domain.Beer
import com.timocchipinti.web.model.BeerFilterRequest
import javax.enterprise.context.ApplicationScoped
import javax.inject.Inject

@ApplicationScoped
class BeerService {

    @Inject
    lateinit var beerRepository: BeerRepository

    fun save(beer: Beer) = beerRepository.persist(beer)

    fun findAll() = beerRepository.listAll()

    fun findByFilter(beerFilterRequest: BeerFilterRequest): List<Beer> {
        return beerRepository.findByFilter(beerFilterRequest)
    }
}