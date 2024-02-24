package org.labs.angularkeycloak;

import org.labs.angularkeycloak.entities.Author;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.stream.Collectors;

@SpringBootApplication
public class AngularkeycloakApplication {

    public static void main(String[] args) {
        SpringApplication.run(AngularkeycloakApplication.class, args);

    }

}
