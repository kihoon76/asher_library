package com.asher.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
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
	
	@GetMapping("if/bibleSearchForm")
	public String getBibleSearchWindow(ModelMap map) {
		List<Bible> list =  worshipService.getBibleLabel();
		
		Gson g = new Gson();
		String s = "";
		for(Bible b : list) {
			//s = g.toJson(b.getList());
			//s = s.replaceAll("\"", "'");
			b.setGsonList(g.toJson(b.getList()));
			System.err.println(b.getGsonList());
		}
		
		map.addAttribute("list", list);
		return "worship/bibleSearchForm";
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
