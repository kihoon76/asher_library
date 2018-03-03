package com.asher.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.asher.dao.WorshipDao;
import com.asher.domain.Bible;
import com.asher.domain.Paragraph;
import com.asher.domain.Worship;
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

	@Transactional(
				isolation=Isolation.DEFAULT, 
			   	propagation=Propagation.REQUIRED, 
			   	rollbackFor=Exception.class,
			   	timeout=10)//timeout 초단위
	public void regWorship(Worship worship) {
		// TODO Auto-generated method stub
		int r1 = worshipDao.insertWorship(worship);
		int r2 = worshipDao.insertWorshipAttachedImages(worship);
		if((r1 + r2) != worship.getAttachedFiles().size() + 1) {
			throw new RuntimeException("Error!!!!!");
		}
	}

}
