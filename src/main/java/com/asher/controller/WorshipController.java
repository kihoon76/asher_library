package com.asher.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/worship")
@Controller
public class WorshipController {

	@GetMapping("if/addForm")
	public String getWorshipAddWindow() {
		return "worship/addForm";
	}
}
