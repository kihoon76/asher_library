package com.asher.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.asher.dao.WorshipDao;
import com.asher.domain.Bible;
import com.asher.domain.Paragraph;
import com.google.gson.Gson;

@Service("worshipService")
public class WorshipService {

	@Resource(name="worshipDao")
	WorshipDao worshipDao;
	
	
	public List<Bible> getBibleLabel() {
		return worshipDao.selectBibleLabel();
	}


	public String getBibleParagraphes(Map<String, Integer> map) {
		List<Paragraph> list = worshipDao.selectBibleParagraphes(map);
		int currentBibleNum = 0;
		int currentChapter = 0;
		
		StringBuilder sb;
		if(list != null && list.size()>0) {
			sb = new StringBuilder();
			for(Paragraph p : list) {
				if(p.getBibleNum() != currentBibleNum) {
					sb.append("<h2>" + p.getBibleLongLabel() + "</h2>");
					currentBibleNum = p.getBibleNum();
				}
				
				if(p.getChapter() != currentChapter) {
					sb.append("<h3>" + p.getChapter() + "장</h3>");
					currentChapter = p.getChapter();
				}
				
				sb.append("<p>" + p.getParagraph() + "." + p.getSentence() + "</p>");
			}
			
			System.err.println(sb.toString());
			
			return sb.toString();
		}
		return "";
	}

}
