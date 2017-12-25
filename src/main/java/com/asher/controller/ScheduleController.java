package com.asher.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/schedule")
@Controller
public class ScheduleController {

	@GetMapping("if/registForm")
	public String viewRegistForm() {
		
		return "schedule/registForm";
	}
}
