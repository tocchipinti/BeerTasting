package com.timocchipinti

import org.eclipse.microprofile.openapi.annotations.OpenAPIDefinition
import org.eclipse.microprofile.openapi.annotations.info.Info
import javax.ws.rs.core.Application

@OpenAPIDefinition(info = Info(title = "Beer API", version = "1.1.0"))
class BeerTastingApplication : Application()