package com.asher.domain;

import org.apache.ibatis.type.Alias;

@Alias("Bible")
public class Bible {

	private String bibleNum;
	private String bibleLongLabel;
	private int totalChapters;
	
	
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
	public int getTotalChapters() {
		return totalChapters;
	}
	public void setTotalChapters(int totalChapters) {
		this.totalChapters = totalChapters;
	}
}
