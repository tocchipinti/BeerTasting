package com.timocchipinti.web.model

data class BeerDto (
    var id: Long,
    var brand: String,
    var type: String,
    var percentage: Double,
    var releaseYear: Int,
    var price: Double
)