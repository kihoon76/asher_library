package com.asher.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/")
@Controller
public class AsherController {

	@GetMapping("main")
	public String index() {
		return "main";
	}
}
