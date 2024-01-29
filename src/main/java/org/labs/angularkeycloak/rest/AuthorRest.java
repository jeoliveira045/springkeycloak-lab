package org.labs.angularkeycloak.rest;

import org.labs.angularkeycloak.entities.Author;
import org.labs.angularkeycloak.repository.AuthorRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/author")
public class AuthorRest {

    private AuthorRepository repository;

    @GetMapping
    public String findAll(){
        return "<h1>Todos os autores</h1>";
    }
}
