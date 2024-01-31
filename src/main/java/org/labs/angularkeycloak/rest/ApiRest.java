package org.labs.angularkeycloak.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class ApiRest {

    @GetMapping("/admin")
    public String admin(){
        return "<h1>Endpoint do admin</h1>";
    }

    @GetMapping("/manager")
    public String manager(){
        return "<h1>Endpoint do manager</h1>";
    }
}
