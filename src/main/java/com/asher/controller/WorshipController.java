package com.asher.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.asher.domain.AjaxVO;
import com.asher.domain.Bible;
import com.asher.domain.FileBucket;
import com.asher.domain.Paragraph;
import com.asher.domain.Worship;
import com.asher.service.WorshipService;
import com.google.gson.Gson;

@RequestMapping("/worship")
@Controller
public class WorshipController {

	@Resource(name="worshipService")
	WorshipService worshipService;
	
	@GetMapping("if/addForm")
	public String getWorshipAddWindow(ModelMap map) {
		List<Bible> list =  worshipService.getBibleLabel();
		
		Gson g = new Gson();
		for(Bible b : list) {
			b.setGsonList(g.toJson(b.getList()));
			System.err.println(b.getGsonList());
		}
		
		map.addAttribute("list", list);
		return "worship/addForm";
	}
	
	@GetMapping("if/bibleSearchForm")
	public String getBibleSearchWindow(ModelMap map) {
		List<Bible> list =  worshipService.getBibleLabel();
		
		Gson g = new Gson();
		for(Bible b : list) {
			b.setGsonList(g.toJson(b.getList()));
			System.err.println(b.getGsonList());
		}
		
		map.addAttribute("list", list);
		return "worship/bibleSearchForm";
	}
	
	@PostMapping("if/bibleSearch")
	@ResponseBody
	public AjaxVO getBibleParagraphes(@RequestBody Map<String, Integer> map) {
		
		AjaxVO vo = new AjaxVO();
		try {
			String paragraphes = worshipService.getBibleParagraphes(map);
			vo.setSuccess(true);
			vo.addObject(paragraphes);
		}
		catch(Exception e) {
			vo.setSuccess(false);
			vo.setErrMsg(e.getMessage());
		}
		
		return vo;
	}
	
	@PostMapping("reg")
	@ResponseBody
	public AjaxVO regWorship(
			@RequestParam("file") MultipartFile[] files,
			@RequestParam("content") String content,
			@RequestParam("title") String title) {
		AjaxVO vo = new AjaxVO();
		
		Worship worship = new Worship();
		worship.setTitle(title);
		worship.setContent(content);
		
		List<FileBucket> fbList = null;
		
		try {
			if(files != null) {
				fbList = new ArrayList<>();
				for(MultipartFile file: files) {
					String fName = file.getOriginalFilename();
					FileBucket fb = new FileBucket();
					fb.setImageName(fName);
					fb.setExt(fName.substring(fName.lastIndexOf(".") + 1));
					fb.setImage(file.getBytes());
					fbList.add(fb);
				}
				
				worship.setAttachedFiles(fbList);
			}
			
			worshipService.regWorship(worship);
		}
		catch(Exception e) {
			
		}
		
		
		
		return vo;
	}
}
