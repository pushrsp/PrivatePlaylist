package me.privatelist.controller;

import lombok.RequiredArgsConstructor;
import me.privatelist.service.MemberService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class HomeController {

    private final MemberService memberService;

    @GetMapping("/")
    public String home() {
        return "home";
    }

}
