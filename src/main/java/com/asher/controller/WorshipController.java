package com.asher.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.asher.domain.Bible;
import com.asher.service.WorshipService;
import com.google.gson.Gson;

@RequestMapping("/worship")
@Controller
public class WorshipController {

	@Resource(name="worshipService")
	WorshipService worshipService;
	
	@GetMapping("if/addForm")
	public String getWorshipAddWindow() {
		return "worship/addForm";
	}
	
	@GetMapping("bible/label")
	@ResponseBody
	public List<Bible> getBibleLabel() {
		List<Bible> list =  worshipService.getBibleLabel();
		Gson gson = new Gson();
		String s = gson.toJson(list);
		
		System.err.println(s);
		return list;
	}
}
