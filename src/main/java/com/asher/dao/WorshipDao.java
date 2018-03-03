package com.asher.dao;

import java.util.List;
import java.util.Map;

import com.asher.domain.Bible;
import com.asher.domain.Paragraph;
import com.asher.domain.Worship;

public interface WorshipDao {

	public List<Bible> selectBibleLabel();

	public List<Paragraph> selectBibleParagraphes(Map<String, Integer> map);

	public int insertWorship(Worship worship);

	public int insertWorshipAttachedImages(Worship worship); 
}
