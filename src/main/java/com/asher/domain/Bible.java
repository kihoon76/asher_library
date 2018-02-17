package com.asher.domain;

import java.util.List;

import org.apache.ibatis.type.Alias;

@Alias("Bible")
public class Bible {

	private String bibleNum;
	private String bibleLongLabel;
	private List<ParagraphPerChapter> list;
	private String gsonList;
	
	public String getBibleNum() {
		return bibleNum;
	}
	public void setBibleNum(String bibleNum) {
		this.bibleNum = bibleNum;
	}
	public String getBibleLongLabel() {
		return bibleLongLabel;
	}
	public void setBibleLongLabel(String bibleLongLabel) {
		this.bibleLongLabel = bibleLongLabel;
	}
	public List<ParagraphPerChapter> getList() {
		return list;
	}
	public void setList(List<ParagraphPerChapter> list) {
		this.list = list;
	}
	public String getGsonList() {
		return gsonList;
	}
	public void setGsonList(String gsonList) {
		this.gsonList = gsonList;
	}
}
