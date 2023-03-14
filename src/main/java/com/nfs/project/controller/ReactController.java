package com.nfs.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class ReactController {

    @GetMapping(value = "/")
    public String index() {
        System.out.println("hhhhhhhh");
        return "forward:/index.html";
    }
    @GetMapping(value = "/{path:[^\\.]*}")
    public String redirect() {
        return "forward:/index.html";
    }
}
