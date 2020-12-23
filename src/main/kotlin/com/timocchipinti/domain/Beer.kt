package com.timocchipinti.domain

import com.timocchipinti.web.model.BeerDto
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Beer {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null
    var brand: String = ""
    var type: String = ""
    var percentage: Double = 0.0
    var releaseYear: Int = 0
    var price: Double = 0.0

    constructor() {}

    constructor(
        id: Long,
        brand: String,
        type: String,
        percentage: Double,
        releaseYear: Int,
        price: Double
    ) {
        this.id = id
        this.brand = brand
        this.type = type
        this.percentage = percentage
        this.releaseYear = releaseYear
        this.price = price
    }

    object Mapper {
        fun from(dto: BeerDto): Beer =
            Beer(dto.id, dto.brand, dto.type, dto.percentage, dto.releaseYear, dto.price)
    }
}
