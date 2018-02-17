package com.asher.dao;

import java.util.List;
import java.util.Map;

import com.asher.domain.Bible;
import com.asher.domain.Paragraph;

public interface WorshipDao {

	public List<Bible> selectBibleLabel();

	public List<Paragraph> selectBibleParagraphes(Map<String, Integer> map); 
}
