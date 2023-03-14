package com.nfs.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;



@Controller
public class ReactController {

    @GetMapping("/")
    public String index() {
        System.out.println("hite here");
        return "index";
    }

    @GetMapping("/{path:[^\\.]*}")
    public String forward() {
        return "index.html";
    }
}
