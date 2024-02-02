package org.labs.angularkeycloak.rest;

import lombok.AllArgsConstructor;
import org.labs.angularkeycloak.entities.Book;
import org.labs.angularkeycloak.repository.BookRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/book")
@AllArgsConstructor
public class BookRest {
    private BookRepository repository;

    @GetMapping
    public List<Book> findAll(){
        return repository.findAll();
    }
}
