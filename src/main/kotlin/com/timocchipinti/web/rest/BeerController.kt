package com.timocchipinti.web.rest

import com.timocchipinti.domain.Beer
import com.timocchipinti.service.BeerService
import com.timocchipinti.web.model.BeerDto
import com.timocchipinti.web.model.BeerFilterRequest
import org.eclipse.microprofile.metrics.MetricUnits
import org.eclipse.microprofile.metrics.annotation.Timed
import javax.inject.Inject
import javax.transaction.Transactional
import javax.ws.rs.GET
import javax.ws.rs.POST
import javax.ws.rs.Path
import javax.ws.rs.core.Response

@Path("/beers")
class BeerController {

    @Inject
    lateinit var beerService: BeerService

    @GET
    @Timed(name = "findAll", unit = MetricUnits.MILLISECONDS)
    fun findAll(): Response {
        val beers = beerService.findAll()
            .map { BeerDto(
                it.id!!, it.brand, it.type, it.percentage, it.releaseYear,
                it.price) }

        return Response
            .ok(beers)
            .build()
    }

    @POST
    @Transactional
    @Timed(name = "save", unit = MetricUnits.MILLISECONDS)
    fun save(beerDto: BeerDto): Response {
        val beer = Beer.Mapper.from(beerDto)
        beerService.save(beer)
        return Response.status(Response.Status.CREATED)
            .entity(beer)
            .build()
    }

    @POST
    @Path("filter")
    @Timed(name = "getByFilter", unit = MetricUnits.MILLISECONDS)
    fun getByFilter(beerFilterRequest: BeerFilterRequest): Response {
        val beers = beerService.findByFilter(beerFilterRequest)
            .map { BeerDto(
                it.id!!, it.brand, it.type, it.percentage, it.releaseYear,
                it.price) }

        return Response
            .ok(beers)
            .build()
    }
}